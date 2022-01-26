<?php

namespace App\Http\Controllers;

use App\Models\Datauji;
use Illuminate\Http\Request;

class TestingController extends Controller
{
    public function index()
    {
        return inertia('Uji', [ 'uji' => Datauji::paginate(10)]);
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
            // 'Sejahtera' => ['required']
        ]);
        Datauji::create([
            'No_KK' => $request->No_KK,
            'Pendidikan_Terakhir' => $request->Pendidikan_Terakhir,
            'Pekerjaan' => $request->Pekerjaan,
            'TA' => $request->TA,
            'Pendapatan' => $request->Pendapatan,
            'Hunian' => $request->Hunian,
            // 'Sejahtera' => $request->Sejahtera
        ]);

        return back()->with([
            'type' => 'success',
            'message' => 'Berhasil Tersimpan'
        ]);
    }

    public function edit(Request $request)
    {
        $request->validate([
            'No_KK' => ['required'],
            'Pendidikan_Terakhir' => ['required'],
            'Pekerjaan' => ['required'],
            'TA' => ['required'],
            'Pendapatan' => ['required'],
            'Hunian' => ['required'],
            // 'Sejahtera' => ['required']

        ]);

        Datauji::where('id', $request->id)->update([
            'No_KK' => $request->No_KK,
            'Pendidikan_Terakhir' => $request->Pendidikan_Terakhir,
            'Pekerjaan' => $request->Pekerjaan,
            'TA' => $request->TA,
            'Pendapatan' => $request->Pendapatan,
            'Hunian' => $request->Hunian,
            // 'Sejahtera' => $request->Sejahtera
        ]);

        return back()->with([
            'type' => 'success',
            'message' => 'Berhasil Tersimpan'
        ]);
    }
}
