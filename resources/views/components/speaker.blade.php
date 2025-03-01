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
            <small>{{ $name }}</small>
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
</div>
