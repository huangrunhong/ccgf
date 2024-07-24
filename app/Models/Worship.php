<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Worship extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'title',
        'speaker',
        'date',
        'dinner',
        'baptism',
        'eucharist',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'dinner' => 'boolean',
            'baptism' => 'boolean',
            'eucharist' => 'boolean',
        ];
    }
}
