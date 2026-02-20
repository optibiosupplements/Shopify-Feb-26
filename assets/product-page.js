/**
 * Optibio Product Page — Consolidated JS
 * Vanilla JS only. No jQuery.
 * Works alongside optibio-product-enhancements.js for variant/pricing logic.
 */

(function() {
  'use strict';

  /* ============================================
     Scroll Reveal
     ============================================ */
  function initScrollReveal() {
    var elements = document.querySelectorAll('.optibio-reveal');
    if (!elements.length) return;

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    elements.forEach(function(el) {
      observer.observe(el);
    });
  }

  /* ============================================
     Sticky Cart Bar
     ============================================ */
  function initStickyCart() {
    var stickyCart = document.getElementById('optibio-sticky-cart');
    var heroCTA = document.querySelector('.optibio-enhanced-purchase, .optibio-hero__details .optibio-cta-button');
    if (!stickyCart || !heroCTA) return;

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (!entry.isIntersecting) {
          stickyCart.classList.add('visible');
          stickyCart.setAttribute('aria-hidden', 'false');
        } else {
          stickyCart.classList.remove('visible');
          stickyCart.setAttribute('aria-hidden', 'true');
        }
      });
    }, { threshold: 0 });

    observer.observe(heroCTA);

    // Sync price with enhancement state
    var stickyButton = document.getElementById('optibio-sticky-add');
    if (stickyButton) {
      stickyButton.addEventListener('click', function() {
        var mainButton = document.querySelector('.optibio-cta-button, #optibio-add-to-cart');
        if (mainButton) mainButton.click();
      });
    }

    // Listen for variant/price changes to update sticky bar
    document.addEventListener('optibio:price-updated', function(e) {
      var priceEl = stickyCart.querySelector('[data-sticky-price]');
      var detailEl = stickyCart.querySelector('[data-sticky-detail]');
      if (priceEl && e.detail && e.detail.price) {
        priceEl.textContent = '$' + e.detail.price;
      }
      if (detailEl && e.detail && e.detail.detail) {
        detailEl.textContent = e.detail.detail;
      }
    });
  }

  /* ============================================
     FAQ Accordion (single-open)
     ============================================ */
  function initFAQAccordion() {
    var faqItems = document.querySelectorAll('.optibio-faq-item');
    if (!faqItems.length) return;

    faqItems.forEach(function(item) {
      item.addEventListener('toggle', function() {
        if (item.open) {
          faqItems.forEach(function(other) {
            if (other !== item && other.open) {
              other.removeAttribute('open');
            }
          });
        }
      });

      // Keyboard accessibility
      var summary = item.querySelector('summary');
      if (summary) {
        summary.addEventListener('keydown', function(e) {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            summary.click();
          }
        });
      }
    });
  }

  /* ============================================
     Testimonial Carousel
     ============================================ */
  function initTestimonialCarousel() {
    var track = document.querySelector('.optibio-testimonial-track');
    var dots = document.querySelectorAll('.optibio-carousel-dot');
    if (!track || !dots.length) return;

    var cards = track.querySelectorAll('.optibio-testimonial-card');
    if (!cards.length) return;

    var currentIndex = 0;
    var autoplayTimer = null;

    function updateDots(index) {
      dots.forEach(function(dot, i) {
        dot.classList.toggle('active', i === index);
      });
    }

    function scrollToIndex(index) {
      if (index < 0 || index >= cards.length) return;
      currentIndex = index;
      var card = cards[index];
      track.scrollTo({
        left: card.offsetLeft - track.offsetLeft,
        behavior: 'smooth'
      });
      updateDots(index);
    }

    // Dot click navigation
    dots.forEach(function(dot, i) {
      dot.addEventListener('click', function() {
        scrollToIndex(i);
        resetAutoplay();
      });
    });

    // Scroll-based dot sync
    var scrollTimeout;
    track.addEventListener('scroll', function() {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(function() {
        var scrollLeft = track.scrollLeft;
        var closestIndex = 0;
        var closestDistance = Infinity;

        cards.forEach(function(card, i) {
          var distance = Math.abs(card.offsetLeft - track.offsetLeft - scrollLeft);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = i;
          }
        });

        currentIndex = closestIndex;
        updateDots(closestIndex);
      }, 100);
    });

    // Autoplay
    function startAutoplay() {
      autoplayTimer = setInterval(function() {
        var nextIndex = (currentIndex + 1) % cards.length;
        scrollToIndex(nextIndex);
      }, 5000);
    }

    function resetAutoplay() {
      clearInterval(autoplayTimer);
      startAutoplay();
    }

    // Pause on hover/touch
    track.addEventListener('mouseenter', function() { clearInterval(autoplayTimer); });
    track.addEventListener('mouseleave', startAutoplay);
    track.addEventListener('touchstart', function() { clearInterval(autoplayTimer); }, { passive: true });
    track.addEventListener('touchend', function() {
      setTimeout(startAutoplay, 3000);
    }, { passive: true });

    startAutoplay();
    updateDots(0);
  }

  /* ============================================
     Stat Counter Animation
     Triggers AFTER parent reveal animation completes
     to avoid counters running while card is invisible
     ============================================ */
  function initStatCounters() {
    var counters = document.querySelectorAll('[data-count-to]');
    if (!counters.length) return;

    counters.forEach(function(counter) {
      var card = counter.closest('.optibio-reveal');

      // If no reveal parent, or already visible, animate immediately via observer
      if (!card || card.classList.contains('visible')) {
        var observer = new IntersectionObserver(function(entries) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              animateCounter(entry.target);
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.3 });
        observer.observe(counter);
        return;
      }

      // Wait for parent card to get 'visible' class from scroll reveal
      var animated = false;
      var mutObs = new MutationObserver(function() {
        if (!animated && card.classList.contains('visible')) {
          animated = true;
          mutObs.disconnect();
          // Delay counter start until reveal transition finishes (0.8s + up to 0.4s delay)
          var delay = parseFloat(getComputedStyle(card).transitionDelay) * 1000 || 0;
          setTimeout(function() {
            animateCounter(counter);
          }, delay + 850);
        }
      });
      mutObs.observe(card, { attributes: true, attributeFilter: ['class'] });
    });
  }

  function animateCounter(el) {
    var target = parseFloat(el.getAttribute('data-count-to'));
    var prefix = el.getAttribute('data-count-prefix') || '';
    var suffix = el.getAttribute('data-count-suffix') || '';
    var decimals = (target % 1 !== 0) ? 1 : 0;
    var duration = 1500;
    var start = 0;
    var startTime = null;

    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var easedProgress = easeOutCubic(progress);
      var current = start + (target - start) * easedProgress;
      el.textContent = prefix + current.toFixed(decimals) + suffix;

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }

  /* ============================================
     Product Image Gallery
     ============================================ */
  function initProductGallery() {
    var mediaItems = document.querySelectorAll('.optibio-hero__media-item');
    var thumbs = document.querySelectorAll('.optibio-hero__thumb');
    if (!mediaItems.length || !thumbs.length) return;

    function showImage(index) {
      mediaItems.forEach(function(item, i) {
        item.classList.toggle('active', i === index);
      });
      thumbs.forEach(function(thumb, i) {
        thumb.classList.toggle('active', i === index);
      });
    }

    thumbs.forEach(function(thumb, i) {
      thumb.addEventListener('click', function() {
        showImage(i);
      });
    });

    // Swipe support on mobile
    var mediaContainer = document.querySelector('.optibio-hero__media');
    if (!mediaContainer) return;

    var touchStartX = 0;
    var touchEndX = 0;
    var currentImageIndex = 0;

    mediaContainer.addEventListener('touchstart', function(e) {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    mediaContainer.addEventListener('touchend', function(e) {
      touchEndX = e.changedTouches[0].screenX;
      var diff = touchStartX - touchEndX;

      if (Math.abs(diff) > 50) {
        if (diff > 0 && currentImageIndex < mediaItems.length - 1) {
          currentImageIndex++;
        } else if (diff < 0 && currentImageIndex > 0) {
          currentImageIndex--;
        }
        showImage(currentImageIndex);
      }
    }, { passive: true });
  }

  /* ============================================
     Sticky cart price sync with buy box
     ============================================ */
  function initPriceSync() {
    // Watch for changes in the buy box and dispatch events to sticky bar
    var bundleCards = document.querySelectorAll('.optibio-bundle-card');
    var subscriptionToggle = document.getElementById('optibio-subscription-toggle');

    function dispatchPriceUpdate() {
      var selectedCard = document.querySelector('.optibio-bundle-card.selected');
      if (!selectedCard) return;

      var bundleSize = selectedCard.getAttribute('data-bundle') || '3';
      var isSubscription = subscriptionToggle && subscriptionToggle.classList.contains('active');
      var priceAttr = isSubscription ? 'data-subscribe-price' : 'data-price';
      var price = selectedCard.getAttribute(priceAttr) || '99.99';
      var bundleLabel = bundleSize === '1' ? '1 Bottle' : bundleSize + ' Bottles';
      var typeLabel = isSubscription ? 'Subscribe' : 'One-time';

      document.dispatchEvent(new CustomEvent('optibio:price-updated', {
        detail: {
          price: parseFloat(price).toFixed(2),
          detail: bundleLabel + ' \u2022 ' + typeLabel
        }
      }));
    }

    // Observe bundle card selection changes
    var buyBox = document.querySelector('.optibio-enhanced-purchase');
    if (buyBox) {
      var mutationObserver = new MutationObserver(function() {
        dispatchPriceUpdate();
      });
      mutationObserver.observe(buyBox, {
        subtree: true,
        attributes: true,
        attributeFilter: ['class']
      });
    }

    // Initial sync
    setTimeout(dispatchPriceUpdate, 500);
  }

  /* ============================================
     Initialize
     ============================================ */
  function init() {
    initScrollReveal();
    initStickyCart();
    initFAQAccordion();
    initTestimonialCarousel();
    initStatCounters();
    initProductGallery();
    initPriceSync();

    /* Fallback: force all reveal elements visible after 3s */
    setTimeout(function() {
      var reveals = document.querySelectorAll('.optibio-reveal');
      for (var i = 0; i < reveals.length; i++) {
        reveals[i].classList.add('visible');
      }
      /* Re-trigger any counters that haven't reached their target */
      var stats = document.querySelectorAll('[data-count-to]');
      for (var j = 0; j < stats.length; j++) {
        var target = parseFloat(stats[j].getAttribute('data-count-to'));
        var suffix = stats[j].getAttribute('data-count-suffix') || '';
        var prefix = stats[j].getAttribute('data-count-prefix') || '';
        var decimals = (target % 1 !== 0) ? 1 : 0;
        var currentText = stats[j].textContent.replace(/[^0-9.\-]/g, '');
        var currentVal = parseFloat(currentText) || 0;
        if (currentVal < target * 0.9) {
          animateCounter(stats[j]);
        }
        stats[j].style.opacity = '1';
      }
    }, 3000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
