<?php

namespace Patients\Schema;

/**
 * @OA\Schema()
 */
class PatientsFindOneById
{
    /**
     * @var object
     * @OA\Property(
     *     ref="#/components/schemas/PatientsFindOneByIdObject",
     * )
     */
    public $data;
}
