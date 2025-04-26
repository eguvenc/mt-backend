<?php

declare(strict_types=1);

namespace Patients\Handler;

use Patients\Model\PatientModel;
use Psr\Container\ContainerInterface;
use Psr\Http\Server\RequestHandlerInterface;

class FindAllHandlerFactory
{
    public function __invoke(ContainerInterface $container): RequestHandlerInterface
    {
        return new FindAllHandler($container->get(PatientModel::class));
    }
}
