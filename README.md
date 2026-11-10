# Análisis Matemático I

Sitio de estudio para el curso universitario de Análisis Matemático I (Licenciatura en Matemáticas, 2027). Presenta teoría rigurosa y ejercicios resueltos con notación matemática completa. Desplegado en Vercel desde `gabrielfernando01/Analisis-Matematico-I`.

---

## Stack

| Capa | Tecnología |
|---|---|
| Build | Vite 6 + TypeScript 5 |
| Renderizador LaTeX | MathJax v3 (CDN, `tex-chtml.js`) |
| Parser Markdown | marked 15 (npm) |
| Tipografía | Computer Modern Unicode (CDN `dreampulse/computer-modern-web-font`) |
| Estilos | Vanilla CSS con custom properties |
| Deploy | Vercel free tier (estático) |

---

## Estructura del proyecto

```
index.html                      ← Home: título + índice de las 11 secciones
seccion.html                    ← Página de sección (?id=N&tab=teoria|ejercicios)
vercel.json                     ← Rutas y rewrites para Vercel
src/
├── main.ts                     ← Lógica del Home (renderIndex)
├── seccion.ts                  ← Orquestador de sección: URL, tabs, MathJax, sidebar
├── data/
│   └── sections.ts             ← Registro de las 11 secciones (id, título, paths)
├── components/
│   ├── theme.ts                ← Toggle light/dark, localStorage, prefers-color-scheme
│   ├── section-loader.ts       ← Pipeline: extractMath → marked → restoreMath → fixPaths → wrapProofs
│   ├── navigation.ts           ← Sidebar con IntersectionObserver (scroll tracking)
│   ├── image-parallax.ts       ← Fade-in y parallax sutil en imágenes de contenido
│   └── progress.ts             ← Barra de progreso de lectura (scroll %)
└── styles/
    ├── main.css                ← Reset, custom properties (light + Tokyo Night dark), theme toggle
    ├── typography.css          ← CMU fonts, headings, body, listas, blockquotes, código
    ├── math.css                ← MathJax overrides, theorem headings, proof blocks (collapsible)
    ├── sections.css            ← Home index, section layout, sidebar, tabs, nav, footer
    └── responsive.css          ← Mobile drawer, math scroll, print
```

---

## Contenido (solo lectura)

```
SECCION_x/
├── teoria/       ← .md con teoría + imágenes .png
├── ejercicios/   ← .md con ejercicios
└── update/       ← Versión actualizada (prioridad sobre teoria/ y ejercicios/)
```

| Sección | Título | Estado |
|---|---|---|
| 1 | Conjuntos | ✅ teoría + ejercicios |
| 2 | Convergencia puntual y uniforme | ✅ teoría + ejercicios |
| 3 | Teorema de Weierstrass | ✅ teoría + ejercicios |
| 4 | Espacios métricos | ✅ teoría + ejercicios |
| 5 | Sucesiones | ✅ teoría + ejercicios |
| 6 | Topología de espacios métricos | ✅ teoría + ejercicios |
| 7 | Compacidad | ✅ teoría (sin ejercicios aún) |
| 8–11 | — | ⬜ pendiente del curso |

---

## Funcionalidades implementadas

- **Dos temas**: Light (papel cálido) y Dark (Tokyo Night), con toggle 🌙/☀️ persistente en `localStorage`, respeta `prefers-color-scheme`, sin flash al cargar.
- **Pipeline de contenido**: el markdown se carga vía fetch, se protege el LaTeX antes de parsear con marked, se restaura post-parse, y luego MathJax tipografía todo.
- **Prioridad `update/`**: si existe `SECCION_x/update/<archivo>`, se carga ese en lugar del original.
- **Demostraciones colapsables**: los bloques de demostración largos se envuelven en `<details>` con animación de altura suave; los cortos se muestran directamente.
- **Sidebar de headings**: generado dinámicamente desde los `<h2>`–`<h4>` del contenido, con scroll tracking por `IntersectionObserver`.
- **Barra de progreso** de lectura en la parte superior de cada sección.
- **Parallax sutil** en imágenes (factor 0.3, fade-in en viewport).
- **Navegación prev/next** entre secciones: botones en header y links en footer.
- **Responsive**: sidebar colapsa como drawer en móvil con overlay.

---

## Desarrollo local

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # tsc && vite build → dist/
```

El build copia automáticamente las carpetas `SECCION_1`–`SECCION_11` a `dist/` (plugin `copy-sections` en `vite.config.ts`).