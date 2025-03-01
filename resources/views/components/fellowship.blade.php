@use('Carbon\Carbon')

<div class="fellowship">
    <div class="fellowship-name">
        <small>{{ __('contact') }} {{ $fellowship['contact'] }}</small>
        <h4>{{ $fellowship['name'] }}</h4>
    </div>
    <div class="fellowship-schedule">
        <h5>
            {{ __($fellowship['frequency']) }} {{ Carbon::create($fellowship['day'])->translatedFormat('l') }} /
            {{ $fellowship['hour'] }}
        </h5>
        <a href="#">
            <x-icons.arrow-right width="32"></x-icons.arrow-right>
        </a>
    </div>
</div>
<hr />
