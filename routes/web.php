<?php

use App\Http\Controllers\EventController;
use App\Http\Controllers\FellowshipController;
use App\Http\Controllers\LocaleController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WorshipController;
use Illuminate\Support\Facades\Route;

Route::get('/', [LocaleController::class, 'chinese'])->name('locale.chinese');;
Route::get('/en', [LocaleController::class, 'english'])->name('locale.english');
Route::get('/de', [LocaleController::class, 'german'])->name('locale.german');
Route::post('locale/{locale}', [LocaleController::class, 'update'])->name('locale.update');

Route::prefix('admin')->group(function () {
    Route::get('/', [WorshipController::class, 'show'])->name('dashboard');
    Route::get('/worships/create', [WorshipController::class, 'create'])->name('worships.create');
    Route::get('/worships/{id}', [WorshipController::class, 'edit'])->name('worships.edit');
    Route::post('/worships', [WorshipController::class, 'store'])->name('worships.store');
    Route::post('/worships/{id}', [WorshipController::class, 'update'])->name('worships.update');
    Route::delete('/worships/{id}', [WorshipController::class, 'destroy'])->name('worships.destroy');

    Route::get('/events', [EventController::class, 'show'])->name('events');
    Route::get('/events/create', [EventController::class, 'create'])->name('events.create');
    Route::get('/events/{id}', [EventController::class, 'edit'])->name('events.edit');
    Route::post('/events', [EventController::class, 'store'])->name('events.store');
    Route::post('/events/{id}', [EventController::class, 'update'])->name('events.update');
    Route::delete('/events/{id}', [EventController::class, 'destroy'])->name('events.destroy');

    Route::get('/fellowships', [FellowshipController::class, 'show'])->name('fellowships');
    Route::get('/fellowships/create', [FellowshipController::class, 'create'])->name('fellowships.create');
    Route::get('/fellowships/{id}', [FellowshipController::class, 'edit'])->name('fellowships.edit');
    Route::post('/fellowships', [FellowshipController::class, 'store'])->name('fellowships.store');
    Route::post('/fellowships/{id}', [FellowshipController::class, 'update'])->name('fellowships.update');
    Route::patch('/fellowships/{id}/archive', [FellowshipController::class, 'archive'])->name('fellowships.archive');
    Route::delete('/fellowships/{id}', [FellowshipController::class, 'destroy'])->name('fellowships.destroy');
})->middleware(['auth', 'verified']);



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
