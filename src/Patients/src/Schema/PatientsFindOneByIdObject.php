<?php

namespace Patients\Schema;

/**
 * @OA\Schema()
 */
class PatientsFindOneByIdObject
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
    public $userId;
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
    public $gender;
    /**
    * @var object
    * @OA\Property(
    *     ref="#/components/schemas/ObjectId",
    * )
    */
    public $ageGroup;
}
