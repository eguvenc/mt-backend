<?php

namespace Intakes\Schema;

/**
 * @OA\Schema()
 */
class IntakesFindOneByIdObject
{
    /**
     * @var string
     * @OA\Property(
     *     format="uuid"
     * )
     */
    public $id;
    /**
    * @var object
    * @OA\Property(
    *     ref="#/components/schemas/ObjectId",
    * )
    */
    public $patientId;
    /**
    * @var object
    * @OA\Property(
    *     ref="#/components/schemas/ObjectId",
    * )
    */
    public $medicineId;
    /**
     * @var string
     * @OA\Property()
     */
    public $intakeTime;
}
