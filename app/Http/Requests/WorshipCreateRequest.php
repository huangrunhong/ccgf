<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class WorshipCreateRequest extends FormRequest
{
  /**
   * Get the validation rules that apply to the request.
   *
   * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
   */
  public function rules(): array
  {
    return [
      'date' => ['required', 'date'],
      'location' => ['required', 'string', 'min:3', 'max:255'],
      'title' => ['nullable', 'string', 'min:3', 'max:255'],
      'cover' => ['nullable', 'string'],
      'speaker' => ['nullable', 'string', 'min:2', 'max:255'],
      'description' => ['nullable', 'string', 'min:3', 'max:255'],
      'baptism' =>  ['nullable', 'boolean'],
      'eucharist' =>  ['nullable', 'boolean'],
      'dinner' =>  ['nullable', 'boolean'],
    ];
  }
}
