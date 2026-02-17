# CLAUDE.md — Optibio Shopify Store Project

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
**Current Status:** Pre-Launch (product page live, homepage/science page need FTC fixes)

---

## GitHub Repositories

### 1. Theme Code Repo (Original)
- **Repo:** `optibiosupplements/optibio-shopify-theme`
- **URL:** https://github.com/optibiosupplements/optibio-shopify-theme
- **Branch:** `master`
- **Purpose:** Shopify theme code — Liquid templates, CSS, JS, config files
- **Contains:** CLAUDE.md (also pushed here for version control)

### 2. Full Store Backup Repo (NEW — Feb 2026)
- **Repo:** `optibiosupplements/Shopify-Feb-26`
- **URL:** https://github.com/optibiosupplements/Shopify-Feb-26
- **Branch:** `main`
- **Purpose:** Complete 100% backup of the entire Shopify store — theme, assets, config, product data exports, settings, everything
- **Why:** Disaster recovery. If Shopify ever has issues, suspends the account, or data is lost, this repo allows full restoration of the store from scratch.
- **Backup Strategy:**
  - After every major change or session, push updated files here
  - Include: theme files, product CSV exports, page content, navigation menus, metafield definitions, email templates, checkout settings
  - Tag releases with dates (e.g., `backup-2026-02-17`) for easy rollback to any point in time

### Repo Roles — Don't Confuse These
| Repo | What It's For | What Goes In It |
|------|--------------|-----------------|
| `optibio-shopify-theme` | Theme code version control | Liquid, CSS, JS, config, CLAUDE.md |
| `Shopify-Feb-26` | Full store disaster recovery backup | Everything above PLUS product data, page content, settings, assets, images |

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
| Deep Navy | #1B365D | Headlines, primary buttons, dark backgrounds. BRAND ANCHOR. |
| Antique Gold | #D4AF37 | Accents, CTAs, badges, stat numbers. MAX 15% of screen. |
| Sky Blue Gradient | #E8F4FD to #C0E4F9 | Page backgrounds. Top-to-bottom gradient. |
| Body Text | #475569 | All paragraph text. NEVER use pure black (#000000). |
| Success Green | #10B981 | Checkmarks, verification badges only. |
| Star Gold | #F59E0B | Review stars ONLY. |

### Typography
| Element | Font | Size | Weight |
|---------|------|------|--------|
| Hero Title | Playfair Display | 48-56px | 800 |
| Section Headings | Playfair Display | 28-36px | 700 |
| Body Text | DM Sans | 15-16px | 400 |
| Stat Numbers | DM Sans | 32-40px | 700 |
| Badges/Labels | DM Sans | 11-13px | 600 |
| CTA Buttons | DM Sans | 15-16px | 600 |

### Visual Effects
- **Glassmorphism:** backdrop-filter: blur(12px), background: rgba(255,255,255,0.7), border: 1px solid rgba(255,255,255,0.3)
- **Golden Radiance Glow:** Baked into product photography — DO NOT add CSS glow overlay (causes doubled glow)
- **Float Animation:** 8s ease-in-out infinite translateY on product images
- **Scroll Reveal:** opacity 0 to 1, translateY(20px) to 0 on section entry
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
| Tier | Standard Price | Pre-Order Price | Per-Unit |
|------|---------------|-----------------|----------|
| 1 Bottle | $39.99 | $28.35 | — |
| 3 Bottles | $99.99 | $76.55 | $33.33 / $25.52 |
| 6 Bottles | $179.94 | $136.08 | $29.99 / $22.68 |
| Subscribe & Save | 15% off standard | N/A | — |

- 3-bottle tier is pre-selected as "Most Popular"
- 6-bottle tier labeled "Best Value"
- Pre-order pricing is for paid ad landing pages ONLY (separate template)

---

## Known Issues & Gotchas

### Active Bugs
- **Homepage:** 4 false claims still live (44% cortisol, 72% sleep, misleading stress description, 27.9% energy)
- **Science Page:** 6 false claims still live
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
1. ALL 10 false claims on Homepage + Science Page must be fixed first
2. Facebook Pixel must have a real ID (not placeholder)
3. Domain must be transferred to Shopify
4. Checkout flow must be tested end-to-end

### After Every Session
1. Add any new mistakes or learnings to the "Past Mistakes" section above
2. Update "Active Bugs" if anything was fixed or new issues found
3. Note any decisions made that affect future work
4. Push updated files to `Shopify-Feb-26` backup repo if any theme/store changes were made

### GitHub Backup Procedure
1. After any theme edits: push updated files to both repos
2. After product/content changes: export data and commit to `Shopify-Feb-26`
3. Tag major milestones: `git tag backup-YYYY-MM-DD` in the backup repo
4. Never force-push — preserve full history for rollback capability

---

## Session Log

| Date | What Was Done | Key Decisions | Issues Found |
|------|--------------|---------------|--------------|
| Feb 14, 2026 | Complete project report generated (20 pages) | All project data consolidated into single document | None |
| Feb 14, 2026 | CLAUDE.md created, Cowork playbook configured | Boris's framework applied to Optibio project | Shopify MCP returning 401 — token may need refresh |
| Feb 14, 2026 | CLAUDE.md pushed to optibio-shopify-theme repo | Committed via GitHub web UI (git CLI blocked by sandbox proxy) | Chrome extension needed for GitHub access |
| Feb 16, 2026 | Updated CLAUDE.md with new backup repo strategy | New repo "Shopify-Feb-26" created for full store disaster recovery backup | Chrome extension disconnected — reconnect needed for push |

---

*Last updated: February 16, 2026*
*Next review: Before next work session*
