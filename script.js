const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isSmallScreen = window.matchMedia('(max-width: 640px)').matches;

if (!prefersReducedMotion && !isSmallScreen) {
  const floatingPanels = document.querySelectorAll('.parallax-block');
  const imagePanels = document.querySelectorAll('.parallax-bg');

  const onScroll = () => {
    const y = window.scrollY;

    floatingPanels.forEach((panel) => {
      const speed = Number(panel.dataset.parallax || 0.05);
      panel.style.transform = `translateY(${y * speed}px)`;
    });

    imagePanels.forEach((panel, index) => {
      const factor = index === 0 ? 0.09 : 0.05;
      panel.style.backgroundPositionY = `${y * factor}px`;
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}
