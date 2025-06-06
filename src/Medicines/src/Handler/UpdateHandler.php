<?php

declare(strict_types=1);

namespace Medicines\Handler;

use Medicines\Schema\MedicineSave;
use Medicines\InputFilter\SaveFilter;
use Medicines\Model\MedicineModel;
use Olobase\Mezzio\DataManagerInterface;
use Common\Helper\ErrorWrapperInterface as Error;
use Laminas\Diactoros\Response\JsonResponse;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class UpdateHandler implements RequestHandlerInterface
{
    public function __construct(
        private MedicineModel $medicineModel,        
        private DataManagerInterface $dataManager,
        private SaveFilter $filter,
        private Error $error,
    ) 
    {
    }

    /**
     * @OA\Put(
     *   path="/medicines/update/{medicineId}",
     *   tags={"Medicines"},
     *   summary="Medicine",
     *   operationId="medicines_update",
     *
     *   @OA\Parameter(
     *       name="medicineId",
     *       in="path",
     *       required=true,
     *       @OA\Schema(
     *           type="string",
     *       ),
     *   ),
     *   @OA\RequestBody(
     *     description="Update user",
     *     @OA\JsonContent(ref="#/components/schemas/MedicineSave"),
     *   ),
     *   @OA\Response(
     *     response=200,
     *     description="Successful operation",
     *   ),
     *   @OA\Response(
     *      response=400,
     *      description="Bad request, returns to validation errors"
     *   )
     *)
     **/
    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $this->filter->setInputData($request->getParsedBody());
        $data = array();
        $response = array();
        if ($this->filter->isValid()) {
            $this->dataManager->setInputFilter($this->filter);
            $data = $this->dataManager->getSaveData(MedicineSave::class, 'medicines');
            $this->medicineModel->update($data);
        } else {
            return new JsonResponse($this->error->getMessages($this->filter), 400);
        }
        return new JsonResponse($response); 
    }
}
