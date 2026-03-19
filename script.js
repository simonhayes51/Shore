const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  const hero = document.querySelector('.hero-splash');

  const onScroll = () => {
    if (!hero) return;
    hero.style.backgroundPositionY = `${window.scrollY * 0.07}px`;
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}
