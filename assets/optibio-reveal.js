/* Optibio Scroll Reveal — lightweight IntersectionObserver for all pages */
(function() {
  'use strict';

  if (typeof IntersectionObserver === 'undefined') {
    document.querySelectorAll('.optibio-reveal').forEach(function(el) {
      el.classList.add('visible');
    });
    return;
  }

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.optibio-reveal').forEach(function(el) {
    observer.observe(el);
  });
})();
