<x-layout title="events">
    <x-slot:stylesheets>
        <link href="/assets/styles/event.css" rel="stylesheet">
    </x-slot:stylesheets>
    <x-header title="events"></x-header>
    <main class=events>
        @foreach ($events as $event)
            <x-event :event="$event"></x-event>
        @endforeach
    </main>
</x-layout>
