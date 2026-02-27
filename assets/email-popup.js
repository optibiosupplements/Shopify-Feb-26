/**
 * Optibio Email Capture Popup (v2 — Multi-Step + Klaviyo Dual-Write)
 * - Step 1: Email capture (Shopify /contact + Klaviyo subscribe API)
 * - Step 2: Wellness goal (zero-party data → Klaviyo profile property)
 * - Step 3: Ashwagandha experience (zero-party data → Klaviyo profile property)
 * - Step 4: Success state with discount code
 * - Delay-based + exit-intent triggers
 * - Cookie-based suppression (7 days dismiss, 365 days submit)
 * - GTM dataLayer tracking
 */
(function() {
  'use strict';

  // ── Config from data attributes ──
  var script = document.getElementById('optibio-popup-script');
  var DELAY = parseInt(script.getAttribute('data-delay') || '5', 10) * 1000;
  var EXIT_INTENT = script.getAttribute('data-exit-intent') === 'true';
  var DISMISS_DAYS = parseInt(script.getAttribute('data-dismiss-days') || '7', 10);
  var SUBMITTED_DAYS = parseInt(script.getAttribute('data-submitted-days') || '365', 10);
  var KLAVIYO_COMPANY = script.getAttribute('data-klaviyo-company') || '';
  var KLAVIYO_LIST = script.getAttribute('data-klaviyo-list') || '';

  // ── dataLayer helper ──
  window.dataLayer = window.dataLayer || [];
  var triggerType = null;

  // ── State ──
  var capturedEmail = '';
  var wellnessGoal = '';
  var ashwagandhaExperience = '';

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

  // Step elements
  var step1 = document.getElementById('optibio-popup-step-1');
  var step2 = document.getElementById('optibio-popup-step-2');
  var step3 = document.getElementById('optibio-popup-step-3');

  if (!overlay) return;

  var hasShown = false;
  var delayTimer = null;

  // ── Show / Hide ──
  function showPopup() {
    if (hasShown) return;
    if (getCookie('optibio_popup_dismissed') || getCookie('optibio_popup_submitted')) return;
    hasShown = true;

    overlay.style.display = 'flex';
    overlay.offsetHeight;
    overlay.classList.add('is-visible');
    document.body.style.overflow = 'hidden';

    window.dataLayer.push({
      event: 'popup_view',
      popup_trigger_type: triggerType || 'delay',
      popup_name: 'email_capture'
    });

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

  // ── Step Navigation ──
  function showStep(stepEl) {
    // Hide all steps
    var steps = overlay.querySelectorAll('.optibio-popup__step');
    for (var i = 0; i < steps.length; i++) {
      steps[i].style.display = 'none';
    }
    // Also hide step-1 elements that aren't in a .step wrapper
    var discountPreview = overlay.querySelector('.optibio-popup__discount-preview');
    var subheading = overlay.querySelector('.optibio-popup__subheading');

    if (stepEl === step2 || stepEl === step3) {
      if (discountPreview) discountPreview.style.display = 'none';
      if (subheading) subheading.style.display = 'none';
    }

    // Show target step
    stepEl.style.display = 'block';
  }

  // ── Klaviyo Subscribe API ──
  function subscribeToKlaviyo(email) {
    if (!KLAVIYO_COMPANY || !KLAVIYO_LIST) return;

    fetch('https://a.klaviyo.com/client/subscriptions/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'revision': '2024-10-15'
      },
      body: JSON.stringify({
        data: {
          type: 'subscription',
          attributes: {
            custom_source: 'Website Popup',
            profile: {
              data: {
                type: 'profile',
                attributes: {
                  email: email
                }
              }
            }
          },
          relationships: {
            list: {
              data: {
                type: 'list',
                id: KLAVIYO_LIST
              }
            }
          }
        }
      })
    }).catch(function() {
      // Silent fail — Shopify form is the primary, Klaviyo is supplementary
    });
  }

  // ── Klaviyo Profile Property Update ──
  function updateKlaviyoProfile(email, properties) {
    if (!KLAVIYO_COMPANY) return;

    fetch('https://a.klaviyo.com/client/profiles/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'revision': '2024-10-15'
      },
      body: JSON.stringify({
        data: {
          type: 'profile',
          attributes: {
            email: email,
            properties: properties
          }
        }
      })
    }).catch(function() {
      // Silent fail
    });
  }

  // ── Dismiss ──
  function dismiss() {
    window.dataLayer.push({
      event: 'popup_dismiss',
      popup_trigger_type: triggerType || 'delay',
      popup_name: 'email_capture'
    });

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

  // ── Step 1: Form Submit ──
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    var email = emailInput.value.trim();
    if (!email || !email.includes('@')) return;

    capturedEmail = email;

    // Show loading state
    submitText.style.display = 'none';
    submitLoading.style.display = 'inline-flex';
    submitBtn.disabled = true;

    // Submit to Shopify (primary)
    var formData = new FormData(form);

    fetch('/contact', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(function() {
      afterEmailCapture(email);
    })
    .catch(function() {
      // Shopify contact forms often redirect, so catch is expected
      afterEmailCapture(email);
    });
  });

  function afterEmailCapture(email) {
    // Subscribe to Klaviyo (secondary — dual-write)
    subscribeToKlaviyo(email);

    // GTM: Track email capture
    window.dataLayer.push({
      event: 'popup_email_captured',
      popup_trigger_type: triggerType || 'delay',
      popup_name: 'email_capture'
    });

    // Set cookie so popup doesn't re-show
    setCookie('optibio_popup_submitted', '1', SUBMITTED_DAYS);

    // Move to Step 2
    showStep(step2);
  }

  // ── Step 2: Wellness Goal ──
  var goalButtons = document.querySelectorAll('#optibio-popup-goals .optibio-popup__option');
  for (var i = 0; i < goalButtons.length; i++) {
    goalButtons[i].addEventListener('click', function() {
      wellnessGoal = this.getAttribute('data-value');

      // Visual feedback
      this.classList.add('is-selected');

      // Update Klaviyo profile
      updateKlaviyoProfile(capturedEmail, { wellness_goal: wellnessGoal });

      // GTM
      window.dataLayer.push({
        event: 'popup_wellness_goal',
        popup_wellness_goal: wellnessGoal
      });

      // Brief delay for visual feedback, then move to step 3
      var self = this;
      setTimeout(function() {
        showStep(step3);
      }, 300);
    });
  }

  // Step 2 skip
  var skip2 = document.getElementById('optibio-popup-skip-2');
  if (skip2) {
    skip2.addEventListener('click', function() {
      showStep(step3);
    });
  }

  // ── Step 3: Ashwagandha Experience ──
  var expButtons = document.querySelectorAll('#optibio-popup-experience .optibio-popup__option');
  for (var j = 0; j < expButtons.length; j++) {
    expButtons[j].addEventListener('click', function() {
      ashwagandhaExperience = this.getAttribute('data-value');

      // Visual feedback
      this.classList.add('is-selected');

      // Update Klaviyo profile
      updateKlaviyoProfile(capturedEmail, { ashwagandha_experience: ashwagandhaExperience });

      // GTM
      window.dataLayer.push({
        event: 'popup_experience_level',
        popup_experience: ashwagandhaExperience
      });

      // Brief delay, then show success
      setTimeout(function() {
        showFinalSuccess();
      }, 300);
    });
  }

  // Step 3 skip
  var skip3 = document.getElementById('optibio-popup-skip-3');
  if (skip3) {
    skip3.addEventListener('click', function() {
      showFinalSuccess();
    });
  }

  // ── Final Success ──
  function showFinalSuccess() {
    // GTM: Track full popup conversion
    window.dataLayer.push({
      event: 'popup_convert',
      popup_trigger_type: triggerType || 'delay',
      popup_name: 'email_capture',
      popup_wellness_goal: wellnessGoal || 'skipped',
      popup_experience: ashwagandhaExperience || 'skipped'
    });

    // Show success state
    showStep(successEl);
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
        var textarea = document.createElement('textarea');
        textarea.value = code;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try { document.execCommand('copy'); } catch(err) {}
        document.body.removeChild(textarea);
      }
    });
  }

  // ── Triggers ──

  // 1. Delay trigger
  delayTimer = setTimeout(function() {
    triggerType = 'delay';
    showPopup();
  }, DELAY);

  // 2. Exit-intent trigger (desktop only)
  function handleExitIntent(e) {
    if (e.clientY <= 5) {
      triggerType = 'exit_intent';
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
