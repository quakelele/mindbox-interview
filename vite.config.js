import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    css: {
        devSourcemap: true, // для удобства отладки CSS в dev и prod
    },
    build: {
        sourcemap: true, // посмотреть исходники в продакшне
    }
});
