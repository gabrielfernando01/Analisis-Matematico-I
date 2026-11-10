/**
 * Theme module — Light (warm paper) ↔ Dark (Tokyo Night)
 *
 * Priority:
 *   1. localStorage value  (persists across navigations)
 *   2. prefers-color-scheme  (OS default on first visit)
 *   3. Light fallback
 */

type Theme = 'light' | 'dark';

const LS_KEY = 'ami-theme';

function getStoredTheme(): Theme | null {
  try {
    const v = localStorage.getItem(LS_KEY);
    return v === 'dark' || v === 'light' ? v : null;
  } catch {
    return null;
  }
}

function getSystemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme: Theme): void {
  document.documentElement.setAttribute('data-theme', theme);
  updateToggleIcon(theme);
}

function updateToggleIcon(theme: Theme): void {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  btn.textContent = theme === 'dark' ? '☀️' : '🌙';
  btn.setAttribute('aria-label', theme === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro');
  btn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
}

function toggleTheme(): void {
  const current = document.documentElement.getAttribute('data-theme') as Theme ?? 'light';
  const next: Theme = current === 'dark' ? 'light' : 'dark';
  try { localStorage.setItem(LS_KEY, next); } catch { /* ignore */ }
  applyTheme(next);
}

export function initTheme(): void {
  // Apply theme immediately (before first paint if possible)
  const theme: Theme = getStoredTheme() ?? getSystemTheme();
  applyTheme(theme);

  // Wire up toggle button (may be injected before or after DOMContentLoaded)
  function wireButton() {
    const btn = document.getElementById('theme-toggle');
    if (btn && !btn.dataset.wired) {
      btn.dataset.wired = '1';
      btn.addEventListener('click', toggleTheme);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', wireButton);
  } else {
    wireButton();
  }

  // Also respond to OS theme changes (if user hasn't made a manual choice)
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!getStoredTheme()) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
}
