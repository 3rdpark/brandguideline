import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  // 1. 저장소 이름이 brand-guideline 인지 brandguideline 인지 확인 후 똑같이 적으세요!
  base: '/brandguideline/', 
  resolve: {
    alias: {
      // 2. 구글 AI가 사용한 @ 경로를 깃허브가 이해하게 도와줍니다.
      '@': path.resolve(__dirname, './src'),
    },
  },
})
