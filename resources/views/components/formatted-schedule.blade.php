@use ('Carbon\Carbon')

{{ __($schedule['frequency']) }} {{ Carbon::create($schedule['day'])->translatedFormat('l') }} / {{ $schedule['hour'] }}
