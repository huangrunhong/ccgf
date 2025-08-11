<x-layout title="worships">
    <x-slot:stylesheets>
        <x-style-link path="assets/styles/worship.css" />
    </x-slot:stylesheets>
    <x-header title="worships" />
    <main class="worships">
        @foreach ($worships as $worship)
            <x-worship :worship="$worship" />
        @endforeach
    </main>
</x-layout>
