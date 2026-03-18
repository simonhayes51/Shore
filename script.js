const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isSmallScreen = window.matchMedia('(max-width: 640px)').matches;

if (!prefersReducedMotion && !isSmallScreen) {
  const imagePanels = document.querySelectorAll('.parallax-bg');

  const onScroll = () => {
    const y = window.scrollY;

    imagePanels.forEach((panel, index) => {
      const factor = index === 0 ? 0.08 : 0.04;
      panel.style.backgroundPositionY = `${y * factor}px`;
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}
