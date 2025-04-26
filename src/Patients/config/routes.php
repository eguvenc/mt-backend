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
    // Patients
    $app->route('/api/patients/findAll', [...$auth, ...[Patients\Handler\FindAllHandler::class]], ['GET']);
    $app->route('/api/patients/findAllByPaging', [...$auth, ...[Patients\Handler\FindAllByPagingHandler::class]], ['GET']);
    $app->route('/api/patients/findOneById/:patientId', [...$auth, ...[Patients\Handler\FindOneByIdHandler::class]], ['GET']);
    $app->route('/api/patients/create', [...$auth, ...[Patients\Handler\CreateHandler::class]], ['POST']);
    $app->route('/api/patients/delete/:patientId', [...$auth, ...[Patients\Handler\DeleteHandler::class]], ['DELETE']);
    $app->route('/api/patients/update/:patientId', [...$auth, ...[Patients\Handler\UpdateHandler::class]], ['PUT']);
};
