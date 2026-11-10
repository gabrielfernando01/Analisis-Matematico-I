import type { Heading } from './section-loader';

const HEADER_OFFSET = 80;
const ACTIVE_MARGIN = 24;

let activeObserver: IntersectionObserver | null = null;

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function initSidebar(headings: Heading[]): void {
  const nav = document.getElementById('sidebar-nav');
  if (!nav) return;

  teardownTracking();
  nav.innerHTML = '';
  nav.scrollTop = 0;

  if (headings.length === 0) {
    const empty = document.createElement('p');
    empty.className = 'sidebar-empty';
    empty.textContent = 'Esta sección no tiene apartados.';
    nav.appendChild(empty);
    return;
  }

  const fragment = document.createDocumentFragment();

  headings.forEach((heading) => {
    const link = document.createElement('a');
    link.className = 'sidebar-link';
    link.href = `#${heading.id}`;
    link.textContent = heading.text;
    link.title = heading.text;
    link.dataset.level = String(heading.level);
    link.dataset.target = heading.id;

    link.addEventListener('click', (event) => {
      event.preventDefault();
      scrollToHeading(heading.id);
    });

    fragment.appendChild(link);
  });

  nav.appendChild(fragment);

  setupScrollTracking(headings, nav);
}

export function scrollToHeading(id: string): void {
  const target = document.getElementById(id);
  if (!target) return;

  const top = target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });

  // Llevar el foco al destino: útil con teclado y evita dejar el foco
  // dentro del drawer cuando se cierra en móvil.
  target.setAttribute('tabindex', '-1');
  target.focus({ preventScroll: true });
}

function teardownTracking(): void {
  if (activeObserver) {
    activeObserver.disconnect();
    activeObserver = null;
  }
}

function setupScrollTracking(headings: Heading[], nav: HTMLElement): void {
  const links = nav.querySelectorAll<HTMLAnchorElement>('.sidebar-link');
  if (links.length === 0) return;

  activeObserver = new IntersectionObserver(
    (entries) => {
      let topEntry: IntersectionObserverEntry | null = null;

      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        if (!topEntry || entry.boundingClientRect.top < topEntry.boundingClientRect.top) {
          topEntry = entry;
        }
      }

      if (topEntry) setActiveLink(nav, topEntry.target.id);
    },
    {
      rootMargin: `-${HEADER_OFFSET}px 0px -60% 0px`,
      threshold: 0,
    }
  );

  headings.forEach((heading) => {
    const element = document.getElementById(heading.id);
    if (element) activeObserver!.observe(element);
  });
}

function setActiveLink(nav: HTMLElement, id: string): void {
  const links = nav.querySelectorAll<HTMLAnchorElement>('.sidebar-link');

  links.forEach((link) => {
    const isActive = link.dataset.target === id;
    link.classList.toggle('sidebar-link-active', isActive);

    if (isActive) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });

  const activeLink = nav.querySelector<HTMLAnchorElement>('.sidebar-link-active');
  if (activeLink) keepLinkVisible(nav, activeLink);
}

/**
 * Desplaza el índice solo cuando el enlace activo queda fuera de su área
 * visible, y lo hace dentro del propio sidebar para no mover la página.
 */
function keepLinkVisible(nav: HTMLElement, link: HTMLElement): void {
  const navRect = nav.getBoundingClientRect();
  const linkRect = link.getBoundingClientRect();

  const fullyVisible =
    linkRect.top >= navRect.top + ACTIVE_MARGIN &&
    linkRect.bottom <= navRect.bottom - ACTIVE_MARGIN;

  if (fullyVisible) return;

  const targetTop =
    nav.scrollTop +
    (linkRect.top - navRect.top) -
    navRect.height / 2 +
    linkRect.height / 2;

  nav.scrollTo({
    top: Math.max(0, targetTop),
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
  });
}
