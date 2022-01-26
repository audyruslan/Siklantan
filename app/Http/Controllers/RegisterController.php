<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public function index()
    {
        return inertia('Register');
    }

    public function cekRegis(Request $request){
        User::create([ 
            'username' => $request->username,
            'name' => $request->name,
            'email' => $request->email,  
            'password' => Hash::make($request->password)]);
            return redirect('/Login')->with([
                'type' => 'success',
                'message' => 'Pendaftaran Berhasil'
            ]);
    }
}
