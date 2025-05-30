<?php
declare(strict_types=1);

namespace Users\Model;

use Exception;
use Olobase\Mezzio\ColumnFiltersInterface;
use Laminas\Db\Sql\Sql;
use Laminas\Db\Sql\Expression;
use Laminas\Paginator\Paginator;
use Laminas\Paginator\Adapter\DbSelect;
use Laminas\Db\Adapter\AdapterInterface;
use Laminas\Db\TableGateway\TableGatewayInterface;
use Laminas\Cache\Storage\StorageInterface;

class UserModel implements UserModelInterface
{
    private $conn;
    private $adapter;
    private $rolesFunction;

    public const DEFAULT_USER_ROLE_ID = 'c87e615c-dd9c-4ecd-bcd7-de38dac2f39f';

    public function __construct(
        private TableGatewayInterface $users,
        private TableGatewayInterface $userAvatars,
        private TableGatewayInterface $userRoles,
        private StorageInterface $cache,
        private ColumnFiltersInterface $columnFilters,

    ) {
        $this->adapter = $users->getAdapter();
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
                    'id',
                    'name' => new Expression("CONCAT(u.firstname, ' ', u.lastname)"),
                ]
            );
            $select->from(['u' => 'users']);

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
        $platform = $this->adapter->getPlatform();
        $roles = "JSON_ARRAYAGG(";
        $roles.= "JSON_OBJECT(";
        $roles.= "'id' , r.id , ";
        $roles.= "'name' , r.name ";
        $roles.= "))";
        $this->rolesFunction = $platform->quoteIdentifierInFragment(
            "(SELECT $roles FROM userRoles ur LEFT JOIN roles r ON r.id = ur.roleId WHERE ur.userId = u.id)",
            [
                '(',
                ')',
                '/',
                'u',
                'ur',
                'roleId',
                'userId',
                'id',
                'name',
                'SELECT',
                'FROM',
                'AS',
                ',',
                '[',
                ']',
                'JSON_ARRAYAGG',
                'JSON_OBJECT',
                'WHERE',
                'ORDER',
                'BY',
                'ASC',
                ';',
                'CONCAT',
                '"',
                '\'',
                '\"', '=', '?', 'JOIN', 'ON', 'AND', 'LEFT', ','
            ]
        );
        $sql = new Sql($this->adapter);
        $select = $sql->select();
        $select->columns([
            'id',
            'firstname',
            'lastname',
            'email',
            'isActive',
            'isEmailActivated',
            'createdAt',
            'userRoles' => new Expression($this->rolesFunction),            
        ]);
        $select->from(['u' => 'users']);
        return $select;
    }

    public function findAllByPaging(array $get) : Paginator
    {
        $select = $this->findAllBySelect();
        $this->columnFilters->clear();
        $this->columnFilters->setAlias('userRoles', new Expression($this->rolesFunction));
        $this->columnFilters->setColumns([
            'firstname',
            'lastname',
            'email',
            'userRoles',
            'isActive',
            'isEmailActivated',
            'createdAt',
        ]);
        $this->columnFilters->setLikeColumns(
            [
                'firstname',
                'lastname',
                'userRoles',
                'email',
            ]
        );
        $this->columnFilters->setWhereColumns(
            [
                'isActive',
                'isEmailActivated',
                'createdAt',
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
        if ($this->columnFilters->likeDataIsNotEmpty()) {
            foreach ($this->columnFilters->getLikeData() as $column => $value) {
                if (is_array($value)) {
                    $nest = $select->where->nest();
                    foreach ($value as $val) {
                        $nest->or->like(new Expression($column), '%'.$val.'%');
                    }
                    $nest->unnest();
                } else {
                    $select->where->like(new Expression($column), '%'.$value.'%');
                }
            }   
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
        // date filters
        // 
        $this->columnFilters->setDateFilter('createdAt');
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

    public function findOneById(string $userId)
    {
        $sql = new Sql($this->adapter);
        $select = $sql->select();
        $select->columns(
            [
                'id',            
                'firstname',
                'lastname',
                'email',
                'isEmailActivated',
                'isActive',
                'createdAt',
            ]
        );
        $select->from(['u' => 'users']);
        $select->join(['ua' => 'userAvatars'], 'ua.userId = u.id',
            [
                'avatar' => new Expression("JSON_OBJECT('image', CONCAT('data:image/png;base64,', TO_BASE64(avatarImage)))"),
            ],
        $select::JOIN_LEFT);
        $select->where(['u.id' => $userId]);

        // echo $select->getSqlString($this->adapter->getPlatform());
        // die;
        $statement = $sql->prepareStatementForSqlObject($select);
        $resultSet = $statement->execute();
        $row = $resultSet->current();
        $statement->getResource()->closeCursor();
        return $row;
    }

    public function findOneByUsername(string $username)
    {
        $sql = new Sql($this->adapter);
        $select = $sql->select();
        $select->columns(
            [
                'id',
                'firstname',
                'lastname',
                'email',
                'isActive',
            ]
        );
        $select->from('users');
        $select->where(['email' => $username]);
        $statement = $sql->prepareStatementForSqlObject($select);
        $resultSet = $statement->execute();
        $row = $resultSet->current();
        $statement->getResource()->closeCursor();
        return $row;
    }

    public function create(array $data) : void
    {
        $userId = $data['id'];
        try {
            $this->conn->beginTransaction();
            if (! empty($data['users']['password'])) {
                $data['users']['password'] = password_hash($data['users']['password'], PASSWORD_DEFAULT, ['cost' => 10]);
            }
            $this->users->insert($data['users']);
            if (! empty($data['avatar']['image'])) {
                $this->userAvatars->insert(['userId' => $userId, 'avatarImage' => $data['avatar']['image']]);
            }
            $this->userRoles->insert(['userId' => $userId, 'roleId' => Self::DEFAULT_USER_ROLE_ID]);
            $this->deleteCache();
            $this->conn->commit();
        } catch (Exception $e) {
            $this->conn->rollback();
            throw $e;
        }
    }

    public function update(array $data) : void
    {
        $userId = $data['id'];
        try {
            $this->conn->beginTransaction();
            if (! empty($data['users']['password'])) {
                $data['users']['password'] = password_hash($data['users']['password'], PASSWORD_DEFAULT, ['cost' => 10]);
            } else {
                unset($data['users']['password']);
            }
            $data['users']['updatedAt'] = date('Y-m-d H:i:s');
            $this->users->update($data['users'], ['id' => $userId]);
            $this->userAvatars->delete(['userId' => $userId]);
            if (! empty($data['avatar']['image'])) { // let's read mime type safely
                $mimeType = finfo_buffer(
                    finfo_open(),
                    $data['avatar']['image'],
                    FILEINFO_MIME_TYPE
                );
                $this->userAvatars->insert(
                    [
                        'userId' => $userId, 
                        'mimeType' => $mimeType,
                        'avatarImage' => $data['avatar']['image']
                    ]
                );
            }
            $this->deleteCache();
            $this->conn->commit();
        } catch (Exception $e) {
            $this->conn->rollback();
            throw $e;
        }
    }

    public function delete(string $userId) : void
    {
        try {
            $this->conn->beginTransaction();
            $this->users->delete(['id' => $userId]);        
            $this->userAvatars->delete(['userId' => $userId]);
            $this->deleteCache();
            $this->conn->commit();
        } catch (Exception $e) {
            $this->conn->rollback();
            throw $e;
        }
    }

    public function updatePasswordById(string $userId, string $newPassword) : void
    {
        $password = password_hash($newPassword, PASSWORD_DEFAULT, ['cost' => 10]);
        try {
            $this->conn->beginTransaction();
            $this->users->update(['password' => $password], ['id' => $userId]);
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
