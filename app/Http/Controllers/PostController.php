<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostCreateRequest;
use App\Models\Post;
use App\Traits\PhotoLibraryTrait;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class PostController extends Controller
{
    use PhotoLibraryTrait;

    public function all(): Response
    {
        return Inertia::render('Posts', [
            'posts' => Post::all()
        ]);
    }

    public function get(string $slug)
    {
        return view('post', [
            'post' => Post::where('slug', $slug)->firstOrFail(),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('CreatePost', [
            'photos' => $this->getAllImages()
        ]);
    }

    public function edit(string $id): Response
    {
        return Inertia::render('EditPost', [
            'post' => Post::findOrFail($id),
            'photos' => $this->getAllImages()
        ]);
    }

    public function store(PostCreateRequest $request): RedirectResponse
    {
        $validated = $request->validated();

        $post = new Post($validated);
        $post->save();

        return redirect()->route('posts');
    }

    public function update(PostCreateRequest $request, string $id): RedirectResponse
    {
        $validated = $request->validated();

        $post = Post::findOrFail($id);
        $post->update($validated);

        return redirect()->route('posts');
    }

    public function destroy(string $id): RedirectResponse
    {
        Post::findOrFail($id)->delete();

        return redirect()->route('posts');
    }
}
