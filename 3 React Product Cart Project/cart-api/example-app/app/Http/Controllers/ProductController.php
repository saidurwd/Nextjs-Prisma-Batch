<?php

namespace App\Http\Controllers;

use App\Helper\ResponseHelper;
use App\Models\ProductList;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function ProductList():JsonResponse{
        $data=ProductList::all();
        return ResponseHelper::Out('success',$data,200);
    }
}
