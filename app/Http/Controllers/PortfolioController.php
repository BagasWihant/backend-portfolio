<?php

namespace App\Http\Controllers;

use App\Models\GeneralText;
use App\Models\Project;
use App\Models\ProjectStack;
use Illuminate\Http\Request;
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

        return Inertia::render('GeneralText', ['data' => $data]);
    }

    public function store(Request $request)
    {
        try {
            GeneralText::create($request->only([
                'title_en',
                'title_id', 'sub_title_en', 'sub_title_id', 'small_sub_title_en', 'small_sub_title_id', 'description_en', 'description_id', 'contact_text_en', 'contact_text_id'
            ]));
            return response(json_encode(['message' => 'Success']), 200);
        } catch (\Throwable $th) {
            return response(json_encode(['message'=>$th->getMessage()]), 500);
        }

    }
}
