@use('Carbon\Carbon')

<div class="event">
    <img class="cover" src="{{ $event['cover'] ?? '/assets/images/event.jpg' }}" alt="event" />
    <div class="event-contents">
        <div class="event-details">
            <div class="event-title">
                <h5>{{ $event['title'] }}</h5>
                <small>{{ __('event.createdAt') }}
                    {{ Carbon::create($event['created_at'])->translatedFormat(__('event.createdAt.dateformat')) }}
                </small>
            </div>
            <div class="metadata">
                @if ($event['date'])
                    <span class='key'>{{ __('time') }}: </span>
                    <span>
                        {{ Carbon::create($event['date'])->translatedFormat(__('event.createdAt.dateformat')) }}
                    </span>
                @endif
                @if ($event['location'])
                    <span class='key'>{{ __('place') }}: </span>
                    <span>{{ $event['location'] }}</span>
                @endif
            </div>
            <article>{!! strip_tags($event['description']) !!}</article>
        </div>
        <a class="button">{{ __('read.more') }}</a>
    </div>
</div>
<hr />
