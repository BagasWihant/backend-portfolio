<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GeneralText extends Model
{
    use HasFactory;

    public function listText()  {
        return $this->belongsToMany(ListText::class);
    }
}
