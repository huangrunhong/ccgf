<x-layout title="worships">
    <x-slot:stylesheets>
        <link href="/assets/styles/worship.css" rel="stylesheet">
    </x-slot:stylesheets>
    <x-header title="worships"></x-header>
    <main class="worships">
        @foreach ($worships as $worship)
            <x-worship :worship="$worship"></x-worship>
        @endforeach
    </main>
</x-layout>
