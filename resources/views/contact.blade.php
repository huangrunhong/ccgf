<x-layout :title="$contact['name']" :narrow="true">
    <x-slot:stylesheets>
        <link href="/assets/styles/layer.css" rel="stylesheet">
    </x-slot:stylesheets>
    <main class="layer">
        <a class="escape" href="{{ route('home.' . app()->getLocale()) }}">
            <x-icons.arrow-go-back :width="20" />
        </a>
        <header>
            @isset($contact['role'])
                <h2>{{ __($contact['role']) }}</h2>
            @endisset
            <h1>{{ $contact['name'] }}</h1>
        </header>
        <hr />
        <div class="metadata">
            @isset($contact['tel'])
                <span class="key">{{ __('tel') }}:</span>
                <span>{{ $contact['tel'] }}</span>
            @endisset
            @isset($contact['email'])
                <span class="key">{{ __('email') }}:</span>
                <span>{{ $contact['email'] }}</span>
            @endisset
        </div>
        @isset($contact['about'])
            <div class="post">{!! $contact['about'] !!}</div>
        @endisset
    </main>
</x-layout>
