<?php

namespace Authorization\Schema\Roles;

/**
 * @OA\Schema()
 */
class RoleSave
{
    /**
     * @var string
     * @OA\Property(
     *     format="uuid"
     * )
     */
    public $id;
    /**
     * @var string
     * @OA\Property()
     */
    public $key;
    /**
     * @var string
     * @OA\Property()
     */
    public $name;
    /**
     * @var number
     * @OA\Property()
     */
    public $level;
    /**
    *  @var array
    *  @OA\Property(
    *      type="array",
    *      @OA\Items(
    *           @OA\Property(
    *             property="permId",
    *             type="string",
    *           )
    *     ),
    *  );
    */
    public $rolePermissions;
}
