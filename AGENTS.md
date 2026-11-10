# AGENTS.md

## Workspace

```
/home/gabriel/fciencias/2027-1/analisis_matematico/Fco_Javier_Torres/curso_javier_torres/
```

## Estructura de contenido

```
SECCION_x/
├── teoria/       ← .md con teoría + imágenes .png
├── ejercicios/   ← .md con ejercicios
└── update/       ← Versión actualizada (prioridad sobre teoria/ y ejercicios/)
```

Secciones 1–7 tienen contenido. Secciones 8–11 son marcadores vacíos.

---

## Reglas duras

1. **No modificar contenido matemático.** Los archivos `.md` contienen demostraciones, teoremas y ejercicios. Solo leer y renderizar. Nunca reescribir, reformatear ni corregir su contenido.

2. **No agregar identidad.** Ningún nombre de profesor, autor ni etiqueta de audiencia en la UI.

3. **Respetar LaTeX.** Las alineaciones `\begin{aligned}`, `\begin{array}`, `\begin{gathered}` son intencionales. No simplificar ni reescribir entornos matemáticos.

4. **Interfaz en español.** Todo texto de la UI en español. Sin mezcla de idiomas.

5. **Tipografía inamovible.** Computer Modern Unicode es la fuente principal. No sustituir por otra serif ni por sans-serif del sistema.

6. **`update/` tiene prioridad.** Si existe `SECCION_x/update/<archivo>`, ese archivo reemplaza al original en `teoria/` o `ejercicios/`. La lógica de carga ya lo implementa en `src/components/section-loader.ts`.

7. **Responsive obligatorio.** El sitio debe funcionar idénticamente en desktop y Android. Ningún cambio de layout puede romper el modo móvil.

8. **Deploy en Vercel free tier** desde el repo `gabrielfernando01/Analisis-Matematico-I`. La build debe pasar `tsc && vite build` sin errores antes de cualquier push.

9. **MathJax es inamovible.** El renderizador LaTeX es MathJax v3 (CDN). No sustituir por KaTeX ni otro renderizador.
