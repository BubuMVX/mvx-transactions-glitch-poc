import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {ViteImageOptimizer} from "vite-plugin-image-optimizer"
import {nodePolyfills} from "vite-plugin-node-polyfills"
import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        ViteImageOptimizer(),
        nodePolyfills({
            globals: {
                Buffer: true,
                global: true,
                process: true,
            },
        }),
        basicSsl(),
    ],
    build: {
        rollupOptions: {
            output: {
                manualChunks: () => {
                    return 'index';
                },
            },
        },
    },
})
