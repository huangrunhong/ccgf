@use('Illuminate\Support\Facades\App')

<header>
    <div class="logo">
        <x-logo></x-logo>
        <strong>{!! __('logo') !!}</strong>
        <small>{{ __('since') }}</small>
    </div>
    <nav>
        <ul class="locale">
            <li @class(['muted' => !App::isLocale('en')])><a href="/en">English</a></li>
            <li @class(['muted' => !App::isLocale('de')])><a href="/de">Deutsch</a></li>
            <li @class(['muted' => !App::isLocale('zh')])><a href="/">中文</a></li>
        </ul>
        <ul class="pages">
            <li><a href={{ '/' . app()->getLocale() . '/events' }}><strong>{{ __('events') }}</strong></a></li>
            <li><a href={{ '/' . app()->getLocale() . '/fellowships' }}><strong>{{ __('fellowships') }}</strong></a>
            </li>
            <li><a href="/posts/about"><strong>{{ __('about') }}</strong></a></li>
        </ul>
    </nav>
    {{ $slot }}
</header>
