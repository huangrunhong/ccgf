<x-layout :title="$post['title']">
    <x-header :title="$post['title']" />
    <main class="post">
        {!! $post['content'] !!}
    </main>
</x-layout>
