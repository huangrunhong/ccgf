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
      'title' => ['required', 'string', 'min:3', 'max:255'],
      'date' => ['required', 'date_format:Y.m.d'],
      'speaker' => ['required', 'string', 'min:2', 'max:255'],
      'baptism' =>  ['required', 'boolean'],
      'eucharist' =>  ['required', 'boolean'],
      'dinner' =>  ['required', 'boolean'],
    ];
  }
}
