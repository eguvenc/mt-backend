<?php

declare(strict_types=1);

namespace Intakes\Handler;

use Intakes\Schema\IntakeSave;
use Intakes\InputFilter\SaveFilter;
use Intakes\Model\IntakeModel;
use Olobase\Mezzio\DataManagerInterface;
use Common\Helper\ErrorWrapperInterface as Error;
use Laminas\Diactoros\Response\JsonResponse;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class CreateHandler implements RequestHandlerInterface
{
    public function __construct(
        private IntakeModel $intakeModel,        
        private DataManagerInterface $dataManager,
        private SaveFilter $filter,
        private Error $error,
    ) 
    {
    }
    
    /**
     * @OA\Post(
     *   path="/intakes/create",
     *   tags={"Intakes"},
     *   summary="Create a new intake",
     *   operationId="intakes_create",
     *
     *   @OA\RequestBody(
     *     description="Create a new intake",
     *     @OA\JsonContent(ref="#/components/schemas/IntakeSave"),
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
            $data = $this->dataManager->getSaveData(IntakeSave::class, 'intakes');
            $this->intakeModel->create($data);
        } else {
            return new JsonResponse($this->error->getMessages($this->filter), 400);
        }
        return new JsonResponse($response); 
    }
}
