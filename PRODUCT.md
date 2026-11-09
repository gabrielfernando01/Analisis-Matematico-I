# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated: Vite + TypeScript — chosen for dynamic interactivity with TypeScript and best-in-class dev experience. MathJax for LaTeX rendering (chosen by user for maximum LaTeX compatibility over speed).

## Users

Undergraduate mathematics students studying Mathematical Analysis I (Licenciatura en Matemáticas, 2027 cohort). They use the site to study theory and work through exercises, typically on laptops or phones, during study sessions or before exams.

## Product Purpose

A study companion site for an undergraduate Mathematical Analysis I course. It presents rigorous theory (set theory, cardinality, Cantor set, pointwise and uniform convergence, Weierstrass M-test, Dini's theorem) and solved exercises in a clean, navigable format with properly rendered mathematical notation. Success means a student can quickly find, read, and understand any section of the course material with correct and beautiful math typesetting.

## Operating Context

Content is authored in Markdown with LaTeX math notation in `SECCION_x/teoria/` and `SECCION_x/ejercicios/`. The site is deployed on Vercel's free tier from the `gabrielfernando01/Analisis-Matematico-I` GitHub repository. Content in `SECCION_x/update/` overrides the original files. Content references images (e.g. `conjunto_cantor.png`, `conv_punt_exp^x.png`) that live alongside the `.md` files.

## Capabilities and Constraints

- Must render LaTeX math notation flawlessly — display math, inline math, aligned environments, matrices, cases, custom commands (`\mathbb`, `\blacksquare`, `\checkmark`, `\xleftrightarrow`, etc.).
- Content is in Spanish. The interface must be in Spanish.
- Deployed on Vercel free tier; must work as a static or SSR-compatible build.
- Content will grow: new sections and exercises will be added throughout the semester.
- No author name, professor name, or "intended audience" labeling should appear anywhere in the UI.
- Referenced images in the markdown files must load from their respective `SECCION_x/` directories.

## Evidence on Hand

Eleven sections planned (SECCION_1 through SECCION_11). Sections 1–7 have content. Sections 8–11 are placeholders that will fill as the course progresses.

## Product Principles

1. **Mathematical fidelity first** — every formula, proof, and symbol must render exactly as written; no approximation or degradation of notation.
2. **Navigable depth** — a student should go from the index to any specific theorem or exercise in two clicks or fewer.
3. **Growing content** — the architecture must accommodate new sections and exercises without restructuring.
4. **Distraction-free reading** — the interface recedes behind the mathematics; no clutter, no marketing, no identity signaling.
5. **Works everywhere** — responsive, fast on mobile, no login or paywall.

## Theme System

The site must support two themes switchable via a persistent toggle button in the header:

### Light (default)
- Background: `hsl(42, 30%, 97%)` — warm paper
- Text: `hsl(42, 12%, 12%)`
- Accent: `hsl(215, 55%, 38%)` — academic blue

### Dark — Tokyo Night
- Background: `#1a1b26` — deep navy
- Surface: `#24283b`
- Text primary: `#c0caf5`
- Text secondary: `#a9b1d6`
- Text muted: `#565f89`
- Accent blue: `#7aa2f7`
- Accent purple: `#bb9af7`
- Border: `#292e42`
- Proof/theorem backgrounds: `#1f2335`

The toggle button must:
- Sit in the top-right of every page header (home and section pages)
- Use a moon 🌙 icon for dark mode and a sun ☀️ icon for light mode
- Persist the selection in `localStorage` across page navigations
- Respect `prefers-color-scheme` as the initial default
- Never display a label text — icon only

## UX Design Direction

> **Estado: NO IMPLEMENTADO.** El diseño actual es genérico (fondo blanco plano, sin carácter visual). El usuario pidió mejorar el diseño alineado a UX. Usar el skill **impeccable** (modo **Read**) para diagnosticar y mejorar.

Directrices del usuario:
- El diseño NO debe ser un MVP genérico. Debe sentirse premium y cuidado.
- Usar **impeccable** para critique → luego aplicar las mejoras recomendadas.
- El modo del sitio es **Read** — "the visitor understands something; structure for comprehension, then make the reading experience worth staying in."
- La paleta Tokyo Night dark y la paleta cálida light son las dos identidades visuales. No mezclar con otros colores arbitrarios.
- Tipografía Computer Modern Unicode es inamovible.
