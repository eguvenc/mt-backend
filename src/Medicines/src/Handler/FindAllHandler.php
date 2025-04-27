<?php

declare(strict_types=1);

namespace Medicines\Handler;

use Medicines\Model\MedicineModel;
use Laminas\Diactoros\Response\JsonResponse;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class FindAllHandler implements RequestHandlerInterface
{
    public function __construct(private MedicineModel $medicineModel)
    {
    }

    /**
     * @OA\Get(
     *   path="/medicines/findAll",
     *   tags={"Medicines"},
     *   summary="Find all medicines",
     *   operationId="medicines_findAll",
     *   
     *   @OA\Response(
     *     response=200,
     *     description="Successful operation",
     *     @OA\JsonContent(ref="#/components/schemas/CommonFindAll"),
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
        $data = $this->medicineModel->findAll($get);
        return new JsonResponse([
            'data' => $data,
        ]);
    }

}
