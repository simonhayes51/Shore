const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  const hero = document.querySelector('.hero');

  const onScroll = () => {
    if (!hero) return;
    hero.style.backgroundPositionY = `${window.scrollY * 0.08}px`;
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}
