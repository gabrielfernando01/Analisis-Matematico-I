# AGENTS.md

## Ruta de trabajo

El workspace raíz del proyecto es:

```
/home/gabriel/fciencias/2027-1/analisis_matematico/Fco_Javier_Torres/curso_javier_torres/
```

## Estructura del contenido

```
SECCION_x/
├── teoria/           ← Archivos .md con teoría + imágenes .png
├── ejercicios/       ← Archivos .md con ejercicios
└── update/           ← Versiones actualizadas de los .md (prioridad sobre los originales)
```

Las secciones con contenido son SECCION_1 a SECCION_7. Las secciones 8–11 se llenarán conforme avance el curso.

## Reglas duras

1. **No modificar el contenido matemático.** Los archivos `.md` del usuario contienen demostraciones, teoremas y ejercicios que NO deben alterarse. Solo leer y renderizar.
2. **No agregar nombres de autores ni audiencia.** Ningún nombre de profesor, autor, o etiqueta de "audiencia" debe aparecer en la UI.
3. **Respetar el formato LaTeX.** Las alineaciones verticales (`\begin{aligned}`, `\begin{array}`, `\begin{gathered}`) son intencionales y deben renderizarse fielmente.
4. **Interfaz en español.** Todo el texto de la interfaz debe estar en español.
5. **Prioridad tipográfica.** La tipografía debe parecer un documento LaTeX. Usar Computer Modern Unicode como fuente principal.
6. **Imágenes embebidas.** Las imágenes de cada sección deben estar embebidas en el HTML, con efecto parallax sutil al scroll.
7. **Contenido actualizable.** Si existe un archivo en `SECCION_x/update/`, tiene prioridad sobre el archivo original en `SECCION_x/teoria/` o `SECCION_x/ejercicios/`.
8. **Responsive.** La página debe funcionar idénticamente en desktop y Android.
9. **Deploy.** El sitio se despliega en Vercel free tier desde el repo `gabrielfernando01/Analisis-Matematico-I`.

---

## Estado del proyecto (última actualización: 2026-11-09)

### ✅ Completado

1. **Build verificado** — `npm run build` (`tsc && vite build`) compila sin errores.
2. **Demostraciones desplegables** — Implementado en `src/components/section-loader.ts` (función `wrapProofs`) y estilos en `src/styles/math.css`. Detecta `**Dem.**`, `**Demostración**`, etc., y envuelve las largas (>8 elementos) en `<details>` colapsable con animación suave.
3. **Bug `wrapProofs` corregido** — Se corrigió un `DOMException` por referencia a nodo ya movido (`insertBefore`). Fix: capturar `referenceNode` antes de mover elementos.
4. **CSS animations fix** — Se reemplazaron `var()` en `animation` shorthands con valores literales para compatibilidad cross-browser.
5. **MathJax `\xleftrightarrow` fix** — Se agregaron paquetes `mathtools` y `extpfeil` a MathJax en `seccion.html`.
6. **Sidebar ajustado** — Reducido de 260px a 220px, ahora es `resize: horizontal` con rango 160px–320px.
7. **Vercel config** — Creado `vercel.json` con `framework: vite`, `installCommand: npm install`, `outputDirectory: dist`.

### 🔲 Pendiente — preguntar al usuario qué priorizar

> [!IMPORTANT]
> **Antes de continuar, pregunta al usuario** qué quiere hacer primero de la siguiente lista:

1. **🎨 Dark Tokyo Night theme** — Documentado en `PRODUCT.md` § Theme System con paleta completa. Falta implementar:
   - Tokens CSS en `main.css` dentro de `[data-theme="dark"]`
   - Componente toggle button (🌙/☀️) en header de ambas páginas
   - Lógica JS: `localStorage` + `prefers-color-scheme` como default
   - Adaptar MathJax rendering al tema oscuro

2. **🎨 Diseño visual (UX/UI)** — El usuario reportó que el diseño es "genérico". Usar el skill **impeccable** para mejorar:
   - Ejecutar `impeccable critique` para diagnóstico completo
   - Luego aplicar comandos sugeridos (`bolder`, `colorize`, `typeset`, `layout`, etc.)
   - El modo del sitio es **Read** (la interfaz retrocede detrás de las matemáticas)

3. **🚀 Deploy a Vercel** — Ya existe `vercel.json`. El último push falló con exit 127 (faltaba framework config). Ya se corrigió. Falta hacer push y verificar que el build pase en Vercel.

4. **🐛 Verificar en navegador** — Probar manualmente en `npm run dev`:
   - Índice carga con las 11 secciones y animación staggered
   - LaTeX renderiza correctamente
   - Tabs teoría/ejercicios funcionan
   - Sidebar trackea scroll
   - Responsive en móvil
   - Navegación prev/next

### Bugs conocidos

- **`\xleftrightarrow`** — Corregido en `seccion.html` (paquetes `mathtools` + `extpfeil`), pero **no se ha verificado visualmente** que ahora renderice bien.
- **`--proof-bg` CSS variable** — Usada en `.proof-block` pero posiblemente no definida en `main.css`. Verificar que exista.
- **Animaciones CSS** — Se cambiaron de `var()` a valores literales. Pendiente verificar visualmente que las animaciones staggered del home funcionen.

### Notas para el agente

- **NO hay procesos corriendo.** El servidor de desarrollo fue detenido. Si necesitas probar, ejecuta `npm run dev`.
- El skill **impeccable** ya tiene `PRODUCT.md` configurado. El contexto se cargó con `impeccable context`. Para la siguiente sesión, volver a ejecutar `impeccable context` antes de usar comandos impeccable.
- El archivo `README.md` tiene los pasos originales del flujo. Los pasos 1-3 están completados. Pendientes: 4 (verificar navegador), 5 (deploy), 6 (polish con impeccable).
