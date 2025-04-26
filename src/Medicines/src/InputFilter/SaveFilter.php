<?php

declare(strict_types=1);

namespace Medicines\InputFilter;

use Common\InputFilter\InputFilter;
use Laminas\Filter\StringTrim;
use Laminas\Validator\Uuid;
use Laminas\Validator\Db\RecordExists;
use Laminas\Validator\Db\NoRecordExists;
use Laminas\Db\Adapter\AdapterInterface;
use Laminas\InputFilter\InputFilterPluginManager;
use Mezzio\Authentication\UserInterface;
use Psr\Http\Message\ServerRequestInterface;

class SaveFilter extends InputFilter
{
    public function __construct(
        private AdapterInterface $adapter,
        private ServerRequestInterface $request
    )
    {

    }

    public function setInputData(array $data)
    {
        $method = $this->request->getMethod();

        $this->add([
            'name' => 'id',
            'required' => $method == "PUT" ? true : false,
            'validators' => [
                ['name' => Uuid::class],
                [
                    'name' => $method == 'POST' ? NoRecordExists::class : RecordExists::class,
                    'options' => [
                        'table'   => 'medicines',
                        'field'   => 'id',
                        'adapter' => $this->adapter,
                    ]
                ]
            ],
        ]);
        $this->add([
            'name' => 'name',
            'required' => true,
        ]);
        $this->add([
            'name' => 'frequency',
            'required' => false,
        ]);

        $this->setData($data);
    }
}
