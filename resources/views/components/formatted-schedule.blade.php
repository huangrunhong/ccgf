@use ('Carbon\Carbon')

{{ __($schedule['frequency']) }} {{ Carbon::now()->weekday($schedule['day'])->translatedFormat('l') }} /
{{ $schedule['hour'] }}
