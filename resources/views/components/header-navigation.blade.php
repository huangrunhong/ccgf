@use ('Illuminate\Support\Facades\Route')
@use ('Illuminate\Support\Facades\Request')

<ul class="header-navigation">
    <li>
        <a href="/" @class(['active' => Route::is('home')])>{{ __('home') }}</a>
    </li>
    <li><a href="/worships" @class(['active' => Route::is('worships.list')])>{{ __('worships') }}</a></li>
    <li><a href="/events" @class(['active' => Route::is('events.list')])>{{ __('events') }}</a></li>
    <li><a href="/fellowships" @class(['active' => Route::is('fellowships.list')])>{{ __('fellowships') }}</a></li>
    <li><a href="/posts/about" @class(['active' => Request::path() == 'posts/about'])>{{ __('about') }}</a></li>
</ul>
