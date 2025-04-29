<?php

declare(strict_types=1);

namespace Patients\InputFilter;

use Common\InputFilter\InputFilter;
use Common\InputFilter\ObjectInputFilter;
use Laminas\Validator\Uuid;
use Laminas\Validator\InArray;
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
                        'table'   => 'patients',
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
                        'table'   => 'users',
                        'field'   => 'id',
                        'adapter' => $this->adapter,
                    ]
                ]
            ]
        ]);
        $this->add($objectFilter, 'userId');

        $objectFilter = $this->filter->get(ObjectInputFilter::class);
        $objectFilter->add([
            'name' => 'id',
            'required' => true,
            'validators' => [
                [
                    'name' => InArray::class,
                    'options' => [
                        'haystack' => ['male', 'female'],
                        'strict' => true,
                    ],
                ],
            ]
        ]);
        $this->add($objectFilter, 'gender');

        $objectFilter = $this->filter->get(ObjectInputFilter::class);
        $objectFilter->add([
            'name' => 'id',
            'required' => true,
            'validators' => [
                [
                    'name' => InArray::class,
                    'options' => [
                        'haystack' => ['infant', 'adult'],
                        'strict' => true,
                    ],
                ],
            ]
        ]);
        $this->add($objectFilter, 'ageGroup');


        $this->setData($data);
    }
}
