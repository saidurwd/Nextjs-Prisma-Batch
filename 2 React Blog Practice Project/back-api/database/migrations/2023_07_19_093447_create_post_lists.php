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
        Schema::create('post_lists', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('img',1000);
            $table->string('short',1000);
            $table->unsignedBigInteger('category_id');
            $table->foreign('category_id')->references('id')->on('post_categories')->onDelete('cascade');
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent()->useCurrentOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('post_lists');
    }
};
