<?php

namespace Intakes\Schema;

/**
 * @OA\Schema()
 */
class IntakesFindAllByIdObject
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
    * @var object
    * @OA\Property(
    *     ref="#/components/schemas/ObjectId",
    * )
    */
    public $intakeTime;
}
