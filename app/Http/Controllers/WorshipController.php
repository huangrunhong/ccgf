<?php

namespace App\Http\Controllers;

use App\Http\Requests\WorshipCreateRequest;
use App\Models\Worship;
use App\Traits\PhotoLibraryTrait;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class WorshipController extends Controller
{
    use PhotoLibraryTrait;

    public function all(): Response
    {
        return Inertia::render('Worships', [
            'worships' => Worship::orderByDesc('date')->get()
        ]);
    }

    public function list(): View
    {
        return view('worships', [
            'worships' => Worship::orderByDesc('date')->get()
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('CreateWorship', [
            'photos' => $this->getAllImages()
        ]);
    }

    public function edit(string $id): Response
    {
        return Inertia::render('EditWorship', [
            'photos' => $this->getAllImages(),
            'worship' => Worship::findOrFail($id),
        ]);
    }

    public function store(WorshipCreateRequest $request): RedirectResponse
    {
        $validated = $request->validated();

        $worship = new Worship($validated);
        $worship->save();

        return redirect()->route('dashboard');
    }

    public function update(WorshipCreateRequest $request, string $id): RedirectResponse
    {
        $validated = $request->validated();

        $worship = Worship::findOrFail($id);
        $worship->update($validated);

        return redirect()->route('dashboard');
    }

    public function destroy(string $id): RedirectResponse
    {
        Worship::find($id)->delete();

        return redirect()->route('dashboard');
    }
}
