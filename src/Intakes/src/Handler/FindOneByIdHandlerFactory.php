<?php

declare(strict_types=1);

namespace Intakes\Handler;

use Intakes\Model\IntakeModel;
use Olobase\Mezzio\DataManagerInterface;
use Psr\Container\ContainerInterface;
use Psr\Http\Server\RequestHandlerInterface;

class FindOneByIdHandlerFactory
{
    public function __invoke(ContainerInterface $container): RequestHandlerInterface
    {
        return new FindOneByIdHandler(
            $container->get(IntakeModel::class),
            $container->get(DataManagerInterface::class)
        );
    }
}
