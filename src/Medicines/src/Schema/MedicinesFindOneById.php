<?php

namespace Medicines\Schema;

/**
 * @OA\Schema()
 */
class MedicinesFindOneById
{
    /**
     * @var object
     * @OA\Property(
     *     ref="#/components/schemas/MedicinesFindOneByIdObject",
     * )
     */
    public $data;
}
