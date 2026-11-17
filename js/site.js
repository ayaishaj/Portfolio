/* Measure the shared header so section links leave room above their headings. */
(() => {
  const header = document.querySelector('.site-header');
  if (!header) return;
  const measure = () => document.documentElement.style.setProperty('--header-height', `${header.getBoundingClientRect().height}px`);
  measure();
  if ('ResizeObserver' in window) new ResizeObserver(measure).observe(header);
  else window.addEventListener('resize', measure);
})();
