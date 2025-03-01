@use('Carbon\Carbon')

<div class="schedule">
    <div class="date">
        <h4>{{ Carbon::create($date)->format('Y') }}</h4>
        <h3>{{ Carbon::create($date)->translatedFormat(__('worship.dateformat')) }}</h3>
    </div>
    <div class="line"></div>
    <div class="weekday">
        <h4>{{ Carbon::create($date)->translatedFormat('l') }}</h4>
        <h3>{{ Carbon::create($date)->format('H:s') }}</h3>
    </div>
</div>
