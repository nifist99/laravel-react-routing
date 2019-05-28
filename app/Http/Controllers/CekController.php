<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\item;
use DB;

class CekController extends Controller
{
    public function index(){

        $item=item::all();
        return response()->json($item);

    }
}
