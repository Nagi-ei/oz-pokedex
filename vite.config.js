import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 코드 스플리팅 (아래의 코드를 단순히 추가해서 로딩을 나눠서? 더 자세한건 검색, 필요한 사항에 따라 코드는 달라질 수 있음)
  build: {
    outDir: 'docs',
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.indexOf('node_modules') !== -1) {
            const module = id.split('node_modules/').pop().split('/')[0];
            return `vendor-${module}`;
          }
        },
      },
    },
  },
});
