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
