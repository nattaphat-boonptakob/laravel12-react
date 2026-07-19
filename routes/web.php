
<?php

use App\Http\Controllers\ProfileController;
use App\Models\Product;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';


Route::get('/circle', function () {
    return Inertia::render('Circle');
})->name('circle');


Route::get('/counter', function () {
    return Inertia::render('Counter');
})->name('counter');



Route::get('/form-example', function () {
    return Inertia::render('FormExample');
})->name('form-example');


Route::get('/list-manager', function () {
    return Inertia::render('ListManager');
})->name('list-manager');

Route::get('/infinite-scroll', function () {
    return Inertia::render('InfiniteScrollExample');
})->name('infinite-scroll');




// สร้าง URL ว่า /lunch-voting เพื่อเรียกเปิดหน้าจอที่เราเขียนไว้ค่ะ
Route::get('/Quiz3', function () {
    return Inertia::render('LunchVoting'); 
});


// routes/web.php
// use App\Models\Product;
Route::get('/product', function () {
    $products = Product::all();
    return Inertia::render('ProductList', compact('products') );
})->name('product');

// routes/web.php
Route::get('/product-others', function () {
    return Inertia::render('ProductOthers');
})->name('product-others');




Route::get('/quiz4', function () {
    // ดึงข้อมูลทั้งหมดจากตาราง books
    $books = DB::table('books')->get();
    
    // ส่งข้อมูลไปแสดงผลที่ไฟล์ Quiz4.jsx
    return Inertia::render('Quiz4', [
        'books' => $books
    ]);
});