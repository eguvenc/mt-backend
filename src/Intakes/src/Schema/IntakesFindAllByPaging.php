<?php

namespace Intakes\Schema;

/**
 * @OA\Schema()
 */
class IntakesFindAllByPaging
{
    /**
     * @var array
     * @OA\Property(
     *      type="array",
     *      @OA\Items(s
     *          type="object",
     *          ref="#/components/schemas/IntakesFindAllByPagingObject",
     *      ),
     * )
     */
    public $data;
    /**
     * @var integer
     * @OA\Property()
     */
    public $page;
    /**
     * @var integer
     * @OA\Property()
     */
    public $perPage;
    /**
     * @var integer
     * @OA\Property()
     */
    public $totalPages;
    /**
     * @var integer
     * @OA\Property()
     */
    public $totalItems;
}
