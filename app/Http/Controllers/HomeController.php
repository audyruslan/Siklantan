<?php

namespace App\Http\Controllers;

use App\Models\Keluarga;
use App\Models\Penduduk;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        return inertia('Home', ['statistik' =>[
            'penduduk'=>count(Penduduk::all()),
            'keluarga'=>count(Keluarga::all()),
        ]]);
    }
}
