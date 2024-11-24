<?php

namespace App\Http\Controllers;

use App\Http\Requests\PhotoLibraryUploadRequest;
use App\Traits\PhotoLibraryTrait;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class PhotoLibraryController extends Controller
{
    use PhotoLibraryTrait;

    public function all(): Response
    {
        return Inertia::render('PhotoLibrary', ['photos' => $this->getAllImages()]);
    }

    public function upload(PhotoLibraryUploadRequest $request): RedirectResponse
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
