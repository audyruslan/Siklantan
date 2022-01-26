<?php

namespace App\Http\Controllers;

use App\Models\Keluarga;
use Illuminate\Http\Request;

class KkController extends Controller
{
    public function cari($cari)
    {
        $kk = Keluarga::with(['penduduk'])->where('No_KK', 'LIKE', '%' . $cari . '%')->orderBy('No_KK', 'asc')->get();
        return $kk;
    }

    public function index()
    {
        return inertia('KK', [
            'kk' => Keluarga::with(['penduduk'])->paginate(10)
        ]);
    }
    public function insert(Request $request)
    {
        $request->validate([
            'No_KK' => ['required'],
            'Nik' => ['required'],
            'nama' => ['required'],
            'jenis_kelamin' => ['required'],
            'tempat_lahir' => ['required'],
            'tanggal_lahir' => ['required'],
            'Agama' => ['required'],
            'Pendidikan_Terakhir' => ['required'],
            'Pekerjaan' => ['required'],
            'Status' => ['required'],
            'SHDK' => ['required'],
            'Dusun' => ['required'],
            'RT' => ['required'],
            'Pendapatan' => ['required'],
            'Hunian' => ['required']
        ]);

        Keluarga::create([
            'No_KK' => $request->No_KK,
            'Nik' => $request->Nik,
            'nama' => $request->nama,
            'jenis_kelamin' => $request->jenis_kelamin,
            'tempat_lahir' => $request->tempat_lahir,
            'tanggal_lahir' => $request->tanggal_lahir,
            'Agama' => $request->Agama,
            'Pendidikan_Terakhir' => $request->Pendidikan_Terakhir,
            'Pekerjaan' => $request->Pekerjaan,
            'Status' => $request->Status,
            'SHDK' => $request->SHDK,
            'Dusun' => $request->Dusun,
            'RT' => $request->RT,
            'Pendapatan' => $request->Pendapatan,
            'Hunian' => $request->Hunian
        ]);
    }
}
