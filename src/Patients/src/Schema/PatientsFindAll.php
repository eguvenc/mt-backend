<?php

namespace Patients\Schema;

/**
 * @OA\Schema()
 */
class PatientsFindAll
{
    /**
    *  @var array
    *  @OA\Property(
    *      type="array",
    *      @OA\Items(
    *           @OA\Property(
    *             property="id",
    *             type="string",
    *           ),
    *            @OA\Property(
    *             property="name",
    *             type="string",
    *           ),
    *           @OA\Property(
    *             property="userId",
    *             type="string",
    *           ), 
    *           @OA\Property(
    *             property="gender",
    *             type="string",
    *           ),
    *           @OA\Property(
    *             property="ageGroup",
    *             type="string",
    *           )
    *     ),
    *  )
    */
    public $data;
}
