<div class="worship">
    <img class="cover" src="{{ $worship['cover'] ?? '/assets/images/worship.jpg' }}" alt="poster" />
    <div class="worship-details">
        <x-schedule :date="$worship['date']" />
        <div class="metadata">
            @if ($worship['speaker'])
                <span class="key">{{ __('speaker') }}:</span>
                <span>{{ $worship['speaker'] }}</span>
            @endif
            <span class='key'>{{ __('location') }}:</span>
            <span>{{ $worship['location'] }}</span>
        </div>
        <div class="worship-row">
            <div class="worship-labels">
                <div>
                    <x-icons.book />
                    <span>{{ __('sermon') }}</span>
                </div>
                <div>
                    <x-icons.music />
                    <span>{{ __('hymns') }}</span>
                </div>
                @if ($worship['baptism'])
                    <div>
                        <x-icons.drop />
                        <span>{{ __('baptism') }}</span>
                    </div>
                @endif
                @if ($worship['dinner'])
                    <div>
                        <x-icons.restaurant />
                        <span>{{ __('dinner') }}</span>
                    </div>
                @endif
                @if ($worship['eucharist'])
                    <div>
                        <x-icons.bread />
                        <span>{{ __('eucharist') }}</span>
                    </div>
                @endif
            </div>
            @isset($upcoming)
                <a href="https://www.youtube.com/@ccgf" class="button">
                    <x-icons.youtube width="20" />
                    {{ __('live') }}
                </a>
            @endisset
        </div>
        @if ($worship['title'])
            <h3>{{ $worship['title'] }}</h3>
        @endif
        @if ($worship['description'])
            <article>
                {!! strip_tags($worship['description']) !!}
            </article>
        @endif
    </div>
</div>
