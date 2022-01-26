<?php

use App\Http\Controllers\AkunController;
use App\Http\Controllers\BeritaController;
use App\Http\Controllers\DataController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\DesaController;
use App\Http\Controllers\KeluargaController;
use App\Http\Controllers\KkController;
use App\Http\Controllers\LandingController;
use App\Http\Controllers\PendudukController;
use App\Http\Controllers\ProfilController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\TestingController;
use App\Http\Controllers\TrainingController;
use App\Models\Mahasiswa;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

// Route::get('/', function() {
//     return Inertia::render('Home');
// });

Route::get('/',[HomeController::class, 'index']);
Route::get('/Login', [LoginController::class, 'index'])->name('login');
Route::post('/login', [LoginController::class, 'cekLogin']);
Route::get('/Desa', [DesaController::class, 'index']);
Route::get('/Berita', [BeritaController::class, 'index']);
Route::get('/Landing', [LandingController::class, 'index']);
Route::get('/Register', [RegisterController::class, 'index']);
Route::post('/Register', [RegisterController::class, 'cekRegis']);
Route::get('/Penduduk', [PendudukController::class, 'index']);
Route::middleware('auth')->group(function(){
    Route::get('/Landing', [LandingController::class, 'index']);
    Route::post('/Keluar', [LoginController::class, 'Keluar']);
    Route::post('/insertakun', [AkunController::class, 'insert']);
    Route::post('/hapusakun', [AkunController::class, 'hapus']);
    Route::post('/editakun', [AkunController::class, 'edit']);

    
    Route::post('/insertpend', [DataController::class, 'insert']);
    Route::post('/hapuspend', [DataController::class, 'hapus']);
    Route::post('/editpend', [DataController::class, 'edit']);

    
    Route::post('/insertkk', [KeluargaController::class, 'insert']);
    Route::post('/hapuskk', [KeluargaController::class, 'hapus']);
    Route::post('/editkk', [KeluargaController::class, 'edit']);


    Route::post('/inserttes', [TestingController::class, 'insert']);
    Route::post('/edittes', [TestingController::class, 'edit']);
});
Route::get('/Akun', [AkunController::class, 'index']);
Route::get('/Data', [DataController::class, 'index']);
Route::get('/KK', [KkController::class, 'index']);
Route::get('/Profil', [ProfilController::class, 'index']);
Route::get('/Keluarga', [KeluargaController::class, 'index']);
Route::get('/Training', [TrainingController::class, 'index']);
Route::get('/Uji', [TestingController::class, 'index']);