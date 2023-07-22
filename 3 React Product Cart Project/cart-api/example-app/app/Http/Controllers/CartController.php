<?php

namespace App\Http\Controllers;

use App\Helper\ResponseHelper;
use App\Models\CartList;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function CreateCartList(Request $request):JsonResponse{
        $UserID=$request->header('UserID');
        $data=CartList::updateOrCreate(
            ['user_id' => $UserID,'product_id'=>$request->product_id],
            ['user_id' => $UserID,'product_id'=>$request->product_id],
        );
        return ResponseHelper::Out('success',$data,200);
    }

    public function CartList(Request $request):JsonResponse{
        $UserID=$request->header('UserID');
        $data=CartList::where('user_id',$UserID)->with('product')->get();
        return ResponseHelper::Out('success',$data,200);
    }


    public function DeleteCartList(Request $request):JsonResponse{
        $UserID=$request->header('UserID');
        $data=CartList::where('user_id',$UserID)->where('product_id',$request->product_id)->delete();
        return ResponseHelper::Out('success',$data,200);
    }
}
