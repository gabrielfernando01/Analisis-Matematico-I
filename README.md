# Análisis Matemático I

Sitio de estudio para el curso universitario de Análisis Matemático I (Licenciatura en Matemáticas, 2027). Presenta teoría rigurosa y ejercicios resueltos con notación matemática completa. Desplegado en Vercel desde `gabrielfernando01/Analisis-Matematico-I`.

---

## Estado actual

**Fecha de corte:** 9 de noviembre de 2026.

- **Contenido:** secciones 1–6 con teoría y ejercicios; sección 7 solo con teoría; secciones 8–11 pendientes del curso.
- **Código:** sin tareas pendientes. El build `tsc && vite build` pasa y el detector de diseño no reporta hallazgos.
- **Próxima sesión:** **solo revisión de diseño**. No hay funcionalidades nuevas que implementar. La lista de verificación está en [Verificación de diseño](#verificación-de-diseño-próxima-sesión).

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
public/
└── norma.png                   ← Favicon del sitio (Vite lo sirve en /norma.png)
src/
├── main.ts                     ← Lógica del Home (renderIndex)
├── seccion.ts                  ← Orquestador de sección: URL, tabs, MathJax, sidebar
├── data/
│   └── sections.ts             ← Registro de las 11 secciones (id, título, paths)
├── components/
│   ├── theme.ts                ← Toggle light/dark, localStorage, prefers-color-scheme
│   ├── section-loader.ts       ← Pipeline: extractMath → marked → restoreMath → fixPaths → wrapProofs
│   ├── navigation.ts           ← Índice: enlaces, heading activo, scroll del sidebar
│   ├── sidebar.ts              ← Ancho ajustable, colapso y drawer móvil
│   ├── image-parallax.ts       ← Fade-in y parallax sutil en imágenes de contenido
│   └── progress.ts             ← Barra de progreso de lectura (scroll %)
└── styles/
    ├── main.css                ← Reset, custom properties, temas, reduced motion
    ├── typography.css          ← CMU fonts, headings, body, listas, blockquotes, código
    ├── math.css                ← MathJax overrides, theorem headings, proof blocks
    ├── sections.css            ← Home, layout, sidebar, resizer, tabs, nav, footer
    └── responsive.css          ← Drawer móvil, math scroll, print
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

Los directorios `update/` existen en las 11 secciones pero hoy solo contienen `.gitkeep`: ningún archivo reemplaza todavía a `teoria/` o `ejercicios/`. La prioridad de `update/` está implementada y verificada.

> **Nota:** las carpetas `SECCION_7` a `SECCION_11` incluyen un directorio vacío escrito `ejerccios/` (typo). No participa en la carga porque `src/data/sections.ts` apunta a las rutas reales. No borrarlo ni renombrarlo sin revisar el contenido.

---

## Funcionalidades implementadas

### Lectura y contenido

- **Temas**: Light (papel cálido) y Dark (Tokyo Night), toggle 🌙/☀️ persistente en `localStorage`, respeta `prefers-color-scheme`, sin flash al cargar.
- **Pipeline de contenido**: el Markdown se carga vía fetch, se protege el LaTeX antes de parsear con marked, se restaura después y MathJax tipografía todo.
- **Detección de fallback HTML**: si un servidor devuelve `index.html` con estado 200 para un archivo inexistente (caso típico de `update/`), el loader lo rechaza y usa el archivo original. Sin esta comprobación, `update/` se “cargaba” con el HTML del sitio.
- **Demostraciones colapsables**: los bloques largos se envuelven en `<details>`; los cortos se muestran directamente.
- **Barra de progreso** de lectura en la parte superior.
- **Parallax sutil** en imágenes (factor 0.3, fade-in en viewport).
- **Navegación prev/next** entre secciones: botones en header y enlaces en footer.
- **Impresión**: oculta header, sidebar, tabs, footer y progreso; el contenido pasa a una sola columna.

### Índice lateral

- **Escritorio**: sidebar `sticky` bajo el header, con scroll independiente del documento.
- **Enlace activo**: se calcula con `IntersectionObserver` sobre los `h1`–`h4`. El sidebar solo se desplaza si el enlace activo queda fuera de su área visible; nunca mueve la página.
- **Divisor arrastrable**: al pasar el mouse por el borde derecho aparece un acento; arrastrar ajusta el ancho entre **160 y 380 px** (máximo efectivo: 45 % del viewport).
- **Persistencia del ancho**: se guarda en `localStorage` con la clave `ami-sidebar-width`.
- **Teclado sobre el divisor**: `←`/`→` ajustan 8 px; con `Shift`, 32 px; `Home` restablece el ancho por defecto.
- **Doble clic** sobre el divisor: restablece el ancho por defecto (220 px; 280 px en pantallas ≥1400 px).
- **Colapso en escritorio**: el botón ☰ del header oculta/muestra el índice, actualiza `aria-expanded`, aplica `inert` y `aria-hidden` cuando está oculto, y persiste en `localStorage` con la clave `ami-sidebar-collapsed`.
- **Drawer móvil**: ancho de 280 px, overlay, bloqueo del scroll de fondo, cierre con Escape, overlay o al elegir un apartado; foco inicial en el primer enlace, foco atrapado y retorno al botón al cerrar.
- **Accesibilidad**: `aria-controls`, `aria-expanded`, `aria-hidden`, `inert`, `aria-current="location"` en el enlace activo, `role="separator"` con `aria-valuemin/max/now` en el divisor y foco al heading de destino al navegar.
- **Movimiento reducido**: si el sistema pide `prefers-reduced-motion`, se desactivan scroll suave, transiciones y animaciones.

### Detalles de diseño

- Tipografía Computer Modern Unicode; estilos solo con las dos paletas de `PRODUCT.md`.
- Favicon `‖·‖` en `public/norma.png`, enlazado como `icon` y `apple-touch-icon` en ambas páginas.
- Scrollbars finas tematizadas, selección de texto y caret alineados a la paleta.
- Títulos largos del índice con elipsis y `title` para leerlos completos.
- Estado vacío del índice: «Esta sección no tiene apartados.»

---

## Comportamiento del índice lateral

| Aspecto | Escritorio (>768 px) | Móvil (≤768 px) |
|---|---|---|
| Posición | `sticky` bajo header + progreso | Drawer `fixed` oculto por defecto |
| Ancho | 220 px (280 px ≥1400 px), ajustable 160–380 px | 280 px fijo |
| Scroll | Contenedor propio, independiente de la página | Contenedor propio dentro del drawer |
| Control | Botón ☰ colapsa/muestra; divisor ajusta | Botón ☰ abre/cierra |
| Persistencia | `ami-sidebar-width`, `ami-sidebar-collapsed` | No aplica; el drawer siempre inicia cerrado |
| Cierre | Botón ☰ | Escape, overlay o enlace |
| Foco | Enlace activo con `aria-current` | Primer enlace al abrir; retorno al botón al cerrar |

**Offset de navegación:** 80 px, compartido por el clic del enlace y el `IntersectionObserver`.

---

## Verificación de diseño (próxima sesión)

No hay código nuevo que escribir. La sesión siguiente es una **revisión visual y de interacción**. Orden sugerido:

1. `npm install` (solo si hace falta).
2. `npm run build` — debe terminar sin errores de `tsc` ni de Vite.
3. `npm run preview` — sirve `dist/` en `http://localhost:4173`.
4. Revisar en **1440×1000**, **1024×768**, **768×1024** y **390×844**:
   - El contenido carga desde `teoria/` y `ejercicios/`; la prioridad de `update/` no rompe la carga.
   - MathJax renderiza con conexión a internet. Sin red, el LaTeX queda como texto: es esperado, no un bug.
   - El divisor del sidebar aparece al hacer hover, arrastra, guarda el ancho al recargar y se restablece con doble clic, `Home` o `←`/`→`.
   - El botón ☰ oculta y muestra el índice en escritorio, conserva el estado al recargar y no deja foco atrapado en el sidebar oculto.
   - En móvil: abre el drawer, bloquea el fondo, cierra con Escape/overlay/enlace y devuelve el foco al botón.
   - El enlace activo sigue el scroll; el índice solo se mueve cuando el activo sale de su área visible.
   - Los dos temas se ven correctos y el toggle persiste.
   - Textos largos del índice se truncan con elipsis y muestran tooltip.
5. Pasar `impeccable` si se desea una segunda opinión de diseño:
   ```bash
   .opencode/skills/impeccable/scripts/impeccable context --target src/seccion.ts
   .opencode/skills/impeccable/scripts/impeccable polish src/seccion.ts
   .opencode/skills/impeccable/scripts/impeccable audit src/seccion.ts
   .opencode/skills/impeccable/scripts/impeccable detect --json seccion.html src/components/sidebar.ts src/components/navigation.ts src/styles/sections.css src/styles/responsive.css
   ```
6. Si aparece un problema, corregirlo en `src/components/sidebar.ts`, `src/components/navigation.ts`, `src/styles/sections.css` o `src/styles/responsive.css`. **No editar** los `.md` de `SECCION_x/`.

### Reglas que no se tocan

- No modificar contenido matemático ni reescribir entornos LaTeX.
- No agregar identidad (profesor, autor, audiencia) a la UI.
- UI en español; Computer Modern Unicode; MathJax v3.
- Build debe pasar antes de cualquier push.

---

## Desarrollo local

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # tsc && vite build → dist/
npm run preview    # sirve dist/ en http://localhost:4173
```

El build copia automáticamente `SECCION_1`–`SECCION_11` a `dist/` mediante el plugin `copy-sections` de `vite.config.ts`.

---

## Deploy

- Repo: `gabrielfernando01/Analisis-Matematico-I`.
- Vercel free tier, salida estática `dist/`.
- `vercel.json` conserva el rewrite de `/seccion` → `/seccion.html`.
- Antes de hacer push: `npm run build` sin errores.

---

## Referencias internas

- `AGENTS.md` — reglas duras del proyecto.
- `PRODUCT.md` — propósito, usuarios, temas, tipografía y constraints de diseño.
