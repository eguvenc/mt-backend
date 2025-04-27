<?php

declare(strict_types=1);

namespace Intakes\Handler;

use Intakes\Model\IntakeModel;
use Intakes\InputFilter\DeleteFilter;
use Common\Helper\ErrorWrapperInterface as Error;
use Laminas\Diactoros\Response\JsonResponse;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class DeleteHandler implements RequestHandlerInterface
{
    public function __construct(
        private IntakeModel $intakeModel,        
        private DeleteFilter $filter,
        private Error $error,
    ) 
    {
        $this->intakeModel = $intakeModel;
        $this->filter = $filter;
        $this->error = $error;
    }
    
    /**
     * @OA\Delete(
     *   path="/intakes/delete/{intakeId}",
     *   tags={"Intakes"},
     *   summary="Delete intake",
     *   operationId="intakes_delete",
     *
     *   @OA\Parameter(
     *       in="path",
     *       name="intakeId",
     *       required=true,
     *       description="Intake uuid",
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
            $this->intakeModel->delete(
                $this->filter->getValue('id')
            );
        } else {
            return new JsonResponse($this->error->getMessages($this->filter), 400);
        }
        return new JsonResponse([]);
    }
}
