<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Penduduk extends Model
{
    use HasFactory;

    protected $guarded = [];
    public function datalatih()
    {
        return $this->belongsTo('App\Models\Datalatih', 'No_KK', 'No_KK');
    }
}
