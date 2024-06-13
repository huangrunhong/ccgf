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
            'day' => ['string', 'min:2', 'max:255'],
            'frequency' =>  ['string', 'min:2', 'max:255'],
            'cover' => ['nullable', 'image', 'max:2048'],
            'location' => ['string', 'max:255'],
            'zoom' => ['nullable', 'string', 'max:255'],
            'description' => ['string', 'min:5'],
            'admin_id' => ['integer'],
        ];
    }
}
