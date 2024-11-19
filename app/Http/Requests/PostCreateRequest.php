<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PostCreateRequest extends FormRequest
{
  /**
   * Get the validation rules that apply to the request.
   *
   * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
   */
  public function rules(): array
  {
    return [
      'slug' => ['required', 'string', 'min:3', 'max:64'],
      'title' => ['required', 'string', 'min:2', 'max:255'],
      'content' =>  ['required', 'string'],
    ];
  }
}
