# ERRATAS

Plantilla para registrar y aplicar correcciones puntuales al contenido del sitio.

No es un historial. Se rellena la tabla con las erratas de una tanda, se aplican los cambios y se vacía para la siguiente tanda.

## Formato de la tabla

| Lugar | Original | Cambio |
|-------|----------|--------|
| § 2. Ejercicios. 2.15 Ejercicio | `\forall x \in \mathbb{R},` | `\forall \; x \in \mathbb{R},` |

- **Lugar**: sección, bloque y referencia. Ejemplos: `§ 2. Encabezado`, `§ 1. Ejercicios. 1.18 Ejercicio`, `§ 3. Teoría. 3.4 Lema`.
- **Original**: copia literal del texto tal como aparece en el `.md`, incluidos LaTeX, espacios y puntuación. Es el texto que se busca y se reemplaza.
- **Cambio**: texto literal que debe quedar en su lugar.
- Una fila equivale a un reemplazo exacto. Si el texto de *Original* aparece varias veces, añadir contexto suficiente para que la coincidencia sea única, o indicar explícitamente que se cambian todas las apariciones.
- Escribir el contenido entre acentos graves (`` ` ``) para que se vean espacios y símbolos. Si el texto contiene `|`, escaparlo como `\|`.

## Procedimiento

1. **Localizar el archivo.** Cada fila corresponde a un único `.md`:
   - Teoría: `SECCION_N/teoria/<fichero>.md`
   - Ejercicios: `SECCION_N/ejercicios/<fichero>.md`
2. **Comprobar `update/`.** Si existe `SECCION_N/update/<misma ruta>`, ese archivo tiene prioridad (regla 6 de `AGENTS.md`). Aplicar allí el cambio. Si se corrige el original, no dejar en `update/` una copia anterior que lo tape.
3. **Reemplazo exacto.** Buscar el texto de *Original* y sustituirlo por *Cambio*. No reformatear el resto del párrafo ni del bloque.
4. **Verificar.** Repetir la búsqueda de *Original* en `SECCION_N/` y confirmar que no queda ninguna coincidencia.
5. **Compilar.** `npm run build` (`tsc && vite build`) debe terminar sin errores antes de publicar (regla 8). La build copia el contenido a `dist/`, que es lo que sirve el sitio.

## Límites

La tabla cubre solo erratas puntuales y no contradice las reglas de `AGENTS.md`:

- **No se reformula contenido matemático** (regla 1). Se corrigen erratas tipográficas, encabezados y LaTeX puntual; no se reescriben enunciados, demostraciones ni ejercicios.
- **No se simplifican ni reescriben** los entornos `aligned`, `array` o `gathered` (regla 3).
- **`\empty` no se edita en el `.md`**: se resuelve con el macro de `seccion.html` (regla 11).
- Si la corrección toca `src/components/section-loader.ts`, el LaTeX reinsertado debe escaparse (`&` → `&amp;`, `<` → `&lt;`, `>` → `&gt;`) (regla 10).
- **Imágenes**: solo WebP a 1400 px, borrando el original y actualizando la referencia en el `.md` (regla 13).
- **Idioma e identidad**: los textos del sitio van en español (regla 4) y sin nombre de autor ni etiqueta de audiencia (regla 2).

## Tabla de trabajo

| Lugar | Original | Cambio |
|-------|----------|--------|
|  |  |  |
