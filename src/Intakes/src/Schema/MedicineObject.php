<?php

namespace Intakes\Schema;

/**
 * @OA\Schema()
 */
class MedicineObject
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
     * @var string
     * @OA\Property()
     */
    public $frequency;
    /**
     * @var integer
     * @OA\Property()
     */
    public $canBeUsedForInfants;
}
