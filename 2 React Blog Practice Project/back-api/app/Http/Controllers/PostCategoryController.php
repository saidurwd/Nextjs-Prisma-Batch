<?php
namespace App\Http\Controllers;
use App\Models\PostCategory;
class PostCategoryController extends Controller
{

    public function getPostCategories()
    {
        $postCategories = PostCategory::all();
        return response()->json($postCategories);
    }

}
