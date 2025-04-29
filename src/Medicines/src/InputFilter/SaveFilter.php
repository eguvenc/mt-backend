<?php

declare(strict_types=1);

namespace Medicines\InputFilter;

use Common\InputFilter\InputFilter;
use Common\InputFilter\ObjectInputFilter;
use Laminas\Filter\StringTrim;
use Laminas\Validator\StringLength;
use Laminas\Validator\Uuid;
use Laminas\Filter\ToInt;
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
            'filters' => [
                ['name' => StringTrim::class],
            ],
            'validators' => [
                [
                    'name' => StringLength::class,
                    'options' => [
                        'max' => 100,
                    ],
                ],
            ],
        ]);

        $objectFilter = $this->filter->get(ObjectInputFilter::class);
        $objectFilter->add([
            'name' => 'id',
            'required' => true,
            'validators' => [
                [
                    'name' => InArray::class,
                    'options' => [
                        'haystack' => ['once', 'twice', 'threeTimes'],
                        'strict' => true,
                    ],
                ],
            ]
        ]);
        $this->add($objectFilter, 'frequency');

        $this->add([
            'name' => 'canBeUsedForInfants',
            'required' => false,
            'filters' => [
                ['name' => ToInt::class],
            ],
            'validators' => [
                [
                    'name' => InArray::class,
                    'options' => [
                        'haystack' => [0, 1],
                        'strict' => true,
                    ],
                ],
            ],
        ]);

        $this->setData($data);
    }
}
