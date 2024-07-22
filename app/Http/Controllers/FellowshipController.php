<?php

namespace App\Http\Controllers;

use App\Enums\PostStatus;
use App\Models\Fellowship;
use App\Http\Requests\FellowshipCreateRequest;
use App\Http\Requests\FellowshipUpdateRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class FellowshipController extends Controller
{
    /**
     * Show fellowships view
     */
    public function show(): Response
    {
        return Inertia::render('Fellowships', [
            'fellowships' => Fellowship::all()
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('CreateFellowship');
    }

    public function edit(string $id): Response
    {
        return Inertia::render('EditFellowship', [
            'fellowship' => Fellowship::findOrFail($id)
        ]);
    }

    public function store(FellowshipCreateRequest $request): RedirectResponse
    {
        $file = $request->file('cover');
        $validated = $request->validated();

        if ($request->hasFile('cover') && $file->isValid()) {
            $validated['cover'] = "/" . $file->store('images');
        }

        $fellowship = new Fellowship($validated);
        $fellowship->save();

        return redirect($request->url());
    }

    public function update(FellowshipUpdateRequest $request, string $id): RedirectResponse
    {

        $file = $request->file('cover');
        $validated = $request->validated();
        $fellowship = Fellowship::findOrFail($id);

        if ($request->hasFile('cover') && $file->isValid()) {
            $this->removeCover($fellowship);

            $validated['cover'] = "/" . $file->store('images');
        }

        if (!$request->hasFile('cover') && $validated['remove_cover']) {
            $this->removeCover($fellowship);

            $validated['cover'] = null;
        }

        $fellowship->update($validated);

        return redirect()->route('fellowships');
    }

    public function archive(string $id): RedirectResponse
    {
        Fellowship::findOrFail($id)->update(['status' => PostStatus::Archived]);

        return redirect()->route('fellowships');
    }

    public function destroy(string $id): RedirectResponse
    {
        $fellowship = Fellowship::findOrFail($id);

        if ($fellowship->cover) {
            Storage::delete($fellowship->cover);
        }

        $fellowship->delete();

        return redirect()->route('fellowships');
    }

    private function removeCover(Fellowship $fellowship)
    {
        if ($fellowship->cover) {
            Storage::delete($fellowship->cover);
        }
    }
}
