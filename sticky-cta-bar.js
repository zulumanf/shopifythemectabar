document.addEventListener('DOMContentLoaded', function() {
  const stickyCTA = document.querySelector('.sticky-cta-wrapper');
  if (stickyCTA) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        stickyCTA.classList.add('visible');
      } else {
        stickyCTA.classList.remove('visible');
      }
    });
  }
});
