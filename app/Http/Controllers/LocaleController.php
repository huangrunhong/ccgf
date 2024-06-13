<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Inertia\Inertia;
use Inertia\Response;

class LocaleController extends Controller
{
    public function chinese(Request $request): Response
    {
        return $this->setLocale($request, 'zh');
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

        return Inertia::render("Home");
    }
}
