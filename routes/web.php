<?php

use App\Http\Controllers\PortfolioController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\StackController;

Route::middleware(['auth','verified'])->group(function () {
    Route::resources([
        'general'=>PortfolioController::class,
        'project'=> ProjectController::class,
        'stack'=>StackController::class
    ]);

    // Route::get('/dashboard', function () {
    //     return Inertia::render('Dashboard',['text' => 'Hello Worsssld!']);
    // })->name('dashboard');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
