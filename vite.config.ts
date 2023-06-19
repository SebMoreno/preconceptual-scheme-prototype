import { defineConfig, PluginOption } from 'vite';
import react from '@vitejs/plugin-react-swc';


function addDeferAttribute(): PluginOption {
    return {
        name: "addDeferAttribute",
        transformIndexHtml(html) {
            return html.replace('<script type="module" crossorigin', '<script defer');
        }
    };
}

// https://vitejs.dev/config/
export default defineConfig({
    base: "./",
    build: {
        rollupOptions: {
            output: {
                format: "iife"
            }
        }
    },
    plugins: [react(), addDeferAttribute()]
});
