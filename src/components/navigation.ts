import type { Heading } from './section-loader';

let activeObserver: IntersectionObserver | null = null;

export function initSidebar(headings: Heading[]): void {
  const nav = document.getElementById('sidebar-nav');
  if (!nav) return;

  // Clear previous
  nav.innerHTML = '';

  if (headings.length === 0) return;

  // Build links
  const fragment = document.createDocumentFragment();

  headings.forEach((heading) => {
    const link = document.createElement('a');
    link.className = 'sidebar-link';
    link.href = `#${heading.id}`;
    link.textContent = heading.text;
    link.dataset.level = String(heading.level);
    link.dataset.target = heading.id;

    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById(heading.id);
      if (target) {
        const headerOffset = 70; // header height + padding
        const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });

    fragment.appendChild(link);
  });

  nav.appendChild(fragment);

  // Set up scroll-linked active tracking
  setupScrollTracking(headings);
}

function setupScrollTracking(headings: Heading[]): void {
  // Clean up previous observer
  if (activeObserver) {
    activeObserver.disconnect();
    activeObserver = null;
  }

  const links = document.querySelectorAll<HTMLAnchorElement>('.sidebar-link');
  if (links.length === 0) return;

  const headerHeight = 80;

  activeObserver = new IntersectionObserver(
    (entries) => {
      // Find the topmost visible heading
      let topEntry: IntersectionObserverEntry | null = null;

      for (const entry of entries) {
        if (entry.isIntersecting) {
          if (!topEntry || entry.boundingClientRect.top < topEntry.boundingClientRect.top) {
            topEntry = entry;
          }
        }
      }

      if (topEntry) {
        const activeId = topEntry.target.id;
        links.forEach((link) => {
          link.classList.toggle('sidebar-link-active', link.dataset.target === activeId);
        });

        // Scroll the active link into view in the sidebar
        const activeLink = document.querySelector('.sidebar-link-active');
        if (activeLink) {
          activeLink.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }
      }
    },
    {
      rootMargin: `-${headerHeight}px 0px -60% 0px`,
      threshold: 0,
    }
  );

  headings.forEach((heading) => {
    const el = document.getElementById(heading.id);
    if (el) activeObserver!.observe(el);
  });
}
