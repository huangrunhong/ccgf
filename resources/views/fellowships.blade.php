<x-layout title="fellowships">
    <x-slot:stylesheets>
        <link href="/assets/styles/fellowship.css" rel="stylesheet">
    </x-slot:stylesheets>
    <x-header title="fellowships"></x-header>
    <main class="fellowships">
        @foreach ($fellowships as $fellowship)
            <x-fellowship :fellowship="$fellowship"></x-fellowship>
        @endforeach
    </main>
</x-layout>
