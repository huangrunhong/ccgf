@use('Carbon\Carbon')

<x-layout title="welcome">
    <x-slot:stylesheets>
        <x-style-link path="assets/styles/home.css" />
        <x-style-link path="assets/styles/event.css" />
        <x-style-link path="assets/styles/worship.css" />
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
        @if ($worship)
            <h2>{{ __('worship.upcoming') }}</h2>
            <x-worship :worship="$worship" :upcoming="true" />
        @endif
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
                @foreach ($contacts as $contact)
                    <x-speaker :contact="$contact" />
                @endforeach
            </div>
        </div>
    </main>
</x-layout>
