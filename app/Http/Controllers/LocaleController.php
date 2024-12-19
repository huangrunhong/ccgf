<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Fellowship;
use App\Models\Worship;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;

class LocaleController extends Controller
{
    public function chinese(Request $request)
    {
        return $this->setLocale($request, 'zh');
    }

    public function english(Request $request)
    {
        return $this->setLocale($request, 'en');
    }

    public function german(Request $request)
    {
        return $this->setLocale($request, 'de');
    }

    public function update(Request $request, string $locale)
    {
        App::setLocale($locale);
        $request->session()->put('locale', $locale);

        return redirect()->back();
    }

    public function setLocale(Request $request, string $locale)
    {
        App::setLocale($locale);
        Carbon::setLocale($locale);
        $request->session()->put('locale', $locale);

        return $this->renderHomePage();
    }

    private function renderHomePage()
    {
        return view("home", [
            'fellowships' => Fellowship::all(),
            'events' => Event::orderByDesc('date')->limit(5)->get(),
            'worship' => $this->findUpcomingWorship(),
        ]);
    }

    private function findUpcomingWorship()
    {
        $worship = Worship
            ::whereDate('date', '>=', Carbon::now())
            ->whereDate('date', '<', Carbon::parse('next monday'))
            ->first();

        if ($worship) {
            return $worship;
        }

        return Worship::where('regular', true)->first();
    }
}
