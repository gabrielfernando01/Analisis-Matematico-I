let parallaxObserver: IntersectionObserver | null = null;
let rafId: number | null = null;
let trackedImages: { el: HTMLElement; speed: number }[] = [];

export function initParallax(container: HTMLElement): void {
  // Clean up previous
  cleanup();

  const images = container.querySelectorAll<HTMLElement>('.parallax-image');
  if (images.length === 0) return;

  trackedImages = [];

  // Fade-in observer — reveal images when they enter viewport
  parallaxObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('parallax-hidden');
          entry.target.classList.add('parallax-visible');
        }
      });
    },
    {
      rootMargin: '0px 0px -80px 0px',
      threshold: 0.1,
    }
  );

  images.forEach((img, i) => {
    parallaxObserver!.observe(img);
    // Subtle speed variation per image (0.92–0.97)
    trackedImages.push({ el: img, speed: 0.92 + (i % 3) * 0.025 });
  });

  // Parallax scroll effect — subtle vertical offset
  function onScroll(): void {
    if (rafId !== null) return;
    rafId = requestAnimationFrame(() => {
      rafId = null;
      const scrollY = window.scrollY;

      trackedImages.forEach(({ el, speed }) => {
        const rect = el.getBoundingClientRect();
        const viewportCenter = window.innerHeight / 2;
        const imgCenter = rect.top + rect.height / 2;
        const offset = (imgCenter - viewportCenter) * (1 - speed);

        el.style.transform = `translateY(${offset}px)`;
      });
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  // Store cleanup reference
  (container as any).__parallaxCleanup = () => {
    window.removeEventListener('scroll', onScroll);
    cleanup();
  };
}

function cleanup(): void {
  if (parallaxObserver) {
    parallaxObserver.disconnect();
    parallaxObserver = null;
  }
  if (rafId !== null) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }
  trackedImages = [];
}
