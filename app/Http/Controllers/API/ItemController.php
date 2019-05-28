<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\item;
use DB;

class ItemController extends Controller
{
    public function index(){
        $item=item::all();
        $response['api_status']=1;
        $response['api_message']='Success';
        $response['data']=$item;
        return response()->json($response);

    }
}
