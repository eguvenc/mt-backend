<?php

declare(strict_types=1);

namespace Intakes\Handler;

use Common\Helper\JsonHelper;
use Intakes\Model\IntakeModel;
use Laminas\Diactoros\Response\JsonResponse;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class FindAllByIdHandler implements RequestHandlerInterface
{
    public function __construct(private IntakeModel $intakeModel)
    {
    }

    /**
     * @OA\Get(
     *   path="/intakes/findAllById/{patientId}",
     *   tags={"Intakes"},
     *   summary="Find all intakes by id",
     *   operationId="intakes_findAllById",
     *   
     *   @OA\Parameter(
     *       name="patientId",
     *       in="path",
     *       required=true,
     *       @OA\Schema(
     *           type="string",
     *       ),
     *   ),
     *   @OA\Response(
     *     response=200,
     *     description="Successful operation",
     *     @OA\JsonContent(ref="#/components/schemas/IntakesFindAllById"),
     *   ),
     *   @OA\Response(
     *      response=404,
     *      description="No result found"
     *   )
     *)
     **/
    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $patientId = $request->getAttribute("patientId");

        $get = $request->getQueryParams();
        $get['patientId'] = $patientId;

        $page = empty($get['_page']) ? 1 : (int)$get['_page'];
        $perPage = empty($get['_perPage']) ? 5 : (int)$get['_perPage'];

        // https://docs.laminas.dev/tutorials/pagination/
        $paginator = $this->intakeModel->findAllById($get);

        $page = ($page < 1) ? 1 : $page;
        $paginator->setCurrentPageNumber($page);
        $paginator->setItemCountPerPage($perPage);

        return new JsonResponse([
            'page' => $paginator->getCurrentPageNumber(),
            'perPage' => $paginator->getItemCountPerPage(),
            'totalPages' => $paginator->count(),
            'totalItems' => $paginator->getTotalItemCount(),
            'data' => JsonHelper::paginatorJsonDecode($paginator->getCurrentItems()),
        ]);

        return new JsonResponse([
            'data' => $data,
        ]);
    }

}
