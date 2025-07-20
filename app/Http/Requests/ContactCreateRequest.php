<?php

namespace App\Http\Requests;

use App\Enums\ContactRole;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ContactCreateRequest extends FormRequest
{
  /**
   * Get the validation rules that apply to the request.
   *
   * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
   */
  public function rules(): array
  {
    return [
      'name' => ['required', 'string', 'min:2', 'max:64'],
      'role' => ['nullable', Rule::enum(ContactRole::class)],
      'avatar' => ['nullable', 'string'],
      'tel' => ['nullable', 'string', 'min:3', 'max:64'],
      'email' => ['nullable', 'email'],
      'about' => ['nullable', 'string'],
    ];
  }
}
