<x-layout title="fellowships">
    <x-slot:stylesheets>
        <x-style-link path="assets/styles/fellowship.css" />
    </x-slot:stylesheets>
    <x-header title="fellowships" />
    <main class="fellowships">
        @foreach ($fellowships as $fellowship)
            <x-fellowship :fellowship="$fellowship" />
        @endforeach
    </main>
</x-layout>
