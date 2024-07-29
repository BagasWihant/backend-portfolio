<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ListStack extends Model
{
    use HasFactory;

    public $timestamps = false;

    public function project_stacks(){
        return $this->belongsTo(ProjectStack::class);
    }
}
