<?php

declare(strict_types=1);

namespace Authorization\InputFilter\Permissions;

use Common\InputFilter\InputFilter;
use Common\InputFilter\ObjectInputFilter;
use Laminas\Validator\Db\RecordExists;
use Laminas\Validator\Db\NoRecordExists;
use Laminas\Filter\StringTrim;
use Laminas\Validator\Uuid;
use Laminas\Validator\InArray;
use Laminas\Validator\StringLength;
use Laminas\Db\Adapter\AdapterInterface;
use Laminas\InputFilter\InputFilterPluginManager;
use Psr\Http\Message\ServerRequestInterface;

/**
 * @OA\Schema(
 *     schema="PermissionSave",
 *     required={"id", "module", "name", "action", "route", "method"},
 *     @OA\Property(
 *         property="id",
 *         type="string",
 *         format="uuid"
 *     ),
 *     @OA\Property(
 *         property="module",
 *         type="string",
 *         minLength=3,
 *         maxLength=60
 *     ),
 *     @OA\Property(
 *         property="name",
 *         type="string",
 *         minLength=3,
 *         maxLength=60
 *     ),
 *     @OA\Property(
 *         property="action",
 *         type="object",
 *         @OA\Property(
 *             property="id",
 *             type="string",
 *             enum={"create", "delete", "edit", "list", "show"}
 *         )
 *     ),
 *     @OA\Property(
 *         property="route",
 *         type="string",
 *         minLength=2,
 *         maxLength=255
 *     ),
 *     @OA\Property(
 *         property="method",
 *         type="object",
 *         @OA\Property(
 *             property="id",
 *             type="string",
 *             enum={"POST", "GET", "PUT", "DELETE", "PATCH"}
 *         )
 *     )
 * )
 */
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
        $this->add([
            'name' => 'id',
            'required' => true,
            'validators' => [
                ['name' => Uuid::class],
                [
                    'name' => $this->request->getMethod() == 'POST' ? NoRecordExists::class : RecordExists::class,
                    'options' => [
                        'table'   => 'permissions',
                        'field'   => 'id',
                        'adapter' => $this->adapter,
                    ]
                ]
            ],
        ]);
        $this->add([
            'name' => 'module',
            'required' => true,
            'validators' => [
                [
                    'name' => StringLength::class,
                    'options' => [
                        'encoding' => 'UTF-8',
                        'min' => 3,
                        'max' => 60,
                    ],
                ],
            ],
        ]);
        $this->add([
            'name' => 'name',
            'required' => true,
            'validators' => [
                [
                    'name' => StringLength::class,
                    'options' => [
                        'encoding' => 'UTF-8',
                        'min' => 3,
                        'max' => 60,
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
                        'haystack' => ['create', 'delete', 'edit', 'list', 'show'],
                    ],
                ],
            ],
        ]);
        $this->add($objectFilter, 'action');

        $this->add([
            'name' => 'route',
            'required' => true,
            'validators' => [
                [
                    'name' => StringLength::class,
                    'options' => [
                        'encoding' => 'UTF-8',
                        'min' => 2,
                        'max' => 255,
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
                        'haystack' => ['POST','GET','PUT','DELETE','PATCH'],
                    ],
                ],
            ],
        ]);
        $this->add($objectFilter, 'method');

        $this->setData($data);
    }
}
