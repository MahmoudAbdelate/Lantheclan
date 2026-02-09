<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UsersController extends Controller
{
    public function user($username = 'Guest')
    {
        return inertia('users/user', [
            'username' => $username,
        ]);
    }
}
