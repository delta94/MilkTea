<?php

namespace App\Http\Middleware;

use Closure;

class Cors
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        return [
            'supportsCredentials' => false,
            'allowedOrigins' => ['*'],
            'allowedHeaders' => ['Content-Type', 'X-Requested-With'],
            'allowedMethods' => ['*'], // ex: ['GET', 'POST', 'PUT',  'DELETE']
            'exposedHeaders' => [],
            'maxAge' => 0
        ];
    }
}
