<?php
declare(strict_types=1);

namespace Medicines\Model;

use Exception;
use Olobase\Mezzio\ColumnFiltersInterface;
use Laminas\Db\Sql\Sql;
use Laminas\Db\Sql\Expression;
use Laminas\Paginator\Paginator;
use Laminas\Paginator\Adapter\DbSelect;
use Laminas\Db\Adapter\AdapterInterface;
use Laminas\Db\TableGateway\TableGatewayInterface;
use Laminas\Cache\Storage\StorageInterface;

class MedicineModel
{
    private $conn;
    private $adapter;
    private $frequencyFunction;

    public function __construct(
        private TableGatewayInterface $medicines,
        private StorageInterface $cache,
        private ColumnFiltersInterface $columnFilters
    ) {
        $this->adapter = $medicines->getAdapter();
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
                ['*']
            );
            $select->from(['m' => 'medicines']);

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

        $this->frequencyFunction = "JSON_OBJECT('id', m.frequency, 'name', 
            CASE 
                WHEN m.frequency = 'once' THEN 'Once a Day'
                WHEN m.frequency = 'twice' THEN 'Twice a Day'
                WHEN m.frequency = 'threeTimes' THEN 'Three Times a Day'
                ELSE 'Unknown'
            END
        )";
        $select->columns(
            [
                'id',
                'name',
                'frequency' => new Expression($this->frequencyFunction),
                'canBeUsedForInfants',
            ]
        );
        $select->from(['m' => 'medicines']);
        return $select;
    }

    public function findAllByPaging(array $get) : Paginator
    {
        $select = $this->findAllBySelect();
        $this->columnFilters->clear();
        $this->columnFilters->setColumns([
            'name',
            'frequency',
        ]);
        $this->columnFilters->setLikeColumns(
            [
                'name',
            ]
        );
        $this->columnFilters->setWhereColumns(
            [
                'frequency',
                'canBeUsedForInfants',
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

    public function findOneById(string $medicineId)
    {
        $frequencyFunction = "JSON_OBJECT('id', m.frequency, 'name', 
            CASE 
                WHEN m.frequency = 'once' THEN 'Once a Day'
                WHEN m.frequency = 'twice' THEN 'Twice a Day'
                WHEN m.frequency = 'threeTimes' THEN 'Three Times a Day'
                ELSE 'Unknown'
            END
        )";

        $sql = new Sql($this->adapter);
        $select = $sql->select();
        $select->columns(
            [
                '*',
                'frequency' => new Expression($frequencyFunction),
            ]
        );
        $select->from(['m' => 'medicines']);
        $select->where(['m.id' => $medicineId]);

        $statement = $sql->prepareStatementForSqlObject($select);
        $resultSet = $statement->execute();
        $row = $resultSet->current();

        $statement->getResource()->closeCursor();
        return $row;
    }

    public function create(array $data) : void
    {
        unset($data['medicines']['id']);
        try {
            $this->conn->beginTransaction();
            $this->medicines->insert($data['medicines']);
            $this->deleteCache();
            $this->conn->commit();
        } catch (Exception $e) {
            $this->conn->rollback();
            throw $e;
        }
    }

    public function update(array $data) : void
    {
        $medicineId = $data['id'];
        try {
            $this->conn->beginTransaction();
            $this->medicines->update($data['medicines'], ['id' => $medicineId]);
            $this->deleteCache();
            $this->conn->commit();
        } catch (Exception $e) {
            $this->conn->rollback();
            throw $e;
        }
    }

    public function delete(string $medicineId) : void
    {
        try {
            $this->conn->beginTransaction();
            $this->medicines->delete(['id' => $medicineId]); 
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
