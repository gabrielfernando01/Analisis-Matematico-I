# REVIEW GLOBAL SITE

Este fichero tiene como objetivo hacer una recapitulación de lo hecho hasta ahora y replantear el futuro del proyecto: `Curso Analisis Matemático I`.

Hasta ahora el fichero `AGENTS.md` funciona de la siguiente manera:

## AGENTS.md

### Jerarquía de instrucciones
Este fichero es la fuente de máxima prioridad. Ante cualquier conflicto
con otras instrucciones o documentos, prevalece lo que diga aquí.

Orden de prioridad:
1. `AGENTS.md` (este fichero): reglas de comportamiento, estilo y límites.
2. `PRODUCT.md`: documentación del producto (objetivos, alcance,
   funcionalidades, decisiones de diseño). Léelo al inicio de cada tarea.
3. Resto de documentación (`docs/`, README, comentarios en código).

### Reglas de resolución
- Si `PRODUCT.md` contradice a este fichero, sigue este fichero y avísame.
- Si algo no está cubierto en ninguno de los dos, pregunta antes de asumir.
- No modifiques `AGENTS.md` ni `PRODUCT.md` sin que yo lo pida.

### Inicio de tarea
Antes de empezar, lee `PRODUCT.md` completo.

Si en este punto algo no esta alineado a este fichero y a la documentación que enconstraste, detente y comentamelo, si todo funciona salvo detalles menores que puedas corregir más adelante continua con este fichero.

## PRODUCT.md

El fichero ya tiene varias reglas que he ocupado y hasta ahora confirmo que funcionan correctamente. Aunque a partir de ahora vamos a replantear algunos puntos.

Hasta ahora el diseño de la página es sobrio, no contiene visualizaciones dinamicas o un diseño sofisticado. Vamos a cambiar esto. ¿En que sentido?.

`PRODUCT.md` va de la mano con `impeccable` la skill instalada, implementada, documentada. Entonces vas a abrir: `public/home/mathematicians` y con las imagenes que estan ahi, vas a crear un carrusel en el encabezado de la pagina tipo maquesina new york, es decir, que dinamica avanzado.

Para le background del resto de la página home usa: `public/home/background_home.webp` el contraste, la tonalidad o transparencia apoyate en `impeccable` para lograr el diseño optimo y elegante.

De hecho todo lo anterior debe calibrarse con los criterios que impeccable debe implementar, es decir, no basta con los que ya estan declarados, debe crear nuevas reglas para ajustar la pagina a un diseño más visual, vintange, elegante matemático, sin perder la estructura ya lograda. Siendo más especifico. Sé que impeccable o incluso el mismo harness puedes echar mano de diseños o plantillas ya elaborados y usarlos para mi sitio, si impeccabel o algun comando tipo `/design` logran darle mas robustez a mi dieño a traves de platilas o previsualizaciones, hay que usarlas pero ocupando el hero de carrusel, y el manuscrito de background que te comparto. Si con las imagenes es suficiente, entonces de cualquier manera todo debe estar documentado en `PRODUCT.md`
