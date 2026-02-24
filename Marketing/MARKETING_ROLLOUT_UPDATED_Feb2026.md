# Optibio Marketing Rollout | Updated February 24, 2026

> **Updated from:** "8-Week Phased Rollout | February 2026.docx" (original preserved as historical baseline)
> **Month 1 Target:** 3,500 bottles (base) / 5,000 bottles (stretch)
> **Last updated:** February 24, 2026 (Session N)

---

## Overall Progress

| Phase | Status | Completion |
|-------|--------|------------|
| Phase 0: Pre-Launch Technical Setup | **~90% DONE** | 24 of 32 items complete |
| Phase 1: Soft Launch + Content Foundation | NOT STARTED | 0% |
| Phase 2: Paid Ads Scale-Up | NOT STARTED | 0% |
| Phase 3: Aggressive Scale + Optimize | NOT STARTED | 0% |

---

## Brand Context (Include With EVERY Brief)

```
BRAND: Optibio (always lowercase "b") -- premium DTC KSM-66 Ashwagandha
PRICING: 1 Bottle $39.99 / 3 Bottles $99.99 (Most Popular) / 6 Bottles $179.94 (Best Value)
SUBSCRIBE & SAVE: 15% off standard pricing
FREE SHIPPING: Orders $49+ (CORRECTED from original plan's $75+)
GUARANTEE: 90-day money-back
PRODUCT: 90 capsules, 600mg KSM-66 per serving (2 capsules/day), 5% Withanolides
  Third-party tested, GMP certified, Non-GMO, Organic, Made in USA

VERIFIED CLINICAL CLAIMS (ONLY use these -- FTC compliance is non-negotiable):
- 27.9% cortisol reduction (Chandrasekhar 2012, PubMed 23439798)
- 44% stress reduction on PSS scale (Chandrasekhar 2012, PubMed 23439798)
- Sleep efficiency improved 75.6% to 83.5% (Langade 2019, PubMed 31728244)
- 13% VO2max endurance improvement (Choudhary 2015, PubMed 26730141)

FALSE CLAIMS -- NEVER USE:
- "44% cortisol reduction" (44% was stress, not cortisol)
- "72% sleep improvement" (fabricated)
- "27.9% energy boost" (27.9% was cortisol, not energy)
- "69% anxiety reduction" (not from any study)

RULES:
- Always "Optibio" (lowercase b), never "OptiBio"
- Always KSM-66 with registered trademark symbol: KSM-66(r)
- Always "clinically studied" -- NEVER "clinically proven"
- Include PubMed citation number for every clinical stat
- FDA disclaimer required on all health content
- No fake urgency, no fabricated social proof, no disease claims
- Target audience: 25-45, college-educated professionals, health-conscious,
  skeptical of supplements

BRAND VOICE: Authoritative but warm. Clinical credibility without arrogance.
Like a smart friend who values science and hates hype.

DESIGN: Navy #1A2F4D, Gold #C9A961, Electric Blue #2563EB, Sora headings, Inter body text
```

---

## The Math: 5,000 Bottles in 30 Days

| Scenario | Orders Needed | AOV | Revenue | Daily Orders |
|----------|--------------|-----|---------|-------------|
| All 1-bottle orders | 5,000 | $39.99 | $199,950 | 167/day |
| All 3-bottle bundles | 1,667 | $99.99 | $166,683 | 56/day |
| All 6-bottle bundles | 834 | $179.94 | $150,070 | 28/day |
| **Realistic mix (60% 3-pack, 25% 1-bottle, 15% 6-pack)** | **~1,850** | **~$108** | **~$200K** | **~62/day** |

At 3-4% conversion rate, 62 orders/day requires ~1,550-2,066 daily product page visitors.

**Internal Targets:**
- **Base target:** 3,500 bottles (achievable at 2.0x ROAS -- covers costs and proves funnel)
- **Stretch target:** 5,000 bottles (requires 2.5-3x ROAS + email/SMS contributing 20-25%)

---

## PHASE 0: PRE-LAUNCH TECHNICAL SETUP

### 0A -- Completed Items

| # | Item | Status | Date | Session | Evidence |
|---|------|--------|------|---------|----------|
| 1 | Domain connected (optibiosupplements.com) | DONE | Feb 20 | E | TLS provisioned, GoDaddy auto-configured |
| 2 | Shopify Payments activated | DONE | Feb 20 | E | Owner completed Steps 1-4 |
| 3 | Shipping rates configured | DONE | Feb 21 | G | Standard $5.99 (<$49), Free ($49+), US only |
| 4 | 3 transactional email templates created | DONE | Feb 21 | F | Order Confirm, Shipping, Delivery HTML |
| 5 | 3 transactional email templates installed | DONE | Feb 23 | H | Pasted into Admin > Notifications |
| 6 | Test order placed and verified | DONE | Feb 23 | H | 1 bottle $39.99 + $5.99 shipping = $45.98 |
| 7 | 4 legal pages created (Terms, Privacy, Refund, Shipping) | DONE | Feb 21 | F | FTC-compliant custom HTML |
| 8 | 6 Shopify Admin policies published | DONE | Feb 21 | F | All visible on storefront |
| 9 | Cookie consent banner | DONE | Feb 21 | F | cookie-consent.liquid, Shopify Privacy API |
| 10 | Compliance audit 11/11 PASS | DONE | Feb 21 | F | Zero violations across 430+ files |
| 11 | Fabricated social proof removed | DONE | Feb 24 | H/J | Fake ratings, reviews, bottle counts all purged |
| 12 | Hero Editorial section deployed | DONE | Feb 21+ | G+ | Design D adapted to live design system |
| 13 | 3 blog posts published | DONE | Feb 21 | G | IDs: 569495388229, 569495420997, 569495486533 |
| 14 | GTM installed | DONE | Feb 24 | H/L | GTM-NG6QSJRD |
| 15 | GA4 installed | DONE | Feb 24 | H/L | G-38QZ0WCZLG |
| 16 | GA4 Enhanced E-Commerce events | DONE | Feb 24 | L | view_item, add_to_cart, view_item_list via optibio-ga4-ecommerce.js |
| 17 | Meta Pixel live | DONE | Feb 24 | K | Pixel ID: 3892490224214287 |
| 18 | Google Search Console verified | DONE | Feb 24 | N | Domain auto-verified via GA/GTM, sitemap.xml submitted |
| 19 | Google Merchant Center connected | DONE | Feb 24 | N | ID: 5731366020, product feed auto-syncing |
| 20 | Google & YouTube app installed | DONE | Feb 24 | N | Shopify sales channel active |
| 21 | Knowledge Base App installed (11 FAQs) | DONE | Feb 24 | M | 7 suggested + 4 custom product FAQs |
| 22 | Agentic Storefronts active | DONE | Feb 24 | M | Shopify Catalog syncing for ChatGPT/Perplexity/Copilot |
| 23 | Product title/description optimized for AI | DONE | Feb 23 | H | SEO title 58/70 chars, meta desc 143/160 chars |
| 24 | Theme pushed to live + Lighthouse fixes | DONE | Feb 24 | J/L | Theme 146307776581, WCAG 2.1 AA compliant |
| 25 | Customer support infrastructure | DONE | Feb 21 | F | 5 response templates, 20 FAQ Q&As, Shopify Inbox branded |
| 26 | Shopify API token refreshed | DONE | Feb 24 | M | New token stored in MCP config |
| 27 | Chat widget branded | DONE | Feb 21 | F | Navy #1A2F4D + Gold #C9A961 |

### 0B -- Remaining Items (Must Complete Before Phase 1)

| # | Item | Priority | Blocker | Action Required | Executor |
|---|------|----------|---------|-----------------|----------|
| 1 | Favicon upload | LOW | None | Upload 32px + 180px images via Admin > Settings > Brand (files ready in optimized/) | Owner |
| 2 | Meta CAPI (server-side tracking) | **HIGH** | Before scaling past $50/day | Admin > Sales channels > Facebook & Instagram. Target: Event Match Quality > 6.0 | Owner |
| 3 | Google Ads account + conversion tracking | **HIGH** | Before Google Ads campaigns | Create at ads.google.com, Purchase + ATC conversions via GTM | Owner + Claude Code |
| 4 | Microsoft Clarity | MEDIUM | None | Install free heatmap/session recording via GTM for CRO data | Claude Code |
| 5 | TikTok account | MEDIUM | User in progress | Create @optibiosupplements business account, install TikTok Pixel | Owner |
| 6 | LinkedIn company page | LOW | User in progress | Create company page, upload banner from /Social Media/linkedin-banner.png | Owner |
| 7 | Social media links in theme settings | LOW | Depends on accounts | Theme Settings > Social media -- add Instagram, Facebook, TikTok, LinkedIn URLs | Owner/Claude Code |
| 8 | Google Merchant Center T&C | **HIGH** | Auto-unlocks after store check | Accept terms in Google & YouTube app to enable Google Shopping | Owner |

---

## PHASE 1: SOFT LAUNCH + CONTENT FOUNDATION (Week 1, Days 1-7)

> **Goal:** Go live with marketing. Build email automation stack, produce ad creative, start organic social, begin initial paid tests at low budget.
> **Ad budget this week:** $50-100/day ($350-700/week) -- data gathering only

### 1.1 -- Build ALL Email Sequences (Days 1-3) -- HIGHEST ROI ACTIVITY

Email marketing typically drives 25-30% of DTC revenue. Build in Shopify Email + Automations.

#### Sequence A: Welcome Series (3 emails)

| # | Trigger | Subject | Content |
|---|---------|---------|---------|
| 1 | Email signup | "Welcome to Optibio -- here's why we're different" | Brand story, KSM-66 credibility (24+ trials), CTA: Science page. Warm, no hard sell. |
| 2 | +2 days | "27.9% lower cortisol -- here's what that feels like" | Chandrasekhar 2012 deep dive (PubMed 23439798). Explain cortisol, study design (n=64, 60 days, double-blind). CTA: Shop Now. |
| 3 | +5 days | "Your first bottle is waiting -- 15% off with Subscribe & Save" | Recap all 4 benefits with citations. Introduce Subscribe & Save. Push 3-bottle bundle. 90-day guarantee. CTA: Start Feeling Better. |

#### Sequence B: Abandoned Cart Series (3 emails -- recovers 15-30% of lost revenue)

| # | Trigger | Subject | Content |
|---|---------|---------|---------|
| 1 | +1 hour | "You left something behind" | Cart image, single CTA back to cart. No discount yet. |
| 2 | +24 hours | "Still waking up tired after 8 hours?" | Problem-agitate. Sleep data (75.6% to 83.5%, Langade 2019, PubMed 31728244). Trust badges. Show 3-bottle image. CTA: Complete your order. |
| 3 | +48 hours | "10% off -- 24 hours only" | Discount code WELCOME10 (10% off, single-use, 24hr expiry). Guarantee + free shipping on $49+. Real urgency (code expiry). CTA: Use Code WELCOME10. |

#### Sequence C: Post-Purchase Series (4 emails)

| # | Trigger | Subject | Content |
|---|---------|---------|---------|
| 1 | Day 1 | "Here's how to get the most from your Optibio" | Dosage: 2 caps/day with food. Timing options. Week 1: "you won't feel anything dramatic yet, that's normal." |
| 2 | Day 7 | "Week 1 check-in -- what to look for" | Realistic: "slightly less reactive to stressors, fall asleep a bit easier." Encourage consistency. CTA: Blog. |
| 3 | Day 14 | "How are you feeling? Leave a quick review" | Ask for honest review. "Whether it's 5 stars or 3, we want to hear it." CTA: Judge.me review form. |
| 4 | Day 25 | "Running low? Reorder before you run out" | 90 caps / 2 per day = 45 days. At day 25, ~20 days left. Push Subscribe & Save (15% off). 3-bottle savings. CTA: Reorder / Subscribe. |

#### Sequence D: Win-Back Series (2 emails)

| # | Trigger | Subject | Content |
|---|---------|---------|---------|
| 1 | Day 60 no reorder | "We miss you -- checking in" | Warm, personal. Remind benefits. "Ashwagandha's benefits are cumulative." No discount yet. CTA: Reorder Now. |
| 2 | Day 90 no reorder | "A special offer to welcome you back" | Code COMEBACK15 (15% off, single-use, 7-day expiry). Recap 4 benefits with citations. 90-day guarantee. CTA: Use Code COMEBACK15. |

#### Email Design Specs
- **Header:** Optibio logo on Navy #1A2F4D background
- **Body:** White background, Inter font, #475569 body text
- **CTA buttons:** Electric Blue #2563EB, white text, Sora font, 8px border-radius
- **Gold accents:** #C9A961 for section dividers, stat numbers
- **Footer:** FDA disclaimer, unsubscribe link, support@optibiosupplements.com
- **Width:** 600px max, mobile-responsive
- **Every email with clinical stats must include PubMed citation number**

#### Discount Codes to Create
- **WELCOME10** -- 10% off, first-time customers, single use, 24hr expiry (for abandoned cart email #3 + exit-intent popup)
- **COMEBACK15** -- 15% off, single use per customer, 7-day expiry (for win-back email #2)

### 1.2 -- Exit-Intent Popup (Day 2)

- **App:** Shopify Forms or Privy
- **Trigger:** Exit intent (desktop), 50% scroll (mobile)
- **Offer:** 10% off first order for email signup (code WELCOME10)
- **Auto-connected** to Welcome Series (Sequence A)
- **Expected:** +5-10% email capture rate
- **Design:** Navy #1A2F4D / Gold #C9A961, Sora heading, Inter body

### 1.3 -- Creative Asset Production (Days 1-5)

#### Static Image Ads (4 variations)

| Ad | Visual | Text Overlay |
|----|--------|-------------|
| Stress Relief | Product bottle + calming gradient | "27.9% Lower Cortisol. Clinically Studied." |
| Sleep | Product bottle + nighttime aesthetic | "Sleep Efficiency: 75.6% -> 83.5%" |
| Clinical Authority | Product + PubMed citation visual | "Not Another Supplement. This One Has Proof." |
| Bundle Value | 3-bottle arrangement | "3 Bottles, $99.99 -- Free Shipping + 90-Day Guarantee" |

#### Carousel Ads (2 variations)

| Ad | Slides |
|----|--------|
| Benefits | Hook / 27.9% cortisol / Sleep 75.6->83.5% / 44% stress / 13% endurance / CTA "$39.99 - 90-Day Guarantee" |
| Why KSM-66 | "Not all ashwagandha is equal" / Patented vs unregulated / 24 trials vs 0 / 5% withanolides vs unknown / CTA |

#### Video Scripts (3 variations)

| Ad | Format | Duration | Notes |
|----|--------|----------|-------|
| Motion Graphics | Text-on-screen, no voiceover | 15-30s | Stats cascade + product reveal |
| Day in the Life | Stock footage: stressed -> supplement -> calm | 15-30s | Text overlays with stats |
| **Founder's Story** | **UGC-style, iPhone, direct to camera** | **60s** | **HIGHEST PRIORITY -- trust is THE conversion bottleneck for supplements** |

#### Google Responsive Search Ads
- 15 headline variations (30 chars each): Product name, price points, differentiators, guarantees, benefits
- 4 descriptions (90 chars each)

#### Platform Specs
- **Meta:** Primary text 125 chars, headline 40 chars
- **Google:** 15 headlines (30 chars), 4 descriptions (90 chars)
- **TikTok:** Native, educational, text-heavy, trending audio -- NOT polished

#### 3-Bottle Bundle Messaging -- ENFORCE EVERYWHERE
AOV target of $108 is the linchpin. Every touchpoint should default-position the 3-pack:
- Ads: Lead with "3 Bottles, $99.99" in 50%+ of creatives
- Product page: 3-bottle pre-selected (already done)
- Cart: "Most customers choose the 3-pack -- Save $20"
- Abandoned cart emails: Show 3-bottle image, not 1-bottle
- Exit-intent popup: "Get 10% off the 3-bottle bundle"

### 1.4 -- Organic Social Launch (Days 1-7)

#### Instagram (daily posting)

| Day | Type | Content |
|-----|------|---------|
| Mon | Image | Launch announcement: "We're live. Science-backed stress relief." |
| Tue | Carousel (5 slides) | "5 Things Your Ashwagandha Should Have" (KSM-66, 600mg, withanolides, tested, studies) |
| Wed | Story | Behind-the-scenes: choosing KSM-66 |
| Thu | Reel (30s) | "What is cortisol" -- text-on-screen, motion graphics |
| Fri | Image | Clinical stat graphic (27.9% cortisol, PubMed cited) |
| Sat | Story | FAQ: "Will it make me drowsy?" |
| Sun | Carousel (7 slides) | "Week 1-8: What to Expect" -- realistic timeline |

#### TikTok (3 posts/week)

| Day | Format | Topic |
|-----|--------|-------|
| Tue | Text-on-screen (15-30s) | "Things I wish I knew before buying ashwagandha" |
| Thu | Educational (30s) | "Your cortisol might be the problem" |
| Sat | POV/Relatable (15s) | "POV: You found a supplement with actual clinical trials" |

#### LinkedIn (2 posts/week)
- Launch announcement, blog shares with professional framing

#### Hashtag Bank (mix 10-15 per post)
- Primary: #optibio #ashwagandha #ksm66 #adaptogens #stressrelief
- Secondary: #supplementscience #cortisol #sleepbetter #naturalwellness #clinicallystudied
- Tertiary: #burnoutrecovery #anxietyrelief #mentalhealthmatters #holistichealth #biohacking
- Branded: #feelbetter #optibiolife

### 1.5 -- Shopify AI Commerce Tools

#### A) Sidekick (Admin AI) -- USE IMMEDIATELY
Already available in Shopify Admin. Use for:

| Task | Prompt Example |
|------|---------------|
| Create discount codes | "Create a 10% discount code WELCOME10 for first-time customers, single use, 24hr expiry" |
| Build Shopify Flows | "Create a flow that tags customers who buy 3+ bottles as 'VIP'" |
| Reorder reminders | "Create a flow that sends email 25 days after purchase reminding to reorder" |
| Customer segments | "Create a segment of customers who added to cart but didn't purchase in 7 days" |
| Daily analytics | "What's my conversion rate today?" |

**CRITICAL FTC WARNING:** Sidekick does NOT know verified claims. Always cross-check any clinical stats it generates against the approved claims table before publishing.

#### B) Shopify Catalog + Agentic Storefronts -- DONE
Knowledge Base App installed, product data optimized, AI platforms receiving data.

#### C) Storefront AI Agent -- DEFERRED TO MONTH 3
Custom AI chat agent on optibiosupplements.com. Build after revenue stabilizes.

### 1.6 -- Initial Paid Test Campaigns (Days 5-7)

- **Budget:** $50-100/day across 2-4 ad sets
- **Platform:** Meta (Facebook/Instagram) first
- **Objective:** Conversions (Add to Cart -- NOT Purchase yet. ATC generates 3-5x more signals, feeds pixel faster)
- **Ad sets:** Each tests one creative angle (Stress, Sleep, Clinical Authority, Founder's Story)
- **Audience:** Broad 25-45, US, interests in Health & wellness / Supplements / Meditation
- **Duration:** 3-4 days to gather CPM, CTR, CPC, ATC rate data
- **DO NOT scale yet** -- just collect data and let the algorithm learn

### Phase 1 Success Criteria

| Metric | Target |
|--------|--------|
| Email sequences active | 5 sequences (12 emails) |
| Exit-intent popup live | Capturing emails |
| Ad creatives produced | 9+ variations (4 static, 2 carousel, 3 video) |
| Instagram posts (Week 1) | 7 |
| TikTok posts (Week 1) | 3 |
| Meta Pixel | 50+ add-to-cart events (pixel learning threshold) |
| Initial ad data | CTR, CPC, ATC rate benchmarks established |

---

## PHASE 2: PAID ADS SCALE-UP (Weeks 2-3, Days 8-21)

> **Goal:** Scale winning creatives, launch Google Ads + TikTok Ads, push toward first 1,000-2,000 bottles.

### 2.1 -- Meta Ads Full Campaign Structure

**Week 2:** $200/day ($1,400/wk) | **Week 3:** $400-500/day ($2,800-3,500/wk)

#### Campaign 1: Prospecting -- Cold (50% of budget)
- Objective: Conversions (Purchase)
- Scale winning 1-2 creative angles from Week 1
- Audiences (separate ad sets):
  - Broad 25-45 US (let Meta optimize)
  - Interest: Supplements + Wellness + Yoga + Biohacking
  - Interest: Stress management + Sleep improvement + Mental health
  - Interest: Fitness + Performance + Adaptogens
- Placements: Advantage+ (automatic)
- Creative rotation: 3-4 ads per ad set

#### Campaign 2: Retargeting (30% of budget)
- Website visitors (7 days, excluding purchasers)
- Add-to-cart but no purchase (14 days)
- Email subscribers who haven't purchased
- Creative: Social proof + guarantee focus

#### Campaign 3: Advantage+ Shopping (20% of budget)
- Meta's AI-driven campaign format
- Feed all best creatives, broad targeting

#### Scaling Rules
- Increase budget max 20% every 3 days
- Duplicate winning ad sets rather than increasing budget on same
- Kill any ad set with CPA > 2x target after 50+ impressions
- New creative variations every week to combat fatigue

### 2.2 -- Google Ads Launch

**Week 2:** $100/day ($700/wk) | **Week 3:** $150-200/day ($1,050-1,400/wk)

#### Campaign 1: Search -- High-Intent (50% of Google budget)

| Keyword Cluster | Keywords | Match Type |
|----------------|----------|------------|
| Product-specific | "ashwagandha KSM-66", "KSM-66 supplement", "ashwagandha 600mg" | Phrase + Exact |
| Category | "best ashwagandha supplement", "ashwagandha for stress" | Phrase |
| Competitor | "KSM-66 vs generic ashwagandha" | Phrase |

Negative keywords: "free", "cheap", "bulk powder", "wholesale", "side effects", "dangers", "DIY"

#### Campaign 2: Google Shopping (30% of Google budget)
- Performance Max via Merchant Center feed (already connected, ID: 5731366020)

#### Campaign 3: YouTube Video Ads (20% -- Week 3)
- Short-form video ads from Phase 1
- In-feed and Shorts format

### 2.3 -- TikTok Ads Launch (Week 3)

- **Budget:** $100-150/day
- Install TikTok Pixel via Shopify TikTok sales channel
- Campaign: Conversion (Purchase)
- Creative must feel native -- educational, not polished
- Audience: 25-44, US, interests in wellness/supplements/fitness

### 2.4 -- Influencer Seeding (Weeks 2-3)

- **Target:** 10-15 health/wellness micro-influencers (5K-50K followers)
- **Offer:** Free 3-bottle supply + 15-20% affiliate commission + $100-200 flat fee
- **Platform:** Instagram + TikTok
- **Content type:** "Honest review" format, unboxing, 30-day challenge
- **Budget:** $2,500-3,000 (product cost + flat fees)
- **Track:** Unique discount codes per influencer (e.g., SARAH15)
- **Repurpose:** Best influencer content as paid ad creative (UGC-style ads convert 4x better)

### 2.5 -- Content Calendar Weeks 2-3

| Platform | Frequency | Content Mix |
|----------|-----------|-------------|
| Instagram | 7/week (feed + stories) | Educational carousels, product lifestyle, clinical stats, FAQ series, BTS |
| TikTok | 5/week | Educational, text-on-screen, trending audio, myth-busting |
| LinkedIn | 2/week | Blog shares, industry thought leadership |
| Daily Stories | Daily | BTS, polls, Q&A stickers, countdowns |

### Phase 2 Budget Summary

| Channel | Week 2 | Week 3 | Total |
|---------|--------|--------|-------|
| Meta Ads | $1,400 | $2,800-3,500 | $4,200-4,900 |
| Google Ads | $700 | $1,050-1,400 | $1,750-2,100 |
| TikTok Ads | $0 | $700-1,050 | $700-1,050 |
| Influencer | $1,000 | $1,500-2,000 | $2,500-3,000 |
| **Total** | **$3,100** | **$6,050-7,950** | **$9,150-11,050** |

### Phase 2 KPIs

| Metric | Target |
|--------|--------|
| Meta CTR | 1.5%+ |
| Google Search CTR | 3%+ |
| Blended CPC | Under $2.50 |
| Blended CPA | Under $35 |
| ROAS | 2.5x+ |
| Bounce rate | Under 40% |
| Orders (Weeks 2-3) | 200-500+ |
| Email list size | 500+ |

---

## PHASE 3: AGGRESSIVE SCALE + OPTIMIZE (Weeks 4-8, Days 22-56)

> **Goal:** Scale to 5,000+ bottles/month run rate. Optimize every touchpoint. Build retention.

### 3.1 -- Scale Ad Spend

| Week | Meta/day | Google/day | TikTok/day | Total/day | Total/week |
|------|----------|-----------|-----------|----------|-----------|
| 4 | $600 | $250 | $150 | $1,000 | $7,000 |
| 5 | $800 | $350 | $200 | $1,350 | $9,450 |
| 6 | $1,000 | $400 | $250 | $1,650 | $11,550 |
| 7 | $1,200 | $500 | $300 | $2,000 | $14,000 |
| 8 | $1,200 | $500 | $300 | $2,000 | $14,000 |

**IMPORTANT:** These budgets assume ROAS stays above 2.5x. If ROAS drops below 2x, pull back and optimize before scaling further.

**Scaling Tactics:**
- Build Lookalike audiences from first 100+ purchasers (1%, 1-3%, 3-5%)
- Broad targeting often outperforms at scale on Meta -- test it
- Launch Advantage+ Shopping campaigns
- Refresh creatives every 7-10 days (fatigue is real at this spend)
- Test long-form video (60-90 sec) for higher-intent conversions
- Test UGC (real customer reviews as they come in)

### 3.2 -- CRO Optimization (Weeks 4-6)

#### A/B Tests (via Shopify Rollouts, 95% confidence, 14-day min)

| Test | Hypothesis | Primary Metric |
|------|-----------|---------------|
| Product headline | Outcome-focused vs current -> +15% ATC | Add-to-cart rate |
| CTA copy | "Start Feeling Better -- Risk Free" vs "Add to Cart" -> +10% | CTA click rate |
| Bundle messaging | "Most customers choose 3-pack -- Save $20" prominent vs subtle | AOV |
| Social proof | Real review count vs clinical study count above fold | Conversion rate |

#### CRO Implementation Priority

| Priority | Tactic | Expected Impact | Week |
|----------|--------|----------------|------|
| P1 | Cart abandonment recovery (email series) | +15-30% recovery | Active from Wk 1 |
| P1 | Exit-intent popup | +5-10% email capture | Active from Wk 1 |
| P2 | Bundle upsell messaging on 1-bottle selection | +15% AOV | Wk 4 |
| P2 | Subscribe & Save "Most Popular" badge | +20% LTV | Wk 4 |
| P2 | Proactive Shopify Inbox chat triggers | +10-20% on engaged | Wk 4 |
| P2 | Post-purchase upsell (ReConvert/AfterSell app) | +8-12% revenue | Wk 5 |
| P3 | SMS marketing (Postscript or Attentive) | +10-15% revenue | Wk 6 |
| P3 | Storefront AI Agent (MCP-powered chat) | +10-20% on engaged | Month 3 |

### 3.3 -- SMS Marketing Launch (Week 6)

- Install Postscript or Attentive (Shopify app)
- Collect phone numbers via checkout + popup
- Abandoned cart SMS (fires 30 min after abandon -- faster than email)
- Flash sale SMS for existing customers
- Reorder reminders via SMS
- **Expected:** 10-15% of total revenue

### 3.4 -- Review Acceleration (Weeks 4-8)

- Judge.me already installed with 14-day review request
- Week 4: Personally email first 20-30 customers requesting reviews
- Week 5: Upgrade Judge.me to Awesome ($15/mo) for incentive coupons + photo reviews
- Week 6: Feature best reviews in ad creative and email sequences
- **Target:** 50+ reviews by end of Week 8

### 3.5 -- Content Machine (Weeks 4-8)

**Blog (1 new post every 2 weeks):**
- Week 5: "How to Choose an Ashwagandha Supplement: A Buyer's Guide"
- Week 7: "5 Morning Routines for Lower Cortisol"

**Social Media (daily across platforms):**

| Platform | Frequency | Content Mix |
|----------|-----------|-------------|
| Instagram | 7/week | Carousels, lifestyle, stats, FAQ series, reviews (once available), BTS |
| TikTok | 5/week | Educational, text-on-screen, trending audio, myth-busting |
| LinkedIn | 2/week | Blog shares, thought leadership |

Use the 20 FAQs from /customer-support/EXPANDED_FAQ.md as a content goldmine -- each FAQ = one social post.

### 3.6 -- Storefront AI Shopping Agent (Month 3)

**Defer to after revenue stabilizes.** During Weeks 4-8 you'll be managing ad creative refresh, chasing review velocity, optimizing conversion, and monitoring ROAS daily.

When ready:
- Clone Shopify's `shop-chat-agent` starter template
- Configure with Claude API + Optibio store credentials
- Feed: 20 FAQs, 5 response templates, verified clinical claims, pricing, policies, FTC rules
- Style: Navy #1A2F4D / Gold #C9A961
- **Expected:** +10-20% conversion on engaged visitors, reduced support load
- **Cost:** Claude API ~$50-100/month

### 3.7 -- Inventory & Cash Flow Checkpoints (CRITICAL)

**Inventory:**
- Week 3 checkpoint: If tracking toward 3,500+ bottles, reorder IMMEDIATELY
- Weekly after Week 3: Monitor vs sales velocity. Maintain 2-week buffer minimum
- Risk: At 5,000 bottles/month, stock burns fast. 4-6 week reorder lead time means order by Week 2-3

**Cash Flow:**
- Total plan spend: ~$70K over 8 weeks
- Ensure $20-25K liquid before Week 4 when daily spend crosses $1,000/day
- Shopify Payments deposits in 1-3 days -- early revenue can partially fund later weeks

---

## TOTAL 8-WEEK BUDGET PROJECTION

| Category | Wk 1 | Wk 2 | Wk 3 | Wk 4 | Wk 5 | Wk 6 | Wk 7 | Wk 8 | Total |
|----------|------|------|------|------|------|------|------|------|-------|
| Meta | $700 | $1,400 | $3,150 | $4,200 | $5,600 | $7,000 | $8,400 | $8,400 | $38,850 |
| Google | $0 | $700 | $1,225 | $1,750 | $2,450 | $2,800 | $3,500 | $3,500 | $15,925 |
| TikTok | $0 | $0 | $875 | $1,050 | $1,400 | $1,750 | $2,100 | $2,100 | $9,275 |
| Influencer | $0 | $1,000 | $1,500 | $500 | $500 | $500 | $500 | $500 | $5,000 |
| Apps/Tools | $0 | $0 | $0 | $50 | $50 | $100 | $100 | $100 | $400 |
| **Total** | **$700** | **$3,100** | **$6,750** | **$7,550** | **$10,000** | **$12,150** | **$14,600** | **$14,600** | **$69,450** |

### ROAS Expectations

| Period | Expected ROAS | Why |
|--------|--------------|-----|
| Weeks 1-3 (pixel learning) | 1.5-2x | Normal -- pixel has zero data |
| Weeks 4-6 (pixel maturing) | 2-2.5x | Algorithm learning buyer profile |
| Weeks 7-8 (optimized) | 2.5-3x | Lookalike audiences from 100+ purchasers |

### Revenue Projections (Conservative)

| ROAS | Revenue | Orders | Bottles |
|------|---------|--------|---------|
| 2.0x (realistic for cold brand) | ~$140,000 | ~1,300 | ~3,500 |
| 2.5x (achievable by Week 6+) | ~$174,000 | ~1,600 | ~4,300 |
| 3.0x (stretch) | ~$210,000 | ~1,940 | ~5,200 |

**Budget flexibility:** If ROAS < 2x after Week 3, pull back to $50K total and extend to 6 weeks. If ROAS > 2.5x, accelerate. Never throw good money after bad. If constrained: 70% Meta, 20% Google, 10% TikTok. Cut influencer spend last -- it compounds.

---

## MONTH 1 TARGET SCORECARD

| Metric | Base Target | Stretch Target | How to Track |
|--------|------------|---------------|-------------|
| Bottles Sold | 3,500 | 5,000 | Shopify Analytics > Orders |
| Total Revenue | $130K-150K | $180K-210K | Shopify Analytics |
| Total Orders | 1,200-1,400 | 1,700-2,000 | Shopify Analytics |
| Average Order Value | $100+ | $108+ | Shopify Analytics |
| Conversion Rate | 3-5% | 5%+ | GA4 + Shopify |
| Add-to-Cart Rate | 15-20% | 20%+ | GA4 |
| Cart Recovery Rate | 15-30% | 30%+ | Shopify Automations |
| Blended ROAS | 2.5-3.0x | 3.0x+ | Ad platforms + Shopify |
| Blended CPA | Under $35 | Under $25 | Ad platforms |
| Email List | 2,000+ | 3,000+ | Shopify Email |
| Email Revenue % | 20-25% | 25%+ | Shopify Email |
| Product Reviews | 25-50 | 50+ | Judge.me |
| Instagram Followers | 1,000+ | 2,000+ | Instagram Insights |
| Subscription Attach Rate | 10%+ | 15%+ | Shopify Subscriptions |

---

## TRACKING IDS & ACCOUNTS

| Service | ID / Account |
|---------|-------------|
| GTM Container | GTM-NG6QSJRD |
| GA4 Measurement | G-38QZ0WCZLG |
| Meta Pixel | 3892490224214287 |
| Google Merchant Center | 5731366020 |
| Google Search Console | optibiosupplements.com (verified) |
| Google Account | optibiosupplements@gmail.com |
| Shopify Theme (live) | 146307776581 |
| Support Email | support@optibiosupplements.com |
| Store URL | optibiosupplements.com |
| GitHub Repo | optibiosupplements/Shopify-Feb-26 |

---

## EXECUTION OWNERSHIP

| Category | Owner (Manual) | Claude Code |
|----------|---------------|-------------|
| Shopify Payments, banking, test orders | Owner | -- |
| GA4/GTM/Meta/Google Ads account creation | Owner | -- |
| Facebook Pixel installation | -- | DONE |
| GTM code on theme | -- | DONE |
| Social media account creation | Owner | -- |
| Blog post publication | -- | DONE |
| ALL email sequence copy (12+ emails) | -- | Claude Code drafts |
| Email sequence setup in Shopify | Owner | -- |
| Ad creative COPY (all platforms) | -- | Claude Code writes |
| Ad creative VISUALS | Owner/Designer | Claude Code specs |
| Ad campaign structure (Meta/Google/TikTok) | Owner sets up | Claude Code provides structure |
| A/B test design | -- | Claude Code (CRO framework) |
| Social media caption writing | -- | Claude Code |
| Social media posting | Owner or scheduling tool | -- |
| Influencer outreach | Owner | Claude Code provides templates |
| Remove fabricated social proof | -- | DONE |
| CRO theme changes | -- | Claude Code |
| Storefront AI Agent (Month 3) | Owner (app install) | Claude Code builds |
| Knowledge Base App setup | -- | DONE |
| Agentic Storefronts | -- | DONE |
| DNS/email auth | Owner (GoDaddy) | Claude Code provides records |

---

## PARALLEL WORKFLOW: Claude Code + Claude.ai

Run both simultaneously for 2x execution speed.

| Phase | Claude.ai Creates (Browser) | Claude Code Does (Terminal) |
|-------|---------------------------|---------------------------|
| Phase 1 | All 12 email sequences | Exit-intent popup code, tracking verification |
| Phase 1 | Ad copy for all 9 creatives | Theme CRO changes, bundle messaging code |
| Phase 1 | 7 Instagram + 3 TikTok captions | Shopify discount code creation |
| Phase 1 | Founder's story video script (60s) | -- |
| Phase 2 | Google Ads headlines + descriptions | GTM tag configs for Google Ads |
| Phase 2 | TikTok ad scripts | TikTok Pixel installation |
| Phase 2 | Influencer outreach templates | Discount code creation per influencer |
| Phase 3 | Email A/B test subject lines | CRO theme modifications |
| Phase 3 | Weeks 4-8 blog posts | SMS marketing flow setup |
| Phase 3 | -- | Storefront AI Agent build (Month 3) |

**CRITICAL:** Claude.ai does NOT have access to verified claims table. Always cross-check any clinical stats against the approved claims before publishing.

---

## FTC COMPLIANCE CHECKLIST (Run on ALL content before publishing)

- [ ] "Optibio" (lowercase b) -- never "OptiBio"
- [ ] KSM-66 with registered trademark -- never without
- [ ] "Clinically studied" -- never "clinically proven"
- [ ] Every % stat has correct PubMed ID
- [ ] 27.9% = cortisol (not energy, not anything else)
- [ ] 44% = stress PSS (not cortisol, not anything else)
- [ ] 75.6% -> 83.5% = sleep efficiency (not "72% sleep improvement")
- [ ] 13% = VO2max endurance (not anything else)
- [ ] FDA disclaimer present on health content
- [ ] No disease claims (no "cures," "treats," "prevents")
- [ ] No fabricated social proof (no fake reviews, ratings, customer counts)
- [ ] No fake urgency (no resetting timers, fake stock levels)
- [ ] Pricing correct: $39.99 / $99.99 / $179.94
- [ ] 3-bottle bundle featured as default/most popular

---

## RISK REGISTER

| Risk | Impact | Mitigation |
|------|--------|------------|
| ROAS drops below 2x | Cash burn, unprofitable scaling | Pull back spend immediately, optimize creative + landing page |
| Ad account disapproval (health claims) | Campaigns paused | "Clinically studied" not "proven," no disease claims, landing page compliance |
| Low conversion rate (<2%) | Need 2x traffic | Prioritize CRO: product page, checkout, email recovery |
| Cash flow constraint at $67K spend | Can't sustain scaling | Scale gradually, cut to $30-50K, extend timeline |
| Supply chain (stock out) | Lost sales, broken momentum | Monitor weekly, reorder at Week 2-3, maintain 2-week buffer |
| Old mockup files with false claims | Accidental deployment | Archive/delete mockups with wrong pricing or fabricated claims |
| Meta Pixel insufficient data | Poor ad optimization | Run ATC campaigns first to feed pixel before switching to Purchase |

---

## CRITICAL FILE REFERENCES

| File | Purpose |
|------|---------|
| `/optibio-live-theme/CLAUDE.md` | Governing document -- brand rules, FTC compliance, verified claims, session log |
| `/DELEGATION_INSTRUCTIONS.md` | Complete content briefs: 12 emails, 9 ads, 10 social posts, compliance checklist |
| `/customer-support/EXPANDED_FAQ.md` | 20 FAQ Q&As -- content goldmine for social |
| `/customer-support/RESPONSE_TEMPLATES.md` | 5 customer service templates |
| `/email-templates/*.html` | 3 transactional email templates (installed) |
| `/blog-content/*.md` | 3 blog posts (published) |
| `/tracking/GTM_SETUP_GUIDE.md` | GA4, GTM, Meta CAPI, Google Ads setup |
| `/Social Media/linkedin-banner.png` | LinkedIn company page banner asset |
| `/Social Media/optibio-fb-cover.png` | Facebook cover photo asset |

---

*Last updated: February 24, 2026*
*Original plan: "8-Week Phased Rollout | February 2026.docx" (preserved as historical baseline)*
*Next review: After Phase 0 remaining items complete, before Phase 1 Day 1*
