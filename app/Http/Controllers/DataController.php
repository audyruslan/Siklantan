<?php

namespace App\Http\Controllers;

use App\Models\Penduduk;
use Illuminate\Http\Request;

class DataController extends Controller
{
    public function index()
    {
        return inertia('Data', [
            'data' => Penduduk::paginate(10)
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
            'RT' => ['required']
        ]);

        Penduduk::create([
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
            'RT' => $request->RT
        ]);

        return back()->with([
            'type' => 'success',
            'message' => 'Berhasil Tersimpan'
        ]);
    }
    public function hapus(Request $request)
    {
        Penduduk::where("id", $request->id)->delete();
        return back()->with([
            'type' => 'success',
            'message' => 'Data Berhasil Dihapus'
        ]);
    }

    public function edit(Request $request){
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
            'RT' => ['required']
        ]);

        Penduduk::where('id', $request->id)->update([
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
            'RT' => $request->RT
        ]);

        return back()->with([
            'type' => 'success',
            'message' => 'Berhasil Diubah'
        ]);
    }
}
