<?php

namespace Medicines\Schema;

/**
 * @OA\Schema()
 */
class MedicinesFindAllByPaging
{
    /**
     * @var array
     * @OA\Property(
     *      type="array",
     *      @OA\Items(s
     *          type="object",
     *          ref="#/components/schemas/MedicinesFindAllByPagingObject",
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
