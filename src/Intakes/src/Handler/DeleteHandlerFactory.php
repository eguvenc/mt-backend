<?php

declare(strict_types=1);

namespace Intakes\Handler;

use Intakes\Model\IntakeModel;
use Intakes\InputFilter\DeleteFilter;
use Common\Helper\ErrorWrapperInterface;
use Psr\Container\ContainerInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Laminas\InputFilter\InputFilterPluginManager;

class DeleteHandlerFactory
{
    public function __invoke(ContainerInterface $container): RequestHandlerInterface
    {
        $pluginManager = $container->get(InputFilterPluginManager::class);
        $inputFilter   = $pluginManager->get(DeleteFilter::class);

        return new DeleteHandler(
            $container->get(IntakeModel::class),
            $inputFilter,
            $container->get(ErrorWrapperInterface::class)
        );
    }
}
