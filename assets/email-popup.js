/**
 * Optibio Email Capture Popup
 * - Delay-based trigger (configurable, default 8s)
 * - Exit-intent trigger on desktop
 * - Cookie-based suppression (7 days dismiss, 365 days submit)
 * - Shopify customer form integration
 * - Copy discount code to clipboard
 */
(function() {
  'use strict';

  // ── Config from data attributes ──
  var script = document.getElementById('optibio-popup-script');
  var DELAY = parseInt(script.getAttribute('data-delay') || '8', 10) * 1000;
  var EXIT_INTENT = script.getAttribute('data-exit-intent') === 'true';
  var DISMISS_DAYS = parseInt(script.getAttribute('data-dismiss-days') || '7', 10);
  var SUBMITTED_DAYS = parseInt(script.getAttribute('data-submitted-days') || '365', 10);

  // ── Cookie Helpers ──
  function setCookie(name, value, days) {
    var d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = name + '=' + value + ';expires=' + d.toUTCString() + ';path=/;SameSite=Lax';
  }

  function getCookie(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
  }

  // ── Guard: Don't show if already dismissed or submitted ──
  if (getCookie('optibio_popup_dismissed') || getCookie('optibio_popup_submitted')) {
    return;
  }

  // ── DOM References ──
  var overlay = document.getElementById('optibio-popup-overlay');
  var closeBtn = document.getElementById('optibio-popup-close');
  var form = document.getElementById('optibio-popup-form');
  var emailInput = document.getElementById('optibio-popup-email');
  var submitBtn = document.getElementById('optibio-popup-submit');
  var submitText = overlay.querySelector('.optibio-popup__submit-text');
  var submitLoading = overlay.querySelector('.optibio-popup__submit-loading');
  var successEl = document.getElementById('optibio-popup-success');
  var copyBtn = document.getElementById('optibio-popup-copy');

  if (!overlay) return;

  var hasShown = false;
  var delayTimer = null;

  // ── Show / Hide ──
  function showPopup() {
    if (hasShown) return;
    if (getCookie('optibio_popup_dismissed') || getCookie('optibio_popup_submitted')) return;
    hasShown = true;

    overlay.style.display = 'flex';
    // Force reflow for transition
    overlay.offsetHeight;
    overlay.classList.add('is-visible');
    document.body.style.overflow = 'hidden';

    // Focus email input after animation
    setTimeout(function() {
      if (emailInput) emailInput.focus();
    }, 400);
  }

  function hidePopup() {
    overlay.classList.remove('is-visible');
    document.body.style.overflow = '';
    setTimeout(function() {
      overlay.style.display = 'none';
    }, 300);
  }

  // ── Dismiss (close button, overlay click, Escape key) ──
  function dismiss() {
    setCookie('optibio_popup_dismissed', '1', DISMISS_DAYS);
    hidePopup();
    cleanup();
  }

  closeBtn.addEventListener('click', dismiss);

  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) dismiss();
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && overlay.classList.contains('is-visible')) {
      dismiss();
    }
  });

  // ── Form Submit ──
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    var email = emailInput.value.trim();
    if (!email || !email.includes('@')) return;

    // Show loading state
    submitText.style.display = 'none';
    submitLoading.style.display = 'inline-flex';
    submitBtn.disabled = true;

    // Submit to Shopify
    var formData = new FormData(form);

    fetch('/contact', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(function() {
      // Show success state (even if response isn't JSON, Shopify usually accepts it)
      showSuccess();
    })
    .catch(function() {
      // Still show success — Shopify contact forms often redirect, so catch is expected
      showSuccess();
    });
  });

  function showSuccess() {
    setCookie('optibio_popup_submitted', '1', SUBMITTED_DAYS);

    // Hide form, show success
    form.style.display = 'none';
    var discountPreview = overlay.querySelector('.optibio-popup__discount-preview');
    if (discountPreview) discountPreview.style.display = 'none';
    var subheading = overlay.querySelector('.optibio-popup__subheading');
    if (subheading) subheading.style.display = 'none';

    successEl.style.display = 'block';

    cleanup();
  }

  // ── Copy Discount Code ──
  if (copyBtn) {
    copyBtn.addEventListener('click', function() {
      var codeEl = document.getElementById('optibio-popup-code-display');
      if (!codeEl) return;

      var code = codeEl.textContent.trim();

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(code).then(function() {
          copyBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16A34A" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>';
          setTimeout(function() {
            copyBtn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>';
          }, 2000);
        });
      } else {
        // Fallback for older browsers
        var textarea = document.createElement('textarea');
        textarea.value = code;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try { document.execCommand('copy'); } catch(e) {}
        document.body.removeChild(textarea);
      }
    });
  }

  // ── Triggers ──

  // 1. Delay trigger
  delayTimer = setTimeout(showPopup, DELAY);

  // 2. Exit-intent trigger (desktop only)
  function handleExitIntent(e) {
    if (e.clientY <= 5) {
      showPopup();
    }
  }

  if (EXIT_INTENT && window.matchMedia('(pointer: fine)').matches) {
    document.addEventListener('mouseout', handleExitIntent);
  }

  // ── Cleanup ──
  function cleanup() {
    if (delayTimer) clearTimeout(delayTimer);
    document.removeEventListener('mouseout', handleExitIntent);
  }

})();
