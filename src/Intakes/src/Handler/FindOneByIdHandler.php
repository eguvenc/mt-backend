<?php

declare(strict_types=1);

namespace Intakes\Handler;

use Intakes\Model\IntakeModel;
use Intakes\Schema\IntakesFindOneById;
use Olobase\Mezzio\DataManagerInterface;
use Laminas\Diactoros\Response\JsonResponse;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class FindOneByIdHandler implements RequestHandlerInterface
{
    public function __construct(
        private IntakeModel $intakeModel,
        private DataManagerInterface $dataManager
    )
    {
    }

    /**
     * @OA\Get(
     *   path="/intakes/findOneById/{intakeId}",
     *   tags={"Intakes"},
     *   summary="Find one intake find one by id",
     *   operationId="intakes_findOneById",
     *   
     *   @OA\Response(
     *     response=200,
     *     description="Successful operation",
     *     @OA\JsonContent(ref="#/components/schemas/IntakesFindOneById"),
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
        $intakeId = $request->getAttribute("intakeId");
        $row = $this->intakeModel->findOneById($intakeId, $get);
        if ($row) {
            $data = $this->dataManager->getViewData(IntakesFindOneById::class, $row);
            return new JsonResponse($data); 
        }
        return new JsonResponse([], 404);
    }

}
