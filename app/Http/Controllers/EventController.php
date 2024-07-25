<?php

namespace App\Http\Controllers;

use App\Http\Requests\EventCreateRequest;
use App\Models\Event;
use App\Traits\UploadFile;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class EventController extends Controller
{
    use UploadFile;

    public function show(): Response
    {
        return Inertia::render('Events', [
            'events' => Event::orderByDesc('date')->get()
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('CreateEvent');
    }

    public function edit(string $id): Response
    {
        return Inertia::render('EditEvent', [
            'event' => Event::findOrFail($id)
        ]);
    }

    public function store(EventCreateRequest $request): RedirectResponse
    {
        $validated = $request->validated();
        $validated['cover'] = $this->saveFile($request, 'cover');

        $event = new Event($validated);
        $event->save();

        return redirect()->route('events');
    }

    public function update(EventCreateRequest $request, string $id): RedirectResponse
    {
        $validated = $request->validated();
        $event = Event::findOrFail($id);

        $validated['cover'] = $this->replaceFile($request,  'cover', $event->cover);
        $event->update($validated);

        return redirect()->route('events');
    }

    public function destroy(string $id): RedirectResponse
    {
        $event = Event::findOrFail($id);

        $this->deleteFile($event->cover);
        $event->delete();

        return redirect()->route('events');
    }
}
