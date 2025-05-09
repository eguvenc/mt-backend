<?php

declare(strict_types=1);

namespace Common\Factory;

use Laminas\Validator\NotEmpty;
use Common\InputFilter\CollectionInputFilter;
use Psr\Container\ContainerInterface;
use Laminas\Validator\ValidatorPluginManager;
use Laminas\ServiceManager\Factory\FactoryInterface;

class CollectionInputFilterFactory implements FactoryInterface
{
    public function __invoke(ContainerInterface $container, $requestedName, array $options = null)
    {
        $collectionInputFilter = new CollectionInputFilter;
        $validator = $container->get(ValidatorPluginManager::class);
        $notEmptyValidator = $validator->get(NotEmpty::class);
        $collectionInputFilter->setNotEmptyValidator($notEmptyValidator);
        return $collectionInputFilter;
    }
}