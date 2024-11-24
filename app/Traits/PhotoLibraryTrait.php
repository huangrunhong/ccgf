<?php

namespace App\Traits;

use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Storage;

trait PhotoLibraryTrait
{
    private function getAllImages()
    {
        $images = Storage::files("images");

        return Arr::map($images, function ($file) {
            return [
                'name' => "/" . $file,
                'size' => Storage::size($file),
                'lastModified' => Storage::lastModified($file) * 1000
            ];
        });
    }
}
