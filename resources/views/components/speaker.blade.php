<div class="speaker">
    <div class="profile">
        <div class="avatar">
            @if (isset($contact['avatar']))
                <img class="cover" src="{{ $contact['avatar'] }}" alt="avatar" />
            @else
                <x-icons.user />
            @endif
        </div>
        <div class="username">
            <span>{{ $contact['name'] }}</span>
            <small>{{ __($contact['role']) }}</small>
        </div>
    </div>
    <div class="metadata">
        <span class='key'>{{ __('tel') }}:</span>
        <span>{{ $contact['tel'] }}</span>
        <span class='key'>{{ __('email') }}:</span>
        <span>{{ $contact['email'] }}</span>
    </div>
    @isset($contact['about'])
        <p class="intro">{!! Str::of(strip_tags($contact['about']))->limit(200) !!}</p>
    @endisset
    <a class="button"
        href="{{ route('contacts.get.' . app()->getLocale(), ['id' => $contact['id']]) }}">{{ __('read.more') }}</a>
</div>
