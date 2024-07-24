<?php

namespace App\Traits;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Storage;

trait UploadFile
{
    private function saveFile(FormRequest $request, string $fieldname)
    {
        $file = $request->file($fieldname);

        if ($request->hasFile($fieldname) && $file->isValid()) {
            return  "/" . $file->store('images');
        }

        return null;
    }

    private function replaceFile(FormRequest $request, string $fieldname, ?string $paths)
    {
        $file = $request->file($fieldname);

        if ($request->hasFile($fieldname) && $file->isValid()) {
            $this->deleteFile($paths);

            return "/" . $file->store('images');
        }

        if (!$request->hasFile($fieldname) && $request['remove_cover']) {
            $this->deleteFile($paths);

            return null;
        }

        return $paths;
    }

    private function deleteFile(?string $paths)
    {
        if ($paths) {
            Storage::delete($paths);
        }
    }
}
