<?php

declare(strict_types=1);

namespace Intakes\Handler;

use Intakes\Model\IntakeModel;
use Laminas\Diactoros\Response\JsonResponse;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class FindAllHandler implements RequestHandlerInterface
{
    public function __construct(private IntakeModel $intakeModel)
    {
    }

    /**
     * @OA\Get(
     *   path="/intakes/findAll",
     *   tags={"Intakes"},
     *   summary="Find all patiens",
     *   operationId="intakes_findAll",
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
        $data = $this->intakeModel->findAll($get);
        return new JsonResponse([
            'data' => $data,
        ]);
    }

}
