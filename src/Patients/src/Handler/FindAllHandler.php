<?php

declare(strict_types=1);

namespace Patients\Handler;

use Patients\Model\PatientModel;
use Laminas\Diactoros\Response\JsonResponse;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class FindAllHandler implements RequestHandlerInterface
{
    public function __construct(private PatientModel $patientModel)
    {
    }

    /**
     * @OA\Get(
     *   path="/patients/findAll",
     *   tags={"Patients"},
     *   summary="Find all patients",
     *   operationId="patients_findAll",
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
        $data = $this->patientModel->findAll($get);
        return new JsonResponse([
            'data' => $data,
        ]);
    }

}
