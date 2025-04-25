<?php

declare(strict_types=1);

namespace Patients\Handler;

use Patients\Model\PatientModel;
use Psr\Container\ContainerInterface;
use Psr\Http\Server\RequestHandlerInterface;

class FindAllByPagingHandlerFactory
{
    public function __invoke(ContainerInterface $container): RequestHandlerInterface
    {
        return new FindAllByPagingHandler($container->get(PatientModel::class));
    }
}
