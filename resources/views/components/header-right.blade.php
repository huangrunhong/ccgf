@use('Illuminate\Support\Facades\App')

<div class="header-right">
    <ul class="locale">
        <li><a @class(['active' => App::isLocale('en')]) href="/en">EN</a></li>
        <li><a @class(['active' => App::isLocale('de')]) href="/de">DE</a></li>
        <li><a @class(['active' => App::isLocale('zh')]) href="/">CH</a></li>
    </ul>
    <a class="button" href="/">
        <x-icons.donate />
        {{ __('donate') }}
    </a>
</div>
