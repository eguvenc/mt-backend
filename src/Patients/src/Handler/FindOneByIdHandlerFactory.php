<?php

declare(strict_types=1);

namespace Patients\Handler;

use Patients\Model\PatientModel;
use Olobase\Mezzio\DataManagerInterface;
use Psr\Container\ContainerInterface;
use Psr\Http\Server\RequestHandlerInterface;

class FindOneByIdHandlerFactory
{
    public function __invoke(ContainerInterface $container): RequestHandlerInterface
    {
        return new FindOneByIdHandler(
            $container->get(PatientModel::class),
            $container->get(DataManagerInterface::class)
        );
    }
}
