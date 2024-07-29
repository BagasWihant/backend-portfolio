<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\ProjectStack;
use Inertia\Inertia;

class PortfolioController extends Controller
{

    public function index()
    {
        $data = Project::with(['stacks'])->get();
        
        // foreach ($data as $value) {
        //     foreach ($value->stacks as $stack) {
        //         dump($stack->name);
        //     }
        // }
        
        return Inertia::render('Dashboard', ['data' => $data]);
    }
}
