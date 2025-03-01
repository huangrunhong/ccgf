@use ('Illuminate\Support\Facades\Request')

<a href={{ $to }} @class(['active' => Request::url() == $to])>{{ __($label) }}</a>
