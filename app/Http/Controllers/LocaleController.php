<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Fellowship;
use App\Models\Worship;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Inertia\Inertia;
use Inertia\Response;

class LocaleController extends Controller
{
    public function chinese(): Response
    {
        return $this->renderHomePage();
    }

    public function english(Request $request): Response
    {
        return $this->setLocale($request, 'en');
    }

    public function german(Request $request): Response
    {
        return $this->setLocale($request, 'de');
    }

    public function update(Request $request, string $locale): RedirectResponse
    {
        App::setLocale($locale);
        $request->session()->put('locale', $locale);

        return redirect()->back();
    }

    public function setLocale(Request $request, string $locale): Response
    {
        App::setLocale($locale);
        $request->session()->put('locale', $locale);

        return $this->renderHomePage();
    }

    private function renderHomePage(): Response
    {
        return Inertia::render("Home", [
            'worship' =>  Worship::orderByDesc('date')->first(),
            'events' => Event::orderByDesc('date')->limit(5)->get(),
            'fellowships' => Fellowship::all(),
        ]);
    }
}
