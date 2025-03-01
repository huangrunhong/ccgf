<ul {{ $attributes }}>
    <li>
        <x-link :to="route('home.' . app()->getLocale())" label="home" />
    </li>
    <li>
        <x-link :to="route('worships.list.' . app()->getLocale())" label="worships" />
    </li>
    <li>
        <x-link :to="route('events.list.' . app()->getLocale())" label="events" />
    </li>
    <li>
        <x-link :to="route('fellowships.list.' . app()->getLocale())" label="fellowships" />
    </li>
    <li>
        <x-link :to="route('posts.get.' . app()->getLocale(), ['slug' => 'about'])" label="about" />
    </li>
</ul>
