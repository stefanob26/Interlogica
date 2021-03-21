<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\IngredientsListController;
use App\Http\Controllers\SweetController;
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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middlewere' => 'auth:sanctum'], function () {
    Route::get('sweet/getAll', [SweetController::class, 'getAll']);
    Route::delete('sweet/sold/{id}', [SweetController::class, 'soldSweet']);
    Route::delete('logout', [AuthController::class, 'logout']);
    Route::put('sweet/add', [SweetController::class, 'add']);
    Route::get('ingredients/all', [IngredientsListController::class, 'getAll']);
});

Route::post('login', [AuthController::class, 'login']);
Route::get('sweet/soldable', [SweetController::class, 'getAllSoldable']);
