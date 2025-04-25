<?php

declare(strict_types=1);

namespace Patients\Handler;

use Patients\Model\PatientModel;
use Patients\InputFilter\DeleteFilter;
use Olobase\Mezzio\Error\ErrorWrapperInterface as Error;
use Laminas\Diactoros\Response\JsonResponse;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class DeleteHandler implements RequestHandlerInterface
{
    public function __construct(
        private PatientModel $patientModel,        
        private DeleteFilter $filter,
        private Error $error,
    ) 
    {
        $this->patientModel = $patientModel;
        $this->filter = $filter;
        $this->error = $error;
    }
    
    /**
     * @OA\Delete(
     *   path="/patients/delete/{patientId}",
     *   tags={"Patients"},
     *   summary="Delete patient",
     *   operationId="patients_delete",
     *
     *   @OA\Parameter(
     *       in="path",
     *       name="brandId",
     *       required=true,
     *       description="Patient uuid",
     *       @OA\Schema(
     *           type="string",
     *           format="uuid",
     *       ),
     *   ),
     *   @OA\Response(
     *     response=200,
     *     description="Successful operation",
     *   )
     *)
     **/
    public function handle(ServerRequestInterface $request): ResponseInterface
    {   
        $this->filter->setInputData($request->getQueryParams());
        if ($this->filter->isValid()) {
            $this->patientModel->delete(
                $this->filter->getValue('id')
            );
        } else {
            return new JsonResponse($this->error->getMessages($this->filter), 400);
        }
        return new JsonResponse([]);
    }
}
