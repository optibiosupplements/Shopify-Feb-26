/**
 * Optibio Product Page Enhancements - Phase 1 v2
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
    
    this.state = {
      purchaseType: 'subscription', // 'onetime' or 'subscription'
      bundleSize: 3, // 1, 3, or 6 (default to MOST POPULAR)
      currentVariantId: this.variants[3]
    };
    
    this.init();
  }
  
  init() {
    this.freeShippingThreshold = 75; // $75 for free shipping
    this.attachEventListeners();
    this.updateUI();
    this.integrateWithShopifySubscriptions();
    this.updateFreeShippingBar();
  }
  
  attachEventListeners() {
    // Purchase type toggle
    document.querySelectorAll('input[name="purchase-type"]').forEach(radio => {
      radio.addEventListener('change', (e) => {
        this.state.purchaseType = e.target.value;
        this.updateUI();
        this.triggerSubscriptionWidgetUpdate();
      });
    });
    
    // Bundle selection
    document.querySelectorAll('input[name="bundle-size"]').forEach(radio => {
      radio.addEventListener('change', (e) => {
        this.state.bundleSize = parseInt(e.target.value);
        this.state.currentVariantId = this.variants[this.state.bundleSize];
        this.updateUI();
        this.updateShopifyVariant();
      });
    });
    
    // Card click handlers for better UX
    document.querySelectorAll('.optibio-bundle-card').forEach(card => {
      card.addEventListener('click', () => {
        const radio = card.querySelector('input[type="radio"]');
        if (radio && !radio.checked) {
          radio.checked = true;
          radio.dispatchEvent(new Event('change'));
        }
      });
    });
    
    document.querySelectorAll('.optibio-purchase-option').forEach(option => {
      option.addEventListener('click', () => {
        const radio = option.querySelector('input[type="radio"]');
        if (radio && !radio.checked) {
          radio.checked = true;
          radio.dispatchEvent(new Event('change'));
        }
      });
    });
  }
  
  updateUI() {
    this.updatePurchaseTypeUI();
    this.updateBundleCardsUI();
    this.updatePriceSummary();
    this.updateAddToCartButton();
    this.updateFreeShippingBar();
  }
  
  updatePurchaseTypeUI() {
    document.querySelectorAll('.optibio-purchase-option').forEach(option => {
      const radio = option.querySelector('input[type="radio"]');
      if (radio && radio.value === this.state.purchaseType) {
        option.classList.add('selected');
      } else {
        option.classList.remove('selected');
      }
    });
  }
  
  updateBundleCardsUI() {
    document.querySelectorAll('.optibio-bundle-card').forEach(card => {
      const radio = card.querySelector('input[type="radio"]');
      if (radio && parseInt(radio.value) === this.state.bundleSize) {
        card.classList.add('selected');
      } else {
        card.classList.remove('selected');
      }
    });
    
    // Update bundle prices based on purchase type
    const isSubscription = this.state.purchaseType === 'subscription';
    
    [1, 3, 6].forEach(size => {
      const priceEl = document.querySelector(`[data-bundle-price="${size}"]`);
      if (priceEl) {
        const price = isSubscription 
          ? this.pricing.subscription[size].price 
          : this.pricing.bundles[size].price;
        priceEl.textContent = `$${price.toFixed(2)}`;
      }
      
      const perBottleEl = document.querySelector(`[data-bundle-per-bottle="${size}"]`);
      if (perBottleEl && size > 1) {
        const perBottle = isSubscription 
          ? this.pricing.subscription[size].pricePerBottle 
          : this.pricing.bundles[size].pricePerBottle;
        perBottleEl.textContent = `$${perBottle.toFixed(2)}/bottle`;
      }
    });
  }
  
  updatePriceSummary() {
    const { purchaseType, bundleSize } = this.state;
    const isSubscription = purchaseType === 'subscription';
    
    const pricing = isSubscription 
      ? this.pricing.subscription[bundleSize] 
      : this.pricing.bundles[bundleSize];
    
    const shipping = isSubscription 
      ? this.pricing.shipping.subscription[bundleSize] 
      : this.pricing.shipping.oneTime[bundleSize];
    
    const subtotal = pricing.price;
    const compareAt = pricing.compareAt;
    const total = subtotal + shipping;
    const savings = compareAt - subtotal;
    const savingsPercent = Math.round((savings / compareAt) * 100);
    
    // Update summary elements
    const subtotalEl = document.querySelector('[data-price-subtotal]');
    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    
    const compareAtEl = document.querySelector('[data-price-compare-at]');
    if (compareAtEl) compareAtEl.textContent = `$${compareAt.toFixed(2)}`;
    
    const savingsEl = document.querySelector('[data-price-savings]');
    if (savingsEl) savingsEl.textContent = `Save $${savings.toFixed(2)} (${savingsPercent}%)`;
    
    const shippingEl = document.querySelector('[data-price-shipping]');
    if (shippingEl) {
      shippingEl.textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
      shippingEl.style.color = shipping === 0 ? '#4CAF50' : '#666';
      shippingEl.style.fontWeight = shipping === 0 ? '600' : 'normal';
    }
    
    const totalEl = document.querySelector('[data-price-total]');
    if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
  }
  
  updateAddToCartButton() {
    const { purchaseType, bundleSize } = this.state;
    const isSubscription = purchaseType === 'subscription';
    
    const price = isSubscription 
      ? this.pricing.subscription[bundleSize].price 
      : this.pricing.bundles[bundleSize].price;
    
    const buttonText = isSubscription 
      ? `Subscribe Now — $${price.toFixed(2)}` 
      : `Add to Cart — $${price.toFixed(2)}`;
    
    const addToCartBtn = document.querySelector('.optibio-add-to-cart-btn, button[name="add"]');
    if (addToCartBtn) {
      const textNode = Array.from(addToCartBtn.childNodes).find(node => node.nodeType === Node.TEXT_NODE);
      if (textNode) {
        textNode.textContent = buttonText;
      } else {
        addToCartBtn.textContent = buttonText;
      }
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
  
  integrateWithShopifySubscriptions() {
    // Listen for Shopify Subscriptions widget events
    document.addEventListener('subscription:changed', (e) => {
      if (e.detail && e.detail.sellingPlanId) {
        // Subscription selected in widget
        this.state.purchaseType = 'subscription';
        this.updateUI();
      } else {
        // One-time purchase selected
        this.state.purchaseType = 'onetime';
        this.updateUI();
      }
    });
  }
  
  triggerSubscriptionWidgetUpdate() {
    // Notify Shopify Subscriptions widget of purchase type change
    const isSubscription = this.state.purchaseType === 'subscription';

    // Try to find and interact with Shopify's subscription widget
    const subscriptionWidget = document.querySelector('[data-subscription-widget]');
    if (subscriptionWidget) {
      const event = new CustomEvent('purchase-type:change', {
        detail: {
          isSubscription: isSubscription
        },
        bubbles: true
      });
      subscriptionWidget.dispatchEvent(event);
    }
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
      // Subscriptions always get free shipping; bundles >= $75 qualify too
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
