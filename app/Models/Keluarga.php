<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Keluarga extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function penduduk() {
        return $this->hasMany('App\Models\Penduduk', 'No_KK', 'No_KK');
    }
    public function training()
    {
        return $this->hasOne('App\Models\Datalatih', 'No_KK', 'No_KK');
    }
}
