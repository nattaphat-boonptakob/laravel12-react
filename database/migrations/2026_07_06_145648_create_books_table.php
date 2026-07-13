<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->string('title'); // ชื่อหนังสือ
            $table->string('author'); // ผู้แต่ง
            $table->string('category'); // หมวดหมู่
            $table->decimal('price', 8, 2); // ราคา
            $table->integer('stock'); // จำนวนในสต็อก
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('books');
    }
};