import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'


export default defineConfig({
   plugins: [react(), tsconfigPaths()],
   css: { devSourcemap: true },
   build: {
     sourcemap: true,
     minify: 'esbuild', // по умолчанию, можно попробовать отключить minify для теста: minify: false,
   },
})
