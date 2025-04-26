<?php

declare(strict_types=1);

namespace Medicines\Handler;

use Medicines\Model\MedicineModel;
use Medicines\Schema\MedicinesFindOneById;
use Olobase\Mezzio\DataManagerInterface;
use Laminas\Diactoros\Response\JsonResponse;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class FindOneByIdHandler implements RequestHandlerInterface
{
    public function __construct(
        private MedicineModel $medicineModel,
        private DataManagerInterface $dataManager
    )
    {
    }

    /**
     * @OA\Get(
     *   path="/medicines/findOneById/{medicineId}",
     *   tags={"Medicines"},
     *   summary="Find one medicine find one by id",
     *   operationId="medicines_findOneById",
     *   
     *   @OA\Response(
     *     response=200,
     *     description="Successful operation",
     *     @OA\JsonContent(ref="#/components/schemas/MedicinesFindOneById"),
     *   ),
     *   @OA\Response(
     *      response=404,
     *      description="No result found"
     *   )
     *)
     **/
    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $get = $request->getQueryParams();
        $medicineId = $request->getAttribute("medicineId");
        $row = $this->medicineModel->findOneById($medicineId, $get);
        if ($row) {
            $data = $this->dataManager->getViewData(MedicinesFindOneById::class, $row);
            return new JsonResponse($data); 
        }
        return new JsonResponse([], 404);
    }

}
