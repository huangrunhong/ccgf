<?php

namespace App\Http\Controllers;

use App\Http\Requests\MediaLibraryUploadRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class MediaLibraryController extends Controller
{
    public function all(): Response
    {
        $images = Storage::files("images");

        $files = Arr::map($images, function ($file) {
            return [
                'name' => "/" . $file,
                'size' => Storage::size($file),
                'lastModified' => Storage::lastModified($file) * 1000
            ];
        });

        return Inertia::render('MediaLibrary', ['files' => $files]);
    }

    public function upload(MediaLibraryUploadRequest $request): RedirectResponse
    {
        $file = $request->file("file");

        if ($request->hasFile("file") && $file->isValid()) {
            $file->store('images');
        }

        return redirect()->back();
    }

    public function destroy(string $file): RedirectResponse
    {
        Storage::delete("images/" . $file);

        return redirect()->back();
    }
}
