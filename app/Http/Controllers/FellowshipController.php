<?php

namespace App\Http\Controllers;

use App\Enums\PostStatus;
use App\Models\Fellowship;
use App\Http\Requests\FellowshipCreateRequest;
use App\Http\Requests\FellowshipUpdateRequest;
use App\Models\User;
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
            'fellowships' => Fellowship::all()->load(['admin'])
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('CreateFellowship', ['users' => User::all()]);
    }

    public function edit(string $id): Response
    {
        return Inertia::render('EditFellowship', [
            'fellowship' => Fellowship::findOrFail($id)->load(['admin']),
            'users' => User::all()
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
            if ($fellowship->cover) {
                Storage::delete($fellowship->cover);
            }

            $validated['cover'] = "/" . $file->store('images');
        }

        $fellowship->update($validated);

        return redirect('fellowships');
    }

    public function archive(string $id): RedirectResponse
    {
        Fellowship::findOrFail($id)->update(['status' => PostStatus::Archived]);

        return redirect('fellowships');
    }

    public function destroy(string $id): RedirectResponse
    {
        $fellowship = Fellowship::findOrFail($id);

        if ($fellowship->cover) {
            Storage::delete($fellowship->cover);
        }

        $fellowship->destroy();

        return redirect('fellowships');
    }
}
