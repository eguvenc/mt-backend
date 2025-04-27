<?php

declare(strict_types=1);

namespace Intakes\Handler;

use Intakes\Model\IntakeModel;
use Psr\Container\ContainerInterface;
use Psr\Http\Server\RequestHandlerInterface;

class FindAllHandlerFactory
{
    public function __invoke(ContainerInterface $container): RequestHandlerInterface
    {
        return new FindAllHandler($container->get(IntakeModel::class));
    }
}
