<?php

declare(strict_types=1);

namespace Users\Handler;

use Users\Model\UserModelInterface;
use Users\InputFilter\DeleteFilter;
use Common\Helper\ErrorWrapperInterface as Error;
use Laminas\Diactoros\Response\JsonResponse;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class DeleteHandler implements RequestHandlerInterface
{
    public function __construct(
        private UserModelInterface $userModel,        
        private DeleteFilter $filter,
        private Error $error,
    ) 
    {
        $this->userModel = $userModel;
        $this->filter = $filter;
        $this->error = $error;
    }
    
    /**
     * @OA\Delete(
     *   path="/users/delete/{userId}",
     *   tags={"Users"},
     *   summary="Delete user",
     *   operationId="users_delete",
     *
     *   @OA\Parameter(
     *       in="path",
     *       name="userId",
     *       required=true,
     *       description="user uuid",
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
            $this->userModel->delete(
                $this->filter->getValue('id')
            );
        } else {
            return new JsonResponse($this->error->getMessages($this->filter), 400);
        }
        return new JsonResponse([]);
    }
}
