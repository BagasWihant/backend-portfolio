<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Project extends Model
{
    use HasFactory;

    public $fillable = ['name','description','long_description','img','github_url','demo_url'];
    public function stacks()
    {
        // return $this->hasMany(ProjectStack::class);
        return $this->belongsToMany(ListStack::class);
    }


}
