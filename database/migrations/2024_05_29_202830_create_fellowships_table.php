<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('fellowships', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->enum('status', ['draft', 'published', 'archived']);
            $table->string('name');
            $table->string('hour');
            $table->integer('day');
            $table->integer('frequency');
            $table->string('contact')->nullable();
            $table->string('cover')->nullable();
            $table->string('zoom')->nullable();
            $table->string('location');
            $table->string('description');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('fellowships');
    }
};
