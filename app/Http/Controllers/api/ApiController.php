<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ApiResource;
use App\Models\GeneralText;
use App\Models\Project;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function getDataPortfolio()
    {
        $text = GeneralText::with('listText')->get();
        $project = Project::with('stacks')->get();
        $res = ['text'=>$text,'project'=>$project];
        return ApiResource::collection($res);
        
    }
}
