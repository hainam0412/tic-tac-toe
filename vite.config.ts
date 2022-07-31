import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@screen': path.resolve(__dirname, './src/screen'),
            '@component': path.resolve(__dirname, './src/component'),
            '@style': path.resolve(__dirname, './src/style'),
            '@utils': path.resolve(__dirname, './src/utils'),
            '@store': path.resolve(__dirname, './src/store'),
        },
    },
});
