/* Small enhancements for the continuous vertical portfolio. No page switching. */
(() => {
  'use strict';
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const header = document.querySelector('.site-header');
  function updateHeaderSize() {
    document.documentElement.style.setProperty('--header-height', header.getBoundingClientRect().height + 'px');
  }
  updateHeaderSize();
  if ('ResizeObserver' in window) new ResizeObserver(updateHeaderSize).observe(header);
  else window.addEventListener('resize', updateHeaderSize);

  // Real anchors still work without JavaScript. This also moves keyboard focus.
  document.addEventListener('click', event => {
    const link = event.target.closest('a[href^="#"]');
    if (!link || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const target = document.getElementById(link.getAttribute('href').slice(1));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: reducedMotion.matches ? 'instant' : 'smooth', block: 'start' });
    if (location.hash !== link.getAttribute('href')) history.pushState(null, '', link.getAttribute('href'));
    const heading = target.querySelector('h1,h2') || target;
    heading.tabIndex = -1;
    heading.focus({ preventScroll: true });
  });

  // Once-only, short entrance movement. All content remains visible by default.
  if ('IntersectionObserver' in window && !reducedMotion.matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.04, rootMargin: '0px 0px -24px 0px' });
    document.querySelectorAll('.section-inner').forEach(section => observer.observe(section));
  }

  const viewer = document.querySelector('#image-viewer');
  const viewerImage = document.querySelector('#viewer-image');
  const viewerScroll = viewer.querySelector('.viewer-scroll');
  const caption = document.querySelector('#image-caption');
  const zoom = document.querySelector('#zoom-viewer');

  function fitImage() {
    viewerScroll.classList.remove('is-zoomed');
    viewerScroll.scrollTo(0, 0);
    zoom.setAttribute('aria-pressed', 'false');
  }
  viewerImage.addEventListener('load', () => {
    zoom.disabled = viewerImage.naturalWidth <= viewerImage.clientWidth + 2 &&
      viewerImage.naturalHeight <= viewerImage.clientHeight + 2;
  });
  document.addEventListener('click', event => {
    const link = event.target.closest('a.enlarge');
    if (!link || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || !viewer.showModal) return;
    event.preventDefault();
    fitImage();
    viewerImage.src = link.href;
    viewerImage.alt = link.querySelector('img').alt;
    const decoded = document.createElement('textarea');
    decoded.innerHTML = link.dataset.caption.replace(/<[^>]*>/g, ' ');
    const title = link.closest('.portfolio-section').querySelector('h1,h2').innerText.replace(/\s+/g, ' ').trim();
    caption.textContent = decoded.value.length > 140 ? title + ' — image detail' : decoded.value;
    viewer.showModal();
  });
  zoom.addEventListener('click', () => {
    viewerScroll.style.setProperty('--detail-width', viewerImage.naturalWidth + 'px');
    viewerScroll.classList.toggle('is-zoomed');
    zoom.setAttribute('aria-pressed', String(viewerScroll.classList.contains('is-zoomed')));
  });
  document.querySelector('#fit-viewer').addEventListener('click', fitImage);
  document.querySelector('#close-viewer').addEventListener('click', () => viewer.close());
  viewer.addEventListener('click', event => { if (event.target === viewer) viewer.close(); });
  viewer.addEventListener('close', () => {
    fitImage();
    viewerImage.removeAttribute('src');
  });
})();

