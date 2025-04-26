<?php

declare(strict_types=1);

use Mezzio\Application;
use Psr\Container\ContainerInterface;
use Authentication\Middleware\JwtAuthenticationMiddleware;

return function (Application $app, ContainerInterface $container) {

    $auth = [
        JwtAuthenticationMiddleware::class,
        Mezzio\Authorization\AuthorizationMiddleware::class,
    ];
    // medicines
    $app->route('/api/medicines/findAll', [...$auth, ...[Medicines\Handler\FindAllHandler::class]], ['GET']);
    $app->route('/api/medicines/findAllByPaging', [...$auth, ...[Medicines\Handler\FindAllByPagingHandler::class]], ['GET']);
    $app->route('/api/medicines/findOneById/:medicineId', [...$auth, ...[Medicines\Handler\FindOneByIdHandler::class]], ['GET']);
    $app->route('/api/medicines/create', [...$auth, ...[Medicines\Handler\CreateHandler::class]], ['POST']);
    $app->route('/api/medicines/delete/:medicineId', [...$auth, ...[Medicines\Handler\DeleteHandler::class]], ['DELETE']);
    $app->route('/api/medicines/update/:medicineId', [...$auth, ...[Medicines\Handler\UpdateHandler::class]], ['PUT']);
};
