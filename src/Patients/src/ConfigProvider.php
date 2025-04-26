<?php
declare(strict_types=1);

namespace Patients;

use Mezzio\Application;
use Psr\Container\ContainerInterface;
use Laminas\Cache\Storage\StorageInterface;
use Olobase\Mezzio\ColumnFiltersInterface;
use Laminas\Db\Adapter\AdapterInterface;
use Laminas\Db\ResultSet\ResultSet;
use Laminas\Db\TableGateway\TableGateway;

/**
 * The configuration provider for the Authorization module
 *
 * @see https://docs.laminas.dev/laminas-component-installer/
 */
class ConfigProvider
{
    /**
     * Returns the configuration array
     *
     * To add a bit of a structure, each section is defined in a separate
     * method which returns an array with its configuration.
     */
    public function __invoke() : array
    {
        return [
            'dependencies' => $this->getDependencies(),
            'input_filters' => $this->getInputFilters(),
        ];
    }

    public function getDependencies() : array
    {
        return [
            'factories'  => [
                // patient handlers
                Handler\CreateHandler::class => Handler\CreateHandlerFactory::class,
                Handler\DeleteHandler::class => Handler\DeleteHandlerFactory::class,
                Handler\UpdateHandler::class => Handler\UpdateHandlerFactory::class,
                Handler\FindAllHandler::class => Handler\FindAllHandlerFactory::class,
                Handler\FindOneByIdHandler::class => Handler\FindOneByIdHandlerFactory::class,
                Handler\FindAllByPagingHandler::class => Handler\FindAllByPagingHandlerFactory::class,

                // models
                Model\PatientModel::class => function ($container) {
                    $dbAdapter = $container->get(AdapterInterface::class);
                    $patients = new TableGateway('patients', $dbAdapter, null, new ResultSet(ResultSet::TYPE_ARRAY));
                    $cacheStorage = $container->get(StorageInterface::class);
                    $columnFilters = $container->get(ColumnFiltersInterface::class);
                    return new Model\PatientModel($patients, $cacheStorage, $columnFilters);
                },
            ],
        ];
    }


    public function getInputFilters() : array
    {
        return [
            'factories' => [
                InputFilter\SaveFilter::class => InputFilter\SaveFilterFactory::class,
                InputFilter\DeleteFilter::class => InputFilter\DeleteFilterFactory::class,
                // InputFilter\Intakes\SaveFilter::class => InputFilter\Intakes\SaveFilterFactory::class,
                // InputFilter\Intakes\DeleteFilter::class => InputFilter\Intakes\DeleteFilterFactory::class,
            ]
        ];
    }
    
    public static function registerRoutes(Application $app, ContainerInterface $container): void
    {
        (require __DIR__ . '/../config/routes.php')($app, $container);
    }

}
