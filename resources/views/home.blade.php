@use('Carbon\Carbon')

<x-layout title="welcome">
    <x-slot:stylesheets>
        <link href="/assets/styles/home.css" rel="stylesheet">
        <link href="/assets/styles/event.css" rel="stylesheet">
        <link href="/assets/styles/worship.css" rel="stylesheet">
    </x-slot:stylesheets>
    <x-header></x-header>
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
                <code>200+</code>
                <code>08+</code>
                <code>30+</code>
            </div>
            <p>{{ __('welcome.subheading') }}</p>
        </div>
        <h2>{{ __('upcoming.worship') }}</h2>
        <x-worship :worship="$worship"></x-worship>
        <h2>{{ __('events') }}</h2>
        <div class="carousels">
            <div class="carousels-container">
                @foreach ($events as $event)
                    <div class="carousel">
                        <x-event :event="$event"></x-event>
                    </div>
                @endforeach
            </div>
            @if (count($events) > 1)
                <div class="carousels-nav">
                    <button class="carousel-prev" disabled onclick="goToPreviousSlide()">
                        <x-icons.arrow-left width="24"></x-icons.arrow-left>
                    </button>
                    @for ($i = 0; $i < count($events); $i++)
                        <button @class(['carousel-locator', 'active' => $i == 0]) onclick="goToSlide({{ $i }})"></button>
                    @endfor
                    <button class="carousel-next" onclick="goToNextSlide()">
                        <x-icons.arrow-right width="24"></x-icons.arrow-right>
                    </button>
                </div>
            @endif
        </div>
        <div class="our-speakers">
            <h4 class="title">Our Speakers</h4>
            <div class="speakers">
                <div class="speaker">
                    <div class="profile">
                        <img src="/assets/images/chen.jpg" alt="avatar" />
                        <div>
                            <small>Kent Chen</small>
                            <small>Priest</small>
                        </div>
                    </div>
                    <div class="contacts">
                        <div>
                            <p class='label'>Tel :</p>
                            <p> 015634567890</p>
                        </div>
                        <div>
                            <p class='label'>Mail :</p>
                            <p> kentchen@gmail.com </p>
                        </div>

                    </div>
                    <p class="intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        temporincididunt ut labore et dolore magna aliqua.</p>

                </div>
                <div class="speaker">
                    <div class="profile">
                        <img src="/assets/images/liu.jpg" alt="avatar" />
                        <div>
                            <small>Xiaojun Liu</small>
                            <small>Preacher</small>
                        </div>
                    </div>
                    <div class="contacts">
                        <div>
                            <p class='label'>Tel :</p>
                            <p> 01234567890</p>
                        </div>
                        <div>
                            <p class='label'>Mail :</p>
                            <p> manshiliu75@gmail.com </p>
                        </div>

                    </div>
                    <p class="intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        temporincididunt ut labore et dolore magna aliqua.</p>

                </div>
                <div class="speaker">
                    <div class="profile">
                        <img src="/assets/images/liu.jpg" alt="avatar" />
                        <div>
                            <small>Xiuzhen Deng</small>
                            <small>Preacher</small>
                        </div>
                    </div>
                    <div class="contacts">
                        <div>
                            <p class='label'>Tel :</p>
                            <p>0176-4581-9683</p>
                        </div>
                        <div>
                            <p class='label'>Mail :</p>
                            <p>karen.ksau@googlemail.com</p>
                        </div>

                    </div>
                    <p class="intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        temporincididunt ut labore et dolore magna aliqua.</p>

                </div>
            </div>
        </div>
    </main>
</x-layout>
