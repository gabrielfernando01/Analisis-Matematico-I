import './styles/main.css';
import { sections, getSectionById, getAdjacentSections } from './data/sections';
import type { Section, SectionContent } from './data/sections';
import { loadSection, extractHeadings, wrapProofs } from './components/section-loader';
import { initSidebar } from './components/navigation';
import { initParallax } from './components/image-parallax';
import { initProgress } from './components/progress';
import { initTheme } from './components/theme';

// ── State ──────────────────────────────────────

let currentSection: Section | null = null;
let currentTab: 'teoria' | 'ejercicios' = 'teoria';

// ── DOM refs ───────────────────────────────────

const navTitle     = document.getElementById('nav-title')!;
const navPrev      = document.getElementById('nav-prev') as HTMLButtonElement;
const navNext      = document.getElementById('nav-next') as HTMLButtonElement;
const tabTeoria    = document.getElementById('tab-teoria') as HTMLButtonElement;
const tabEjercicios = document.getElementById('tab-ejercicios') as HTMLButtonElement;
const contentBody  = document.getElementById('content-body')!;
const footerPrev   = document.getElementById('footer-prev') as HTMLAnchorElement;
const footerNext   = document.getElementById('footer-next') as HTMLAnchorElement;
const sidebar      = document.getElementById('sidebar')!;
const sidebarToggle = document.getElementById('sidebar-toggle')!;
const sidebarOverlay = document.getElementById('sidebar-overlay')!;

// ── URL Parsing ────────────────────────────────

function parseURL(): { id: number; tab: 'teoria' | 'ejercicios' } {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id') || '1', 10);
  const tab = params.get('tab') === 'ejercicios' ? 'ejercicios' : 'teoria';
  return { id, tab };
}

function updateURL(id: number, tab: string): void {
  const url = new URL(window.location.href);
  url.searchParams.set('id', String(id));
  url.searchParams.set('tab', tab);
  window.history.replaceState(null, '', url.toString());
}

// ── Navigation ─────────────────────────────────

function setupNavigation(section: Section): void {
  navTitle.textContent = `§\u2009${section.id} — ${section.title}`;
  document.title = `${section.title} — Análisis Matemático I`;

  const meta = document.querySelector('meta[name="description"]');
  if (meta && section.description) {
    meta.setAttribute('content', `${section.title}: ${section.description}`);
  }

  const { prev, next } = getAdjacentSections(section.id);

  // Top nav buttons
  navPrev.disabled = !prev;
  navNext.disabled = !next;

  navPrev.onclick = () => {
    if (prev) window.location.href = `/seccion.html?id=${prev.id}&tab=teoria`;
  };
  navNext.onclick = () => {
    if (next) window.location.href = `/seccion.html?id=${next.id}&tab=teoria`;
  };

  // Footer nav links
  if (prev) {
    footerPrev.href = `/seccion.html?id=${prev.id}&tab=teoria`;
    footerPrev.textContent = `← §\u2009${prev.id} ${prev.title}`;
    footerPrev.classList.remove('hidden');
  } else {
    footerPrev.classList.add('hidden');
  }

  if (next) {
    footerNext.href = `/seccion.html?id=${next.id}&tab=teoria`;
    footerNext.textContent = `§\u2009${next.id} ${next.title} →`;
    footerNext.classList.remove('hidden');
  } else {
    footerNext.classList.add('hidden');
  }
}

// ── Tabs ───────────────────────────────────────

function setupTabs(section: Section): void {
  // Enable/disable tabs based on available content
  tabTeoria.disabled = !section.teoria;
  tabEjercicios.disabled = !section.ejercicios;

  function setActive(tab: 'teoria' | 'ejercicios'): void {
    currentTab = tab;
    tabTeoria.classList.toggle('active', tab === 'teoria');
    tabEjercicios.classList.toggle('active', tab === 'ejercicios');
    updateURL(section.id, tab);
    loadContent(section, tab);
  }

  tabTeoria.onclick = () => { if (section.teoria) setActive('teoria'); };
  tabEjercicios.onclick = () => { if (section.ejercicios) setActive('ejercicios'); };
}

// ── Content Loading ────────────────────────────

async function loadContent(section: Section, tab: 'teoria' | 'ejercicios'): Promise<void> {
  const content: SectionContent | null = tab === 'teoria' ? section.teoria : section.ejercicios;

  if (!content) {
    contentBody.innerHTML = `
      <div class="content-error">
        <strong>Contenido no disponible</strong>
        Esta sección aún no tiene ${tab === 'teoria' ? 'teoría' : 'ejercicios'}.
      </div>`;
    return;
  }

  contentBody.innerHTML = '<div class="content-loading">Cargando contenido…</div>';

  try {
    // Try update/ directory first, then original
    let html: string;
    try {
      html = await loadSection(`SECCION_${section.id}/update`, content.filename);
    } catch {
      html = await loadSection(content.path, content.filename);
    }

    contentBody.innerHTML = html;

    // Wrap proof blocks (long ones become collapsible <details>)
    // Must run before MathJax so \blacksquare is still plain text.
    wrapProofs(contentBody);

    // Force re-trigger fade-in animation
    contentBody.style.animation = 'none';
    contentBody.offsetHeight; // reflow
    contentBody.style.animation = '';

    // Typeset math with MathJax
    if ((window as any).MathJax?.typesetPromise) {
      await (window as any).MathJax.typesetPromise([contentBody]);
    }

    // Build sidebar from headings
    const headings = extractHeadings(contentBody);
    initSidebar(headings);

    // Init parallax for images
    initParallax(contentBody);

    // Scroll to top of content
    window.scrollTo({ top: 0 });

  } catch (err) {
    contentBody.innerHTML = `
      <div class="content-error">
        <strong>Error al cargar el contenido</strong>
        No se pudo cargar el archivo. Verifica tu conexión e inténtalo de nuevo.
      </div>`;
    console.error('Error loading section content:', err);
  }
}

// ── Sidebar Toggle (mobile) ────────────────────

function setupSidebarToggle(): void {
  function openSidebar() {
    sidebar.classList.add('sidebar-open');
    sidebarOverlay.classList.add('visible');
  }

  function closeSidebar() {
    sidebar.classList.remove('sidebar-open');
    sidebarOverlay.classList.remove('visible');
  }

  sidebarToggle.addEventListener('click', () => {
    if (sidebar.classList.contains('sidebar-open')) {
      closeSidebar();
    } else {
      openSidebar();
    }
  });

  sidebarOverlay.addEventListener('click', closeSidebar);

  // Close sidebar when a link is clicked (mobile)
  document.getElementById('sidebar-nav')?.addEventListener('click', (e) => {
    if ((e.target as HTMLElement).classList.contains('sidebar-link')) {
      closeSidebar();
    }
  });
}

// ── Boot ───────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  const { id, tab } = parseURL();
  const section = getSectionById(id);

  if (!section) {
    window.location.href = '/';
    return;
  }

  currentSection = section;
  currentTab = tab;

  setupNavigation(section);
  setupTabs(section);
  setupSidebarToggle();
  initProgress();

  // Load initial content
  const initialTab = tab === 'ejercicios' && section.ejercicios ? 'ejercicios' :
                     section.teoria ? 'teoria' :
                     section.ejercicios ? 'ejercicios' : 'teoria';
  
  tabTeoria.classList.toggle('active', initialTab === 'teoria');
  tabEjercicios.classList.toggle('active', initialTab === 'ejercicios');
  currentTab = initialTab;
  updateURL(section.id, initialTab);
  loadContent(section, initialTab);
});
