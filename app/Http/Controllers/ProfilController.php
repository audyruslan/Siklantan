<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class ProfilController extends Controller
{
    public function index()
    {
        return inertia('Profil', [
            'profil' => User::get()
        ]);
    }
}
