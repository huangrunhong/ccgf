<?php

namespace App\Http\Controllers;

use App\Http\Requests\EventCreateRequest;
use App\Models\Event;
use App\Traits\PhotoLibraryTrait;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class EventController extends Controller
{
    use PhotoLibraryTrait;

    public function all(): Response
    {
        return Inertia::render('Events', [
            'events' => Event::orderByDesc('date')->get()
        ]);
    }

    public function list(): View
    {
        return view('events', [
            'events' => Event::orderByDesc('date')->get()
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('CreateEvent', [
            'photos' => $this->getAllImages()
        ]);
    }

    public function edit(string $id): Response
    {
        return Inertia::render('EditEvent', [
            'event' => Event::findOrFail($id),
            'photos' => $this->getAllImages()
        ]);
    }

    public function store(EventCreateRequest $request): RedirectResponse
    {
        $validated = $request->validated();
        $event = new Event($validated);

        $event->save();

        return redirect()->route('events');
    }

    public function update(EventCreateRequest $request, string $id): RedirectResponse
    {
        $validated = $request->validated();
        $event = Event::findOrFail($id);

        $event->update($validated);

        return redirect()->route('events');
    }

    public function destroy(string $id): RedirectResponse
    {
        $event = Event::findOrFail($id);

        $event->delete();

        return redirect()->route('events');
    }
}
