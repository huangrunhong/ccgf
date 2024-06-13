<?php

use App\Http\Controllers\FellowshipController;
use App\Http\Controllers\LocaleController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;




Route::get('/', [LocaleController::class, 'chinese'])->name("locale.chinese");;
Route::get('/en', [LocaleController::class, 'english'])->name("locale.english");
Route::get('/de', [LocaleController::class, 'german'])->name("locale.german");
Route::post('locale/{locale}', [LocaleController::class, 'update'])->name("locale.update");

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/fellowships', [FellowshipController::class, 'show'])->name('fellowships');
    Route::post('/fellowships', [FellowshipController::class, 'store'])->name('fellowships.store');
    Route::get('/fellowships/create', [FellowshipController::class, 'create'])->name('fellowships.create');
    Route::get('/fellowships/{id}', [FellowshipController::class, 'edit'])->name('fellowships.edit');
    Route::post('/fellowships/{id}', [FellowshipController::class, 'update'])->name('fellowships.update');
    Route::patch('/fellowships/{id}/archive', [FellowshipController::class, 'archive'])->name('fellowships.archive');
    Route::delete('/fellowships/{id}', [FellowshipController::class, 'destroy'])->name('fellowships.destroy');
});

Route::get('/events', function () {
    return Inertia::render('Events');
})->middleware(['auth', 'verified'])->name('events');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
