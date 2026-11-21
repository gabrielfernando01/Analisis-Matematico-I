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
          // Se copia solo lo que consume el sitio: .md e imágenes.
          // Los .html y .py de las carpetas son artefactos de autoría
          // (p. ej. una exportación autónoma de 16 MB) y no deben
          // inflar el deploy.
          cpSync(src, dest, {
            recursive: true,
            filter: (path) => !/\.(html|py)$/i.test(path),
          })
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
