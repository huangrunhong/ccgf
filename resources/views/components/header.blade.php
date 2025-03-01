<header>
    <nav>
        <div class="logo">
            <x-logo></x-logo>
            <strong>{!! __('logo') !!}</strong>
        </div>
        <x-header-right></x-header-right>
        <div class="header-menu">
            <button class="header-burger-menu">
                <x-icons.menu></x-icons.menu>
            </button>
            <div class="header-dropdown-menu">
                <x-header-navigation></x-header-navigation>
                <x-header-right></x-header-right>
            </div>
        </div>
    </nav>
    <x-header-navigation></x-header-navigation>
</header>
@isset($title)
    <h1 class="page-title">{{ __($title) }}</h1>
@endisset
