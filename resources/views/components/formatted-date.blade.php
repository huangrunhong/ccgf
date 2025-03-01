@use('Carbon\Carbon')

{{ Carbon::create($date)->translatedFormat(__('dateformat')) }}
