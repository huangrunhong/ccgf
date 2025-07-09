<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('worships', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->dateTime("date");
            $table->string("location");
            $table->string("title")->nullable();
            $table->string('cover')->nullable();
            $table->string("speaker")->nullable();
            $table->string('description')->nullable();
            $table->boolean('regular')->nullable();
            $table->boolean("dinner")->nullable();
            $table->boolean("baptism")->nullable();
            $table->boolean("eucharist")->nullable();
        });

        DB::table('worships')->insert([
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
            'regular' => true,
            'date' => Carbon::parse('next sunday')->setHour(15)->setMinute(30),
            'location' => 'Kirchhainer Strasse 2, 60433 Frankfurt am Main',
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('worships');
    }
};
