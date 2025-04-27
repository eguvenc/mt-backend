<?php

namespace Intakes\Schema;

/**
 * @OA\Schema()
 */
class IntakesFindOneById
{
    /**
     * @var object
     * @OA\Property(
     *     ref="#/components/schemas/IntakesFindOneByIdObject",
     * )
     */
    public $data;
}
