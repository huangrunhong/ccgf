<x-layout title="events">
    <x-slot:stylesheets>
        <x-style-link path="assets/styles/event.css" />
    </x-slot:stylesheets>
    <x-header title="events" />
    <main class=events>
        @foreach ($events as $event)
            <x-event :event="$event" />
            <hr />
        @endforeach
    </main>
</x-layout>
