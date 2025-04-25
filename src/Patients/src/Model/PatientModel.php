<?php
declare(strict_types=1);

namespace Patients\Model;

use Common\Helper\ImageHelper;
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
    private $patientNameFunction;

    public function __construct(
        private TableGatewayInterface $patients,
        private StorageInterface $cache,
        private ColumnFiltersInterface $columnFilters
    ) {
        $this->adapter = $patients->getAdapter();
        $this->conn = $this->adapter->getDriver()->getConnection();
    }

    public function findAllBySelect()
    {
        $sql = new Sql($this->adapter);
        $select = $sql->select();

        $this->patientNameFunction = "CONCAT(u.firstname, ' ', u.lastname)";
        $select->columns([
            'gender' => new Expression("JSON_OBJECT('id', p.gender, 'gender', p.gender, 'name', IF(p.gender = 'M', 'Male', 'Female'))"),
            'ageGroup' => new Expression("JSON_OBJECT('id', p.ageGroup, 'ageGroup', p.ageGroup, 'name', 
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
        return $select;
    }

    public function findAllByPaging(array $get) : Paginator
    {
        $select = $this->findAllBySelect();
        $this->columnFilters->clear();
        $this->columnFilters->setAlias('name', $this->patientNameFunction);
        $this->columnFilters->setColumns([
            'name',
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
        $select->columns(['*']);
        $select->from(['p' => 'patients']);
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
            $data['patients']['createdAt'] = date("Y-m-d H:i:s");
            $this->patients->insert($data['patients']);
            $this->conn->commit();
        } catch (Exception $e) {
            $this->conn->rollback();
            throw $e;
        }
    }

    public function update(array $data) : void
    {
        $patientId = $data['id'];
        try {
            $this->conn->beginTransaction();
            $data['patients']['updatedAt'] = date("Y-m-d H:i:s");
            $this->patients->update($data['patients'], ['id' => $patientId]);
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
            $this->conn->commit();
        } catch (Exception $e) {
            $this->conn->rollback();
            throw $e;
        }
    }

    public function getAdapter() : AdapterInterface
    {
        return $this->adapter;
    }
}
