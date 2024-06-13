<?php

namespace App\Http\Requests;

use App\Enums\PostStatus;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class FellowshipCreateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'status' => ['required', Rule::enum(PostStatus::class)],
            'name' => ['required', 'string', 'min:3', 'max:255'],
            'hour' => ['required', 'date_format:H:i'],
            'day' => ['required', 'string', 'min:2', 'max:255'],
            'frequency' =>  ['required', 'string', 'min:2', 'max:255'],
            'cover' => ['nullable', 'image', 'max:2048'],
            'location' => ['required', 'string', 'max:255'],
            'zoom' => ['nullable', 'string', 'max:255'],
            'description' => ['required', 'string', 'min:5'],
            'admin_id' => ['integer'],
        ];
    }
}
