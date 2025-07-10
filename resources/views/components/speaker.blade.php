<div class="speaker">
    <div class="profile">
        <div class="avatar">
            @if (isset($avatar))
                <img class="cover" src="{{ $avatar }}" alt="avatar" />
            @else
                <x-icons.user />
            @endif
        </div>
        <div class="username">
            <span>{{ $name }}</span>
            <small>{{ __($role) }}</small>
        </div>
    </div>
    <div class="metadata">
        <span class='key'>{{ __('tel') }}:</span>
        <span>{{ $tel }}</span>
        <span class='key'>{{ __('email') }}:</span>
        <span>{{ $email }}</span>
    </div>
    <p class="intro">{{ $slot }}</p>
    @isset($slug)
        <a class="button" href="{{ route('posts.get.' . app()->getLocale(), ['slug' => $slug]) }}">{{ __('read.more') }}</a>
    @endisset
</div>
