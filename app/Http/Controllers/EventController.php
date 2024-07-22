<?php

namespace App\Http\Controllers;

use App\Http\Requests\EventCreateRequest;
use App\Models\Event;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class EventController extends Controller
{
    public function show(): Response
    {
        return Inertia::render('Events', [
            'events' => Event::all()
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('CreateEvent');
    }

    public function store(EventCreateRequest $request): RedirectResponse
    {
        $validated = $request->validated();
        $file = $request->file('cover');

        if ($request->hasFile('cover') && $file->isValid()) {
            $validated['cover'] = "/" . $file->store('images');
        }

        $event = new Event($validated);
        $event->save();

        return redirect()->route('events');
    }

    public function update(EventCreateRequest $request, string $id): RedirectResponse
    {
        $file = $request->file('cover');
        $validated = $request->validated();

        $event = Event::findOrFail($id);

        if ($request->hasFile('cover') && $file->isValid()) {
            if ($event->cover) {
                Storage::delete($event->cover);
            }

            $validated['cover'] = "/" . $file->store('images');
        }

        $event->update($validated);

        return redirect()->route('events');
    }
}
