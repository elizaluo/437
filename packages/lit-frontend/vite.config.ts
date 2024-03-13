import { defineConfig } from 'vite';

export default defineConfig({
    root: '',
    base: '/',
    
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: 'index.html',
                sample_ingredient: 'app/sample_ingredient.html',
                sample_supermarket: 'app/sample_supermarket.html',
            },
        },
    }
});
