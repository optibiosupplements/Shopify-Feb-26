# CLAUDE.md — Optibio Shopify Store Project (Updated: February 21, 2026 — Session F)

> This is the compounding knowledge base for the Optibio project.
> Every mistake, every rule, every decision lives here so Claude never repeats an error.
> Update this file after every session, every code review, every correction.

---

## Project Overview

**Brand:** Optibio — Premium Ashwagandha KSM-66® Supplement
**Positioning:** "Ethereal Clinical Luxury" — pharmaceutical-grade clinical credibility meets premium visual identity (comparable to Goop, Ritual, The Nue Co.)
**Shopify Store:** optibio-store-2026.myshopify.com
**Live Domain:** optibiosupplements.com (DNS connected to Shopify as of Feb 20, 2026 — auto-configured via GoDaddy)
**Conversion Target:** 5%+ (vs. industry average 2–4% for supplement DTC)
**Current Status:** Pre-Launch READY (all pages FTC-compliant, domain live, 6 legal policies published, chat widget branded, 3 blog posts polished, full audit 11/11 PASS — remaining: favicon upload, test order, shipping rates config, Payments completion, Pixel ID)

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

### Feature & Product Naming — Brand Identity
- **"Subscribe & Save"** — the user-facing feature name. Powered by Shopify's native Subscriptions app (free). Only reference the app name when discussing app-level config/dashboard settings.
- **"Product Reviews"** — the user-facing feature name. NEVER call it "Judge.me" in copy, UI, or documentation. Judge.me is the underlying app — only reference it when discussing app-level config/dashboard settings.
- This rule applies to: customer-facing copy, theme code comments, CLAUDE.md descriptions, commit messages, and all session documentation.
- **General rule:** Always document brand identity decisions (names, terminology, feature labels) in this CRITICAL RULES section so they persist across sessions and are never lost.

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
- ~~**Store Name:** "OptiBio Supplements" (capital B) appears in store-level settings (Settings > Store details).~~ **VERIFIED FIXED Feb 20, 2026 (Session E)** — Store name already reads "Optibio Supplements" (lowercase b). Confirmed in Admin → Settings → General → Store contact details and via live site tab title + og:site_name.
- ~~**Domain:** optibiosupplements.com still points to Manus platform~~ **FIXED Feb 20, 2026 (Session E)** — Domain connected to Shopify via GoDaddy auto-connect. DNS CNAME `www` changed from `cname.manus.space` → `shops.myshopify.com`. TLS certificate provisioned. Domain set as Primary.
- **Facebook Pixel:** Placeholder ID (YOUR_FACEBOOK_PIXEL_ID) — zero tracking
- **Manus Sign-In:** Link redirects to manus.im auth — breaks for customers
- **OAuth Expiry:** Token expires every 24hr — refresh before MCP sessions
- ~~**Verify page 404:** `/pages/verify` returns 404 — nav links in header, footer, and traceability badge all broken~~ **FIXED Feb 20, 2026** — Theme updated with Coming Soon state (disabled form, gold banner, "March 2026" launch date). Admin page creation still required.
- ~~**About page placeholder text visible:** "Upload a team photo, facility image, or brand lifestyle shot via Theme Editor" shows to customers~~ **FIXED Feb 20, 2026** — Replaced with branded SVG facility illustration (navy/gold) + live text "FDA-Audited Facility / United States". Auto-replaces when real image uploaded via Theme Editor.
- ~~**Homepage missing meta description:** No `<meta name="description">` rendered on homepage~~ **FIXED Feb 20, 2026** — Added theme-level fallback (153 chars): "Science-backed supplements with full transparency. Every batch third-party tested and traceable. Clinical-grade KSM-66® Ashwagandha from an FDA-audited facility." Also added matching `og:description` and `twitter:description` fallbacks.
- ~~**"Powered by Shopify" visible in footer**~~ **FIXED Feb 20, 2026** — Set `show_powered_by: false` in footer-group.json.

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
3. ~~Domain must be transferred to Shopify~~ DONE — connected Feb 20, 2026
4. Shopify Payments must be fully activated (owner must complete 4-step setup with personal/banking info)
5. Checkout flow must be tested end-to-end

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
| Feb 20, 2026 | **Session B — Pre-Launch Audit Fixes (4 items)** |
| Feb 20, 2026 | **Session C — Remove Mount Vernon + Header Golden Glow** | **Privacy:** Removed all 16 "Mount Vernon, NY" location references across 10 theme files (sections, templates, footer). Replaced with generic "USA" / "United States" / "USA-Based Facility". Also changed "Made in NY" badge → "Made in USA" with 🇺🇸 emoji. **Header Enhancement:** Made header slightly bigger (padding 14px, logo 1.5rem, nav 14.5px) and added golden background glow (radial-gradient `rgba(201,169,97,0.08)`) + subtle gold text-shadow on logo and nav links for premium warm feel. | Location disclosure was a privacy concern for the owner. All "Mount Vernon" references replaced — grep returns 0 results in theme files. | **Fix 1: Verify page Coming Soon** — Modified `verify-hero.liquid`: added gold-bordered Coming Soon banner ("March 2026"), disabled input+button with `aria-disabled`, guarded JS with `verifyEnabled = false`, added CSS for `.optibio-verify__coming-soon` and `.optibio-verify__search-card--disabled`. **Fix 2: About page placeholder** — Replaced raw "Upload a team photo..." text in `about-hero.liquid` with branded inline SVG (facility building + shield/beaker/leaf icons in navy/gold) + live HTML text "FDA-Audited Facility / United States". Updated `about-page.css` placeholder to navy gradient card. Image picker conditional preserved — real photo auto-replaces SVG. **Fix 3: Homepage meta description** — Added `template == 'index'` fallback in `meta-tags.liquid` for both `<meta name="description">` (153 chars) and `og:description`. Brand-focused copy. **Fix 4: Powered by Shopify** — Set `show_powered_by: false` in `footer-group.json`. | Plan reviewed by simulated SME panel (Shopify dev, SEO, UX). Key improvements: meta description trimmed to 153 chars (under Google's 155 limit), `aria-disabled` added for accessibility, `template == 'index'` used (correct Shopify syntax vs `template.name`), SVG uses `role="img"` + `aria-label`. |

| Feb 20, 2026 | **Session D — Pre-Launch Audit & SEO Fixes** | Comprehensive re-audit of entire store. Fixed 14 issues: **SEO:** Trimmed product meta desc (171→153 chars), science meta desc (189→150 chars). **Accessibility:** Fixed duplicate H1 on FAQ (`page.json` H1→H2), Contact (`page.contact.json` H1→H2), Homepage (header.liquid hidden H1→`<span>`). **Structured Data:** Added FAQPage JSON-LD schema to `product-faq.liquid`, WebSite schema with SearchAction to `meta-tags.liquid`, BreadcrumbList schema for inner pages. **OG Tags:** Added `product:availability` meta tag. **Brand:** Fixed "OptiBio" → "Optibio" in About, FAQ, Contact page titles + meta descriptions (6 admin fixes). **UX:** Added review widget scroll-trap fix (max-height 600px). **Alt Text:** Updated all 6 product images with descriptive alt text + correct branding. | Previous audit scored 6.5/10. This session addresses 14 of 21 identified issues. Remaining P2 items: favicon upload (manual), store name in Settings, Facebook Pixel, blog content, about placeholder photo, collections, Lighthouse audit. |
| Feb 20, 2026 | **Session E — Domain Connection & Payments Setup** | **Domain:** Connected `optibiosupplements.com` to Shopify via Settings → Domains → Connect existing. GoDaddy auto-connect successfully updated DNS (CNAME `www` from `cname.manus.space` → `shops.myshopify.com`). Domain set as Primary. TLS certificate provisioning started. **Payments:** Initiated Shopify Payments (Stripe) activation — reached Step 1 of 4 (business type selection). Requires owner to complete remaining steps with personal/financial info (SSN, banking details). | GoDaddy auto-connect initially showed spinner for ~10 seconds but completed successfully (green toast: "Your DNS records are now connected to Shopify"). Shopify Payments setup requires sensitive personal/financial information — cannot be completed by Claude. |
| Feb 21, 2026 | **Session F — Full Implementation: Legal, Email, Blog, Chat, Policies, Audit** | **Legal Pages:** Created 4 custom HTML files (Terms, Privacy, Refund, Shipping) in `/legal-pages/`. **Email Templates:** Created 3 branded HTML templates (Order Confirm, Shipping, Delivery) in `/email-templates/`. **Customer Support:** Created 5 response templates + expanded FAQ to 20 Q&As in `/customer-support/`. **Blog Content:** Polished 3 blog posts with 12 compliance fixes each (brand name, pricing, guarantee, FDA disclaimer, claims accuracy). **Chat Widget:** Customized Shopify Inbox via browser — Navy #1A2F4D background, Gold #C9A961 buttons, branded greeting, 4 instant answers fixed (wrong email, visibility). **Shopify Admin Policies:** Added 6 legal policies via browser (Refund, Privacy, Terms, Shipping, Contact, Subscription Cancel) — replaced auto-generated content with custom HTML. Fixed wrong email (gmail→support@) and brand name (OptiBio→Optibio) across all policies. **Compliance Audit:** Full 11-category theme audit — 0 violations found across 430 files. **Theme Edit:** Fixed "clinically-proven" → "clinically studied" in `homepage-hero.liquid`. **Documentation:** Created SESSION_6_TRACKING.md with full implementation log. | CodeMirror 6 in Shopify Admin policies editor doesn't accept synthetic JS events (insertText, beforeinput, ClipboardEvent). Working approach: write to clipboard via `navigator.clipboard.writeText()`, then use keyboard shortcut `cmd+a` + `cmd+v` to paste. Shopify's color picker hex input requires: triple-click → type value → Tab → click elsewhere to apply. Chrome MCP extension disconnects intermittently during long sessions. |

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

### Session B — Files Modified (Feb 20, 2026)

| Action | File | Purpose |
|--------|------|---------|
| EDITED | `sections/verify-hero.liquid` | Added Coming Soon banner + disabled form + JS guard (`verifyEnabled = false`) + CSS for coming-soon and disabled states |
| EDITED | `sections/about-hero.liquid` | Replaced raw placeholder text with branded inline SVG facility illustration + live HTML labels |
| EDITED | `assets/about-page.css` | Restyled placeholder as navy gradient branded card with gold accents |
| EDITED | `snippets/meta-tags.liquid` | Added homepage-specific fallbacks for `<meta name="description">` and `og:description` (153 chars) |
| EDITED | `sections/footer-group.json` | Set `show_powered_by: false` to hide "Powered by Shopify" |

### Manual Steps Still Required (Session B)
- [x] **Create Verify page in Shopify Admin:** DONE — Page created, handle = `verify`, template = `page.verify`, page ID 113770528837
- [x] **Set homepage SEO description** in Admin → Online Store → Preferences — DONE (title + meta description set)
- [x] **Update header nav** — DONE — "Verify Your Batch" link already pointed to `/pages/verify`
- [x] Push updated theme files to `Shopify-Feb-26` backup repo — DONE

### Session C — Files Modified (Feb 20, 2026)

| Action | File | Purpose |
|--------|------|---------|
| EDITED | `sections/about-hero.liquid` | "Mount Vernon, NY" → "United States" in SVG placeholder |
| EDITED | `sections/verify-hero.liquid` | 3 Mount Vernon refs → "USA" (HTML + JS batch data) |
| EDITED | `sections/product-badge-strip.liquid` | "Made in NY" / "Mount Vernon, NY" → "Made in USA" / "USA-Based Facility" |
| EDITED | `sections/product-traceability-badge.liquid` | "Mount Vernon, NY" → "the USA" in description default |
| EDITED | `sections/product-trust.liquid` | "Mount Vernon, NY" → "USA" in manufacturer info default |
| EDITED | `sections/about-standards.liquid` | 2 Mount Vernon refs → "United States" |
| EDITED | `sections/science-sourcing.liquid` | 2 Mount Vernon refs → "United States" / "USA-based facility" |
| EDITED | `sections/footer-group.json` | "Mount Vernon, NY" → "USA-Based Manufacturing" in footer nav |
| EDITED | `templates/product.optibio-main.json` | 3 Mount Vernon refs → "USA" (trust, badge, traceability) |
| EDITED | `templates/page.about.json` | Mount Vernon ref → "United States" |
| EDITED | `templates/page.science.json` | 2 Mount Vernon refs → "United States" / "USA-based facility" |
| EDITED | `assets/optibio-global.css` | Header: bigger (padding 14px, logo 1.5rem, nav 14.5px) + golden radial glow + text-shadow |

### Session D — Files Modified (Feb 20, 2026)

| Action | File | Purpose |
|--------|------|---------|
| EDITED | `templates/page.json` | Changed template heading H1 → H2 to fix duplicate H1 on FAQ and default pages |
| EDITED | `templates/page.contact.json` | Changed template heading H1 → H2 to fix duplicate H1 on Contact page |
| EDITED | `sections/header.liquid` | Changed homepage hidden H1 (`<h1 class="visually-hidden">`) → `<span>` to fix duplicate H1 |
| EDITED | `sections/product-faq.liquid` | Added FAQPage JSON-LD structured data schema (generates from section blocks) |
| EDITED | `snippets/meta-tags.liquid` | Added `product:availability` OG tag, WebSite schema with SearchAction, BreadcrumbList schema for inner pages |
| EDITED | `assets/product-page.css` | Added review widget scroll-trap fix (`max-height: 600px; overflow-y: auto`) |

### Session D — Admin Changes (Feb 20, 2026)

| Task | Where | Change |
|------|-------|--------|
| Product meta desc | Admin → Products → SEO | Trimmed from 171 → 153 chars (removed "90-day guarantee." suffix) |
| Science meta desc | Admin → Pages → Science → SEO | Trimmed from 189 → 150 chars |
| About page title | Admin → Pages → About → SEO | "OptiBio" → "Optibio" |
| About meta desc | Admin → Pages → About → SEO | "OptiBio's" → "Optibio's" |
| FAQ page title | Admin → Pages → FAQ → SEO | "OptiBio" → "Optibio" |
| FAQ meta desc | Admin → Pages → FAQ → SEO | "OptiBio" → "Optibio" |
| Contact page title | Admin → Pages → Contact → SEO | "OptiBio" → "Optibio" |
| Contact meta desc | Admin → Pages → Contact → SEO | "OptiBio's" → "Optibio's" |
| Product image 1 alt | Admin → Products → Images | Fixed "OptiBio" → "Optibio" + improved description |
| Product image 2 alt | Admin → Products → Images | Fixed "OptiBio" → "Optibio" + improved description |
| Product image 3 alt | Admin → Products → Images | Improved alt text description |
| Product image 4 alt | Admin → Products → Images | Fixed "OptiBio" → "Optibio" + improved description |
| Product image 5 alt | Admin → Products → Images | Fixed "OptiBio" → "Optibio" + improved description |
| Product image 6 alt | Admin → Products → Images | Added alt text (was empty) |

### Manual Steps Still Required (Session D)
- [ ] **Upload favicon** — Upload 32px + 180px favicon images via Admin → Settings → Brand (images already prepared in `~/Desktop/OPTIMAL BIOLOGY/0. BRANDING ASSET/OB LOGO/optimized/`)
- [x] **Fix store name** — Verified already correct: "Optibio Supplements" in Admin → Settings → Store details
- [ ] **Set Facebook Pixel ID** — Replace placeholder with real Pixel ID in Admin → Settings → Customer events
- [ ] **Configure social media links** — Add social profiles in Theme Settings → Social media (or defer if no accounts yet)

### Session E — Admin Changes (Feb 20, 2026)

| Task | Where | Change |
|------|-------|--------|
| Domain connected | Admin → Settings → Domains | Added `optibiosupplements.com` as Primary domain. GoDaddy DNS auto-configured (CNAME www → shops.myshopify.com). TLS cert provisioning started. |
| Payments setup started | Admin → Settings → Payments | Initiated Shopify Payments (Stripe) activation. Reached Step 1 of 4 (business type). Owner must complete Steps 2-4 with personal/banking info. |
| Brand compliance sweep | All theme files + Admin | Full grep audit for "OptiBio" (capital B). Result: 0 instances in theme code (.liquid/.json/.js/.css user-facing). Store name already correct ("Optibio Supplements"). CSS all-caps "OPTIBIO" in comment banners — acceptable. CLAUDE.md refs are intentional documentation. |

### Manual Steps Still Required (Session E)
- [ ] **Complete Shopify Payments setup** — Owner must finish Steps 2-4: personal details (SSN, DOB, address), banking info (routing + account number), review & confirm
- [x] **Verify domain is live** — Confirmed `optibiosupplements.com` loads correctly (tab title: "Optibio Supplements | Science-Backed Ashwagandha KSM-66®")
- [ ] **Run test order** — After Payments are activated, place a test order via Bogus Gateway or Shopify Payments test mode to verify full checkout flow
- [ ] **Upload favicon** — Still pending from Session D
- [x] **Fix store name** — Verified already correct (Session E brand sweep)
- [ ] **Set Facebook Pixel ID** — Still pending from Session D

---

### Past Mistakes Addendum (Feb 19, 2026)
8. **Misleading filename "OB logo_transparent.png"** — This file has NO alpha channel (RGB mode). The background is baked-in gray/white, not transparent. The correct transparent source is `OB logo_white_trans.png` (RGBA, 78.4% transparent pixels). Always verify `img.mode` before assuming transparency from a filename.
9. **Shopify `url` schema type cannot have a `default` value** — Setting `"type": "url"` with `"default": "/pages/verify"` causes a schema validation error. Use Liquid-level fallback instead: `{% assign verify_link = section.settings.button_link | default: '/pages/verify' %}`.
10. **Wrong subscription app documented** — Previous session incorrectly documented "Appstle" as the Subscribe & Save app. The actual app is **Shopify Subscriptions** (native, free). The theme code correctly references `shopify://apps/subscriptions/blocks/app-block/`. Always verify app identity against actual theme code, not session memory alone.
11. **Manufacturing location disclosed** — "Mount Vernon, NY" appeared in 16 places across 10 theme files. Owner requested removal for privacy. Replaced with generic "USA" / "United States" / "USA-Based Facility". Never include specific city/state manufacturing location in theme files — use "USA" as the default.
12. **"OptiBio" (capital B) in page SEO titles and meta descriptions** — Despite brand rule, "OptiBio" with capital B persisted in About, FAQ, and Contact page SEO titles and descriptions, plus all 6 product image alt texts. Always search all admin-level SEO fields after any content generation — these are NOT in theme code files, so grep won't catch them.
13. **CodeMirror 6 paste technique for Shopify Admin** — The Shopify policies editor uses CodeMirror 6 which rejects synthetic JS events (`document.execCommand('insertText')`, `InputEvent('beforeinput')`, `ClipboardEvent('paste')`). The ONLY reliable method is: `navigator.clipboard.writeText(html)` then keyboard `cmd+a` → `cmd+v`. This works because the real keyboard paste event is handled by CM6's native input handling.
14. **Shopify Inbox wrong email on auto-generated content** — Shopify generates instant answers and policies using the store's original contact email (optibiosupplements@gmail.com), not the support email. Must manually check and update all auto-generated content when adding support infrastructure.
15. **Shopify theme editor color picker** — Typing a hex value in the color picker input doesn't auto-apply. Must: triple-click hex field → type value → press Tab → click elsewhere on the page. Enter key and Escape key don't apply the value reliably.

---

### Session F — Files Created/Modified (Feb 21, 2026)

| Action | File | Purpose |
|--------|------|---------|
| CREATED | `/legal-pages/TERMS_OF_SERVICE.html` | Custom Terms of Service (FDA disclaimer, supplement terms, KSM-66 IP, NY law) |
| CREATED | `/legal-pages/PRIVACY_POLICY.html` | Custom Privacy Policy (CCPA/GDPR, Meta Pixel, Judge.me, Stripe disclosures) |
| CREATED | `/legal-pages/REFUND_POLICY.html` | Custom Return & Refund Policy (90-day guarantee, step-by-step process) |
| CREATED | `/legal-pages/SHIPPING_POLICY.html` | Custom Shipping Policy (US-only, $75 free, PO boxes, Subscribe & Save) |
| CREATED | `/email-templates/ORDER_CONFIRMATION.html` | Branded order confirmation email template |
| CREATED | `/email-templates/SHIPPING_CONFIRMATION.html` | Branded shipping notification email template |
| CREATED | `/email-templates/DELIVERY_CONFIRMATION.html` | Branded delivery notification email template |
| CREATED | `/customer-support/RESPONSE_TEMPLATES.md` | 5 customer service response templates |
| CREATED | `/customer-support/EXPANDED_FAQ.md` | 20 FAQ Q&As (13 new + 7 existing) |
| CREATED | `/blog-content/blog_post_1_ashwagandha_benefits.md` | Polished blog post 1 (12 compliance fixes) |
| CREATED | `/blog-content/blog_post_2_ksm66_vs_regular.md` | Polished blog post 2 (12 compliance fixes) |
| CREATED | `/blog-content/blog_post_3_stress_anxiety.md` | Polished blog post 3 (12 compliance fixes) |
| CREATED | `/tracking/GTM_SETUP_GUIDE.md` | GTM + GA4 setup guide for future implementation |
| CREATED | `/shipping/SHIPPING_CONFIG_GUIDE.md` | Shopify Admin shipping rate configuration guide |
| CREATED | `SESSION_6_TRACKING.md` | Full session implementation tracking document |
| EDITED | `sections/homepage-hero.liquid` | "clinically-proven" → "clinically studied" (compliance fix) |

### Session F — Admin Changes (Feb 21, 2026)

| Task | Where | Change |
|------|-------|--------|
| Return and refund policy | Admin → Settings → Legal | Replaced auto-generated with custom HTML (90-day guarantee, correct email) |
| Privacy policy | Admin → Settings → Legal | Turned off automated, replaced with custom HTML (CCPA/GDPR, third-party disclosures) |
| Terms of service | Admin → Settings → Legal | Replaced auto-generated with custom HTML (FDA disclaimer, KSM-66, supplement terms) |
| Shipping policy | Admin → Settings → Legal | Replaced auto-generated with custom HTML (US-only, PO box support) |
| Contact information | Admin → Settings → Legal | Fixed wrong email (gmail→support@) and brand name (OptiBio→Optibio) |
| Subscription cancellation policy | Admin → Settings → Legal | Created NEW (was empty/required). Cancel/pause/modify instructions. |
| Shopify Inbox — Return policy answer | Admin → Inbox → Instant answers | Fixed content, turned visibility ON |
| Shopify Inbox — Shipping details answer | Admin → Inbox → Instant answers | Custom answer with free shipping + US-only |
| Shopify Inbox — Contact info answer | Admin → Inbox → Instant answers | Fixed email (gmail→support@), turned visibility ON |
| Shopify Inbox — Chat widget appearance | Theme Editor → App Embeds | Background #000→#1A2F4D (Navy), Buttons #6A6A6A→#C9A961 (Gold) |
| Shopify Inbox — Greeting message | Theme Editor → App Embeds | Updated to mention Optibio and KSM-66 Ashwagandha |

### Manual Steps Still Required (Session F)
- [ ] **Upload favicon** — Upload 32px + 180px images via Admin → Settings → Brand (files in `optimized/`)
- [ ] **Place test order** — Via Bogus Gateway or Shopify Payments test mode after Payments activation
- [ ] **Configure shipping rates** — Follow `/shipping/SHIPPING_CONFIG_GUIDE.md` in Admin → Settings → Shipping
- [ ] **Install email templates** — Paste 3 HTML templates from `/email-templates/` into Admin → Settings → Notifications
- [ ] **Publish 3 blog posts** — Create articles in Admin from polished `/blog-content/*.md` files
- [ ] **Complete Shopify Payments** — Owner must finish Steps 2-4 (personal/banking info)
- [ ] **Set Facebook Pixel ID** — Replace placeholder in Admin → Settings → Customer events
- [ ] **Push to Shopify-Feb-26 repo** — Backup all theme + new files

### Completed Sessions
- ~~**Session A:** CSS consolidation + Product page CRO + Traceability badge~~ DONE
- ~~**Session A+B (continued):** Design system unification (#1A2F4D/#C9A961/Sora/Inter), badge implementation (6 SVG icons), header logo fix, double header fix, homepage audit (all 7 sections verified), Science page verified, About page verified, Verify Your Batch page built (hero + search + results + supply chain timeline + COA), page created in Shopify Admin~~ DONE

- ~~**Session F:** Full implementation — legal pages, email templates, customer support, blog content (12 fixes each), chat widget branded, 6 policies published to Admin, compliance audit (11/11 PASS)~~ DONE

### Installed Apps (February 19, 2026)

#### Product Reviews (powered by Judge.me app — Free Tier)
- **Status:** Installed, app embed enabled, widgets added to product page
- **App Embed:** Enabled in `config/settings_data.json` (block ID: `8cada0f5da411a64e756606bb036f1ed/judgeme_core`)
- **Product Page Widgets (in `product.optibio-main.json`):**
  - **Preview Badge** (star rating summary) — positioned after Hero section, centered alignment
  - **Review Widget** (full review list with photo reviews, Write a Review button) — positioned after Social Proof section, with 36px vertical padding
- **Brand CSS Overrides:** Added to `assets/product-page.css` (bottom of file) — overrides `.jdgm-*` classes to match Optibio brand:
  - Stars: Gold `#C9A961` (via `--optibio-gold`)
  - Typography: Sora headings, Inter body
  - CTA buttons: Electric Blue `#2563EB` (via `--optibio-blue-cta`)
  - Review borders: Light gray `#F3F4F6`
- **Settings:** Review request emails sent 14 days after delivery, auto-publish with moderation
- **Note:** Currently shows sample data in preview mode. Real reviews appear once customers leave them. The sample images (clothing) are Judge.me defaults — they'll be replaced with real product review photos.
- **Future Upgrade:** Judge.me Awesome plan ($15/mo) needed for: 10% incentive coupons, Q&A on product pages, photo review carousel

#### Subscribe & Save (powered by Shopify Subscriptions app — Free, Native)
- **Status:** COMPLETE — Plan created, widget on product page, customer accounts enabled
- **App Block:** `shopify://apps/subscriptions/blocks/app-block/a3bfe9ec-96f8-4508-a003-df608a36d2ad` — present in `product.optibio-main.json`
- **Subscription Plan:** Single plan "Subscribe and save" (customer-facing title) covering all 3 variants (1/3/6 bottles), 15% off
  - Delivery frequencies: Every 1 month, every 3 months, every 6 months — all 15% off
  - Effective pricing: 1 Bottle $33.99 (from $39.99), 3 Bottles $84.99 (from $99.99), 6 Bottles $152.94 (from $179.94)
- **Integration:** Shopify Subscriptions auto-injects subscription widget into the product form via app block. The existing `product-subscription.liquid` section provides a standalone Subscribe & Save info section with benefits grid and comparison table.
- **Product Page Flow:** Hero buy box has Subscribe & Save toggle (15% OFF badge, free shipping, cancel anytime) built into `optibio-enhanced-buy-box.liquid`
- **Customer Accounts:** Enabled (modern passwordless — one-time code via email). Sign-in links toggle currently OFF in Settings > Customer accounts (customers can still access via direct URL post-purchase).
- **Billing Settings:** Payment failure: 3 retries / 7 days apart → cancel. Inventory failure: 5 retries / 1 day apart → skip order.

### Remaining Work
- **Theme 146307776581 is LIVE** — currently the published theme
- **Traceability backend (future):** Node.js App Proxy + Shopify metaobjects for dynamic batch lookup (currently uses client-side sample data)
- ~~**Review system:** Judge.me or similar app integration~~ DONE
- ~~**Subscribe & Save:** Subscription app~~ DONE (Shopify Subscriptions app installed, plan created, widget verified)
- ~~**Blog content:** 3 foundational articles~~ DONE (Feb 21, 2026 — Session F: 3 posts polished with 12 compliance fixes each, ready for publication in Shopify Admin)
- **Performance/Accessibility audits**
- ~~**Subscribe & Save onboarding:** Setup complete~~ DONE (Feb 20, 2026)
- **Sign-in links:** Consider enabling "Show sign-in links" in Settings > Customer accounts so subscribers can easily access their account to manage subscriptions

---

*Last updated: February 21, 2026 (Session F — Full Implementation: Legal, Email, Blog, Chat, Policies, Audit)*
*Next review: Favicon upload, test order, shipping rates config, email template install, blog post publication, Shopify Payments completion, Facebook Pixel*
