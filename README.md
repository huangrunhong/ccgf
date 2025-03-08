## Project Deployment Guide

This guide provides instructions on how to deploy the project to a PHP server using an SFTP client and run necessary migrations.

### 1. Upload Project via SFTP

To upload your project to a PHP server, use an SFTP client. If you're using **Visual Studio Code**, follow these steps:

1. Install the **SFTP plugin** in VS Code.
2. Create an SFTP configuration file at `.vscode/sftp.json` with the following settings:

   ```json
   {
     "name": "ccgf.de",
     "host": "",
     "protocol": "sftp",
     "port": 22,
     "secure": true,
     "username": "",
     "remotePath": "",
     "password": "",
     "uploadOnSave": false,
     "ignore": [".vscode", ".git", ".DS_Store", "node_modules"]
   }
   ```

3. Fill in the **host**, **username**, **remotePath**, and **password** fields as per your server configuration.
4. Use the SFTP plugin to upload your project files.

### 2. Run Migration Scripts

Once the project is uploaded, connect to your server and run the following commands:

```bash
php artisan migrate
php artisan storage:link
php artisan optimize
```

#### Explanation

- `php artisan migrate` – Runs database migrations.
- `php artisan storage:link` – Creates a symbolic link to the storage directory.
- `php artisan optimize` – Optimizes the application for better performance.

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

You may also try the [Laravel Bootcamp](https://bootcamp.laravel.com), where you will be guided through building a modern Laravel application from scratch.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains thousands of video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
