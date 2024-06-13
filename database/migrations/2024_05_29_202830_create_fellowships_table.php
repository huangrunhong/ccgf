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
            $table->string('day');
            $table->string('frequency');
            $table->string('cover')->nullable();
            $table->string('zoom')->nullable();
            $table->string('location');
            $table->string('description');
            $table->unsignedBigInteger('admin_id')->nullable();

            $table->foreign('admin_id')->references('id')->on('users');
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
