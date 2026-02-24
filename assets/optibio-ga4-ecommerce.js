/**
 * Optibio GA4 Enhanced E-Commerce — dataLayer Integration
 * Events: view_item, add_to_cart, view_item_list
 * begin_checkout + purchase handled via GTM triggers on Shopify checkout/thank-you pages
 */

(function() {
  'use strict';

  window.dataLayer = window.dataLayer || [];

  // Product data from the page (set by Liquid in product template)
  var productData = window.__optibio_product || null;

  /**
   * Push view_item event on product page load
   */
  function pushViewItem() {
    if (!productData) return;

    window.dataLayer.push({ ecommerce: null }); // Clear previous ecommerce object
    window.dataLayer.push({
      event: 'view_item',
      ecommerce: {
        currency: 'USD',
        value: productData.price,
        items: [{
          item_id: productData.id,
          item_name: productData.title,
          item_brand: 'Optibio',
          item_category: 'Supplements',
          item_variant: productData.variant_title || 'Default',
          price: productData.price,
          quantity: 1
        }]
      }
    });
  }

  /**
   * Push add_to_cart event
   */
  function pushAddToCart(variantId, price, quantity, variantTitle) {
    if (!productData) return;

    window.dataLayer.push({ ecommerce: null });
    window.dataLayer.push({
      event: 'add_to_cart',
      ecommerce: {
        currency: 'USD',
        value: price * quantity,
        items: [{
          item_id: productData.id,
          item_name: productData.title,
          item_brand: 'Optibio',
          item_category: 'Supplements',
          item_variant: variantTitle || productData.variant_title || 'Default',
          price: price,
          quantity: quantity
        }]
      }
    });
  }

  /**
   * Push view_item_list event for homepage bundles
   */
  function pushViewItemList() {
    var bundleCards = document.querySelectorAll('.optibio-home-bundles__card');
    if (bundleCards.length === 0) return;

    var items = [];
    bundleCards.forEach(function(card, index) {
      var tierEl = card.querySelector('.optibio-home-bundles__tier');
      var priceEl = card.querySelector('.optibio-home-bundles__price');
      if (tierEl && priceEl) {
        var priceText = priceEl.textContent.replace(/[^0-9.]/g, '');
        items.push({
          item_id: 'optibio-ksm66-bundle',
          item_name: 'Optibio KSM-66 Ashwagandha — ' + tierEl.textContent.trim(),
          item_brand: 'Optibio',
          item_category: 'Supplements',
          price: parseFloat(priceText) || 0,
          index: index,
          item_list_id: 'homepage_bundles',
          item_list_name: 'Homepage Bundles'
        });
      }
    });

    if (items.length > 0) {
      window.dataLayer.push({ ecommerce: null });
      window.dataLayer.push({
        event: 'view_item_list',
        ecommerce: {
          item_list_id: 'homepage_bundles',
          item_list_name: 'Homepage Bundles',
          items: items
        }
      });
    }
  }

  /**
   * Attach add_to_cart listener to ATC buttons
   */
  function attachATCListeners() {
    // Optibio custom buy box ATC button
    var atcBtn = document.querySelector('.optibio-add-to-cart-btn, .optibio-cta-button[data-add-to-cart]');
    if (atcBtn) {
      atcBtn.addEventListener('click', function() {
        var enhancer = window.optiBioEnhancements;
        if (enhancer && enhancer.state) {
          var bundleSize = enhancer.state.bundleSize || 1;
          var isSubscription = enhancer.state.purchaseType === 'subscription';
          var pricing = isSubscription ? enhancer.pricing.subscription : enhancer.pricing.bundles;
          var bundleData = pricing[bundleSize];
          var price = bundleData ? bundleData.price : 0;
          var variantTitle = bundleSize + ' Bottle' + (bundleSize > 1 ? 's' : '') + (isSubscription ? ' (Subscribe)' : '');
          pushAddToCart(enhancer.state.currentVariantId, price, 1, variantTitle);
        }
      });
    }

    // Also listen on Shopify native product forms
    document.querySelectorAll('form[action*="/cart/add"]').forEach(function(form) {
      form.addEventListener('submit', function() {
        var priceEl = document.querySelector('[data-price-total]');
        var price = priceEl ? parseFloat(priceEl.textContent.replace(/[^0-9.]/g, '')) : (productData ? productData.price : 0);
        pushAddToCart(
          form.querySelector('input[name="id"]') ? form.querySelector('input[name="id"]').value : '',
          price,
          1,
          ''
        );
      });
    });

    // Sticky cart bar button
    var stickyBtn = document.querySelector('.optibio-sticky-cart__button');
    if (stickyBtn) {
      stickyBtn.addEventListener('click', function() {
        var enhancer = window.optiBioEnhancements;
        if (enhancer && enhancer.state) {
          var bundleSize = enhancer.state.bundleSize || 1;
          var isSubscription = enhancer.state.purchaseType === 'subscription';
          var pricing = isSubscription ? enhancer.pricing.subscription : enhancer.pricing.bundles;
          var bundleData = pricing[bundleSize];
          var price = bundleData ? bundleData.price : 0;
          pushAddToCart(enhancer.state.currentVariantId, price, 1, bundleSize + ' Bottle(s)');
        }
      });
    }
  }

  // Initialize on DOM ready
  function init() {
    // Fire view_item on product pages
    if (productData) {
      pushViewItem();
      attachATCListeners();
    }

    // Fire view_item_list on homepage
    if (document.querySelector('.optibio-home-bundles')) {
      pushViewItemList();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose for manual triggering if needed
  window.__optibio_ga4 = {
    pushViewItem: pushViewItem,
    pushAddToCart: pushAddToCart,
    pushViewItemList: pushViewItemList
  };
})();
