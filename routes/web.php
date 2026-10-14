<?php

use Illuminate\Support\Facades\Route;

Route::view('/', 'home')->name('home');
Route::redirect('/products', '/');
Route::redirect('/activity', '/');
Route::redirect('/projects', '/');
Route::redirect('/about', '/');
Route::redirect('/contact', '/');