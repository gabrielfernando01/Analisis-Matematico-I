# AGENTS.md

## Workspace

```
/home/gabriel/fciencias/2027-1/analisis_matematico/Fco_Javier_Torres/curso_javier_torres/
```

## Estructura de contenido

```
SECCION_x/
├── teoria/       ← .md con teoría + imágenes .webp
├── ejercicios/   ← .md con ejercicios
└── update/       ← Versión actualizada (prioridad sobre teoria/ y ejercicios/)
```

Secciones 1–7 tienen contenido. Secciones 8–11 son marcadores vacíos.

---

## Reglas duras

1. **No modificar contenido matemático.** Los archivos `.md` contienen demostraciones, teoremas y ejercicios. Solo leer y renderizar; nunca reescribir, reformatear ni corregir su contenido, salvo las erratas puntuales registradas en `docs/ERRATAS.md` (ver regla 6).

2. **No agregar identidad.** Ningún nombre de profesor, autor ni etiqueta de audiencia en la UI.

3. **Respetar LaTeX.** Las alineaciones `\begin{aligned}`, `\begin{array}`, `\begin{gathered}` son intencionales. No simplificar ni reescribir entornos matemáticos.

4. **Interfaz en español.** Todo texto de la UI en español. Sin mezcla de idiomas.

5. **Tipografía inamovible.** Computer Modern Unicode es la fuente principal. No sustituir por otra serif ni por sans-serif del sistema.

6. **`update/` tiene prioridad.** Si existe `SECCION_x/update/<archivo>`, ese archivo reemplaza al original en `teoria/` o `ejercicios/`. La lógica de carga ya lo implementa en `src/components/section-loader.ts`. Las erratas y correcciones puntuales (ver `docs/ERRATAS.md`) pueden aplicarse directamente sobre el original o mediante `update/`; ambos caminos son válidos. Si se corrige el original, no debe quedar en `update/` una copia anterior que lo tape.

7. **Responsive obligatorio.** El sitio debe funcionar idénticamente en desktop y Android. Ningún cambio de layout puede romper el modo móvil.

8. **Deploy en Vercel free tier** desde el repo `gabrielfernando01/Analisis-Matematico-I`. La build debe pasar `tsc && vite build` sin errores antes de cualquier push.

9. **MathJax es inamovible.** El renderizador LaTeX es MathJax v3 (CDN). No sustituir por KaTeX ni otro renderizador.

---

## Reglas de renderizado

Fallos ya corregidos; no reintroducirlos. Aplican a **todo** contenido nuevo, incluido el que llegue como captura de pantalla.

10. **El LaTeX reinsertado debe escaparse.** `src/components/section-loader.ts` extrae las fórmulas antes de `marked` y las restaura después. Al restaurar hay que escapar `&` → `&amp;`, `<` → `&lt;`, `>` → `&gt;`. Sin esto, `$\|x-x_0\|<r\}$` produce una etiqueta HTML falsa (`<r\}`), corta el nodo de texto, MathJax pierde el delimitador de cierre y además se come el `</p>`. Nunca insertar LaTeX crudo en el HTML.

11. **`\empty` → `\emptyset`.** `\empty` es un primitivo de TeX, no un símbolo: MathJax lo pinta en rojo. La normalización vive en el macro `macros: { empty: '\\emptyset' }` de `seccion.html`. Si una captura trae `\empty`, se resuelve con ese macro, **nunca** editando el `.md`.

12. **Esperar a MathJax antes de tipografiar.** El bundle del CDN se carga con `async`; `window.MathJax` existe desde la config pero `typesetPromise` no. Hay que esperar `MathJax.startup.promise` (helper `typesetMath()` en `src/seccion.ts`). Comprobar solo `window.MathJax?.typesetPromise` deja la página entera en LaTeX crudo.

13. **Solo imágenes WebP, sin respaldo.** Ninguna imagen `.png` en el repo ni en `public/`. Cualquier imagen nueva (o captura que comparta el usuario) se convierte a WebP con `convert entrada.png -resize '1400x>' -quality 85 -define webp:method=6 salida.webp`, se **borra el original** y se actualiza la referencia (`src="..."` o `![...](...)`) en el `.md`. 1400 px cubre retina en móvil full-bleed; no bajar de ahí sin motivo.

14. **Imágenes ligeras por defecto.** `addSemanticClasses()` añade `loading="lazy"` y `decoding="async"` a todo `<img>`. No quitar esos atributos.

