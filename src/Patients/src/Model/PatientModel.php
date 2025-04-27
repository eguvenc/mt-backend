<?php
declare(strict_types=1);

namespace Patients\Model;

use Common\Helper\RandomStringHelper;

use Exception;
use Olobase\Mezzio\ColumnFiltersInterface;
use Laminas\Db\Sql\Sql;
use Laminas\Db\Sql\Expression;
use Laminas\Paginator\Paginator;
use Laminas\Paginator\Adapter\DbSelect;
use Laminas\Db\Adapter\AdapterInterface;
use Laminas\Db\TableGateway\TableGatewayInterface;
use Laminas\Cache\Storage\StorageInterface;

class PatientModel
{
    private $conn;
    private $adapter;
    private $genderFunction;
    private $ageGroupFunction;
    private $patientNameFunction;
    private $intakesFunction;

    public function __construct(
        private TableGatewayInterface $patients,
        private StorageInterface $cache,
        private ColumnFiltersInterface $columnFilters
    ) {
        $this->adapter = $patients->getAdapter();
        $this->conn = $this->adapter->getDriver()->getConnection();
        $this->patientNameFunction = "CONCAT(u.firstname, ' ', u.lastname)";
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
            ]);
            $select->from(['p' => 'patients']);
            $select->join(
                ['u' => 'users'],
                'u.id = p.userId',
                [
                    'name' => new Expression($this->patientNameFunction)
                ],
                $select::JOIN_LEFT
            );

            // echo $select->getSqlString($this->adapter->getPlatform());
            // die;

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

    public function findAllBySelect()
    {
        $sql = new Sql($this->adapter);
        $select = $sql->select();

        $this->genderFunction = "JSON_OBJECT('id', p.gender, 'name', IF(p.gender = 'male', 'Male', 'Female'))";
        $this->ageGroupFunction = "JSON_OBJECT('id', p.ageGroup, 'name', 
            CASE 
                WHEN p.ageGroup = 'infant' THEN 'Infant'
                WHEN p.ageGroup = 'adult' THEN 'Adult'
                ELSE 'Unknown'
            END
        )";
        $this->intakesFunction = "
            (
                SELECT JSON_ARRAYAGG(
                    JSON_OBJECT(
                        'id', i.id,
                        'intakeTime', i.intakeTime,
                        'medicine', JSON_OBJECT(
                            'id', m.id,
                            'name', m.name,
                            'frequency', m.frequency,
                            'canBeUsedForInfants', m.canBeUsedForInfants
                        )
                    )
                )
                FROM intakes i
                LEFT JOIN medicines m ON m.id = i.medicineId
                WHERE i.patientId = p.id
            )
        ";
        $select->columns([
            'id',
            'gender' => new Expression($this->genderFunction),
            'ageGroup' => new Expression($this->ageGroupFunction),
            'intakes' => new Expression($this->intakesFunction),
        ]);
        $select->from(['p' => 'patients']);
        $select->join(
            ['u' => 'users'],
            'u.id = p.userId',
            [
                'userId' => 'id',
                'name' => new Expression("CONCAT(u.firstname, ' ', u.lastname)")
            ],
            $select::JOIN_LEFT
        );

        return $select;
    }

    public function findAllByPaging(array $get) : Paginator
    {
        $select = $this->findAllBySelect();
        $this->columnFilters->clear();
        $this->columnFilters->setAlias('name', $this->patientNameFunction);
        $this->columnFilters->setAlias('gender', 'p.gender');
        $this->columnFilters->setAlias('ageGroup', 'p.ageGroup');
        $this->columnFilters->setColumns([
            'name',
            'gender',
            'ageGroup',
        ]);
        $this->columnFilters->setLikeColumns(
            [
                'name',
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

    public function findOneById(string $patientId)
    {
        $sql = new Sql($this->adapter);
        $select = $sql->select();
        $select->columns(
            [
                '*',
                'patientId' => new Expression("JSON_OBJECT('id', p.id, 'name', CONCAT(u.firstname, ' ', u.lastname))"),
                'userId' => new Expression("JSON_OBJECT('id', u.id, 'name', CONCAT(u.firstname, ' ', u.lastname))"),
                'gender' => new Expression("JSON_OBJECT('id', p.gender, 'name', IF(p.gender = 'male', 'Male', 'Female'))"),
                'ageGroup' => new Expression("JSON_OBJECT('id', p.ageGroup, 'name', 
                    CASE 
                        WHEN p.ageGroup = 'infant' THEN 'Infant'
                        WHEN p.ageGroup = 'adult' THEN 'Adult'
                        ELSE 'Unknown'
                    END
                )"),
            ]
        );
        $select->from(['p' => 'patients']);
        $select->join(
            ['u' => 'users'],
            'u.id = p.userId',
            [
                'name' => new Expression("CONCAT(u.firstname, ' ', u.lastname)"),
            ],
            $select::JOIN_LEFT
        );
        $select->where(['p.id' => $patientId]);

        $statement = $sql->prepareStatementForSqlObject($select);
        $resultSet = $statement->execute();
        $row = $resultSet->current();

        $statement->getResource()->closeCursor();
        return $row;
    }

    public function create(array $data) : void
    {
        unset($data['patients']['id']);
        try {
            $this->conn->beginTransaction();
            $this->patients->insert($data['patients']);
            $this->deleteCache();
            $this->conn->commit();
        } catch (Exception $e) {
            $this->conn->rollback();
            throw $e;
        }
    }

    public function update(array $data) : void
    {
        $patientId = $data['id'];
        unset($data['patients']['id']);
        try {
            $this->conn->beginTransaction();
            $this->patients->update($data['patients'], ['id' => $patientId]);
            $this->deleteCache();
            $this->conn->commit();
        } catch (Exception $e) {
            $this->conn->rollback();
            throw $e;
        }
    }

    public function delete(string $patientId) : void
    {
        try {
            $this->conn->beginTransaction();
            $this->patients->delete(['id' => $patientId]); 
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
