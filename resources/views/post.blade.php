<x-layout :title="$title">
    <x-slot:stylesheets>
        <link href="/assets/styles/post.css" rel="stylesheet">
    </x-slot:stylesheets>
    <x-header :title="$title"></x-header>
    <main class="post">
        <div class="content">{!! $post['content'] !!}</div>
    </main>
</x-layout>
