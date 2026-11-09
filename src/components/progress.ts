export function initProgress(): void {
  const fill = document.getElementById('progress-fill');
  if (!fill) return;

  function update(): void {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollHeight <= 0) {
      fill!.style.width = '0%';
      return;
    }
    const progress = Math.min((window.scrollY / scrollHeight) * 100, 100);
    fill!.style.width = `${progress}%`;
  }

  window.addEventListener('scroll', update, { passive: true });
  update(); // initial
}
