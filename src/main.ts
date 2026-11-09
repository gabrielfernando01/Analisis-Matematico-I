import './styles/main.css';
import { sections } from './data/sections';

function renderIndex(): void {
  const container = document.getElementById('course-index');
  if (!container) return;

  const fragment = document.createDocumentFragment();

  sections.forEach((section, index) => {
    const hasContent = section.teoria || section.ejercicios;
    const link = document.createElement('a');
    link.className = 'section-entry';
    link.id = `section-entry-${section.id}`;
    link.style.setProperty('--delay', `${0.4 + index * 0.06}s`);

    if (hasContent) {
      const defaultTab = section.teoria ? 'teoria' : 'ejercicios';
      link.href = `/seccion.html?id=${section.id}&tab=${defaultTab}`;
    } else {
      link.style.opacity = '0.45';
      link.style.pointerEvents = 'none';
      link.setAttribute('aria-disabled', 'true');
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

    // Badges
    const badges = document.createElement('div');
    badges.className = 'section-badges';

    if (section.teoria) {
      const t = document.createElement('span');
      t.className = 'badge badge-teoria';
      t.textContent = 'Teoría';
      badges.appendChild(t);
    }

    if (section.ejercicios) {
      const e = document.createElement('span');
      e.className = 'badge badge-ejercicios';
      e.textContent = 'Ejercicios';
      badges.appendChild(e);
    }

    if (!hasContent) {
      const empty = document.createElement('span');
      empty.className = 'badge badge-empty';
      empty.textContent = '—';
      badges.appendChild(empty);
    }

    link.appendChild(number);
    link.appendChild(info);
    link.appendChild(badges);
    fragment.appendChild(link);
  });

  container.appendChild(fragment);
}

// Boot
document.addEventListener('DOMContentLoaded', renderIndex);
