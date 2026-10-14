<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>adhitama.com</title>
    <link rel="icon" type="image/png" sizes="64x64" href="{{ asset('images/logo/logo-icon.png') }}">
    <link rel="preload" as="image" href="{{ asset('images/hero/hero-1.jpg') }}" fetchpriority="high">

    @vite([
        'resources/css/app.css',
        'resources/css/navbar.css',
        'resources/css/hero.css',
        'resources/css/trusted.css',
        'resources/css/products.css',
        'resources/css/footer.css',
        'resources/css/onepage.css',
        'resources/js/app.js',
    ])
</head>

<body>

    @yield('content')

</body>
</html>
