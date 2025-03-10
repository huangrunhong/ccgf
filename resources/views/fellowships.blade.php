<x-layout title="fellowships">
    <x-slot:stylesheets>
        <link href="/assets/styles/fellowship.css" rel="stylesheet">
    </x-slot:stylesheets>
    <x-header title="fellowships" />
    <main class="fellowships">
        @foreach ($fellowships as $fellowship)
            <x-fellowship :fellowship="$fellowship" />
        @endforeach
    </main>
</x-layout>
