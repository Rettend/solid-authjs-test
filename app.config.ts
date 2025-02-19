import { defineConfig } from '@solidjs/start/config'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  vite: {
    plugins: [
      UnoCSS(),
    ],
  },
  server: {
    preset: 'cloudflare_pages',
    prerender: {
      routes: [],
      ignore: [
        '/api/**',
      ],
      crawlLinks: true,
      failOnError: false,
    },
  },
})
