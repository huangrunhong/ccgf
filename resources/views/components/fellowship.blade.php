@use ('Carbon\Carbon')

<div class="fellowship">
    <div class="fellowship-name">
        <small>{{ __('contact') }} {{ $fellowship['contact'] }}</small>
        <h4>
            <x-page-link to="fellowships.get." :params="$fellowship">
                {{ $fellowship['name'] }}
            </x-page-link>
        </h4>
    </div>
    <div class="fellowship-schedule">
        <h5>
            <x-formatted-schedule :schedule="$fellowship" />
        </h5>
        <x-page-link to="fellowships.get." :params="$fellowship">
            <x-icons.arrow-right width="32" />
        </x-page-link>
    </div>
</div>
<hr />
