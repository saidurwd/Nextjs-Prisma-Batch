<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use App\Http\Middleware\TokenAuthenticate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::post('/user-login',[UserController::class,'UserLogin']);
Route::post('/verify-login',[UserController::class,'VerifyLogin']);
Route::get("/product-list",[ProductController::class,"ProductList"]);


Route::get("/create-cart/{product_id}",[CartController::class,"CreateCartList"])->middleware([TokenAuthenticate::class]);
Route::get("/remove-cart/{product_id}",[CartController::class,"DeleteCartList"])->middleware([TokenAuthenticate::class]);
Route::get("/cart-list",[CartController::class,"CartList"])->middleware([TokenAuthenticate::class]);
