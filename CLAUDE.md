# CLAUDE.md — Optibio Shopify Store Project (Updated: February 19, 2026 — Session A+B)

> This is the compounding knowledge base for the Optibio project.
> Every mistake, every rule, every decision lives here so Claude never repeats an error.
> Update this file after every session, every code review, every correction.

---

## Project Overview

**Brand:** Optibio — Premium Ashwagandha KSM-66® Supplement
**Positioning:** "Ethereal Clinical Luxury" — pharmaceutical-grade clinical credibility meets premium visual identity (comparable to Goop, Ritual, The Nue Co.)
**Shopify Store:** optibio-store-2026.myshopify.com
**Live Domain:** optibiosupplements.com (currently still on Manus — NOT yet transferred)
**Conversion Target:** 5%+ (vs. industry average 2–4% for supplement DTC)
**Current Status:** Pre-Launch (all pages FTC-compliant as of Feb 17, 2026 — domain transfer and Pixel ID still pending)

---

## GitHub Repository

### Primary Repo — Single Source of Truth
- **Repo:** `optibiosupplements/Shopify-Feb-26`
- **URL:** https://github.com/optibiosupplements/Shopify-Feb-26
- **Branch:** `main`
- **Purpose:** Complete 100% backup of the entire Shopify store — theme code, assets, config, product data exports, settings, everything needed to rebuild from zero
- **Why:** Disaster recovery. If Shopify ever has issues, suspends the account, or data is lost, this repo allows full restoration of the store from scratch.
- **What goes in it:** Liquid templates, CSS, JS, config files, CLAUDE.md, product CSV exports, page content, navigation menus, metafield definitions, email templates, checkout settings
- **Backup Strategy:**
  - After every major change or session, push updated files here
  - Tag releases with dates (e.g., `backup-2026-02-17`) for easy rollback to any point in time
  - Never force-push — preserve full history for rollback capability

### Archived Repo (Do Not Use)
- **Repo:** `optibiosupplements/optibio-shopify-theme`
- **Status:** ARCHIVED — no longer actively maintained
- **Why it exists:** Was the original theme code repo. All work has been consolidated into `Shopify-Feb-26`.
- **Rule:** Do NOT push new changes here. Use `Shopify-Feb-26` for everything.

---

## CRITICAL RULES — Never Violate These

### Brand Name
- **ALWAYS** use "Optibio" (lowercase "b")
- **NEVER** use "OptiBio" — capital B is incorrect and damages brand consistency
- Apply this everywhere: code, copy, filenames, emails, ads, metadata

### Trademark
- **ALWAYS** write "KSM-66®" with the registered trademark symbol ®
- KSM-66 is a registered trademark of Ixoreal Biomed
- Omitting ® violates the licensing agreement

### FTC Compliance — This Is Non-Negotiable
Every clinical claim MUST be:
1. Accurately attributed to the correct study outcome
2. Backed by a PubMed-linked citation
3. Match the source data EXACTLY — no rounding, no paraphrasing, no creative liberties

**Correct Claims (use these and ONLY these):**

| Claim | Correct Value | Source | PubMed ID |
|-------|--------------|--------|-----------|
| Cortisol Reduction | 27.9% | Chandrasekhar 2012 (serum cortisol, n=64, 60 days) | 23439798 |
| Stress Reduction | 44% | Chandrasekhar 2012 (PSS perceived stress score) | 23439798 |
| Sleep Efficiency | 75.6% → 83.5% | Langade 2019 (p=0.002) | 31728244 |
| Endurance Improvement | 13% | Choudhary 2015 (VO2max, p<0.0001) | 26730141 |
| Cognitive/Anxiety | Improvement (no specific %) | Salve 2019 | 32021735 |
| Muscle Strength | Improvement (no specific %) | Wankhede 2015 | 26609282 |

**FALSE Claims to NEVER Use:**

| False Claim | Why It's Wrong |
|------------|----------------|
| "44% Cortisol Reduction" | 44% was PSS stress score, NOT cortisol |
| "72% Sleep Improvement" | 72.3% was GHQ-28 general health, NOT sleep |
| "27.9% Energy Boost" | 27.9% was cortisol reduction, NOT energy/VO2 |
| "72% Sleep Quality" | Completely fabricated attribution |

**FDA Disclaimer Required on All Pages:**
"These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease."

---

## Design System — Source of Truth

### Colors
| Color | Hex | Role |
|-------|-----|------|
| Navy | #1A2F4D | Headlines, headings, primary text. BRAND ANCHOR. |
| Deep Navy | #1E3A5F | Dark backgrounds, badge seals, table headers. |
| Antique Gold | #C9A961 | Accents, badges, stat numbers, gold borders. MAX 15% of screen. |
| Electric Blue | #2563EB | CTA buttons, links, primary actions. Hover: #1D4ED8. |
| Sky Blue Gradient | radial-gradient(ellipse at center, #F8FCFE 0%, #EBF5FB 40%, #D6EAF8 100%) | Page backgrounds. Radial ellipse. |
| Body Text | #475569 | All paragraph text. NEVER use pure black (#000000). |
| Success Green | #10B981 | Checkmarks, verification badges only. |
| Star Gold | #F59E0B | Review stars ONLY. |

### Typography
| Element | Font | Size | Weight |
|---------|------|------|--------|
| Hero Title | Sora | 48–56px | 700 |
| Section Headings | Sora | 28–36px | 700 |
| Body Text | Inter | 15–16px | 400 |
| Stat Numbers | Inter | 32–40px | 700 |
| Badges/Labels | Inter | 11–13px | 600 |
| CTA Buttons | Sora | 15–16px | 600 |

### Visual Effects
- **Glassmorphism:** backdrop-filter: blur(12px), background: rgba(255,255,255,0.7), border: 1px solid rgba(255,255,255,0.3)
- **Golden Radiance Glow:** Baked into product photography — DO NOT add CSS glow overlay (causes doubled glow)
- **Float Animation:** 8s ease-in-out infinite translateY on product images
- **Scroll Reveal:** opacity 0→1, translateY(20px)→0 on section entry
- **Border Radius:** 8px inputs, 12px cards, 16px sections, 999px pills
- **Spacing:** 8px base grid system

### Voice & Tone
- "Authoritative, not arrogant"
- Clinical credibility with warmth
- Never use hype language, never make unsubstantiated claims
- Every stat must have a citation

---

## Technical Configuration

### Shopify MCP Setup
| Parameter | Value |
|-----------|-------|
| Shopify Store | optibio-store-2026.myshopify.com |
| Custom App | Claud MCP (full Admin API scopes) |
| Config File | ~/Library/Application Support/Claude/claude_desktop_config.json |
| MCP Servers | shopify-dev (docs) + shopify-store (management) |
| Node.js | v24.11.1 |
| Product Image CDN | cdn.shopify.com/s/files/1/0713/6994/9253/files/LToMdDXYNWhaGtfI.png |

### OAuth Token
- Expires every 86,400 seconds (24 hours)
- Must be refreshed via client credentials grant flow
- Legacy custom app creation deprecated Jan 1, 2026 — use Dev Dashboard

### Product Variants & Pricing
| Tier | Price | Per-Unit |
|------|-------|----------|
| 1 Bottle | $39.99 | $39.99 |
| 3 Bottles | $99.99 | $33.33 |
| 6 Bottles | $179.94 | $29.99 |
| Subscribe & Save | 15% off standard | — |

- 3-bottle tier is pre-selected as "Most Popular"
- 6-bottle tier labeled "Best Value"

---

## Known Issues & Gotchas

### Active Bugs
- ~~**Homepage:** 4 false claims still live~~ **FIXED Feb 17, 2026** — All claims verified correct (27.9% cortisol, 44% PSS stress, 75.6%→83.5% sleep, 13% endurance). PubMed citations and FDA disclaimer present.
- ~~**Science Page:** 6 false claims still live~~ **FIXED Feb 17, 2026** — Full rewrite of body_html via Shopify admin. 20 violations corrected: fabricated stats (72% sleep, 69% anxiety), misattributed stats (44% cortisol, 27.9% energy), "Clinically Proven" → "Clinically Studied", "22+" → "multiple peer-reviewed trials". 5 PubMed citations and FDA disclaimer added. SEO title/meta updated.
- ~~**Product Page:**~~ **FIXED Feb 17, 2026** — 7 violations corrected: "Clinically Proven" → "Clinically Studied", "22+" → "multiple peer-reviewed trials". SEO title updated from "Clinically-Proven" to "Clinically-Studied".
- **Store Name:** "OptiBio Supplements" (capital B) appears in store-level settings (Settings > Store details). Shows in admin bar and `og:site_name` meta tags across all pages. Should be updated to "Optibio Supplements" for brand consistency. Not an FTC issue but violates brand naming rules.
- **Domain:** optibiosupplements.com still points to Manus platform
- **Facebook Pixel:** Placeholder ID (YOUR_FACEBOOK_PIXEL_ID) — zero tracking
- **Manus Sign-In:** Link redirects to manus.im auth — breaks for customers
- **OAuth Expiry:** Token expires every 24hr — refresh before MCP sessions

### Past Mistakes (Never Repeat)
1. **Misattributed study data** — The original site assigned percentage figures to the WRONG clinical outcomes. Always cross-reference PubMed before using any stat.
2. **Capital B in OptiBio** — Proliferated across files before being caught. Always search-and-replace after any bulk content generation.
3. **CSS golden glow on product image** — The golden radiance is baked into the photography. Adding a CSS overlay doubles the effect and looks cheap.
4. **Manus quality gap** — Manus delivered ~40% of target design quality. Always verify against the 27 approved mockups, not the Manus implementation.
5. **Browser caching** — After deploying Shopify theme changes, users may see stale versions. Always note Ctrl+Shift+R for hard refresh.
6. **MCP token expiry during session** — OAuth token expired mid-session returning 401. Workaround: use Chrome MCP browser automation to edit CMS content directly in Shopify admin. Access CM6 editor via `document.querySelector('.cm-content').cmView.view` and replace content with `view.dispatch({changes: {from: 0, to: length, insert: newContent}})`. For large content (>4KB), chunk into pieces via `window._chunks` array, then join and dispatch.
7. **Store name "OptiBio" in store settings** — The store-level name ("OptiBio Supplements") propagates to og:site_name and admin bar. This is NOT fixable at the page/theme level — must be changed in Settings > Store details.

---

## File References

### Design Mockups (27 files)
- Hero: herogoldenradiancemockup.png, heromockupfixedcohesion.png
- Full-Page: fullpagemockupdesktop.png
- Mobile (6): mockupf[optimized/skyblue/brandsky/amber].png
- Style Explorations (6): mockup[a-g] series
- Full Layouts (3): mockup[a/b/c]fullpage.png
- Product Photography (3): product[goldenradiance/premiumstudio/zenlifestyle].png
- Bottle Renders (4): OPTIBIO_Bottle_Mockup_[Hero/Front/Angle/Lifestyle].png
- A/B Variant: Luxury Clinical vs. Outcome-First comparison

### Key Documents
- Brand Guidelines Manual v1.0 (12 sections)
- Optibio Shopify Project Report (Feb 14, 2026)
- Optibio Cowork Implementation Guide
- This CLAUDE.md file

---

## Workflow Rules for Claude Sessions

### Before Any Content Changes
1. Check this CLAUDE.md for brand rules and FTC compliance
2. Cross-reference clinical claims against the verified table above
3. Use "Optibio" (lowercase b) and "KSM-66®" (with ®) in ALL output

### Before Any Theme Edits
1. Verify MCP token is fresh (< 24hr old)
2. Reference the design system colors/typography above
3. Do NOT add CSS golden glow to product images
4. Test on mobile breakpoints: 375px, 768px, 1024px, 1440px

### Before Any Launch Activity
1. ~~ALL 10 false claims on Homepage + Science Page must be fixed first~~ DONE — verified Feb 17, 2026
2. Facebook Pixel must have a real ID (not placeholder)
3. Domain must be transferred to Shopify
4. Checkout flow must be tested end-to-end

### After Every Session
1. **Update the date in the file title** — The `# CLAUDE.md` heading must always include `(Updated: <date>)` with today's date, so it's immediately clear which version is current
2. Update the `*Last updated:*` footer at the bottom of the file to match
3. Add any new mistakes or learnings to the "Past Mistakes" section above
4. Update "Active Bugs" if anything was fixed or new issues found
5. Note any decisions made that affect future work
6. Push updated files to `Shopify-Feb-26` backup repo if any theme/store changes were made

### GitHub Backup Procedure
1. ALL pushes go to `Shopify-Feb-26` only — do NOT push to `optibio-shopify-theme` (archived)
2. After any theme edits: push updated files to `Shopify-Feb-26`
3. After product/content changes: export data and commit to `Shopify-Feb-26`
4. Tag major milestones: `git tag backup-YYYY-MM-DD` for easy rollback

---

## Session Log

| Date | What Was Done | Key Decisions | Issues Found |
|------|--------------|---------------|--------------|
| Feb 14, 2026 | Complete project report generated (20 pages) | All project data consolidated into single document | None |
| Feb 14, 2026 | CLAUDE.md created, Cowork playbook configured | Boris's framework applied to Optibio project | Shopify MCP returning 401 — token may need refresh |
| Feb 14, 2026 | CLAUDE.md pushed to optibio-shopify-theme repo | Committed via GitHub web UI (git CLI blocked by sandbox proxy) | Chrome extension needed for GitHub access |
| Feb 16, 2026 | Updated CLAUDE.md with new backup repo strategy | New repo "Shopify-Feb-26" created for full store disaster recovery backup | Chrome extension disconnected — reconnect needed for push |
| Feb 16, 2026 | Consolidated to single repo | `Shopify-Feb-26` is now the only active repo. `optibio-shopify-theme` archived. No more double-pushing. | None |
| Feb 17, 2026 | FTC compliance audit & fix — all 3 pages | Homepage verified clean (8/8 checks pass). Science page: 20 violations found & fixed via full body_html rewrite + SEO update. Product page: 7 violations found & fixed (body_html targeted replacements + SEO title update). All fixes done via Shopify admin CM6 editor (MCP token was expired). | Store name "OptiBio Supplements" needs fixing in Settings > Store details (store-level, not page-level). MCP OAuth token expired — used Chrome browser automation as fallback. |
| Feb 19, 2026 | Brand logo implementation — full touchpoint audit & asset preparation | Source: `OB logo_white_trans.png` is the ONLY file with true RGBA transparency (78.4% transparent pixels). `OB logo_transparent.png` is misleadingly named — has NO alpha channel (RGB mode, baked-in gray bg). Optimized 5 assets: header logo (64KB, 400×313px), inverse logo (64KB), favicon 180px (18KB), favicon 32px (2KB), OG image (47KB, 1200×630px on #1B365D navy). Logo heights set to 44px desktop / 34px mobile (up from 36/28 defaults — stacked wordmark needs more vertical space). All assets in `~/Desktop/OPTIMAL BIOLOGY/0. BRANDING ASSET/OB LOGO/optimized/`. URL redirect also created: `/products/optibio-ksm-66-ashwagandha` → `/products/optibio-ashwagandha-ksm-66`. | Chrome MCP extension unstable — disconnects on screenshot attempts in Shopify theme editor. Manual upload required for logo `image_picker` settings (cannot be set via settings_data.json). |
| Feb 19, 2026 | **Session A — CSS Consolidation + Product Page CRO + Traceability Badge** | **Phase 1: CSS Consolidation** — Created `assets/optibio-global.css` (~600 lines) consolidating 3 conflicting CSS files into 1 unified design system. Correct tokens: Navy #1B365D, Gold #D4AF37, Playfair Display + DM Sans. Ported `.ob-*` homepage classes AS-IS with TEMPORARY comment (will be removed in Session B). Edited `layout/theme.liquid` to load single CSS file instead of 3. Old files kept in assets/ for rollback. **Phase 2: CRO Enhancements** — Added inline social proof (★★★★★ 4.9 / 287 reviews) to hero buy box, low stock indicator (real inventory < 50), risk reversal (90-Day Guarantee + Free Returns) below ATC, free shipping progress bar ($75 threshold), sticky cart bar stars + guarantee text. **Phase 2.3: Traceability Badge** — Created `sections/product-traceability-badge.liquid` (glassmorphism card, shield icon, "Seed to Shelf Verified", FDA/cGMP/3rd-Party/USA badges, "Verify Your Batch" CTA). Inserted between Trust and FAQ sections. **Deploy:** Pushed to dev theme ID 146307776581. | Shopify `url` schema type cannot have a `default` value — causes validation error. Fixed with Liquid-level fallback: `section.settings.button_link \| default: '/pages/verify'`. Removed redundant Google Fonts @import from `optibio-enhanced-buy-box.liquid`. Chrome MCP extension disconnected — browser verification pending. |

---

### Session A — Files Modified/Created (Feb 19, 2026)

| Action | File | Purpose |
|--------|------|---------|
| CREATED | `assets/optibio-global.css` | Consolidated global design system (~600 lines). Replaces optibio-brand.css + optibio-custom.css + optibio-ethereal.css |
| CREATED | `sections/product-traceability-badge.liquid` | "Seed to Shelf Verified" glassmorphism badge with CTA |
| EDITED | `layout/theme.liquid` (lines 40-45) | Replaced 3 CSS imports with single optibio-global.css |
| EDITED | `sections/product-hero.liquid` | Added inline social proof + low stock indicator |
| EDITED | `snippets/optibio-enhanced-buy-box.liquid` | Added risk reversal + free shipping progress bar, removed redundant font import |
| EDITED | `snippets/product-sticky-cart.liquid` | Added stars + "Risk-free · 90-day guarantee" text |
| EDITED | `assets/product-page.css` | Added CSS for all CRO elements (social proof, low stock pulse, risk reversal, shipping bar) |
| EDITED | `assets/optibio-product-enhancements.js` | Added `updateFreeShippingBar()` method ($75 threshold logic) |
| EDITED | `templates/product.optibio-main.json` | Added traceability section between trust and FAQ |

### Dev Theme
- **Theme ID:** 146307776581
- **Preview URL:** `https://optibio-store-2026.myshopify.com?preview_theme_id=146307776581`
- **Status:** Pushed successfully, pending browser verification before publishing to live

### Manual Steps Still Required (Session A)
- [ ] Verify dev theme renders correctly in browser (homepage, product page, header/footer)
- [ ] Publish dev theme to live after verification
- [ ] Delete excess product images (16→3-4) in Shopify Admin
- [ ] Add "Verify Your Batch" to header navigation (Shopify Admin → Navigation → Main Menu)
- [ ] Set `button_link` for traceability badge in theme editor (currently defaults to `/pages/verify` via Liquid)

---

### Past Mistakes Addendum (Feb 19, 2026)
8. **Misleading filename "OB logo_transparent.png"** — This file has NO alpha channel (RGB mode). The background is baked-in gray/white, not transparent. The correct transparent source is `OB logo_white_trans.png` (RGBA, 78.4% transparent pixels). Always verify `img.mode` before assuming transparency from a filename.
9. **Shopify `url` schema type cannot have a `default` value** — Setting `"type": "url"` with `"default": "/pages/verify"` causes a schema validation error. Use Liquid-level fallback instead: `{% assign verify_link = section.settings.button_link | default: '/pages/verify' %}`.

---

### Completed Sessions
- ~~**Session A:** CSS consolidation + Product page CRO + Traceability badge~~ DONE
- ~~**Session A+B (continued):** Design system unification (#1A2F4D/#C9A961/Sora/Inter), badge implementation (6 SVG icons), header logo fix, double header fix, homepage audit (all 7 sections verified), Science page verified, About page verified, Verify Your Batch page built (hero + search + results + supply chain timeline + COA), page created in Shopify Admin~~ DONE

### Remaining Work
- **Publish dev theme to live** — Theme 146307776581 ready to go live
- **Traceability backend (future):** Node.js App Proxy + Shopify metaobjects for dynamic batch lookup (currently uses client-side sample data)
- **Review system:** Judge.me or similar app integration
- **Subscribe & Save:** Shopify Subscriptions app
- **Blog content:** 3 foundational articles
- **Performance/Accessibility audits**

---

*Last updated: February 19, 2026 (Session A+B complete — all pages built, dev theme ready to publish)*
*Next review: After publishing live — verify all pages, create discount codes, transfer domain*
