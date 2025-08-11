<x-layout :title="$fellowship['name']" :narrow="true">
    <x-slot:stylesheets>
        <x-style-link path="assets/styles/layer.css" />
    </x-slot:stylesheets>
    <main class="layer">
        <a class="escape" href="{{ route('fellowships.list.' . app()->getLocale()) }}">
            <x-icons.arrow-go-back :width="20" />
        </a>
        <header>
            <h2>{{ __('contact') }} {{ $fellowship['contact'] }}</h2>
            <h1>{{ $fellowship['name'] }}<br /><x-formatted-schedule :schedule="$fellowship" /></h1>
        </header>
        <hr />
        <div class="metadata">
            @isset($fellowship['zoom'])
                <span class="key">Zoom:</span>
                <span>{{ $fellowship['zoom'] }}</span>
            @endisset
            @isset($fellowship['location'])
                <span class="key">{{ __('location') }}:</span>
                <span>{{ $fellowship['location'] }}</span>
            @endisset
        </div>
        @isset($fellowship['cover'])
            <img src="{{ $fellowship['cover'] }}" alt="cover" />
        @endisset
        <div class="post">{!! $fellowship['description'] !!}</div>
    </main>
</x-layout>
