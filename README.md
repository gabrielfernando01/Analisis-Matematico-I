# README — Análisis Matemático I

## Descripción

Sitio web tipo curso para Análisis Matemático I. Navegación lineal por secciones, cada una con teoría y ejercicios.

## Estado actual del proyecto

El código fuente está **completo y compila sin errores** (`tsc --noEmit` ✅). Falta verificar en navegador y hacer deploy.

### Stack

- **Vite + TypeScript** — `index.html` (Home) + `seccion.html` (Sección, con `?id=N&tab=teoria|ejercicios`)
- **MathJax v3** (CDN) — renderiza LaTeX
- **marked** (npm) — parsea Markdown → HTML
- **Computer Modern Unicode** (CDN) — tipografía LaTeX
- **Vanilla CSS** — sistema de diseño con custom properties

### Archivos fuente

```
index.html                          ← Home + Índice
seccion.html                        ← Página de sección (tabs teoría/ejercicios)
src/
├── main.ts                         ← Lógica del Home
├── seccion.ts                      ← Orquestador de sección: URL, tabs, carga, MathJax
├── data/sections.ts                ← Registro de las 11 secciones (paths, títulos)
├── components/
│   ├── section-loader.ts           ← Pipeline: extractMath → marked → restoreMath → fixPaths
│   ├── navigation.ts               ← Sidebar con scroll tracking (IntersectionObserver)
│   ├── image-parallax.ts           ← Parallax sutil + fade-in en imágenes
│   └── progress.ts                 ← Barra de progreso de lectura
└── styles/
    ├── main.css                    ← Variables, reset, base, browser theming
    ├── typography.css              ← CMU fonts, headings, body text
    ├── math.css                    ← MathJax overrides, theorem headings
    ├── sections.css                ← Home index, section layout, tabs, sidebar
    └── responsive.css              ← Mobile drawer, math scroll, print
```

### Contenido (no modificar)

```
SECCION_x/
├── teoria/           ← .md con teoría + imágenes .png
├── ejercicios/       ← .md con ejercicios
└── update/           ← Versiones actualizadas (prioridad sobre los originales)
```

Secciones 1–7 tienen contenido. Secciones 8–11 se llenarán conforme avance el curso.

---

## QUÉ DEBE HACER EL AGENTE

### Paso 1: Verificar build

```bash
npm run build
```

Si hay errores, corregirlos. Si compila, continuar.

### Paso 2: Probar en navegador

```bash
npm run dev
```

Verificar:
1. El **índice** carga con las 11 secciones y animación staggered
2. Click en sección → carga `seccion.html?id=N&tab=teoria`
3. **LaTeX** renderiza correctamente: `\begin{aligned}`, `\begin{array}`, `\begin{gathered}`, `$...$`, `$$...$$`
4. **Imágenes** cargan desde `SECCION_x/teoria/` con efecto parallax
5. **Tabs** teoría/ejercicios funcionan
6. **Sidebar** muestra headings y trackea scroll
7. **Responsive**: sidebar colapsa en móvil
8. **Navegación** prev/next entre secciones

### Paso 3: Implementar demostraciones desplegables

> [!IMPORTANT]
> **Las demostraciones largas deben ser desplegables (collapsible).** Las demostraciones cortas se muestran en primer plano directamente.

El markdown usa estos patrones para demostraciones:
- `**Dem.**` o `**Demostración**` o `**Demostración.**` inician una demostración
- `$\blacksquare$` o `■` o `▪` terminan una demostración

La lógica debe:
1. Detectar bloques de demostración en el HTML renderizado
2. Si la demostración es **corta** (≤ ~8 líneas/elementos): mostrar directamente
3. Si la demostración es **larga** (> ~8 líneas/elementos): envolver en `<details><summary>Demostración ▸</summary>...</details>` o equivalente con animación suave
4. El usuario puede expandir/colapsar con click

Implementar en `src/components/section-loader.ts` (post-procesamiento del HTML) y agregar estilos en `src/styles/math.css`.

### Paso 4: Ajustar CSS/TS

Corregir cualquier problema visual encontrado en la prueba.

### Paso 5: Deploy a Vercel

El sitio se despliega en Vercel free tier desde `gabrielfernando01/Analisis-Matematico-I`.

### Paso 6: Polish

Usar el skill **impeccable** (`critique` o `audit`) para revisión final de diseño.

---

## Reglas duras

Lee `AGENTS.md` para las reglas completas. Resumen:

1. **No modificar contenido matemático** de los `.md`
2. **No agregar nombres** de autores ni audiencia
3. **Respetar formato LaTeX** — alineaciones verticales son intencionales
4. **Interfaz en español**
5. **Tipografía Computer Modern Unicode** — debe parecer un documento LaTeX
6. **Imágenes embebidas** con efecto parallax sutil
7. **Contenido actualizable** — `update/` tiene prioridad
8. **Responsive** — desktop y Android
9. **Deploy** en Vercel free tier

---

## Diseño

- **PRODUCT.md** — contexto del producto
- **Modo Read** — la interfaz retrocede detrás de las matemáticas
- Paleta: fondo cálido papel `hsl(42,30%,97%)` + azul académico `hsl(215,55%,38%)`
- Tipografía: Computer Modern Unicode desde CDN
- Animación: reveal staggered en home (único momento autoral)
- Parallax: imágenes con factor 0.92–0.97