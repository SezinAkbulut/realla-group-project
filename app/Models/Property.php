<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Property extends Model
{
    use HasFactory;
    protected $fillable = ['image', 'location', 'rooms', 'square_meters', 'bathrooms', 'for_sale', 'for_rent', 'price'];

    public function bookmarks()
    {
        return $this->hasMany(Bookmark::class);
    }
}
