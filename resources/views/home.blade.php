@use('Carbon\Carbon')

<x-layout title="welcome">
    <x-header>
        <div class="banner">
            <div class="worship">
                <div class="schedule">
                    <code>
                        {{ Carbon::create($worship['date'])->format('Y.m.d') }}
                        <br />
                        {{ Carbon::create($worship['date'])->dayName }}
                        {{ Carbon::create($worship['date'])->format('H:i') }}
                    </code>
                    <address>{{ $worship['location'] }}</address>
                </div>
                <div class="content">
                    <h2>{{ $worship['title'] }}</h2>
                    <img width="64" height="46" src="/assets/images/arrow.svg" />
                </div>
            </div>
        </div>
    </x-header>
    <main>
        <section>
            <div class="introduction">
                <h1>
                    {{ __('hello') }}
                    <br />
                    {{ __('welcome') }}<mark>{{ __('title') }}!</mark>
                </h1>
                <p>{{ __('welcome.subheading') }}</p>
                <div class="summaries">
                    <div>
                        <code>200+</code>
                        <hr />
                        <strong>{{ __('members') }}</strong>
                    </div>
                    <div>
                        <code>08+</code>
                        <hr />
                        <strong>{{ __('fellowships') }}</strong>
                    </div>
                    <div>
                        <code>30+</code>
                        <hr />
                        <strong>{{ __('years') }}</strong>
                    </div>
                </div>
                <a class="primary" href="/">{{ __('welcome.discover') }}</a>
            </div>
        </section>
    </main>
</x-layout>
