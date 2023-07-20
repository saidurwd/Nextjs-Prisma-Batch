<?php

use App\Http\Controllers\PostCategoryController;
use App\Http\Controllers\PostListController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::get("/post-categories",[PostCategoryController::class,'getPostCategories']);
Route::get("/post-list/{categoryId}",[PostListController::class,'getPostListsByCategory']);
Route::get("/post-details/{postId}",[PostListController::class,'getPostDetailsAndComments']);
Route::post('/create-comment', [PostListController::class, 'createComments']);
