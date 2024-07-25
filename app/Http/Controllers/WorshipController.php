<?php

namespace App\Http\Controllers;

use App\Http\Requests\WorshipCreateRequest;
use App\Models\Worship;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class WorshipController extends Controller
{
    public function show(): Response
    {
        return Inertia::render('Worships', [
            'worships' => Worship::orderByDesc('date')->get()
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('CreateWorship');
    }

    public function edit(string $id): Response
    {
        return Inertia::render('EditWorship', [
            'worship' => Worship::findOrFail($id)
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
        $worship = Worship::findOrFail($id);
        $worship->delete();

        return redirect()->route('dashboard');
    }
}
