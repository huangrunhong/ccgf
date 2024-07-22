<?php

namespace App\Http\Requests;

use DateTimeInterface;
use Illuminate\Foundation\Http\FormRequest;

class EventCreateRequest extends FormRequest
{
  /**
   * Get the validation rules that apply to the request.
   *
   * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
   */
  public function rules(): array
  {
    return [
      'date' => ['required', 'date_format:' . DateTimeInterface::ATOM],
      'location' =>  ['required', 'string', 'min:3', 'max:255'],
      'title' =>  ['required', 'string', 'min:3', 'max:255'],
      'description' =>  ['string', 'min:3', 'max:255'],
      'cover' => ['nullable', 'image', 'max:2048'],
    ];
  }
}
