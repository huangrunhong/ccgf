<?php

namespace App\Http\Controllers;

use App\Enums\PostStatus;
use App\Models\Fellowship;
use App\Http\Requests\FellowshipCreateRequest;
use App\Http\Requests\FellowshipUpdateRequest;
use App\Traits\PhotoLibraryTrait;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class FellowshipController extends Controller
{
    use PhotoLibraryTrait;

    public function all(): Response
    {
        return Inertia::render('Fellowships', [
            'fellowships' => Fellowship::all()
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('CreateFellowship', [
            'photos' => $this->getAllImages()
        ]);
    }

    public function edit(string $id): Response
    {
        return Inertia::render('EditFellowship', [
            'fellowship' => Fellowship::findOrFail($id),
            'photos' => $this->getAllImages()
        ]);
    }

    public function store(FellowshipCreateRequest $request): RedirectResponse
    {
        $validated = $request->validated();
        $fellowship = new Fellowship($validated);

        $fellowship->save();

        return redirect($request->url());
    }

    public function update(FellowshipUpdateRequest $request, string $id): RedirectResponse
    {
        $validated = $request->validated();
        $fellowship = Fellowship::findOrFail($id);

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

        $fellowship->delete();

        return redirect()->route('fellowships');
    }
}
