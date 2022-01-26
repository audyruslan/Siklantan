<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Datalatih extends Model
{
    use HasFactory;

    protected $guarded=[];

    public function keluarga()
    {
        return $this->belongsTo('App\Models\Keluarga', 'No_KK', 'No_KK');
    }
    public function penduduk()
    {
        return $this->hasMany('App\Models\Penduduk', 'No_KK', 'No_KK');
    }
}
