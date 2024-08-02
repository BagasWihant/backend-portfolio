<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\GeneralText;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function getDataPortfolio()
    {
        $data = GeneralText::with('listText')->get();
        return response(json_encode(['text'=>$data]), 200);
    }
}
