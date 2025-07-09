@use('Carbon\Carbon')

<x-layout title="welcome">
    <x-slot:stylesheets>
        <link href="/assets/styles/home.css" rel="stylesheet">
        <link href="/assets/styles/event.css" rel="stylesheet">
        <link href="/assets/styles/worship.css" rel="stylesheet">
    </x-slot:stylesheets>
    <x-header />
    <main class="home">
        <div class="banner"></div>
        <h1>
            {{ __('hello') }}
            <br />
            {{ __('welcome') }}{{ __('title') }}!
        </h1>
        <div class="introduction">
            <div class="summaries">
                <strong>{{ __('members') }}</strong>
                <strong>{{ __('fellowships') }}</strong>
                <strong>{{ __('years') }}</strong>
                <code>100+</code>
                <code>08+</code>
                <code>30+</code>
            </div>
            <p>{{ __('welcome.subheading') }}</p>
        </div>
        <h2>{{ __('worship.upcoming') }}</h2>
        <x-worship :worship="$worship" />
        <h2>{{ __('events') }}</h2>
        <div class="carousels">
            @foreach ($events as $event)
                <div class="carousel">
                    <x-event :event="$event" />
                </div>
            @endforeach
        </div>
        @if (count($events) > 1)
            <div class="carousels-nav">
                <button class="carousel-prev" disabled onclick="carousel.prev()">
                    <x-icons.arrow-left width="24" />
                </button>
                @for ($i = 0; $i < count($events); $i++)
                    <button @class(['carousel-locator', 'active' => $i == 0]) onclick="carousel.scrollTo({{ $i }})"></button>
                @endfor
                <button class="carousel-next" onclick="carousel.next()">
                    <x-icons.arrow-right width="24" />
                </button>
            </div>
        @endif
        <div class="our-speakers">
            <h4 class="title">{{ __('contactUs') }}</h4>
            <div class="speakers">
                <x-speaker name="陈必勤" role="pastor" tel="015737921453" email="chenkent@gmail.com">
                    我們一起學習順服神，讓我們的教會成爲一個神同在的教會。
                </x-speaker>
                <x-speaker name="留晓君" role="preacher" tel="017620687280" email="manshiliu75@gmail.com">
                    神若與我們同在，教會必然復興，教會必然蒙福，教會必然有能力，教會必然蒙引導，教會必然經歷神。
                </x-speaker>
            </div>
        </div>
    </main>
</x-layout>
