@props(['class' => '', 'to' => '', 'params' => []])

<a href="{{ route($to . app()->getLocale(), $params) }}" class="{{ $class }}">{{ $slot }}</a>
