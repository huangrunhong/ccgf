<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Worship;
use Carbon\Carbon;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\View\View;

class LocaleController extends Controller
{
    public function chinese(Request $request): View
    {
        return $this->setLocale($request, 'zh');
    }

    public function english(Request $request): View
    {
        return $this->setLocale($request, 'en');
    }

    public function german(Request $request): View
    {
        return $this->setLocale($request, 'de');
    }

    public function update(Request $request, string $locale): RedirectResponse
    {
        App::setLocale($locale);
        $request->session()->put('locale', $locale);

        return redirect()->back();
    }

    public function setLocale(Request $request, string $locale): View
    {
        App::setLocale($locale);
        Carbon::setLocale($locale);
        $request->session()->put('locale', $locale);

        return $this->renderHomePage();
    }

    private function renderHomePage(): View
    {
        return view("home", [
            'events' => Event::orderByDesc('date')->limit(5)->get(),
            'worship' => $this->findUpcomingWorship(),
        ]);
    }

    private function findUpcomingWorship()
    {
        $worship = Worship
            ::whereNull('regular')
            ->whereDate('date', '>=', Carbon::now())
            ->whereDate('date', '<', Carbon::parse('next monday'))
            ->first();

        return $worship ?? Worship::where('regular', true)->first();
    }
}
