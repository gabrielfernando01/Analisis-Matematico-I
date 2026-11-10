/**
 * Comportamiento del índice lateral:
 *  - Escritorio: ancho ajustable con divisor, persistido en localStorage.
 *  - Escritorio: botón para ocultar/mostrar el índice, también persistido.
 *  - Móvil: drawer con overlay, Escape, bloqueo de scroll y foco atrapado.
 */

const MOBILE_QUERY = '(max-width: 768px)';
const WIDE_QUERY = '(min-width: 1400px)';
const MIN_WIDTH = 160;
const MAX_WIDTH = 380;
const LS_WIDTH = 'ami-sidebar-width';
const LS_COLLAPSED = 'ami-sidebar-collapsed';

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

function readWidth(): number | null {
  try {
    const raw = localStorage.getItem(LS_WIDTH);
    if (!raw) return null;
    const value = Number.parseInt(raw, 10);
    return Number.isFinite(value) ? value : null;
  } catch {
    return null;
  }
}

function hasStoredWidth(): boolean {
  return readWidth() !== null;
}

function readCollapsed(): boolean {
  try {
    return localStorage.getItem(LS_COLLAPSED) === '1';
  } catch {
    return false;
  }
}

function store(key: string, value: string): void {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* almacenamiento no disponible */
  }
}

export function initSidebarChrome(): void {
  const layout = document.getElementById('section-layout');
  const shell = document.getElementById('sidebar-shell');
  const sidebar = document.getElementById('sidebar');
  const nav = document.getElementById('sidebar-nav');
  const resizer = document.getElementById('sidebar-resizer');
  const toggle = document.getElementById('sidebar-toggle') as HTMLButtonElement | null;
  const overlay = document.getElementById('sidebar-overlay');

  if (!layout || !shell || !sidebar || !nav || !resizer || !toggle || !overlay) {
    return;
  }

  const mobile = window.matchMedia(MOBILE_QUERY);
  const wide = window.matchMedia(WIDE_QUERY);

  let drawerOpen = false;
  let desktopCollapsed = readCollapsed();
  let desktopWidth = readWidth() ?? defaultWidth();

  function defaultWidth(): number {
    return wide.matches ? 280 : 220;
  }

  function clampWidth(width: number): number {
    const viewportMax = Math.max(
      MIN_WIDTH,
      Math.min(MAX_WIDTH, Math.round(window.innerWidth * 0.45))
    );
    return Math.round(clamp(width, MIN_WIDTH, viewportMax));
  }

  function applyWidth(width: number): void {
    if (mobile.matches) return;
    desktopWidth = clampWidth(width);
    shell!.style.width = `${desktopWidth}px`;
    resizer!.setAttribute('aria-valuenow', String(desktopWidth));
  }

  function persistWidth(): void {
    store(LS_WIDTH, String(desktopWidth));
  }

  function persistCollapsed(): void {
    store(LS_COLLAPSED, desktopCollapsed ? '1' : '0');
  }

  function syncMode(): void {
    if (mobile.matches) {
      layout!.classList.remove('sidebar-collapsed');
      shell!.style.removeProperty('width');
      shell!.classList.toggle('sidebar-open', drawerOpen);
      shell!.setAttribute('aria-hidden', String(!drawerOpen));
      shell!.inert = !drawerOpen;
      overlay!.classList.toggle('visible', drawerOpen);
      document.body.classList.toggle('drawer-open', drawerOpen);
      toggle!.setAttribute('aria-expanded', String(drawerOpen));
      toggle!.setAttribute(
        'aria-label',
        drawerOpen ? 'Ocultar índice de la sección' : 'Mostrar índice de la sección'
      );
      return;
    }

    drawerOpen = false;
    shell!.classList.remove('sidebar-open');
    shell!.setAttribute('aria-hidden', String(desktopCollapsed));
    shell!.inert = desktopCollapsed;
    overlay!.classList.remove('visible');
    document.body.classList.remove('drawer-open');

    layout!.classList.toggle('sidebar-collapsed', desktopCollapsed);

    if (desktopCollapsed) {
      shell!.style.removeProperty('width');
    } else {
      applyWidth(desktopWidth);
    }

    const expanded = !desktopCollapsed;
    toggle!.setAttribute('aria-expanded', String(expanded));
    toggle!.setAttribute(
      'aria-label',
      expanded ? 'Ocultar índice de la sección' : 'Mostrar índice de la sección'
    );
  }

  function openDrawer(focusFirst: boolean): void {
    drawerOpen = true;
    syncMode();
    if (!focusFirst) return;
    const first = nav!.querySelector<HTMLAnchorElement>('.sidebar-link');
    (first ?? nav!).focus({ preventScroll: true });
  }

  function closeDrawer(restoreFocus: boolean): void {
    if (!drawerOpen) return;
    if (restoreFocus) toggle!.focus({ preventScroll: true });
    drawerOpen = false;
    syncMode();
  }

  // ── Botón del header ─────────────────────────

  toggle.addEventListener('click', () => {
    if (mobile.matches) {
      if (drawerOpen) closeDrawer(true);
      else openDrawer(true);
      return;
    }

    desktopCollapsed = !desktopCollapsed;
    persistCollapsed();
    syncMode();
    toggle.setAttribute('aria-expanded', String(!desktopCollapsed));
  });

  overlay.addEventListener('click', () => closeDrawer(true));

  // Cerrar el drawer al elegir un apartado
  nav.addEventListener('click', (event) => {
    const link = (event.target as HTMLElement).closest('.sidebar-link');
    if (link && mobile.matches && drawerOpen) closeDrawer(false);
  });

  // ── Teclado: Escape y foco atrapado en móvil ──

  document.addEventListener('keydown', (event) => {
    if (!mobile.matches || !drawerOpen) return;

    if (event.key === 'Escape') {
      event.preventDefault();
      closeDrawer(true);
      return;
    }

    if (event.key !== 'Tab') return;

    const focusables = Array.from(
      shell!.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
    ).filter((element) => element.getClientRects().length > 0);

    if (focusables.length === 0) return;

    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    const active = document.activeElement;

    if (event.shiftKey && (active === first || !shell!.contains(active))) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && (active === last || !shell!.contains(active))) {
      event.preventDefault();
      first.focus();
    }
  });

  // ── Divisor arrastrable (solo escritorio) ─────

  let dragPointer: number | null = null;
  let dragStartX = 0;
  let dragStartWidth = 0;

  resizer.addEventListener('pointerdown', (event) => {
    if (mobile.matches || event.button !== 0) return;

    dragPointer = event.pointerId;
    dragStartX = event.clientX;
    dragStartWidth = shell.getBoundingClientRect().width;

    try {
      resizer.setPointerCapture(event.pointerId);
    } catch {
      /* el puntero ya no está activo */
    }

    document.body.classList.add('resizing-sidebar');
    event.preventDefault();
  });

  resizer.addEventListener('pointermove', (event) => {
    if (dragPointer === null || event.pointerId !== dragPointer) return;
    applyWidth(dragStartWidth + (event.clientX - dragStartX));
  });

  function endDrag(event: PointerEvent): void {
    if (dragPointer === null || event.pointerId !== dragPointer) return;
    dragPointer = null;
    document.body.classList.remove('resizing-sidebar');
    if (resizer!.hasPointerCapture(event.pointerId)) {
      resizer!.releasePointerCapture(event.pointerId);
    }
    persistWidth();
  }

  resizer.addEventListener('pointerup', endDrag);
  resizer.addEventListener('pointercancel', endDrag);

  resizer.addEventListener('dblclick', () => {
    if (mobile.matches) return;
    applyWidth(defaultWidth());
    persistWidth();
  });

  resizer.addEventListener('keydown', (event) => {
    if (mobile.matches) return;

    const step = event.shiftKey ? 32 : 8;

    if (event.key === 'ArrowLeft') {
      applyWidth(desktopWidth - step);
    } else if (event.key === 'ArrowRight') {
      applyWidth(desktopWidth + step);
    } else if (event.key === 'Home') {
      applyWidth(defaultWidth());
    } else {
      return;
    }

    persistWidth();
    event.preventDefault();
  });

  // ── Cambios de breakpoint ─────────────────────

  mobile.addEventListener('change', () => {
    drawerOpen = false;
    syncMode();
  });

  wide.addEventListener('change', () => {
    if (mobile.matches || hasStoredWidth()) return;
    desktopWidth = defaultWidth();
    applyWidth(desktopWidth);
  });

  syncMode();
}
