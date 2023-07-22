<?php

namespace App\Helper;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Exception;

class JWTToken
{
    public static function CreateToken($UserEmail,$userID):string
    {
        $key = env('JWT_KEY');
        $payload = [
            'iat' => time(),
            'nbf' => time()+3,
            'exp'=> time()+24*60*60,
            'UserEmail' =>$UserEmail,
            'UserID' =>$userID
        ];
        return JWT::encode($payload, $key, 'HS256');
    }

    public static function ReadToken($jwt):string|object
    {
        try {
            if($jwt==null){
                return  "unauthorized";
            }
            else{
                $key = env('JWT_KEY');
                $decoded = JWT::decode($jwt, new Key($key, 'HS256'));
                return  $decoded;
            }

        }
        catch(Exception $e){
            return  "unauthorized";
        }
    }
}
