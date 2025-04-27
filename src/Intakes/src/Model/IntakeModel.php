<?php
declare(strict_types=1);

namespace Intakes\Model;

use Exception;
use Olobase\Mezzio\ColumnFiltersInterface;
use Laminas\Db\Sql\Sql;
use Laminas\Db\Sql\Expression;
use Laminas\Paginator\Paginator;
use Laminas\Paginator\Adapter\DbSelect;
use Laminas\Db\Adapter\AdapterInterface;
use Laminas\Db\TableGateway\TableGatewayInterface;
use Laminas\Cache\Storage\StorageInterface;

class IntakeModel
{
    private $conn;
    private $adapter;
    private $frequencyFunction;

    public function __construct(
        private TableGatewayInterface $intakes,
        private StorageInterface $cache,
        private ColumnFiltersInterface $columnFilters
    ) {
        $this->adapter = $intakes->getAdapter();
        $this->conn = $this->adapter->getDriver()->getConnection();
    }

    public function findAll(): array
    {
        $key = CACHE_ROOT_KEY.Self::class.':'. __FUNCTION__;
        if ($this->cache->hasItem($key)) {
            return $this->cache->getItem($key);
        }
        try {
            $sql = new Sql($this->adapter);
            $select = $sql->select();
            $select->columns(
                [
                    'id' => 'intakeTime',
                    'name' => 'intakeTime',
                ]
            );
            $select->from(['i' => 'intakes']);
            $select->group(['i.intakeTime']);
            
            $statement = $sql->prepareStatementForSqlObject($select);
            $resultSet = $statement->execute();
            $results = iterator_to_array($resultSet, false);

            if (!empty($results)) {
                $this->cache->setItem($key, $results);
            }

            return $results;
        } catch (\Throwable $e) {
            return [];
        }
    }

    public function findAllById(array $get) : Paginator
    {
        $patientId = $get['patientId'];

        $select = $this->findAllBySelect();
        $select->where(['i.patientId' => $patientId]);

        // echo $select->getSqlString($this->adapter->getPlatform());
        // die;
        $paginatorAdapter = new DbSelect(
            $select,
            $this->adapter
        );
        return new Paginator($paginatorAdapter);
    }

    public function findAllBySelect()
    {
        $sql = new Sql($this->adapter);
        $select = $sql->select();

        $select->columns([
            'id',
            'gender' => new Expression("JSON_OBJECT('id', p.gender, 'name', IF(p.gender = 'male', 'Male', 'Female'))"),
            'ageGroup' => new Expression("JSON_OBJECT('id', p.ageGroup, 'name', 
                CASE 
                    WHEN p.ageGroup = 'infant' THEN 'Infant'
                    WHEN p.ageGroup = 'adult' THEN 'Adult'
                    ELSE 'Unknown'
                END
            )"),
            'patientId' => new Expression("JSON_OBJECT('id', p.id, 'name', CONCAT(u.firstname, ' ', u.lastname))"),
            'medicineId' => new Expression("JSON_OBJECT('id', m.id, 'name', m.name, 'frequency', m.frequency, 'canBeUsedForInfants', m.canBeUsedForInfants)"),
            'intakeTime' => new Expression("JSON_OBJECT('id', i.intakeTime, 'name', i.intakeTime)"),
        ]);

        $select->from(['i' => 'intakes']);
        $select->join(['m' => 'medicines'], 'm.id = i.medicineId', [], $select::JOIN_LEFT);
        $select->join(['p' => 'patients'], 'p.id = i.patientId', [], $select::JOIN_LEFT);
        $select->join(['u' => 'users'], 'u.id = p.userId', [], $select::JOIN_LEFT);

        return $select;
    }

    public function findAllByPaging(array $get) : Paginator
    {
        $select = $this->findAllBySelect();
        $this->columnFilters->clear();
        $this->columnFilters->setColumns([
            'name',
            'gender',
            'ageGroup',
            'patientId',
            'medicineId',
            'intakeTime',
        ]);
        $this->columnFilters->setLikeColumns(
            [
                'name',
            ]
        );
        $this->columnFilters->setWhereColumns(
            [
                'gender',
                'ageGroup',
                'patientId',
                'medicineId',
                'intakeTime',
            ]
        );
        $this->columnFilters->setSelect($select);
        $this->columnFilters->setData($get);

        if ($this->columnFilters->searchDataIsNotEmpty()) {
            $nest = $select->where->nest();
            foreach ($this->columnFilters->getSearchData() as $col => $words) {
                $nest = $nest->or->nest();
                foreach ($words as $str) {
                    $nest->or->like(new Expression($col), '%'.$str.'%');
                }
                $nest = $nest->unnest();
            }
            $nest->unnest();
        }
        if ($this->columnFilters->whereDataIsNotEmpty()) {
            foreach ($this->columnFilters->getWhereData() as $column => $value) {
                if (is_array($value)) {
                    $nest = $select->where->nest();
                    foreach ($value as $val) {
                        $nest->or->equalTo(new Expression($column), $val);
                    }
                    $nest->unnest();
                } else {
                    $select->where->equalTo(new Expression($column), $value);
                }
            }
        }

        if (! empty($get['maleInfants'])) {
            $select->where->equalTo(new Expression('gender'), 'male');
        }

        if (! empty($get['femaleAdults'])) {
            $select->where->equalTo(new Expression('gender'), 'female');
        }

        // orders
        // 
        if ($this->columnFilters->orderDataIsNotEmpty()) {
            foreach ($this->columnFilters->getOrderData() as $order) {
                $select->order(new Expression($order));
            }
        }
        // echo $select->getSqlString($this->adapter->getPlatform());
        // die;
        $paginatorAdapter = new DbSelect(
            $select,
            $this->adapter
        );
        return new Paginator($paginatorAdapter);
    }

    public function findOneById(string $intakeId)
    {
        $sql = new Sql($this->adapter);
        $select = $sql->select();

        $select->columns(
            [
                'id',
                'patientId' => new Expression("JSON_OBJECT('id', p.id, 'name', CONCAT(u.firstname, ' ', u.lastname))"),
                'medicineId' => new Expression("JSON_OBJECT('id', m.id, 'name', m.name, 'frequency', m.frequency, 'canBeUsedForInfants', m.canBeUsedForInfants)"),
                'intakeTime',
            ]
        );
        $select->from(['i' => 'intakes']);
        $select->join(['m' => 'medicines'], 'm.id = i.medicineId', [], $select::JOIN_LEFT);
        $select->join(['p' => 'patients'], 'p.id = i.patientId', [], $select::JOIN_LEFT); // doğru bağlama
        $select->join(['u' => 'users'], 'u.id = p.userId', [], $select::JOIN_LEFT); // sonra users
        $select->where(['i.id' => $intakeId]);

        $statement = $sql->prepareStatementForSqlObject($select);
        $resultSet = $statement->execute();
        $row = $resultSet->current();

        $statement->getResource()->closeCursor();
        return $row;
    }

    public function create(array $data) : void
    {
        unset($data['intakes']['id']);
        try {
            $this->conn->beginTransaction();
            $this->intakes->insert($data['intakes']);
            $this->deleteCache();
            $this->conn->commit();
        } catch (Exception $e) {
            $this->conn->rollback();
            throw $e;
        }
    }

    public function update(array $data) : void
    {
        $intakeId = $data['id'];
        try {
            $this->conn->beginTransaction();
            $this->intakes->update($data['intakes'], ['id' => $intakeId]);
            $this->deleteCache();
            $this->conn->commit();
        } catch (Exception $e) {
            $this->conn->rollback();
            throw $e;
        }
    }

    public function delete(string $intakeId) : void
    {
        try {
            $this->conn->beginTransaction();
            $this->intakes->delete(['id' => $intakeId]); 
            $this->deleteCache();
            $this->conn->commit();
        } catch (Exception $e) {
            $this->conn->rollback();
            throw $e;
        }
    }

    private function deleteCache() : void
    {
        $this->cache->removeItem(CACHE_ROOT_KEY.Self::class.':findAll');
    }

    public function getAdapter() : AdapterInterface
    {
        return $this->adapter;
    }
}
