<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fellowship extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'status',
        'hour',
        'day',
        'frequency',
        'cover',
        'zoom',
        'location',
        'description',
        'admin_id'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'admin_id',
    ];

    /**
     * Get the admin associated with the user.
     */
    public function admin()
    {
        return $this->belongsTo(User::class, "admin_id");
    }
}
