<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use App\Http\Controllers\UsersController;


Route::get('/', function () {
    return Inertia::render('home');
})->name('home');

Route::controller(UsersController::class)->group(function () {
    Route::get('/user/{username?}', 'user');
});

// Route::get('/', function () {
//     return Inertia::render('welcome', [
//         'canRegister' => Features::enabled(Features::registration()),
//     ]);
// })->name('home');

// Route::get('dashboard', function () {
//     return Inertia::render('dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::get('/students/{first_name}/{last_name?}', function ($first_name = '', $last_name = '') {
//     return Inertia::render('students/index', [
//         'hi' => "Hello {$first_name} {$last_name}",
//     ]);
// });

// Route::fallback(function () {
//     return Inertia::render('Errors/NotFound');
// });

require __DIR__.'/settings.php';
