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
    // intakes
    $app->route('/api/intakes/findAll', [...$auth, ...[Intakes\Handler\FindAllHandler::class]], ['GET']);
    $app->route('/api/intakes/findAllByPaging', [...$auth, ...[Intakes\Handler\FindAllByPagingHandler::class]], ['GET']);
    $app->route('/api/intakes/findAllById/:patientId', [...$auth, ...[Intakes\Handler\FindAllByIdHandler::class]], ['GET']);
    $app->route('/api/intakes/findOneById/:intakeId', [...$auth, ...[Intakes\Handler\FindOneByIdHandler::class]], ['GET']);
    $app->route('/api/intakes/create', [...$auth, ...[Intakes\Handler\CreateHandler::class]], ['POST']);
    $app->route('/api/intakes/delete/:intakeId', [...$auth, ...[Intakes\Handler\DeleteHandler::class]], ['DELETE']);
    $app->route('/api/intakes/update/:intakeId', [...$auth, ...[Intakes\Handler\UpdateHandler::class]], ['PUT']);

    // intakes - femaleAdults and maleInfants
    $app->route('/api/intakes/femaleAdults/findAllByPaging', [...$auth, ...[Intakes\Handler\FemaleAdults\FindAllByPagingHandler::class]], ['GET']);
    $app->route('/api/intakes/maleInfants/findAllByPaging', [...$auth, ...[Intakes\Handler\MaleInfants\FindAllByPagingHandler::class]], ['GET']);


};
