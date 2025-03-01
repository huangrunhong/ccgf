<header>
    <nav>
        <a class="logo" href="{{ route('home.' . app()->getLocale()) }}">
            <x-logo />
            <strong>{!! __('logo') !!}</strong>
        </a>
        <x-header-right />
        <div class="header-menu">
            <button class="header-burger-menu">
                <x-icons.menu />
            </button>
            <div class="header-dropdown-menu">
                <x-navigation class="header-navigation" />
                <x-header-right />
            </div>
        </div>
    </nav>
    <x-navigation class="header-navigation" />
</header>
@isset($title)
    <h1 class="page-title">{{ __($title) }}</h1>
@endisset
