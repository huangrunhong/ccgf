<?php

use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\FellowshipController;
use App\Http\Controllers\LocaleController;
use App\Http\Controllers\PhotoLibraryController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WorshipController;
use Illuminate\Support\Facades\Route;

Route::get('/', [LocaleController::class, 'chinese'])->name('home.zh');
Route::get('/en', [LocaleController::class, 'english'])->name('home.en');
Route::get('/de', [LocaleController::class, 'german'])->name('home.de');

Route::get('/worships', [WorshipController::class, 'list'])->name('worships.list.zh');
Route::get('/en/worships', [WorshipController::class, 'list'])->name('worships.list.en');
Route::get('/de/worships', [WorshipController::class, 'list'])->name('worships.list.de');

Route::get('/posts/{slug}', [PostController::class, 'get'])->name('posts.get.zh');
Route::get('/en/posts/{slug}', [PostController::class, 'get'])->name('posts.get.en');
Route::get('/de/posts/{slug}', [PostController::class, 'get'])->name('posts.get.de');

Route::get('/contacts/{id}', [ContactController::class, 'get'])->name('contacts.get.zh');
Route::get('/en/contacts/{id}', [ContactController::class, 'get'])->name('contacts.get.en');
Route::get('/de/contacts/{id}', [ContactController::class, 'get'])->name('contacts.get.de');


Route::get('/event/{id}', [EventController::class, 'get'])->name('events.get.zh');
Route::get('/en/event/{id}', [EventController::class, 'get'])->name('events.get.en');
Route::get('/de/event/{id}', [EventController::class, 'get'])->name('events.get.de');

Route::get('/events', [EventController::class, 'list'])->name('events.list.zh');
Route::get('/en/events', [EventController::class, 'list'])->name('events.list.en');
Route::get('/de/events', [EventController::class, 'list'])->name('events.list.de');

Route::get('/fellowships', [FellowshipController::class, 'list'])->name('fellowships.list.zh');
Route::get('/en/fellowships', [FellowshipController::class, 'list'])->name('fellowships.list.en');
Route::get('/de/fellowships', [FellowshipController::class, 'list'])->name('fellowships.list.de');

Route::get('/fellowships/{id}', [FellowshipController::class, 'get'])->name('fellowships.get.zh');
Route::get('/en/fellowships/{id}', [FellowshipController::class, 'get'])->name('fellowships.get.en');
Route::get('/de/fellowships/{id}', [FellowshipController::class, 'get'])->name('fellowships.get.de');

Route::post('locale/{locale}', [LocaleController::class, 'update'])->name('locale.update');

Route::middleware(['auth', 'verified', 'admin'])->prefix('admin')->group(function () {
    Route::get('/', [WorshipController::class, 'all'])->name('dashboard');
    Route::get('/worships/create', [WorshipController::class, 'create'])->name('worships.create');
    Route::get('/worships/{id}', [WorshipController::class, 'edit'])->name('worships.edit');
    Route::post('/worships', [WorshipController::class, 'store'])->name('worships.store');
    Route::post('/worships/{id}', [WorshipController::class, 'update'])->name('worships.update');
    Route::delete('/worships/{id}', [WorshipController::class, 'destroy'])->name('worships.destroy');

    Route::get('/events', [EventController::class, 'all'])->name('events');
    Route::get('/events/create', [EventController::class, 'create'])->name('events.create');
    Route::get('/events/{id}', [EventController::class, 'edit'])->name('events.edit');
    Route::post('/events', [EventController::class, 'store'])->name('events.store');
    Route::post('/events/{id}', [EventController::class, 'update'])->name('events.update');
    Route::delete('/events/{id}', [EventController::class, 'destroy'])->name('events.destroy');

    Route::get('/fellowships', [FellowshipController::class, 'all'])->name('fellowships');
    Route::get('/fellowships/create', [FellowshipController::class, 'create'])->name('fellowships.create');
    Route::get('/fellowships/{id}', [FellowshipController::class, 'edit'])->name('fellowships.edit');
    Route::post('/fellowships', [FellowshipController::class, 'store'])->name('fellowships.store');
    Route::post('/fellowships/{id}', [FellowshipController::class, 'update'])->name('fellowships.update');
    Route::patch('/fellowships/{id}/archive', [FellowshipController::class, 'archive'])->name('fellowships.archive');
    Route::delete('/fellowships/{id}', [FellowshipController::class, 'destroy'])->name('fellowships.destroy');

    Route::get('/contacts', [ContactController::class, 'all'])->name('contacts');
    Route::get('/contacts/create', [ContactController::class, 'create'])->name('contacts.create');
    Route::get('/contacts/{id}', [ContactController::class, 'edit'])->name('contacts.edit');
    Route::post('/contacts', [ContactController::class, 'store'])->name('contacts.store');
    Route::post('/contacts/{id}', [ContactController::class, 'update'])->name('contacts.update');
    Route::delete('/contacts/{id}', [ContactController::class, 'destroy'])->name('contacts.destroy');

    Route::get('/posts', [PostController::class, 'all'])->name('posts');
    Route::get('/posts/create', [PostController::class, 'create'])->name('posts.create');
    Route::get('/posts/{id}', [PostController::class, 'edit'])->name('posts.edit');
    Route::post('/posts', [PostController::class, 'store'])->name('posts.store');
    Route::post('/posts/{id}', [PostController::class, 'update'])->name('posts.update');
    Route::delete('/posts/{id}', [PostController::class, 'destroy'])->name('posts.destroy');

    Route::get('/users', [RegisteredUserController::class, 'all'])->name('users');
    Route::post('/users/{id}/admin', [RegisteredUserController::class, 'admin'])->name('users.admin');
    Route::post('/users/{id}/member', [RegisteredUserController::class, 'member'])->name('users.member');
    Route::delete('/users/{id}', [RegisteredUserController::class, 'destroy'])->name('users.destroy');

    Route::get('/photo-library', [PhotoLibraryController::class, 'all'])->name('photoLibrary');
    Route::post('/photo-library', [PhotoLibraryController::class, 'upload'])->name('photoLibrary.upload');
    Route::delete('/photo-library/{file}', [PhotoLibraryController::class, 'destroy'])->name('photoLibrary.destroy');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
