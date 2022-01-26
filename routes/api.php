<?php

use App\Http\Controllers\AkunController;
use App\Http\Controllers\KkController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\PendudukController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/tesuser', [LoginController::class, 'tes']);
Route::get('caripend/{cari}', [PendudukController::class, 'cari']);
Route::get('cariakun/{cari}', [AkunController::class, 'cari']);
Route::get('carikel/{cari}', [KkController::class, 'cari']);