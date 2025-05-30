<?php

declare(strict_types=1);

namespace Medicines\Handler;

use Medicines\Model\MedicineModel;
use Psr\Container\ContainerInterface;
use Psr\Http\Server\RequestHandlerInterface;

class FindAllHandlerFactory
{
    public function __invoke(ContainerInterface $container): RequestHandlerInterface
    {
        return new FindAllHandler($container->get(MedicineModel::class));
    }
}
