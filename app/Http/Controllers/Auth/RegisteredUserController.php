<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;


class RegisteredUserController extends Controller
{
    public function all(): InertiaResponse
    {
        return Inertia::render('Users', [
            'users' => User::get()
        ]);
    }

    /**
     * Display the registration view.
     */
    public function create(): InertiaResponse
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): Response
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'admin' => User::where('admin', true)->doesntExist(),
        ]);

        event(new Registered($user));

        Auth::login($user);

        return Inertia::location(route('dashboard', absolute: false));
    }

    public function admin(string $id): RedirectResponse
    {
        return $this->authorize($id, admin: true);
    }

    public function member(string $id): RedirectResponse
    {
        return $this->authorize($id, admin: false);
    }

    public function destroy(string $id): RedirectResponse
    {
        User::findOrFail($id)->delete();

        return redirect()->route('users');
    }

    private function authorize(string $id, bool $admin): RedirectResponse
    {
        User::findOrFail($id)->update([
            'admin' => $admin
        ]);

        return redirect()->route('users');
    }
}
