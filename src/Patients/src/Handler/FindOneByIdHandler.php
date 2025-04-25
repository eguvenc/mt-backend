<?php

declare(strict_types=1);

namespace Patients\Handler;

use Patients\Model\PatientModel;
use Patients\Schema\PatientsFindOneById;
use Olobase\Mezzio\DataManagerInterface;
use Laminas\Diactoros\Response\JsonResponse;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class FindOneByIdHandler implements RequestHandlerInterface
{
    public function __construct(
        private PatientModel $PatientModel,
        private DataManagerInterface $dataManager
    )
    {
    }

    /**
     * @OA\Get(
     *   path="/patients/findOneById/{patientId}",
     *   tags={"Patients"},
     *   summary="Find one patient find one by id",
     *   operationId="patients_findOneById",
     *   
     *   @OA\Response(
     *     response=200,
     *     description="Successful operation",
     *     @OA\JsonContent(ref="#/components/schemas/PatientsFindOneById"),
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
        $userId = $request->getAttribute("patientId");
        $row = $this->patientModel->findOneById($userId, $get);
        if ($row) {
            $data = $this->dataManager->getViewData(PatientsFindOneById::class, $row);
            return new JsonResponse($data); 
        }
        return new JsonResponse([], 404);
    }

}
