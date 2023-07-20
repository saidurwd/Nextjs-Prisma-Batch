<?php

namespace App\Http\Controllers;

use App\Models\PostCategory;
use App\Models\PostComment;
use App\Models\PostDetail;
use App\Models\PostList;
use Illuminate\Http\Request;

class PostListController extends Controller
{
    public function getPostListsByCategory(Request $request)
    {
        $postLists = PostList::where('category_id','=',$request->categoryId)->get();
        return response()->json($postLists);
    }

    public function getPostDetailsAndComments(Request $request)
    {
        $PostDetail = PostDetail::where('list_id','=',$request->postId)->first();
        $PostComments = PostComment::where('list_id','=',$request->postId)->get();

        return response()->json([
            'postDetails' =>  $PostDetail,
            'postComments' =>  $PostComments
        ]);
    }

    public function createComments(Request $request)
    {

        PostComment::create([
            'list_id'=>$request->input('list_id'),
            'author'=>$request->input('author'),
            'comment'=>$request->input('comment')
        ]);

        return response()->json([
            'status' =>  'success'
        ]);
    }
}
