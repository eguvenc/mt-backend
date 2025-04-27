<?php

namespace Intakes\Schema;

/**
 * @OA\Schema()
 */
class IntakesFindAll
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
    *           )
    *     ),
    *  )
    */
    public $data;
}
