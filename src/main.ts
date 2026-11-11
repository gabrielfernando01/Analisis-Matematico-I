import './styles/main.css';
import { sections } from './data/sections';
import type { Section } from './data/sections';
import { initTheme } from './components/theme';

function createBadge(section: Section, tab: 'teoria' | 'ejercicios'): HTMLAnchorElement {
  const badge = document.createElement('a');
  badge.className = `badge badge-${tab}`;
  badge.href = `/seccion.html?id=${section.id}&tab=${tab}`;
  badge.textContent = tab === 'teoria' ? 'Teoría' : 'Ejercicios';
  badge.setAttribute(
    'aria-label',
    `Ver ${tab === 'teoria' ? 'teoría' : 'ejercicios'} de §\u2009${section.id} — ${section.title}`,
  );
  return badge;
}

function renderIndex(): void {
  const container = document.getElementById('course-index');
  if (!container) return;

  const fragment = document.createDocumentFragment();

  sections.forEach((section, index) => {
    const hasContent = section.teoria || section.ejercicios;
    const entry = document.createElement('div');
    entry.className = 'section-entry';
    entry.id = `section-entry-${section.id}`;
    entry.style.setProperty('--delay', `${0.4 + index * 0.06}s`);

    const defaultTab = section.teoria ? 'teoria' : 'ejercicios';

    // Main link — number and title
    const main = document.createElement('a');
    main.className = 'section-entry-main';

    if (hasContent) {
      main.href = `/seccion.html?id=${section.id}&tab=${defaultTab}`;
    } else {
      entry.classList.add('section-entry--empty');
      entry.setAttribute('aria-disabled', 'true');
    }

    // Section number
    const number = document.createElement('span');
    number.className = 'section-number';
    number.textContent = `§\u2009${section.id}`;

    // Section info
    const info = document.createElement('div');
    info.className = 'section-info';

    const title = document.createElement('div');
    title.className = 'section-title';
    title.textContent = section.title;

    info.appendChild(title);

    if (section.description) {
      const desc = document.createElement('div');
      desc.className = 'section-description';
      desc.textContent = section.description;
      info.appendChild(desc);
    }

    main.appendChild(number);
    main.appendChild(info);

    // Badges — direct links to each tab
    const badges = document.createElement('div');
    badges.className = 'section-badges';

    if (section.teoria) {
      badges.appendChild(createBadge(section, 'teoria'));
    }

    if (section.ejercicios) {
      badges.appendChild(createBadge(section, 'ejercicios'));
    }

    if (!hasContent) {
      const empty = document.createElement('span');
      empty.className = 'badge badge-empty';
      empty.textContent = '—';
      badges.appendChild(empty);
    }

    entry.appendChild(main);
    entry.appendChild(badges);
    fragment.appendChild(entry);
  });

  container.appendChild(fragment);
}

// Boot
initTheme();
document.addEventListener('DOMContentLoaded', renderIndex);
