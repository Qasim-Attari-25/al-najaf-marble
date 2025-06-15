import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/al-najaf-marble/", // 👈 this is VERY important for GitHub Pages
});
