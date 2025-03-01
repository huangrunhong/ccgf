<x-layout :title="$event['title']" :narrow="true">
    <x-slot:stylesheets>
        <link href="/assets/styles/layer.css" rel="stylesheet">
    </x-slot:stylesheets>
    <main class="layer">
        <a class="escape" href="{{ route('events.list.' . app()->getLocale()) }}">
            <x-icons.arrow-go-back :width="20" />
        </a>
        <header>
            <h2>{{ __('event.createdAt') }} <x-formatted-date :date="$event['created_at']" /></h2>
            <h1>{{ $event['title'] }}</h1>
        </header>
        <hr />
        <div class="metadata">
            @isset($event['date'])
                <span class="key">{{ __('date') }}:</span>
                <span><x-formatted-date :date="$event['date']" /></span>
            @endisset
            @isset($event['location'])
                <span class="key">{{ __('location') }}:</span>
                <span>{{ $event['location'] }}</span>
            @endisset
        </div>
        @isset($event['cover'])
            <img src="{{ $event['cover'] }}" alt="cover" />
        @endisset
        <div class="post">{!! $event['description'] !!}</div>
    </main>
</x-layout>
