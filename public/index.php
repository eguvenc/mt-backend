<?php

declare(strict_types=1);

error_reporting(E_ALL);
ini_set('display_errors', 1);

define('PROJECT_ROOT', dirname(__DIR__));
define('CACHE_ROOT_KEY', 'mt_app:');
define('CACHE_TMP_FILE_KEY', 'tmp_file_');
define('SESSION_KEY', CACHE_ROOT_KEY.'sessions:');

if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}
// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        // may also be using PUT, PATCH, HEAD etc
        header("Access-Control-Allow-Methods: PATCH, PUT, DELETE, GET, POST, OPTIONS");         
    
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    exit(0);
}
// default time zone set
date_default_timezone_set('Europe/Istanbul');

// Delegate static file requests back to the PHP built-in webserver
if (PHP_SAPI === 'cli-server' && $_SERVER['SCRIPT_FILENAME'] !== __FILE__) {
    return false;
}

chdir(dirname(__DIR__));
require 'vendor/autoload.php';

if (! is_file('config/module.config.php')) {
    throw new RuntimeException('Module configuration is missing or incorrect.');
}
/**
 * Self-called anonymous function that creates its own scope and keeps the global namespace clean.
 */
(function () {
    /** @var \Psr\Container\ContainerInterface $container */
    $container = require 'config/container.php';

    /** @var \Mezzio\Application $app */
    $app = $container->get(\Mezzio\Application::class);
    $factory = $container->get(\Mezzio\MiddlewareFactory::class);

    // Execute programmatic/declarative middleware pipeline and routing
    // configuration statements
    (require 'config/pipeline.php')($app, $factory, $container);
    (require 'config/routes.php')($app, $factory, $container);

    // Register module routes ..
    $modules = require 'config/module.config.php';
    $moduleProviders = [];
    foreach ($modules as $module) {
        $configProviderClass = $module . '\ConfigProvider';
        if (class_exists($configProviderClass) && method_exists($configProviderClass, 'registerRoutes')) {
            $configProviderClass::registerRoutes($app, $container);
        }
    }
    $app->run();
})();
