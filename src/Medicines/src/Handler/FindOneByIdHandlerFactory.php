<?php

declare(strict_types=1);

namespace Medicines\Handler;

use Medicines\Model\MedicineModel;
use Olobase\Mezzio\DataManagerInterface;
use Psr\Container\ContainerInterface;
use Psr\Http\Server\RequestHandlerInterface;

class FindOneByIdHandlerFactory
{
    public function __invoke(ContainerInterface $container): RequestHandlerInterface
    {
        return new FindOneByIdHandler(
            $container->get(MedicineModel::class),
            $container->get(DataManagerInterface::class)
        );
    }
}
