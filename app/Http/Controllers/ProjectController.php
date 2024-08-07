<?php

namespace App\Http\Controllers;

use App\Models\ListStack;
use Inertia\Inertia;
use App\Models\Project;
use App\Models\ProjectStack;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $data = Project::with(['stacks'])->get();

        // foreach ($data as $value) {
        //     foreach ($value->stacks as $stack) {
        //         dump($stack->name);
        //     }
        // }
        return Inertia::render('ListProject',['data'=>$data]);
        
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $stack = ListStack::select(['name','id as value'])->get();
        return inertia('CreateProject',['stack'=>$stack]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request->stacks);
        try {
            $request->validate([
                'name' => 'required', 
                'description' => 'required', 
                'ldescription' => 'required', 
                'img' => 'required',
                'github' => 'required', 
                'demo' => 'required', 
                'stacks' => 'required', 
            ]);
            $path = $request->file('img')->store('project','public');
            $save = Project::create([
                'name' => $request->name, 
                'description' => $request->description,
                'long_description' => $request->ldescription,
                'img' => $path,
                'github_url' => $request->github,
                'demo_url' => $request->demo
            ]);
            
            foreach (json_decode($request->stacks) as $stack) {
                ProjectStack::create([
                    'project_id' => $save->id,
                    'list_stack_id' => $stack->value
                ]);
            }
            return response(json_encode(['message'=>'Succes Added']),200);
        } catch (\Throwable $th) {
            //throw $th;
            return response($th->getMessage(),500);
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
        //
    }
}
