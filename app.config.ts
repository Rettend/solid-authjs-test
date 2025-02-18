import { defineConfig } from '@solidjs/start/config'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  middleware: './src/middleware.ts',
  vite: {
    plugins: [
      UnoCSS(),
    ],
  },
  server: {
    preset: 'cloudflare_pages',
    prerender: {
      routes: [],
      crawlLinks: true,
      failOnError: true,
    },
  },
})
