// custom-cursor.js
document.addEventListener('DOMContentLoaded', function() {
  const customCursor = document.createElement('div');
  customCursor.classList.add('custom-cursor');
  document.body.appendChild(customCursor);

  document.addEventListener('mousemove', function(e) {
    customCursor.style.left = `${e.clientX}px`;
    customCursor.style.top = `${e.clientY}px`;
  });

  document.addEventListener('mousedown', function() {
    customCursor.classList.add('cursor-down');
  });

  document.addEventListener('mouseup', function() {
    customCursor.classList.remove('cursor-down');
  });
});
