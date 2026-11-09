import { defineConfig, Plugin } from 'vite'
import { resolve } from 'path'
import { cpSync, existsSync } from 'fs'

function copySections(): Plugin {
  return {
    name: 'copy-sections',
    writeBundle() {
      for (let i = 1; i <= 11; i++) {
        const src = resolve(__dirname, `SECCION_${i}`)
        const dest = resolve(__dirname, `dist/SECCION_${i}`)
        if (existsSync(src)) {
          cpSync(src, dest, { recursive: true })
        }
      }
    }
  }
}

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        seccion: resolve(__dirname, 'seccion.html'),
      },
    },
  },
  plugins: [copySections()]
})
