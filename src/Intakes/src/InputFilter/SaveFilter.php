<?php

declare(strict_types=1);

namespace Intakes\InputFilter;

use Common\InputFilter\InputFilter;
use Common\InputFilter\ObjectInputFilter;
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
        private InputFilterPluginManager $filter,
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
                        'table'   => 'intakes',
                        'field'   => 'id',
                        'adapter' => $this->adapter,
                    ]
                ]
            ],
        ]);

        $objectFilter = $this->filter->get(ObjectInputFilter::class);
        $objectFilter->add([
            'name' => 'id',
            'required' => true,
            'validators' => [
                ['name' => Uuid::class],
                [
                    'name' => RecordExists::class,
                    'options' => [
                        'table'   => 'patients',
                        'field'   => 'id',
                        'adapter' => $this->adapter,
                    ]
                ]
            ]
        ]);
        $this->add($objectFilter, 'patientId');

        $objectFilter = $this->filter->get(ObjectInputFilter::class);
        $objectFilter->add([
            'name' => 'id',
            'required' => true,
            'validators' => [
                ['name' => Uuid::class],
                [
                    'name' => RecordExists::class,
                    'options' => [
                        'table'   => 'medicines',
                        'field'   => 'id',
                        'adapter' => $this->adapter,
                    ]
                ]
            ]
        ]);
        $this->add($objectFilter, 'medicineId');

        $this->add([
            'name' => 'intakeTime',
            'required' => true,
            'filters' => [
                ['name' => StringTrim::class],
            ],
            'validators' => [
                [
                    'name' => \Laminas\Validator\Regex::class,
                    'options' => [
                        'pattern' => '/^(2[0-3]|[01][0-9]):[0-5][0-9]$/',
                        'message' => 'Time must be in HH:MM 24-hour format',
                    ],
                ],
            ],
        ]);

        $this->setData($data);
    }
}
