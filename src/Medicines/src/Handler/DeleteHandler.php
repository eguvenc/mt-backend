<?php

declare(strict_types=1);

namespace Medicines\Handler;

use Medicines\Model\MedicineModel;
use Medicines\InputFilter\DeleteFilter;
use Common\Helper\ErrorWrapperInterface as Error;
use Laminas\Diactoros\Response\JsonResponse;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class DeleteHandler implements RequestHandlerInterface
{
    public function __construct(
        private MedicineModel $medicineModel,        
        private DeleteFilter $filter,
        private Error $error,
    ) 
    {
        $this->medicineModel = $medicineModel;
        $this->filter = $filter;
        $this->error = $error;
    }
    
    /**
     * @OA\Delete(
     *   path="/medicines/delete/{medicineId}",
     *   tags={"Medicines"},
     *   summary="Delete medicine",
     *   operationId="medicines_delete",
     *
     *   @OA\Parameter(
     *       in="path",
     *       name="medicineId",
     *       required=true,
     *       description="Medicine uuid",
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
            $this->medicineModel->delete(
                $this->filter->getValue('id')
            );
        } else {
            return new JsonResponse($this->error->getMessages($this->filter), 400);
        }
        return new JsonResponse([]);
    }
}
