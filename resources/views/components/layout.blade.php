@use('Carbon\Carbon')

<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ __($title) }} - {{ __('title') }}</title>
    <link rel="icon" type="image/x-icon" href="/assets/favicon.ico?">
    <meta property="og:title" content="{{ __($title) }} - {{ __('title') }}" />
    <meta property="og:description" content="领受福音的好处, 结出福音的果子" />
    <meta property="og:url" content="https://ccgf.de/{{ app()->getLocale() }}" />
    <meta property="og:image" content="/assets/images/open-graph.jpeg" />
    <link
        href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/normalize.css@8.0.1/normalize.min.css" rel="stylesheet">
    <link href="/assets/styles/global.css" rel="stylesheet">
    <script type="text/javascript" src="/assets/carousel.js"></script>
    @isset($stylesheets)
        {{ $stylesheets }}
    @endisset
</head>

<body @class(['narrow' => isset($narrow)])>
    {{ $slot }}
    <footer>
        <div class="navigation">
            <a class="logo" href="{{ route('home.' . app()->getLocale()) }}">
                <x-logo />
                <strong>{!! __('logo') !!}</strong>
            </a>
            <x-navigation class="links" />
        </div>
        <div class="medias">
            <small>{{ __('follow') }}</small>
            <div>
                <a href="https://www.youtube.com/@ccgf">
                    <x-icons.youtube width="28" />
                </a>
                <a href="/">
                    <x-icons.instagram width="26" />
                </a>
            </div>
        </div>
        <div class="claims">
            <small>
                Design and build with ❤️ by Runhong Huang and Diao Liu
                <br />
                This is an open source project hosted on <a href="https://github.com/huangrunhong/ccgf">Github
                    Repository</a>
                <br />
                <br />
                © {{ Carbon::now()->format('Y') }} {{ strip_tags(__('logo')) }}
            </small>
        </div>
    </footer>
</body>

</html>
