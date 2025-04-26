<?php

namespace Medicines\Schema;

/**
 * @OA\Schema()
 */
class MedicinesFindOneByIdObject
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
    public $name;
    /**
    * @var object
    * @OA\Property(
    *     ref="#/components/schemas/ObjectId",
    * )
    */
    public $frequency;
    /**
     * @var integer
     * @OA\Property()
     */
    public $canBeUsedForInfants;
}
