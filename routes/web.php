
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
    return Inertia::render('quiz3'); 
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
    // สร้างข้อมูลหนังสือจำลอง 5 รายการ
    $booksData = [
        ['id' => 1, 'title' => 'คู่มือประกอบคอมพิวเตอร์และจัดสเปคฉบับเซียน', 'author' => 'เซียนฮาร์ดแวร์', 'category' => 'เทคโนโลยี', 'price' => 450, 'stock' => 10],
        ['id' => 2, 'title' => 'เทคนิคการประกอบและทำสีกันพลาขั้นเทพ', 'author' => 'โมเดลเลอร์มือโปร', 'category' => 'งานอดิเรก', 'price' => 590, 'stock' => 5],
        ['id' => 3, 'title' => 'โปรเจกต์ IoT ตู้รับฝากของด้วย Arduino', 'author' => 'Dev Maker', 'category' => 'อิเล็กทรอนิกส์', 'price' => 320, 'stock' => 15],
        ['id' => 4, 'title' => 'ศิลปะการตัดต่อวิดีโอด้วย DaVinci Resolve', 'author' => 'Editor Pro', 'category' => 'มัลติมีเดีย', 'price' => 400, 'stock' => 8],
        ['id' => 5, 'title' => 'รวมความหมายเพลงประกอบอนิเมะ Donghua', 'author' => 'นักแปลเสียงเพลง', 'category' => 'บันเทิง', 'price' => 299, 'stock' => 20],
    ];

    // ส่งข้อมูลไปที่หน้า Quiz4 โดยใช้ตัวแปรชื่อ 'books'
    return Inertia::render('Quiz4', [
        'books' => $booksData
    ]);
});




// เพิ่มโค้ดส่วนนี้ลงไปได้เลยค่า
Route::get('/quiz3', function () {
    return Inertia::render('Quiz3');
});