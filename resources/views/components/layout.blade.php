@use('Carbon\Carbon')


<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ __($title) }} - {{ __('title') }}</title>
    <link rel="icon" type="image/x-icon" href="/assets/favicon.ico?">
    <link
        href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/normalize.css@8.0.1/normalize.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="/assets/styles.css" />
</head>

<body>
    {{ $slot }}
    <footer>
        <div class="logo">
            <x-logo></x-logo>
            <strong>{!! __('logo') !!}</strong>
        </div>
        <div class="links">
            <div>
                <strong>{{ __('discover') }}</strong>
                <a href={{ '/' . app()->getLocale() . '/events' }}>{{ __('events') }}</a>
                <a href={{ '/' . app()->getLocale() . '/fellowships' }}>{{ __('fellowships') }}</a>
                <a href="/posts/about">{{ __('about') }}</a>
            </div>
            <div>
                <strong>{{ __('follow') }}</strong>
                <a href="/">Youtube</a>
                <a href="/">Instagram</a>
            </div>
        </div>
        <div class="claims">
            <small>
                Design and build by Runhong Huang
                <br />
                This is an open source project hosted on https://github.com/huangrunhong/ccgf
                <br />
                <br />
                © {{ Carbon::now()->format('Y') }} Runhong Huang.
            </small>
        </div>
    </footer>
</body>

</html>
