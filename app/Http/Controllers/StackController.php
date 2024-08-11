<?php

namespace App\Http\Controllers;

use App\Models\ListStack;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Throwable;

class StackController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = ListStack::all();
        return inertia('ListStack',['data' => $data]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('CreateStack', ['status' => 'create']);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $request->validate([
                'name' => 'required',
                'img' => 'required',
            ]);


            $saveImg = $request->file('img')->store('stack','public');
            ListStack::create([
                'name' => $request->name,
                'path' => $saveImg,
            ]);
            return response(json_encode(['message' => "Stack Has been saved"]), 200);
        } catch (Throwable $err) {
            return response(json_encode(['message' => $err->getMessage()]), 400);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $stackData = ListStack::find($id,['path']);
        Storage::delete('public/'.$stackData->path);
        ListStack::destroy($id);
        return response()->json(['message'=>'Deleted'],200);
        
    }
}
