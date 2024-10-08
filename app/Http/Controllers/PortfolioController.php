<?php

namespace App\Http\Controllers;

use App\Models\GeneralText;
use App\Models\Project;
use App\Models\ProjectStack;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class PortfolioController extends Controller
{

    public function index()
    {
        $data = GeneralText::with('listText')->get();
        return Inertia::render('GeneralText', ['data' => $data]);
    }

    public function store(Request $request)
    {
        try {
            GeneralText::create($request->only([
                'title_en',
                'title_id',
                'sub_title_en',
                'sub_title_id',
                'small_sub_title_en',
                'small_sub_title_id',
                'description_en',
                'description_id',
                'contact_text_en',
                'contact_text_id'
            ]));
            return response(json_encode(['message' => 'Success']), 200);
        } catch (\Throwable $th) {
            return response(json_encode(['message' => $th->getMessage()]), 500);
        }
    }

    public function create()
    {
        return Inertia::render('CreateGeneralText', ['status' => 'create']);
    }

    public function update(Request $request, string $id)
    {
        // only update set active 
        if ($request->act === 0) {
            try {
                GeneralText::query()->update(['is_active' => 0]);
                GeneralText::where('id', $id)->update(['is_active' => 1]);
                Cache::forget('dataApi');

                return response(json_encode(['message' => 'Success']), 200);
            } catch (\Throwable $th) {
                return response(json_encode(['message' => $th->getMessage()]), 500);
            }
        }

        $data = GeneralText::where('id', $id)->update($request->only([
            'title_en',
            'title_id',
            'sub_title_en',
            'sub_title_id',
            'small_sub_title_en',
            'small_sub_title_id',
            'description_en',
            'description_id',
            'contact_text_en',
            'contact_text_id'
        ]));

        return json_encode([$request->act]);
    }

    public function edit(string $id)
    {
        $data = GeneralText::where('id', $id)->first();
        return Inertia::render('CreateGeneralText', ['data' => $data, 'status' => 'update']);
    }

    public function destroy(string $id)
    {
        GeneralText::destroy($id);
        return response()->json(['message' => 'Deleted'], 200);
    }
}
