/**
 * Optibio Product Page Enhancements - Phase 1 v3
 * Integrated with Shopify Native Subscriptions
 * Actual Variant IDs from Optibio store
 */

class OptibioProductEnhancements {
  constructor() {
    // Real variant IDs from Shopify
    this.variants = {
      1: 44617498656837,  // 1 Bottle - $39.99
      3: 44617498689605,  // 3 Bottles - $99.99
      6: 44617498722373   // 6 Bottles - $179.94
    };

    this.pricing = {
      bundles: {
        1: { price: 39.99, compareAt: 49.99, supply: '45-Day Supply' },
        3: { price: 99.99, pricePerBottle: 33.33, compareAt: 149.97, supply: '135-Day Supply' },
        6: { price: 179.94, pricePerBottle: 29.99, compareAt: 299.94, supply: '270-Day Supply' }
      },
      subscription: {
        discount: 0.15, // 15% off
        1: { price: 33.99, compareAt: 49.99 },
        3: { price: 84.99, pricePerBottle: 28.33, compareAt: 149.97 },
        6: { price: 152.99, pricePerBottle: 25.50, compareAt: 299.94 }
      },
      shipping: {
        oneTime: { 1: 5.99, 3: 0, 6: 0 },
        subscription: { 1: 0, 3: 0, 6: 0 }
      }
    };

    // Selling plan IDs — loaded from Liquid JSON script tag
    this.sellingPlans = [];
    this.selectedFrequencyIndex = 0; // default: first frequency (every month)

    this.state = {
      purchaseType: 'subscription', // 'onetime' or 'subscription'
      bundleSize: 3, // 1, 3, or 6 (default to MOST POPULAR)
      currentVariantId: this.variants[3]
    };

    this.init();
  }

  init() {
    this.freeShippingThreshold = 49; // $49 for free shipping
    this.loadSellingPlans();
    this.attachEventListeners();
    this.updateUI();
    this.updateFreeShippingBar();
  }

  loadSellingPlans() {
    var scriptEl = document.getElementById('optibio-selling-plan-data');
    if (!scriptEl) return;
    try {
      var data = JSON.parse(scriptEl.textContent);
      if (data.groups && data.groups.length > 0) {
        this.sellingPlans = data.groups[0].plans || [];
      }
    } catch (e) {
      // selling plan data unavailable
    }
  }

  attachEventListeners() {
    var self = this;

    // Bundle card selection (cards use data-bundle attribute, not radio inputs)
    document.querySelectorAll('.optibio-bundle-card').forEach(function(card) {
      card.addEventListener('click', function() {
        var bundleSize = parseInt(card.getAttribute('data-bundle'));
        if (!bundleSize || bundleSize === self.state.bundleSize) return;
        self.state.bundleSize = bundleSize;
        self.state.currentVariantId = self.variants[bundleSize];
        self.updateUI();
        self.updateShopifyVariant();
      });
    });

    // Subscription toggle click
    var subscriptionToggle = document.getElementById('optibio-subscription-toggle');
    if (subscriptionToggle) {
      subscriptionToggle.addEventListener('click', function() {
        if (self.state.purchaseType === 'subscription') {
          self.state.purchaseType = 'onetime';
        } else {
          self.state.purchaseType = 'subscription';
        }
        self.updateUI();
        self.updateShopifyVariant();
      });
    }

    // Delivery frequency radio buttons
    document.querySelectorAll('input[name="optibio-delivery-frequency"]').forEach(function(radio) {
      radio.addEventListener('change', function() {
        var value = radio.value;
        // Map frequency value to selling plan index
        if (value === 'month') self.selectedFrequencyIndex = 0;
        else if (value === '3months') self.selectedFrequencyIndex = 1;
        else if (value === '6months') self.selectedFrequencyIndex = 2;
        self.updateShopifyVariant();

        // Update frequency option visual state
        document.querySelectorAll('.optibio-frequency-option').forEach(function(opt) {
          opt.classList.remove('selected');
        });
        radio.closest('.optibio-frequency-option').classList.add('selected');
      });
    });

    // Add to Cart / Subscribe Now button
    var addToCartBtn = document.getElementById('optibio-add-to-cart');
    if (addToCartBtn) {
      addToCartBtn.addEventListener('click', function(e) {
        e.preventDefault();
        self.addToCart();
      });
    }
  }
  
  updateUI() {
    this.updateSubscriptionToggleUI();
    this.updateBundleCardsUI();
    this.updatePriceSummary();
    this.updateAddToCartButton();
    this.updateFreeShippingBar();
  }
  
  updateSubscriptionToggleUI() {
    var isSubscription = this.state.purchaseType === 'subscription';
    var toggle = document.getElementById('optibio-subscription-toggle');
    var freqSelector = document.getElementById('optibio-frequency-selector');

    if (toggle) {
      var switchEl = toggle.querySelector('.optibio-toggle-switch');
      var knobEl = toggle.querySelector('.optibio-toggle-knob');
      if (isSubscription) {
        toggle.classList.add('active');
        if (switchEl) switchEl.classList.add('active');
        if (knobEl) knobEl.classList.add('active');
      } else {
        toggle.classList.remove('active');
        if (switchEl) switchEl.classList.remove('active');
        if (knobEl) knobEl.classList.remove('active');
      }
    }

    // Show/hide frequency selector
    if (freqSelector) {
      freqSelector.style.display = isSubscription ? 'block' : 'none';
    }
  }

  updateBundleCardsUI() {
    var self = this;
    document.querySelectorAll('.optibio-bundle-card').forEach(function(card) {
      var bundleSize = parseInt(card.getAttribute('data-bundle'));
      var checkmark = card.querySelector('.optibio-bundle-checkmark');
      if (bundleSize === self.state.bundleSize) {
        card.classList.add('selected');
        if (checkmark) checkmark.style.display = '';
      } else {
        card.classList.remove('selected');
        if (checkmark) checkmark.style.display = 'none';
      }
    });

    // Update bundle prices based on purchase type
    var isSubscription = this.state.purchaseType === 'subscription';

    [1, 3, 6].forEach(function(size) {
      var card = document.querySelector('.optibio-bundle-card[data-bundle="' + size + '"]');
      if (!card) return;
      var priceEl = card.querySelector('.optibio-bundle-price');
      if (priceEl) {
        var price = isSubscription
          ? self.pricing.subscription[size].price
          : self.pricing.bundles[size].price;
        // For multi-bottle, show per-bottle price
        if (size > 1) {
          var perBottle = isSubscription
            ? self.pricing.subscription[size].pricePerBottle
            : self.pricing.bundles[size].pricePerBottle;
          priceEl.textContent = '$' + perBottle.toFixed(2);
        } else {
          priceEl.textContent = '$' + price.toFixed(2);
        }
      }
    });
  }
  
  updatePriceSummary() {
    var purchaseType = this.state.purchaseType;
    var bundleSize = this.state.bundleSize;
    var isSubscription = purchaseType === 'subscription';

    var pricing = isSubscription
      ? this.pricing.subscription[bundleSize]
      : this.pricing.bundles[bundleSize];

    var shipping = isSubscription
      ? this.pricing.shipping.subscription[bundleSize]
      : this.pricing.shipping.oneTime[bundleSize];

    var subtotal = pricing.price;
    var compareAt = pricing.compareAt;
    var total = subtotal + shipping;
    var savings = compareAt - subtotal;
    var savingsPercent = Math.round((savings / compareAt) * 100);

    // Update price summary rows in the buy box
    var priceSummary = document.querySelector('.optibio-price-summary');
    if (!priceSummary) return;

    var rows = priceSummary.querySelectorAll('.optibio-price-row');

    // Row 0: Subtotal (strikethrough + current)
    if (rows[0]) {
      var strikeEl = rows[0].querySelector('.optibio-price-strikethrough');
      var currentEl = strikeEl ? strikeEl.nextElementSibling || rows[0].querySelector('.optibio-price-value span:last-child') : null;
      if (strikeEl) strikeEl.textContent = '$' + compareAt.toFixed(2);
      // The second span inside .optibio-price-value
      var valueDiv = rows[0].querySelector('.optibio-price-value');
      if (valueDiv) {
        var spans = valueDiv.querySelectorAll('span');
        if (spans.length >= 2) spans[1].textContent = '$' + subtotal.toFixed(2);
        // Show/hide strikethrough based on whether there are savings
        if (spans[0]) spans[0].style.display = isSubscription || bundleSize > 1 ? '' : 'none';
      }
    }

    // Row 1: Shipping
    if (rows[1]) {
      var shippingVal = rows[1].querySelector('.optibio-price-value');
      if (shippingVal) {
        shippingVal.textContent = shipping === 0 ? 'FREE' : '$' + shipping.toFixed(2);
        if (shipping === 0) {
          shippingVal.classList.add('optibio-savings-highlight');
        } else {
          shippingVal.classList.remove('optibio-savings-highlight');
        }
      }
    }

    // Row 2: You Save
    if (rows[2]) {
      var savingsVal = rows[2].querySelector('.optibio-price-value');
      if (savingsVal) {
        var totalSavings = savings + (shipping === 0 && this.pricing.shipping.oneTime[bundleSize] > 0 ? this.pricing.shipping.oneTime[bundleSize] : 0);
        savingsVal.textContent = '$' + totalSavings.toFixed(2) + ' (' + savingsPercent + '%)';
      }
    }

    // Row 3: Total
    if (rows[3]) {
      var totalEl = rows[3].querySelector('.optibio-price-total');
      if (totalEl) totalEl.textContent = '$' + total.toFixed(2);
    }

    // Update the toggle savings display
    var toggleSavings = document.querySelector('.optibio-toggle-savings');
    if (toggleSavings) {
      var subSavings = this.pricing.bundles[bundleSize].price - this.pricing.subscription[bundleSize].price;
      toggleSavings.textContent = '-$' + subSavings.toFixed(2);
    }
  }
  
  updateAddToCartButton() {
    var purchaseType = this.state.purchaseType;
    var bundleSize = this.state.bundleSize;
    var isSubscription = purchaseType === 'subscription';

    var price = isSubscription
      ? this.pricing.subscription[bundleSize].price
      : this.pricing.bundles[bundleSize].price;

    var buttonText = isSubscription
      ? 'Subscribe Now \u2014 $' + price.toFixed(2)
      : 'Add to Cart \u2014 $' + price.toFixed(2);

    var addToCartBtn = document.getElementById('optibio-add-to-cart');
    if (addToCartBtn) {
      addToCartBtn.textContent = buttonText;
    }

    // Also update sticky cart button text if present
    var stickyBtn = document.getElementById('optibio-sticky-add');
    if (stickyBtn) {
      stickyBtn.textContent = buttonText;
    }
  }
  
  updateShopifyVariant() {
    // Update Shopify's variant selector
    const variantId = this.state.currentVariantId;
    
    // Find and update variant input
    const variantInput = document.querySelector('input[name="id"]');
    if (variantInput) {
      variantInput.value = variantId;
    }
    
    // Trigger Shopify's variant change event
    const event = new CustomEvent('variant:change', {
      detail: {
        variant: {
          id: variantId,
          available: true
        }
      },
      bubbles: true
    });
    document.dispatchEvent(event);
    
    // Also try triggering on the form
    const productForm = document.querySelector('form[action*="/cart/add"]');
    if (productForm) {
      productForm.dispatchEvent(event);
    }
  }
  
  addToCart() {
    var self = this;
    var variantId = this.state.currentVariantId;
    var isSubscription = this.state.purchaseType === 'subscription';

    var body = {
      items: [{
        id: variantId,
        quantity: 1
      }]
    };

    // Attach selling plan if subscription
    if (isSubscription && this.sellingPlans.length > 0) {
      var planIndex = Math.min(this.selectedFrequencyIndex, this.sellingPlans.length - 1);
      body.items[0].selling_plan = this.sellingPlans[planIndex].id;
    }

    // Also update the hidden form inputs (for express checkout compatibility)
    var variantInput = document.querySelector('#optibio-product-form input[name="id"]');
    if (variantInput) variantInput.value = variantId;

    var sellingPlanInput = document.getElementById('optibio-selling-plan-input');
    if (sellingPlanInput) {
      if (isSubscription && this.sellingPlans.length > 0) {
        var idx = Math.min(this.selectedFrequencyIndex, this.sellingPlans.length - 1);
        sellingPlanInput.value = this.sellingPlans[idx].id;
      } else {
        sellingPlanInput.value = '';
      }
    }

    // Disable button during request
    var btn = document.getElementById('optibio-add-to-cart');
    if (btn) {
      btn.disabled = true;
      btn.textContent = 'Adding...';
    }

    fetch('/cart/add.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
    .then(function(response) {
      if (!response.ok) throw new Error('Add to cart failed');
      return response.json();
    })
    .then(function() {
      // Redirect to checkout for subscribe, or update cart drawer
      if (isSubscription) {
        window.location.href = '/checkout';
      } else {
        // Redirect to cart page
        window.location.href = '/cart';
      }
    })
    .catch(function(err) {
      if (btn) {
        btn.disabled = false;
        self.updateAddToCartButton();
      }
      console.error('Optibio: Add to cart error', err);
    });
  }

  updateFreeShippingBar() {
    // CRO: Free shipping progress bar — updates based on selected variant price
    var progressBar = document.getElementById('optibio-shipping-progress');
    var freeEl = document.getElementById('optibio-shipping-free');
    var remainingEl = document.getElementById('optibio-shipping-remaining');
    var fillEl = document.getElementById('optibio-shipping-fill');

    if (!progressBar || !freeEl) return;

    var isSubscription = this.state.purchaseType === 'subscription';
    var bundleSize = this.state.bundleSize;
    var price = isSubscription
      ? this.pricing.subscription[bundleSize].price
      : this.pricing.bundles[bundleSize].price;

    var threshold = this.freeShippingThreshold;

    if (price >= threshold || isSubscription) {
      // Subscriptions always get free shipping; bundles >= $49 qualify too
      progressBar.style.display = 'none';
      freeEl.style.display = 'flex';
    } else {
      var remaining = (threshold - price).toFixed(2);
      var percent = Math.min((price / threshold) * 100, 100);
      progressBar.style.display = 'block';
      freeEl.style.display = 'none';
      if (remainingEl) remainingEl.textContent = '$' + remaining;
      if (fillEl) fillEl.style.width = percent + '%';
    }
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.optiBioEnhancements = new OptibioProductEnhancements();
  });
} else {
  window.optiBioEnhancements = new OptibioProductEnhancements();
}

// Patch Judge.me "Write a Review" links for SEO crawlability
(function patchJudgeMeLinks() {
  var observer = new MutationObserver(function(mutations) {
    var links = document.querySelectorAll('.jdgm-write-rev-link:not([href])');
    links.forEach(function(el) {
      el.setAttribute('href', '#judgeme_product_reviews');
    });
    if (links.length > 0) observer.disconnect();
  });
  observer.observe(document.body, { childList: true, subtree: true });
  setTimeout(function() { observer.disconnect(); }, 10000);
})();
