<?php

declare(strict_types=1);

namespace Authentication\Authentication;

use Common\Helper\RequestHelper;
use Authorization\Model\RoleModelInterface;
use Authentication\Model\TokenModelInterface;
use Authentication\EventListener\LoginListener;
use Laminas\EventManager\EventManagerInterface;
use Olobase\Mezzio\Authentication\JwtEncoderInterface;
use Olobase\Mezzio\Exception\BadTokenException;
use Laminas\Diactoros\Response\JsonResponse;
use Laminas\Authentication\Adapter\AdapterInterface;
use Mezzio\Authentication\AuthenticationInterface;
use Mezzio\Authentication\UserInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

class JwtAuthentication implements AuthenticationInterface
{
    public const USERNAME_FIELD = 'username';
    public const PASSWORD_FIELD = 'password';

    /**
     * Do not change these values
     */
    public const TOKEN_DECRYPTION_FAILED = 'tokenDecryptionFailed';
    public const AUTHENTICATION_REQUIRED = 'authenticationRequired';
    public const IP_VALIDATION_FAILED = 'ipValidationFailed';
    public const USER_AGENT_VALIDATION_FAILED = 'userAgentValidationFailed';
    public const USERNAME_OR_PASSWORD_INCORRECT = 'usernameOrPasswordIncorrect';
    public const ACCOUNT_IS_INACTIVE_OR_SUSPENDED = 'accountIsInactiveOrSuspended';
    public const USERNAME_OR_PASSWORD_FIELDS_NOT_GIVEN = 'usernameOrPasswordNotGiven';
    public const NO_ROLE_DEFINED_ON_THE_ACCOUNT = 'noRoleDefinedOnAccount';

    protected static $messageTemplates = [
        Self::TOKEN_DECRYPTION_FAILED => 'Token decryption failed',
        Self::AUTHENTICATION_REQUIRED => 'Authentication required. Please sign in to your account',
        Self::USERNAME_OR_PASSWORD_INCORRECT => 'Username or password is incorrect',
        Self::ACCOUNT_IS_INACTIVE_OR_SUSPENDED => 'This account is awaiting approval or suspended',
        Self::USERNAME_OR_PASSWORD_FIELDS_NOT_GIVEN => 'Username and password fields must be given',
        Self::NO_ROLE_DEFINED_ON_THE_ACCOUNT => 'There is no role defined for this user',
        Self::IP_VALIDATION_FAILED => 'Ip validation failed and you are logged out',
        Self::USER_AGENT_VALIDATION_FAILED => 'Browser validation failed and you are logged out',
    ];
    protected $token;
    protected $config;
    protected $request;
    protected $rowObject;
    protected $authAdapter;
    protected $encoder;
    protected $tokenModel;
    protected $roleModel;
    protected $userFactory;
    protected $payload = array();
    protected $ipAddress;
    protected $error;
    protected $code;

    public function __construct(
        array $config,
        AdapterInterface $authAdapter,
        JwtEncoderInterface $encoder,
        TokenModelInterface $tokenModel,
        RoleModelInterface $roleModel,
        callable $userFactory
    ) {
        $this->config = $config;
        $this->authAdapter = $authAdapter;
        $this->encoder = $encoder;
        $this->tokenModel = $tokenModel;
        $this->roleModel = $roleModel;
        $this->userFactory = $userFactory;
        $this->ipAddress = RequestHelper::getRealUserIp();
    }

    public function authenticate(ServerRequestInterface $request) : ?UserInterface
    {
        $this->request = $request;
        if (! $this->validateToken()) {
            return null;
        }
        if (false == $this->validateIpAddress() || false == $this->validateUserAgent()) {
            return null;
        }
        $payload = $this->getPayload()['data'];
        $data = (array)$payload;
        return ($this->userFactory)($data['details']->email, (array)$data['roles'], (array)$data['details']);
    }

    public function createUser(ServerRequestInterface $request) : ?UserInterface
    {
        $this->request = $request;
        $post = $request->getParsedBody();
        $usernameField = $this->config['authentication']['form'][Self::USERNAME_FIELD];
        $passwordField = $this->config['authentication']['form'][Self::PASSWORD_FIELD];

        if (! array_key_exists($usernameField, $post) || ! array_key_exists($passwordField, $post)) {
            $this->error(Self::USERNAME_OR_PASSWORD_FIELDS_NOT_GIVEN);
            return null;
        } 
        $this->authAdapter->setIdentity($post[$usernameField]);
        $this->authAdapter->setCredential($post[$passwordField]);

        $usernameValue = $post[$usernameField];
        $result = $this->checkAuthentication($usernameValue);
        if (!$result) {
            return null;
        }
        $this->rowObject = $this->authAdapter->getResultRowObject(); // create authenticated user object

        if ($this->checkUserInactive()) {
            return null;
        }
        $roles = $this->checkUserHasRole();
        if (!$roles) {
            return null;
        }
        return ($this->userFactory)($result->getIdentity(), (array)$roles, $this->getUserDetails());
    }

    private function checkUserInactive() : bool
    {
        if (empty($this->rowObject->isActive)) {
            $this->error(Self::ACCOUNT_IS_INACTIVE_OR_SUSPENDED);
            return true;
        }
        return false;
    }

    private function checkAuthentication($usernameValue)
    {
        try {
            $result = $this->authAdapter->authenticate();
        } catch (\Throwable $e) {
            var_dump($e->getPrevious() ?: $e);
            die;
        }
        if (! $result->isValid()) {
            $this->error(Self::USERNAME_OR_PASSWORD_INCORRECT);
            return false;
        }
        return $result;
    }

    private function checkUserHasRole() : array|bool
    {
        $roles = $this->roleModel->findRolesByUserId($this->rowObject->id);
        if (empty($roles)) {
            $this->error(Self::NO_ROLE_DEFINED_ON_THE_ACCOUNT);
            return false;
        }
        return $roles;
    }

    private function getUserDetails() : array
    {
        return [
            'id' => $this->rowObject->id,
            'email' => $this->rowObject->email,
            'fullname' => (string)$this->rowObject->firstname.' '.(string)$this->rowObject->lastname,
            'avatar' => $this->rowObject->avatar 
                ? "data:{$this->rowObject->mimeType};base64,{$this->rowObject->avatar}" 
                : null,
            'ip' => $this->getIpAddress(),
            'deviceKey' => $this->getDeviceKey($this->request),
        ];
    }

    private function validateToken(): bool
    {
        $this->token = $this->extractToken(); // parse token from headers
        if (! $this->token) {
            $this->error(Self::AUTHENTICATION_REQUIRED);
            return false;
        }
        $token = $this->decryptToken($this->token);  // decrypt token
        if (!$token) {
            $this->error(Self::TOKEN_DECRYPTION_FAILED);
            return false;
        }
        $this->payload = $this->encoder->decode($token);
        return $this->payload !== null;
    }

    private function decryptToken(string $token)
    {
        try {
            return $this->tokenModel->getTokenEncrypt()->decrypt($token);
        } catch (Exception $e) {
            return null;
        }
    }

    private function validateIpAddress()  : bool
    {
        if ($this->config['token']['validation']['user_ip'] 
            && $this->payload['data']->details->ip != $this->getIpAddress()
        ) {
            $this->tokenModel->kill(
                $this->payload['data']->id,
                $this->payload['jti'],
            );
            $this->error(Self::IP_VALIDATION_FAILED);
            return false;
        }
        return true;
    }

    private function validateUserAgent() : bool
    {
        if ($this->config['token']['validation']['user_agent'] 
            && $this->payload['data']->details->deviceKey != $this->getDeviceKey($this->request)
        ) {
            $this->tokenModel->kill(
                $this->payload['data']->id,
                $this->payload['jti'],
            );
            $this->error(Self::USER_AGENT_VALIDATION_FAILED);
            return false;
        }
        return true;
    }

    private function getToken() : string
    {
        return $this->token;
    }

    private function getPayload() : array
    {
        return $this->payload;
    }

    private function extractToken(): ?string
    {
        $authHeader = $this->request->getHeader('Authorization');
        if (empty($authHeader)) {
            return null;
        }
        if (preg_match("/Bearer\s+(.*)$/i", $authHeader[0], $matches)) {
            return $matches[1] == "null" ? null : $matches[1];
        }
        return null;
    }

    public function getTokenModel(): TokenModelInterface
    {
        return $this->tokenModel;
    }

    public function getError()
    {
        return $this->error;
    }

    public function getCode()
    {
        return $this->code;
    }

    public function unauthorizedResponse(ServerRequestInterface $request) : ResponseInterface
    {
        return new JsonResponse(
            [
                'data' => [
                    'code' => $this->getCode(),
                    'error' => $this->getError()
                ]
            ],
            401,
            ['WWW-Authenticate' => 'Bearer realm="Jwt token"']
        );
    }

    protected function error(string $errorKey)
    {
        $this->error = $errorKey;

        // if (empty(Self::$messageTemplates[$errorKey])) {
        //     $this->code = $errorKey;
        //     $this->error = $this->translator->translate($errorKey);
        //     return;
        // }
        // $this->code = $errorKey;
        // $this->error = $this->translator->translate(Self::$messageTemplates[$errorKey]);
    }

    private function getDeviceKey()
    {
        $server = $this->request->getServerParams();
        $userAgent = empty($server['HTTP_USER_AGENT']) ? 'unknown' : $server['HTTP_USER_AGENT'];
        return md5($userAgent);
    }

    private function getIpAddress()
    {
        return $this->ipAddress;
    }
}
