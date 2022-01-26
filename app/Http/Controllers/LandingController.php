<?php

namespace App\Http\Controllers;

use App\Models\Keluarga;
use App\Models\Penduduk;
use Illuminate\Http\Request;

class LandingController extends Controller
{
    public function index()
    {
        return inertia('Landing',[
            'statistik'=>[
                'jmlhpnddk'=>count(Penduduk::all()),
                'jmlhkk'=>count(Keluarga::all()),
                'jmlhlaki' => count(Penduduk::where('jenis_kelamin','laki-laki')->get()),
                'jmlhwanita' => count(Penduduk::where('jenis_kelamin', 'perempuan')->get()),
                'jmlhkawin' => count(Penduduk::where('Status', 'kawin')->get()),
                'jmlhblmkwn' => count(Penduduk::where('Status', 'belum kawin')->get()),
                'jmlhcrhdp' => count(Penduduk::where('Status', 'cerai hidup')->get()),
                'jmlhcrmati' => count(Penduduk::where('Status', 'cerai mati')->get()),
                'jmlhjanda' => count(Penduduk::where('Status', 'janda')->get()),
                'jmlhduda' => count(Penduduk::where('Status', 'duda')->get()),
                'jmlhkk' => count(Penduduk::where('SHDK', 'KK')->get()),
                'jmlhistri' => count(Penduduk::where('SHDK', 'istri')->get()),
                'jmlhanak' => count(Penduduk::where('SHDK', 'anak')->get()),
                'jmlhkl' => count(Penduduk::where('SHDK', 'keluarga lain')->get()),
                'islam' => count(Penduduk::where('Agama', 'islam')->get()),
                'hindu' => count(Penduduk::where('Agama', 'hindu')->get()),
                'kristen' => count(Penduduk::where('Agama', 'kristen')->get()),
                'budha' => count(Penduduk::where('Agama', 'budha')->get()),
                'krng500' => count(Keluarga::where('Pendapatan', '<500.000')->get()),
                'krng1jt' => count(Keluarga::where('Pendapatan', '<1000.000')->get()),
                'satujt' => count(Keluarga::where('Pendapatan', '1.000.000')->get()),
                'lbh1jt' => count(Keluarga::where('Pendapatan', '2000.000-3000.000')->get()),
                'lbh3jt' => count(Keluarga::where('Pendapatan', '3000.000-5000.000')->get()),
                'petani' => count(Penduduk::where('Pekerjaan', 'petani')->get()),
                'nelayan' => count(Penduduk::where('Pekerjaan', 'nelayan')->get()),
                'Dokter' => count(Penduduk::where('Pekerjaan', 'Dokter')->get()),
                'wiraswasta' => count(Penduduk::where('Pekerjaan', 'wiraswasta')->get()),
                'PNS' => count(Penduduk::where('Pekerjaan', 'PNS')->get()),
                'IRT' => count(Penduduk::where('Pekerjaan', 'IRT')->get()),
                'tidak bekerja' => count(Penduduk::where('Pekerjaan', 'tidak bekerja')->get()),
                'pelajar' => count(Penduduk::where('Pekerjaan', 'pelajar')->get()),
                
            ]
        ]);
    }
}
