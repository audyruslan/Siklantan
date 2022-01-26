<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
   public function index()
   {
       return inertia('Login');
   }
   public function tes()
   {
    //    return 'ini adalah data';

     return User::all();
   }
   public function cekLogin(Request $request)
   {
       if (Auth::attempt($request->only('username', 'password'))){
           session()->regenerate();
           return redirect('/Landing');
       }
       throw ValidationException::withMessages([
           'failed' => 'Nama Pengguna Dan Kata Sandi Salah'
    // return redirect('Login')->with([
    //     'type' => 'error',
    //     'message' => 'Nama Pengguna Atau Kata Sandi Salah!'
    ]);
   }
   public function Keluar(){
       Auth::logout();
       return redirect('Login')->with([
        //    'type' => 'error',
        //    'message' => 'Maaf Harus Login!'
       ]);
   }
}
