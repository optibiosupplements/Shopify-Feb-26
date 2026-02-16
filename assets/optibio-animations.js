/* OptiBio Premium Animations v4.0 */
(function() {
  'use strict';
  
  /* Counter Animation */
  function animateCounters() {
    var counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;
    
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting && !entry.target.dataset.counted) {
          entry.target.dataset.counted = 'true';
          var target = parseFloat(entry.target.dataset.count);
          var suffix = entry.target.dataset.suffix || '';
          var decimal = entry.target.dataset.decimal ? parseInt(entry.target.dataset.decimal) : 0;
          var duration = 2000;
          var start = performance.now();
          
          function update(now) {
            var elapsed = now - start;
            var progress = Math.min(elapsed / duration, 1);
            var eased = 1 - Math.pow(1 - progress, 3);
            var current = target * eased;
            entry.target.textContent = current.toFixed(decimal) + suffix;
            if (progress < 1) requestAnimationFrame(update);
          }
          requestAnimationFrame(update);
        }
      });
    }, { threshold: 0.3 });
    
    counters.forEach(function(c) { observer.observe(c); });
  }
  
  /* Scroll Reveal Animation */
  function initScrollReveal() {
    var elements = document.querySelectorAll('.ob-reveal');
    if (!elements.length) return;
    
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('ob-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    elements.forEach(function(el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
      observer.observe(el);
    });
  }
  
  /* Apply revealed styles */
  var style = document.createElement('style');
  style.textContent = '.ob-revealed { opacity: 1 !important; transform: translateY(0) !important; }';
  document.head.appendChild(style);
  
  /* Smooth number formatting */
  function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  /* Init */
  function init() {
    animateCounters();
    initScrollReveal();
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
  /* Retry after 1s for dynamic content */
  setTimeout(init, 1000);
})();
