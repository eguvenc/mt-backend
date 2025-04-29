<?php

declare(strict_types=1);

namespace Patients\InputFilter;

use Psr\Container\ContainerInterface;
use Laminas\Db\Adapter\AdapterInterface;
use Laminas\ServiceManager\Factory\FactoryInterface;
use Psr\Http\Message\ServerRequestInterface;
use Laminas\InputFilter\InputFilterPluginManager;

class SaveFilterFactory implements FactoryInterface
{
    public function __invoke(ContainerInterface $container, $requestedName, ?array $options = null)
    {
        return new SaveFilter(
            $container->get(AdapterInterface::class),
            $container->get(InputFilterPluginManager::class),
            $container->get(ServerRequestInterface::class)()
        );
    }
}
