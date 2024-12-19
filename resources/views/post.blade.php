@php
    $title = $post['title'];
@endphp

<x-layout :title="$title">
    <x-header></x-header>
    <main class="post">
        <h1>{{ $title }}</h1>
        <div class="content">{!! $post['content'] !!}</div>
    </main>
</x-layout>
