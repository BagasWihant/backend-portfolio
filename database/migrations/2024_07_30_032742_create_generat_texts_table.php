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
        Schema::create('general_texts', function (Blueprint $table) {
            $table->id();
            $table->string('title_en',70);
            $table->string('title_id',70);
            $table->string('sub_title_en',100)->nullable();
            $table->string('sub_title_id',100)->nullable();
            $table->string('small_sub_title_en',50)->nullable();
            $table->string('small_sub_title_id',50)->nullable();
            $table->text('description_en')->nullable();
            $table->text('description_id')->nullable();
            $table->string('contact_text_en');
            $table->string('contact_text_id');
            $table->boolean('is_active')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('general_texts');
    }
};
