@use ('Carbon\Carbon')
@use ('Illuminate\Support\Str')

<div class="event">
    <img class="cover" src="{{ $event['cover'] ?? '/assets/images/event.jpg' }}" alt="event" />
    <div class="event-contents">
        <div class="event-details">
            <div class="event-title">
                <h5>
                    <x-page-link to="events.get." :params="$event">
                        <strong>{{ $event['title'] }}</strong>
                    </x-page-link>
                </h5>
                <small>{{ __('event.createdAt') }}
                    <x-formatted-date :date="$event['created_at']" />
                </small>
            </div>
            <div class="metadata">
                @if ($event['date'])
                    <span class='key'>{{ __('date') }}: </span>
                    <span>
                        <x-formatted-date :date="$event['date']" />
                    </span>
                @endif
                @if ($event['location'])
                    <span class='key'>{{ __('location') }}: </span>
                    <span>{{ $event['location'] }}</span>
                @endif
            </div>
            <article>{!! Str::of(strip_tags($event['description']))->limit(500) !!}</article>
        </div>
        <x-page-link class="button" to="events.get." :params="$event">
            {{ __('read.more') }}
        </x-page-link>
        </a>
    </div>
</div>
