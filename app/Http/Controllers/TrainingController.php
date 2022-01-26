<?php

namespace App\Http\Controllers;

use App\Models\Datalatih;
use App\Models\Keluarga;
use App\Models\Penduduk;
use Illuminate\Http\Request;

class TrainingController extends Controller
{
    public function index()
    {
        // return inertia('Training', ['training' => Penduduk::
        // with('datalatih')->where('SHDK','KK')->paginate(10)]);
        return inertia('Training', ['training' => Keluarga::with('penduduk','training')->paginate(10)]);
        // return inertia('Training', ['training' => Datalatih::with('penduduk')->paginate(10)]);
    }

    public function insert(Request $request)
    {
        $request->validate([
            'No_KK' => ['required'],
            'Pendidikan_Terakhir' => ['required'],
            'Pekerjaan' => ['required'],
            'TA' => ['required'],
            'Pendapatan' => ['required'],
            'Hunian' => ['required'],
            'Sejahtera' => ['required']

        ]);

        Datalatih::create([
            'No_KK' => $request->No_KK,
            'Pendidikan_Terakhir' => $request->Pendidikan_Terakhir,
            'Pekerjaan' => $request->Pekerjaan,
            'TA' => $request->TA,
            'Pendapatan' => $request->Pendapatan,
            'Hunian' => $request->Hunian,
            'Sejahtera' => $request->Sejahtera
        ]);

        return back()->with([
            'type' => 'success',
            'message' => 'Berhasil Tersimpan'
        ]);
    }

    public function edit(Request $request)
    {
        $request->validate(['No_KK' => ['required'],
            'Pendidikan_Terakhir' => ['required'],
            'Pekerjaan' => ['required'],
            'TA' => ['required'],
            'Pendapatan' => ['required'],
            'Hunian' => ['required'],
            'Sejahtera' => ['required']

        ]);

        Datalatih::where('id', $request->id)->update([
            'No_KK' => $request->No_KK,
            'Pendidikan_Terakhir' => $request->Pendidikan_Terakhir,
            'Pekerjaan' => $request->Pekerjaan,
            'TA' => $request->TA,
            'Pendapatan' => $request->Pendapatan,
            'Hunian' => $request->Hunian,
            'Sejahtera' => $request->Sejahtera
        ]);

        return back()->with([
            'type' => 'success',
            'message' => 'Berhasil Tersimpan'
        ]);
    }
}
