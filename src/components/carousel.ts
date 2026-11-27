/**
 * Carousel Marquee — Infinite horizontal scroll of mathematician portraits.
 *
 * Uses CSS-only animation (translateX -50%) over a doubled set of images
 * for a seamless loop. Pauses on hover and disables entirely when the
 * user prefers reduced motion.
 */

interface Mathematician {
  file: string;
  alt: string;
}

const mathematicians: Mathematician[] = [
  { file: 'Augustin_Louis_Cauchy.webp',      alt: 'Augustin Louis Cauchy (1789–1857)' },
  { file: 'Bernard_Johann_Bolzano.webp',     alt: 'Bernard Johann Bolzano (1781–1848)' },
  { file: 'Georg_Cantor.webp',               alt: 'Georg Cantor (1845–1918)' },
  { file: 'Karl_Theodor_Weierstrass.webp',   alt: 'Karl Theodor Weierstraß (1815–1897)' },
  { file: 'Heinrich_Eduard_Heine.webp',      alt: 'Heinrich Eduard Heine (1821–1881)' },
  { file: 'Edouard_Borel.webp',              alt: 'Édouard Borel (1871–1956)' },
  { file: 'Sergei_Bernstein.webp',           alt: 'Sergei Bernstein (1880–1968)' },
  { file: 'Stefan_Banach.webp',              alt: 'Stefan Banach (1892–1945)' },
];

function createPortrait(m: Mathematician): HTMLImageElement {
  const img = document.createElement('img');
  img.src = `/home/mathematicians/${m.file}`;
  img.alt = m.alt;
  img.className = 'marquee-portrait';
  img.loading = 'lazy';
  img.decoding = 'async';
  img.draggable = false;
  return img;
}

export function initCarousel(): void {
  const track = document.getElementById('marquee-track');
  if (!track) return;

  // Duplicate the set for seamless infinite loop
  const fragment = document.createDocumentFragment();
  for (let copy = 0; copy < 2; copy++) {
    for (const m of mathematicians) {
      fragment.appendChild(createPortrait(m));
    }
  }
  track.appendChild(fragment);

  // Respect reduced motion preference
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  function applyMotionPref() {
    if (track) track.style.animationPlayState = mq.matches ? 'paused' : '';
  }
  applyMotionPref();
  mq.addEventListener('change', applyMotionPref);
}
