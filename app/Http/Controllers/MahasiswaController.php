<?php

namespace App\Http\Controllers;

use App\Models\Mahasiswa;
use Illuminate\Http\Request;

class MahasiswaController extends Controller
{
    public function index()
    {
        return inertia('Mahasiswa', [
            'mahasiswa' => Mahasiswa::with(['nama'])->paginate(10)
        ]);
    }
    public function insert(Request $request)
    {
        $request->validate([
            'nama' => ['required']
        ]);

        Mahasiswa::create([
            'nama' => $request->nama
        ]);

        return back()->with([
            'type' => 'success',
            'message' => 'Berhasil Tersimpan'
        ]);
    }
    public function hapus(Request $request)
    {
        Mahasiswa::where("id", $request->id)->delete();
        return back()->with([
            'type' => 'success',
            'message' => 'Data Berhasil Dihapus'
        ]);
    }
    public function edit(Request $request)
    {
        $request->validate([
            'nama' => ['required']
        ]);

        Mahasiswa::where('id', $request->id)->DB::update([
            'nama' => $request->nama
        ]);

        return back()->with([
            'type' => 'success',
            'message' => 'Berhasil Tersimpan'
        ]);
    }
}
