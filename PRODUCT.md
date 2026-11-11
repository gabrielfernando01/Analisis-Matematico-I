# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated: Vite + TypeScript — MathJax v3 para LaTeX (CDN), marked para Markdown → HTML, Computer Modern Unicode para tipografía (CDN), Vanilla CSS con custom properties.

## Users

Estudiantes de Licenciatura en Matemáticas cursando Análisis Matemático I. Estudian en laptop o teléfono, en sesiones de lectura profunda o repaso previo a examen.

## Product Purpose

Sitio de estudio para un curso universitario de Análisis Matemático I. Presenta teoría rigurosa (teoría de conjuntos, cardinalidad, conjunto de Cantor, convergencia puntual y uniforme, criterio M de Weierstrass, teorema de Dini) y ejercicios resueltos. El éxito es que un estudiante pueda encontrar, leer y comprender cualquier sección con notación matemática correcta y legible.

## Product Principles

1. **Fidelidad matemática primero** — cada fórmula, demostración y símbolo debe renderizar exactamente como está escrito.
2. **Profundidad navegable** — del índice a cualquier teorema o ejercicio en dos clics o menos. Los badges Teoría/Ejercicios del índice son enlaces directos a su pestaña.
3. **Lectura sin fricción** — la interfaz retrocede detrás de las matemáticas; sin ruido visual, sin marketing.
4. **Funciona en cualquier lugar** — responsive, rápido en móvil, sin login.

## Operating Mode

**Read** — el visitante comprende algo; la interfaz estructura la comprensión y luego hace que la experiencia de lectura valga la pena quedarse. No es una app de productividad ni un dashboard. Es un documento premium navegable.

## Theme System

Dos temas persistentes con toggle en el header (🌙/☀️), guardados en `localStorage`, respetando `prefers-color-scheme` como default. Sin label de texto — solo ícono.

### Light (default) — papel cálido
- Background: `hsl(42, 30%, 97%)`
- Text: `hsl(42, 12%, 12%)`
- Accent: `hsl(215, 55%, 38%)`
- Ejercicios (verde): `hsl(160, 40%, 28%)` sobre `hsl(160, 25%, 92%)`

### Dark — Tokyo Night
- Background: `#1a1b26`
- Surface: `#24283b`
- Text primary: `#c0caf5`
- Text secondary: `#a9b1d6`
- Text muted: `#565f89`
- Accent blue: `#7aa2f7`
- Accent purple: `#bb9af7`
- Ejercicios (verde): `hsl(166, 55%, 68%)` sobre `rgba(115, 218, 202, 0.12)`
- Border: `#292e42`
- Proof/theorem backgrounds: `#1f2335`

## Typography

- **Serif principal**: Computer Modern Unicode (CDN `dreampulse/computer-modern-web-font`). Inamovible.
- **Base**: 1.125rem, line-height 1.78 — optimizado para lectura de matemáticas densas.
- El diseño debe parecerse a un documento LaTeX compilado, no a un blog.

## Visual Identity

- **Paleta**: solo las dos paletas definidas arriba. Sin colores arbitrarios externos.
- **Sin fotografías** ni imágenes decorativas. Las únicas imágenes son las del contenido matemático (diagramas, gráficas de funciones).
- **Sin gradientes llamativos**. Gradientes solo si son sutiles y sirven a la jerarquía.
- **Sin sombras pesadas**. `--shadow-sm` y `--shadow-md` son el límite.
- **Animaciones**: solo si refuerzan la comprensión o el contexto (reveal staggered del índice, fade-in de contenido, expand de demostraciones). Nada decorativo puro. El feedback de interacción en controles — contorno en su color, realce breve al pasar el cursor y respuesta al pulsar — sí es funcional y permitido.

## Constraints

- Renderizar LaTeX: display math, inline math, aligned, matrices, cases, `\mathbb`, `\blacksquare`, `\checkmark`, `\xleftrightarrow`, etc.
- Contenido en español. UI en español.
- Build estático compatible con Vercel free tier.
- Contenido crece: nuevas secciones y ejercicios se agregan durante el semestre sin reestructurar.
- Las imágenes del markdown cargan desde `SECCION_x/` (paths relativos resueltos en `section-loader.ts`).
