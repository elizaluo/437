import { defineConfig } from 'vite';

export default defineConfig({
    root: '',
    base: '/',
    
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: 'app/index.html',
                sample_ingredient: 'app/sample_ingredient.html',
                sample_supermarket: 'app/sample_supermarket.html',
                fridge: 'app/fridge.html',
                groceries: 'app/groceries.html',
                pantry: 'app/pantry.html',
                recipes: 'app/recipes.html',
                sample_recipe: 'app/sample_recipe.html',
                profile: 'app/profile/index.html',
            },
        },
    }
});
