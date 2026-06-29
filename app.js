// GSAP animations with graceful fallback
(function () {
  if (!window.gsap) return;
  try {
    gsap.from('.hero h1', { y: 40, opacity: 0, duration: 0.9, ease: 'power3.out' });
    gsap.from('.hero-sub', { y: 20, opacity: 0, duration: 0.8, delay: 0.2 });
    gsap.from('.media-frame', { y: 30, opacity: 0, duration: 0.9, delay: 0.3 });
  } catch (e) {
    // no-op
  }
})();