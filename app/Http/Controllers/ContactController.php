<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactCreateRequest;
use App\Models\Contact;
use App\Traits\PhotoLibraryTrait;
use Illuminate\Http\RedirectResponse;
use Illuminate\View\View;
use Inertia\Inertia;
use Inertia\Response;

class ContactController extends Controller
{
    use PhotoLibraryTrait;

    public function all(): Response
    {
        return Inertia::render('Contacts', [
            'contacts' => Contact::all()
        ]);
    }

    public function get(string $id): View
    {
        return view('contact', [
            'contact' => Contact::findOrFail($id)
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('CreateContact', [
            'photos' => $this->getAllImages()
        ]);
    }

    public function edit(string $id): Response
    {
        return Inertia::render('EditContact', [
            'contact' => Contact::findOrFail($id),
            'photos' => $this->getAllImages()
        ]);
    }

    public function store(ContactCreateRequest $request): RedirectResponse
    {
        $validated = $request->validated();

        $post = new Contact($validated);
        $post->save();

        return redirect()->route('contacts');
    }

    public function update(ContactCreateRequest $request, string $id): RedirectResponse
    {
        $validated = $request->validated();

        $post = Contact::findOrFail($id);
        $post->update($validated);

        return redirect()->route('contacts');
    }

    public function destroy(string $id): RedirectResponse
    {
        Contact::findOrFail($id)->delete();

        return redirect()->route('contacts');
    }
}
