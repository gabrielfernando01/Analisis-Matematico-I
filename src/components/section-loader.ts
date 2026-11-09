import { marked } from 'marked';

// ── Math Extraction ──────────────────────────────
// Protect LaTeX from the markdown parser by replacing
// math blocks with placeholders before parsing.

interface MathExtraction {
  text: string;
  blocks: Map<string, string>;
}

function extractMath(text: string): MathExtraction {
  const blocks = new Map<string, string>();
  let counter = 0;

  // 1. Display math $$...$$ (multi-line, non-greedy)
  text = text.replace(/\$\$([\s\S]*?)\$\$/g, (match) => {
    const key = `%%MATHD${counter++}%%`;
    blocks.set(key, match);
    return key;
  });

  // 2. Inline math $...$ (no newlines, no empty, non-greedy)
  //    Negative lookbehind/ahead for $ prevents matching $$
  text = text.replace(/(?<!\$)\$(?!\$)([^\$\n]+?)\$(?!\$)/g, (match) => {
    const key = `%%MATHI${counter++}%%`;
    blocks.set(key, match);
    return key;
  });

  return { text, blocks };
}

function restoreMath(html: string, blocks: Map<string, string>): string {
  for (const [key, value] of blocks) {
    // The key may appear inside HTML-escaped text, restore it
    html = html.split(key).join(value);
  }
  return html;
}

// ── Image Path Resolution ────────────────────────

function fixImagePaths(html: string, basePath: string): string {
  return html.replace(
    /<img\s+([^>]*?)src="([^"]+)"([^>]*?)>/gi,
    (match, pre, src, post) => {
      if (src.startsWith('http') || src.startsWith('//') || src.startsWith('/')) {
        return match;
      }
      return `<img ${pre}src="/${basePath}/${src}"${post}>`;
    }
  );
}

// ── Semantic Classes ─────────────────────────────

function addSemanticClasses(html: string): string {
  // Theorem-type headings
  html = html.replace(
    /<h2>([\d.]+)\s+(Definición|Definicion)/gi,
    '<h2 class="heading-definition"><span class="heading-number">$1</span> $2'
  );
  html = html.replace(
    /<h2>([\d.]+)\s+(Teorema)/gi,
    '<h2 class="heading-theorem"><span class="heading-number">$1</span> $2'
  );
  html = html.replace(
    /<h2>([\d.]+)\s+(Lema)/gi,
    '<h2 class="heading-lemma"><span class="heading-number">$1</span> $2'
  );
  html = html.replace(
    /<h2>([\d.]+)\s+(Nota)/gi,
    '<h2 class="heading-note"><span class="heading-number">$1</span> $2'
  );

  // Also handle # Teorema (h1 level)
  html = html.replace(
    /<h1>(Teorema[^<]*)/gi,
    '<h1 class="heading-theorem">$1'
  );

  // Add parallax class to images
  html = html.replace(
    /<img /g,
    '<img class="parallax-image parallax-hidden" '
  );

  return html;
}

// ── Proof Block Detection ────────────────────────
//
// Operates on the live DOM after innerHTML injection.
// Scans block-level siblings for a proof-start marker,
// collects elements until a QED symbol is found, then
// decides whether to collapse (long) or leave inline (short).

// Regex that matches a proof-start bold label anywhere in textContent
const PROOF_START_RE = /^\s*(Dem\.|Demostración\.?|Demostraci[oó]n\.?|Prueba\.?|Proof\.?)\s*$/i;
// Minimum child-element count to trigger collapsing
const PROOF_LONG_THRESHOLD = 8;

/**
 * Walk the direct children of `container`, detect proof blocks, and
 * wrap long ones in a <details class="proof-block"> element.
 * Must be called after `container.innerHTML` has been set and
 * before MathJax typesetting (plain-text QED markers are still text nodes).
 */
export function wrapProofs(container: HTMLElement): void {
  // Work on a live NodeList snapshot so we can mutate the DOM
  const children = Array.from(container.children) as HTMLElement[];
  let i = 0;

  while (i < children.length) {
    const el = children[i];

    // A proof starts with a paragraph whose only/first bold child matches
    if (!isProofStart(el)) {
      i++;
      continue;
    }

    // Collect the proof: from el (inclusive) up to and including the QED element
    const startIdx = i;
    let endIdx = i; // at minimum the start paragraph itself

    // Look ahead for QED marker
    for (let j = i; j < children.length; j++) {
      endIdx = j;
      if (hasQED(children[j])) break;
      // Stop if we hit the next theorem/section heading before finding QED
      // (some proofs lack an explicit QED)
      if (j > i && isProofStart(children[j])) {
        endIdx = j - 1;
        break;
      }
    }

    const proofElements = children.slice(startIdx, endIdx + 1);
    const isLong = proofElements.length > PROOF_LONG_THRESHOLD;

    if (isLong) {
      // Wrap in <details>
      const details = document.createElement('details');
      details.className = 'proof-block';

      const summary = document.createElement('summary');
      summary.className = 'proof-summary';
      summary.textContent = 'Demostración';
      details.appendChild(summary);

      const inner = document.createElement('div');
      inner.className = 'proof-inner';

      // ⚠ Capture the reference node BEFORE moving proof elements out of the
      // container.  After appendChild(pe), those elements leave the container,
      // so children[startIdx] would no longer be a child of container and
      // insertBefore would throw a DOMException.
      const referenceNode = children[endIdx + 1] ?? null;

      // Move all proof elements into the inner div
      proofElements.forEach(pe => inner.appendChild(pe));
      details.appendChild(inner);

      // referenceNode is still a child of container (it was not in proofElements)
      container.insertBefore(details, referenceNode);

      // Refresh children snapshot for next iteration
      const newChildren = Array.from(container.children) as HTMLElement[];
      children.splice(0, children.length, ...newChildren);
      // Skip past the newly inserted <details>
      i = newChildren.indexOf(details) + 1;
    } else {
      // Short proof: add a class so CSS can style the start label
      el.classList.add('proof-inline');
      i = endIdx + 1;
    }
  }
}

/** True if el is a paragraph whose first <strong> exactly matches a proof label */
function isProofStart(el: HTMLElement): boolean {
  if (el.tagName !== 'P' && el.tagName !== 'H3' && el.tagName !== 'H4') return false;
  // Check <strong> as first child
  const strong = el.querySelector('strong');
  if (!strong) return false;
  return PROOF_START_RE.test(strong.textContent ?? '');
}

/** True if the element contains a QED marker (■, ▪, or \blacksquare placeholder) */
function hasQED(el: HTMLElement): boolean {
  const text = el.textContent ?? '';
  // Unicode QED squares
  if (text.includes('\u25A0') || text.includes('\u25AA') || text.includes('\u220E')) return true;
  // Plain text \blacksquare that hasn't been typeset yet
  if (text.includes('\\blacksquare')) return true;
  // Math placeholder still present (%%MATHD...%%) containing \blacksquare — unlikely after restore,
  // but keep as safety net
  if (text.includes('blacksquare')) return true;
  return false;
}

// ── Public API ───────────────────────────────────

export async function loadSection(basePath: string, filename: string): Promise<string> {
  const url = `/${basePath}/${filename}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }

  const markdown = await response.text();

  // Pipeline: extract math → parse markdown → restore math → fix paths → add classes
  const { text, blocks } = extractMath(markdown);

  const html = await marked.parse(text, {
    gfm: true,
    breaks: false,
  });

  let result = restoreMath(html, blocks);
  result = fixImagePaths(result, basePath);
  result = addSemanticClasses(result);

  // Note: wrapProofs() is called in seccion.ts after innerHTML injection
  // so it can operate on the live DOM.
  return result;
}

export interface Heading {
  id: string;
  text: string;
  level: number;
}

export function extractHeadings(container: HTMLElement): Heading[] {
  const headings: Heading[] = [];
  const elements = container.querySelectorAll('h1, h2, h3, h4');

  elements.forEach((el, index) => {
    const id = `heading-${index}`;
    el.id = id;
    const text = el.textContent?.trim() || '';
    if (text) {
      headings.push({
        id,
        text,
        level: parseInt(el.tagName.charAt(1), 10),
      });
    }
  });

  return headings;
}
