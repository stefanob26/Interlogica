<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sweet extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'price',
        'ingredients',
        'sold'
    ];

}
