<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AkunController extends Controller
{
    public function cari($cari)
    {
        $akun = User::where('name', 'LIKE', '%' . $cari . '%')->orderBy('name', 'asc')->get();
        return $akun;
    }


    public function index()
    {
        return inertia('Akun', [
            'akun' => User::paginate(2)
        ]);
    }
    public function insert(Request $request)
    {
        $request->validate([
            'name' => ['required'],
            'username' => ['required'],
            'email' => ['required'],
            'password' => ['required']
        ]);

        $file = $request->file('profil')[0]->storeAs('profil-photos', $request->username);

        if ($request->file('profil')) {
        User::create([
            'name' => $request->name,
            'username' => $request->username,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'profil' => $file
        ]);
        }else{
            User::create([
                'name' => $request->name,
                'username' => $request->username,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);
        }
        return back()->with([
            'type' => 'success',
            'message' => 'Berhasil Tersimpan'
        ]);

    }

    public function edit(Request $request){
        $request->validate([
            'name' => ['required'],
            'username' => ['required'],
            'email' => ['required'],
            'password' => ['required']
        ]);

        if($request->file('profil')){
            User::where('id', $request->id)->update([
                'name' => $request->name,
                'username' => $request->username,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'profil' => $request->file('profil')[0]->storeAs('profil-photos', $request->username)
            ]);

        } else {
            User::where('id', $request->id)->update([
                'name' => $request->name,
                'username' => $request->username,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);

        }

        
        return back()->with([
            'type' => 'success',
            'message' => 'Berhasil Diubah'
        ]);
    }

    public function hapus(Request $request){
        User::where ("id", $request->id)->delete();
        return back()->with([
            'type' => 'success',
            'message' => 'Data Berhasil Dihapus'
        ]);
    }
}
