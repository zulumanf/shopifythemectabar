import { elements } from './utils/elements';

export const animations = {
  fadeIn: (element) => {
    element.style.opacity = 0;
    element.style.display = 'block';
    (function fade() {
      var val = parseFloat(element.style.opacity);
      if (!((val += 0.1) > 1)) {
        element.style.opacity = val;
        requestAnimationFrame(fade);
      }
    })();
  },
  fadeOut: (element) => {
    (function fade() {
      if ((element.style.opacity -= 0.1) < 0) {
        element.style.display = 'none';
      } else {
        requestAnimationFrame(fade);
      }
    })();
  },
};