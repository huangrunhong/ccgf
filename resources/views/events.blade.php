<x-layout title="events">
    <x-slot:stylesheets>
        <link href="/assets/styles/event.css" rel="stylesheet">
    </x-slot:stylesheets>
    <x-header title="events" />
    <main class=events>
        @foreach ($events as $event)
            <x-event :event="$event" />
            <hr />
        @endforeach
    </main>
</x-layout>
