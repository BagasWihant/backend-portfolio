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
        Schema::create('general_list_text', function (Blueprint $table) {
            $table->id();
            $table->foreignId('general_text_id');
            $table->foreignId('list_text_id');
            $table->foreign('general_text_id')->references('id')->on('general_texts')->cascadeOnDelete();
            $table->foreign('list_text_id')->references('id')->on('list_texts')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Schema::table('general_list_text', function (Blueprint $table) {
        //     $table->dropForeign(['general_text_id']);
        //     $table->dropForeign(['list_text_id']);
        // });
        Schema::dropIfExists('general_list_text');
    }
};
