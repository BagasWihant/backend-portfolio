<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectStack extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = 'list_stack_project';
    public $fillable = ['project_id','list_stack_id'];

    public function project()
    {
        return $this->belongsTo(Project::class);
    }

    public function listStack(){
        return $this->hasOne(ListStack::class);
    }
}
