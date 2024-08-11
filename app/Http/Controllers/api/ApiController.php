<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ApiResource;
use App\Models\GeneralText;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class ApiController extends Controller
{
    public function getDataPortfolio()
    {
        
        Cache::rememberForever('dataApi',function() {
            $text = GeneralText::with('listText')->get();
            $project = Project::with('stacks')->get();
            $res = ['text'=>$text,'project'=>$project];
            return ApiResource::collection($res);
        });
        
    }
}
