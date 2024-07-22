<?php

namespace App\Http\Requests;

use App\Enums\PostStatus;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class FellowshipUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'status' => [Rule::enum(PostStatus::class)],
            'name' => ['string', 'min:3', 'max:255'],
            'hour' => ['date_format:H:i'],
            'day' => ['required', 'integer'],
            'frequency' =>  ['required', 'integer'],
            "contact" => ['nullable', 'string', 'min:3', 'max:255'],
            'cover' => ['nullable', 'image', 'max:2048'],
            'remove_cover' => ['boolean'],
            'location' => ['string', 'max:255'],
            'zoom' => ['nullable', 'string', 'max:255'],
            'description' => ['string', 'min:5'],
        ];
    }
}
