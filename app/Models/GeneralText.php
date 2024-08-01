<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GeneralText extends Model
{
    use HasFactory;
    public $timestamps = false;
    public $fillable =['title_en','title_id','sub_title_en','sub_title_id','small_sub_title_en','small_sub_title_id','description_en','description_id','contact_text_en','contact_text_id'];
    public function listText()  {
        return $this->belongsToMany(ListText::class);
    }
}
