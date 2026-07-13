<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('model_kits', function (Blueprint $table) {
            $table->id();
            $table->string('kit_name');        // คอลัมน์ที่ 1: ชื่อโมเดล
            $table->string('scale');           // คอลัมน์ที่ 2: สเกล
            $table->string('brand');           // คอลัมน์ที่ 3: แบรนด์
            $table->decimal('price', 8, 2);    // คอลัมน์ที่ 4: ราคา
            $table->string('build_status');    // คอลัมน์ที่ 5: สถานะ
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('model_kits');
    }
};