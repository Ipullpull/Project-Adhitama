import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/css/navbar.css',
                'resources/css/hero.css',
                'resources/css/trusted.css',
                'resources/css/products.css',
                'resources/css/footer.css',
                'resources/css/onepage.css',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
        tailwindcss(),
    ],

    server: {
        host: true,
        hmr: {
            host: 'localhost',
        },
    },
});