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

Content is authored in Markdown with LaTeX math notation in `secciones_markdown/`. The site is deployed on Vercel's free tier from the `gabrielfernando01/Analisis-Matematico-I` GitHub repository. Two content areas exist: `teoria/` (theory sections) and `ejercicios/` (exercises). Content references images (e.g. `conjunto_cantor.png`, `conv_punt_exp^x.png`) that are not yet present in the repository.

## Capabilities and Constraints

- Must render LaTeX math notation flawlessly — display math, inline math, aligned environments, matrices, cases, custom commands (`\mathbb`, `\blacksquare`, `\checkmark`, etc.).
- Content is in Spanish. The interface must be in Spanish.
- Deployed on Vercel free tier; must work as a static or SSR-compatible build.
- Content will grow: new sections and exercises will be added throughout the semester.
- No author name, professor name, or "intended audience" labeling should appear anywhere in the UI.
- Referenced images in the markdown files are not yet in the repository.

## Evidence on Hand

Three markdown files with real course content:
- `secciones_markdown/teoria/teoria_conjuntos.md` — 632 lines, set theory through Cantor set characterization (Theorems 1.1–1.13).
- `secciones_markdown/teoria/convergencia_puntual_uniforme.md` — 600 lines, convergence theory (Definitions 2.1–2.11, including Dini and Weierstrass M-test).
- `secciones_markdown/ejercicios/ejercicios_conjuntos.md` — 1276+ lines, solved exercises for section 1 (Exercises 1.14–1.26+).

No images are present yet despite markdown references to `.png` files.

## Product Principles

1. **Mathematical fidelity first** — every formula, proof, and symbol must render exactly as written; no approximation or degradation of notation.
2. **Navigable depth** — a student should go from the index to any specific theorem or exercise in two clicks or fewer.
3. **Growing content** — the architecture must accommodate new sections and exercises without restructuring.
4. **Distraction-free reading** — the interface recedes behind the mathematics; no clutter, no marketing, no identity signaling.
5. **Works everywhere** — responsive, fast on mobile, no login or paywall.
