# Exit-Intent Popup Strategy Brief

**Prepared for:** Optibio Marketing & Finance Team
**Date:** February 25, 2026
**Document type:** Decision Brief -- requires stakeholder review and approval before implementation
**Brand:** Optibio (optibiosupplements.com)

---

## 1. Executive Summary

Optibio needs to decide whether to optimize the existing email capture popup, build a dedicated exit-intent experience, or invest in UGC-powered exit-intent content to recover abandoning visitors. This brief presents three options with cost breakdowns, timelines, and projected ROI so that marketing and finance can align on the right approach for our current stage (recently launched, pre-scale traffic).

---

## 2. Current State Assessment

### What Is Already Built

The store has a fully functional email capture popup built natively in Liquid and vanilla JavaScript -- no third-party tools (Privy, Justuno, OptinMonster, etc.) are installed. The popup is controlled by three theme files:

| File | Role |
|------|------|
| `sections/email-popup.liquid` | HTML structure, Shopify section schema, configurable settings |
| `assets/email-popup.js` | Trigger logic (delay + exit-intent), cookie management, form submission, clipboard copy |
| `assets/email-popup.css` | Glassmorphic visual design matching the "Ethereal Clinical Luxury" brand identity |

### Current Popup Behavior

| Feature | Current Setting |
|---------|----------------|
| Delay trigger | 8 seconds after page load (configurable 3-30s in Theme Editor) |
| Exit-intent trigger | Enabled on desktop (fires when cursor leaves viewport, `clientY <= 5`) |
| Mobile behavior | Delay trigger only (exit-intent disabled -- no cursor on touch devices) |
| Discount offered | WELCOME10 (10% off first order) |
| Cookie suppression after dismiss | 7 days (configurable 1-30 days) |
| Cookie suppression after signup | 365 days (configurable 30-360 days) |
| Form destination | Shopify `/contact` endpoint (tags: `popup, prospect, WELCOME10`) |
| Post-signup experience | Success state with copy-to-clipboard discount code |
| Design | Glassmorphic card with product image, gold accent border, trust badges |

### Current User Journey

```
Visitor lands on site
       |
       v
8-second delay fires  --OR--  Cursor leaves viewport (desktop only)
       |                              |
       +------------------------------+
       |
       v
Same popup appears (identical offer, design, and copy)
       |
       v
User enters email --> WELCOME10 code revealed --> Copy to clipboard
       |
       v
Email tagged in Shopify customers as "popup, prospect, WELCOME10"
```

### Performance Baseline

The store launched recently and does not yet have sufficient traffic data to establish popup conversion benchmarks. The following KPIs should be tracked from day one:

- Popup view rate (% of visitors who see the popup)
- Popup conversion rate (email captures / popup views)
- WELCOME10 redemption rate (code uses / code distributions)
- Revenue attributed to WELCOME10 code

### The Gap

The delay trigger and the exit-intent trigger currently show the **exact same popup** with the **exact same offer**. There is no differentiation between a first-time visitor browsing casually (delay trigger) and a visitor actively leaving the site (exit-intent trigger). These are fundamentally different moments in the customer journey and present an opportunity for distinct messaging:

- **Delay trigger:** Visitor is engaged, still exploring -- best time for a welcome offer
- **Exit-intent trigger:** Visitor is leaving -- best time for objection handling, urgency, or value reinforcement

---

## 3. Option A: Optimize Existing Popup

### What This Means

Keep the current popup infrastructure and run A/B tests on copy, timing, and layout to improve conversion rate. No new code, no new design -- just systematic testing of what already exists.

### Cost

| Item | Cost |
|------|------|
| Development | $0 |
| Design | $0 |
| Testing setup | 2-4 hours of manual configuration in Theme Editor |
| Monthly cost | $0 |

### Recommended Tests (run sequentially, 2 weeks each)

| Test | Control | Variant | What It Measures |
|------|---------|---------|------------------|
| Timing | 8-second delay | 5-second delay | Does faster trigger capture more emails before bounce? |
| Trigger type | Delay + exit-intent | Exit-intent only (disable delay) | Does removing the delay popup reduce annoyance and improve exit capture? |
| Headline | "Get 10% Off Your First Order" | "Before You Go -- Exclusive Offer Inside" | Does urgency language outperform discount-forward language? |
| Headline alt | "Get 10% Off Your First Order" | "Unlock Your Welcome Discount" | Does curiosity-gap language improve conversion? |
| Product image | With product image | Without product image (text-only) | Does the image increase trust or distract? |
| CTA copy | "Unlock My Discount" | "Claim My 10% Off" | Does direct language outperform aspirational language? |

### How to Run These Tests

Since no third-party A/B testing tool is installed, tests can be run manually by changing popup settings in the Shopify Theme Editor every 2 weeks and comparing Shopify customer tag counts for the `popup` tag during each period. For more rigorous testing, consider installing a free A/B testing script or using Google Optimize (via GTM).

### Pros

- Zero cost -- uses existing infrastructure
- Fastest to implement -- changes can be made same day in Theme Editor
- Preserves the proven glassmorphic design that matches brand identity
- Low risk -- no new code to break or maintain

### Cons

- Limited differentiation between delay and exit-intent experiences
- Manual A/B testing is slower and less statistically rigorous than tool-based testing
- No new messaging angles beyond the WELCOME10 discount

### Timeline

Same day for initial changes. Full A/B testing cycle: 8-12 weeks (4-6 tests at 2 weeks each).

### Expected Impact

10-30% improvement in popup conversion rate through copy and timing optimization. This is based on industry benchmarks for DTC e-commerce popup optimization.

### Success Metrics

| Metric | How to Measure |
|--------|----------------|
| Popup conversion rate | Shopify customer count with `popup` tag / estimated popup views |
| Email list growth rate | Weekly new customers tagged `popup` |
| WELCOME10 redemption rate | Shopify Discounts report |

---

## 4. Option B: Build Dedicated Exit-Intent Experience

### What This Means

Create a **separate popup** that only appears on exit-intent, with different design, copy, and offer than the delay-triggered popup. The delay popup continues to show the WELCOME10 email capture. The exit-intent popup shows a non-discount value proposition to avoid coupon stacking.

### Cost

| Item | Cost |
|------|------|
| Development (4-6 hours) | $300-500 |
| Design | Included in development (uses existing design system) |
| QA and testing | Included in development |
| Monthly cost | $0 |

### Design Options for the Exit-Intent Popup

| Format | Description | Best For |
|--------|-------------|----------|
| Slide-in from bottom | Less intrusive than a centered modal, appears as a bar or card sliding up from the bottom of the screen | Subtle, non-aggressive recovery |
| Full-screen takeover | High-impact overlay with product hero image and strong CTA | Maximum attention capture |
| Minimalist text card | Small, centered card with just a headline, one sentence, and a CTA button -- no image | Fast-loading, low-friction |

### Messaging Options (Non-Discount to Avoid WELCOME10 Stacking)

| Option | Headline | Supporting Copy | CTA |
|--------|----------|----------------|-----|
| B1: Free shipping reminder | "Your Order Ships FREE" | "Orders over $49 include complimentary shipping. Your 3-bottle bundle qualifies." | "Continue Shopping" |
| B2: Bundle value proposition | "Save Up to $60 with Bundles" | "Most customers choose the 3-bottle bundle -- better value, fewer reorders." | "See Bundle Options" |
| B3: Risk reversal | "Try It Completely Risk-Free" | "Not sure yet? Every order includes a 90-day money-back guarantee. No questions asked." | "Shop Risk-Free" |
| B4: Social proof | "Join Customers Who Chose Clinical-Grade Ashwagandha" | "KSM-66 is backed by 24+ clinical studies. See why customers trust Optibio." | "Learn More" |

**Recommended starting option:** B3 (Risk Reversal). The 90-day money-back guarantee is Optibio's strongest conversion lever for hesitant visitors, requires no discount stacking, and addresses the #1 objection for first-time supplement buyers: "What if it doesn't work for me?"

### Technical Approach

- New Liquid section (`sections/exit-intent-popup.liquid`) with its own schema settings
- New JS controller that fires **only** on exit-intent, **only** if the delay popup was already dismissed or if the visitor has been on-site for at least 30 seconds
- Separate cookie (`optibio_exit_popup_dismissed`) to track independently from the email popup
- Does **not** collect email -- focuses on returning the visitor to the purchase path

### Pros

- Differentiated experience for different visitor states
- Can test non-discount offers that preserve margin
- Better targeting -- only reaches visitors who are actively leaving
- No impact on existing email capture popup

### Cons

- Development cost ($300-500)
- Adds a second popup to the site, which requires careful frequency capping to avoid popup fatigue
- Needs A/B testing to determine which messaging option (B1-B4) performs best
- No email capture -- does not grow the subscriber list

### Timeline

- Development and QA: 1-2 weeks
- Initial A/B testing of messaging options: 4-8 weeks
- Total time to validated results: 6-10 weeks

### Expected Impact

5-15% recovery rate on abandoning visitors (industry benchmark for DTC supplement brands). "Recovery" means the visitor clicks the CTA and returns to browsing rather than leaving.

### Success Metrics

| Metric | How to Measure |
|--------|----------------|
| Exit-intent recovery rate | CTA clicks / exit-intent popup views |
| Return-to-site rate | Visitors who see exit popup and visit another page |
| Conversion rate lift | Compare site conversion rate before/after deployment |

---

## 5. Option C: UGC-Powered Exit-Intent

### What This Means

Build a dedicated exit-intent popup (same as Option B) but populate it with **real customer content** -- photos, short video testimonials, or customer journey quotes. User-generated content (UGC) is the highest-trust format for DTC brands and consistently outperforms branded content in conversion.

### Cost Breakdown

| Item | Cost | Notes |
|------|------|-------|
| **Content Creation** | | |
| Micro-influencer partnerships (1K-50K followers) | $50-200 per post/video | 5-10 creators at varying rates |
| Content package deal | $500-1,500 for 10-20 UGC assets | Negotiate bulk rate with 3-5 creators |
| Product seeding (gifting) | $40-180 per unit | 1-bottle ($40) or 3-bottle ($100) per creator |
| **Development** | | |
| Exit-intent popup build | $300-500 | Same as Option B, plus media display components |
| Video optimization | Included | Lazy-loaded, compressed for performance |
| **Ongoing** | | |
| Monthly content refresh | $200-500/month | 3-5 new assets per month to keep content fresh |

| | Low Estimate | High Estimate |
|---|---|---|
| Initial content investment | $500 | $2,000 |
| Development | $300 | $500 |
| **Total launch cost** | **$800** | **$2,500** |
| Monthly ongoing | $200 | $500 |

### UGC Content Types

| Format | Description | Production Cost | Trust Impact |
|--------|-------------|----------------|--------------|
| Short video testimonial (15-30 sec) | Phone-quality, authentic feel, customer speaking to camera | $50-150/video | Highest |
| Customer photo with product | Lifestyle photo showing product in daily routine | $25-75/photo | High |
| Before/after narrative quote | Written testimonial with photo, describing their experience | $25-50/quote | High |
| "Day 1 vs. Day 30" journey post | Multi-frame content showing a customer's experience over time | $100-200/post | Very high |

### Content Pipeline

1. **Outreach (Week 1-2):** Identify 10-15 micro-influencers in the wellness/supplement space on Instagram and TikTok. Filter for authentic engagement (not purchased followers), audience alignment (25-45 age range, health-conscious), and willingness to create honest content.

2. **Seeding (Week 2-3):** Ship product to selected creators. Include brand brief (see Appendix), product information card, and content guidelines.

3. **Content Collection (Week 3-4):** Creators produce and deliver content per brief specifications. Review for brand alignment and compliance.

4. **Deployment (Week 4-5):** Build exit-intent popup with curated UGC carousel. Launch with 5-10 initial assets.

5. **Refresh (Monthly):** Rotate in 3-5 new assets per month to prevent content fatigue and test performance.

### Pros

- Highest trust signal -- authentic customer voices outperform brand copy
- Content is repurposable across ads, social media, email campaigns, and product page
- Creates a content flywheel -- early customers become advocates
- Addresses the "does this actually work?" objection with real stories

### Cons

- Highest total cost ($800-2,500 initial + $200-500/month ongoing)
- Longest timeline (3-5 weeks before first deployment)
- Requires building a content creator outreach and management process
- Content quality varies -- needs editorial review for brand consistency
- FDA/FTC compliance review required on all UGC (creators cannot make health claims)

### Timeline

| Phase | Duration | What Happens |
|-------|----------|-------------|
| Phase 1: Creator outreach and seeding | Weeks 1-2 | Identify creators, negotiate terms, ship product |
| Phase 2: Content production | Weeks 2-4 | Creators use product and produce content |
| Phase 3: Review and curation | Week 4 | Review content for quality, brand alignment, and compliance |
| Phase 4: Popup development | Week 4-5 | Build UGC exit-intent popup with curated content |
| Phase 5: Launch and test | Week 5+ | Deploy, monitor, and A/B test against non-UGC version |

### Expected Impact

15-25% recovery rate on abandoning visitors. UGC content outperforms stock/branded content by approximately 28% on average in DTC e-commerce contexts, which is why the projected recovery rate is higher than Option B.

---

## 6. Budget Summary Table

| Option | Dev Cost | Content Cost | Monthly Ongoing | Timeline to Launch | Expected Recovery Rate |
|--------|----------|-------------|-----------------|-------------------|----------------------|
| **A: Optimize Existing** | $0 | $0 | $0 | Same day | 10-30% popup conversion improvement |
| **B: Dedicated Exit-Intent** | $300-500 | $0 | $0 | 1-2 weeks | 5-15% exit recovery |
| **C: UGC-Powered** | $300-500 | $500-2,000 | $200-500 | 3-5 weeks | 15-25% exit recovery |

**Notes:**
- "Popup conversion improvement" (Option A) measures improvement in the existing popup's email capture rate.
- "Exit recovery" (Options B and C) measures the percentage of abandoning visitors who click the exit-intent CTA and return to browsing.
- These are different metrics. Option A improves email list growth. Options B and C improve on-site engagement and reduce bounce.

---

## 7. ROI Projections

> **Disclaimer:** These projections are based on industry benchmarks for DTC supplement brands. Actual results will vary based on traffic volume, traffic quality, and visitor intent. Treat these as directional estimates, not guarantees.

### Assumptions

| Variable | Value | Source |
|----------|-------|--------|
| Monthly visitors | 1,000 | Estimated early-stage traffic |
| Bounce rate | 70% | Industry average for DTC supplement sites |
| Abandoning visitors per month | 700 | 1,000 x 70% |
| Average order value (AOV) | $60 | Blended across 1-bottle ($39.99), 3-bottle ($99.99), and 6-bottle ($179.94) |
| Email-to-purchase conversion rate | 5% | Industry benchmark for welcome email sequences |
| Exit-intent CTA-to-purchase rate | 3% | Industry benchmark for non-email exit recovery |

### Option A: Optimize Existing Popup

| Scenario | Current Popup Rate | Improved Rate | Additional Captures/Month | Projected Revenue/Month |
|----------|-------------------|---------------|--------------------------|------------------------|
| Conservative (10% improvement) | 3% of 1,000 = 30 | 33 | 3 more email captures | 3 x 5% x $60 = **$9** |
| Moderate (20% improvement) | 3% of 1,000 = 30 | 36 | 6 more email captures | 6 x 5% x $60 = **$18** |
| Aggressive (30% improvement) | 3% of 1,000 = 30 | 39 | 9 more email captures | 9 x 5% x $60 = **$27** |

At 1,000 monthly visitors, the revenue impact is modest. The primary value of Option A is establishing baseline data and growing the email list for future campaigns.

### Option B: Dedicated Exit-Intent

| Scenario | Recovery Rate | Recovered Visitors/Month | Projected Conversions | Projected Revenue/Month |
|----------|--------------|--------------------------|----------------------|------------------------|
| Conservative (5%) | 35 | 35 return to browsing | 35 x 3% = 1.05 | **$63** |
| Moderate (10%) | 70 | 70 return to browsing | 70 x 3% = 2.1 | **$126** |
| Aggressive (15%) | 105 | 105 return to browsing | 105 x 3% = 3.15 | **$189** |

Payback period at moderate scenario: $400 dev cost / $126 per month = **3.2 months.**

### Option C: UGC-Powered Exit-Intent

| Scenario | Recovery Rate | Recovered Visitors/Month | Projected Conversions | Projected Revenue/Month |
|----------|--------------|--------------------------|----------------------|------------------------|
| Conservative (15%) | 105 | 105 return to browsing | 105 x 3% = 3.15 | **$189** |
| Moderate (20%) | 140 | 140 return to browsing | 140 x 3% = 4.2 | **$252** |
| Aggressive (25%) | 175 | 175 return to browsing | 175 x 3% = 5.25 | **$315** |

Payback period at moderate scenario: $1,500 initial cost / ($252 - $350 monthly content cost) = **Negative ROI at 1,000 visitors.** UGC content costs ($200-500/month) may exceed incremental revenue until traffic scales.

> **Scaling note:** ROI projections scale linearly with traffic. At 5,000 monthly visitors, Option B generates $630/month (moderate) and Option C generates $1,260/month (moderate). These numbers become significantly more impactful as paid advertising (Performance Max, Meta Ads) drives more visitors to the site. The UGC content also has secondary value as ad creative and social media content, which is not captured in these popup-only projections.

---

## 8. Recommended Approach: Phased Rollout

The recommended path balances speed, cost, and learning. Start with zero-cost optimization, graduate to dedicated experiences only after baseline data justifies the investment.

### Phase 1: Optimize Existing Popup (Week 1)

- **Action:** Begin A/B testing the current popup using the test matrix in Option A
- **Cost:** $0
- **Goal:** Establish baseline popup conversion rate and identify the highest-performing copy/timing combination
- **First test:** Change delay from 8 seconds to 5 seconds and monitor for 2 weeks
- **Tracking setup:** Begin logging popup views and conversions (add a simple event to the existing JS or track via GTM custom events)

### Phase 2: Review Phase 1 Data (Week 3-4)

- **Action:** Analyze 2-3 weeks of popup data
- **Decision point:** If popup conversion rate is below 5%, the current approach is underperforming and Option B should be pursued. If above 5%, continue optimizing with additional A/B tests.
- **Cost:** $0 (analysis only)

### Phase 3: Begin UGC Content Pipeline (Month 2-3)

- **Action:** Regardless of Phase 2 results, begin building the UGC content pipeline in parallel
- **Recruit 3-5 micro-influencers** in the wellness/supplement space
- **Ship product** and provide the content creator brief (see Appendix)
- **Collect 10-20 initial UGC assets** (photos, short videos, quotes)
- **Cost:** $500-1,500 for initial content creation
- **Why now:** UGC content takes 2-4 weeks to produce. Starting early means assets are ready when traffic scales. Even if Option C popup is not built immediately, these assets can be used in Meta Ads, email campaigns, and product page social proof.

### Phase 4: Deploy UGC Exit-Intent Popup (Month 3-4)

- **Action:** Build and launch the UGC-powered exit-intent popup (Option C)
- **A/B test** against the optimized delay popup (Option A results)
- **Cost:** $300-500 development
- **Goal:** Validate whether UGC exit-intent outperforms the optimized standard popup

### Decision Points

| After... | Review | Decide |
|----------|--------|--------|
| 2 weeks of Phase 1 | Popup conversion rate vs. 5% benchmark | Continue optimizing or escalate to Phase 2 decision |
| 30 days of Phase 1 | Full month of data, email list growth trend | Proceed to Option B, or skip to Phase 3 |
| 30 days of Phase 4 | UGC popup recovery rate vs. non-UGC | Scale UGC investment or reduce |
| 90 days total | Full funnel performance (popup to purchase) | Set ongoing strategy and budget |

---

## 9. KPIs to Track

| Metric | Measurement Tool | Target | Frequency |
|--------|-----------------|--------|-----------|
| Popup view rate | Custom JS event via GTM | >50% of visitors see popup | Weekly |
| Popup conversion rate (email capture) | Shopify customer tags + GTM | >5% (captures / views) | Weekly |
| Exit-intent popup recovery rate | Custom JS event via GTM | 5-15% (CTA clicks / exit views) | Weekly |
| Email list growth rate | Shopify Customers report | >200 new subscribers/month | Monthly |
| Revenue per email subscriber | Shopify + discount code report | >$5/subscriber in first 30 days | Monthly |
| WELCOME10 redemption rate | Shopify Discounts report | >15% of code recipients | Monthly |
| Popup dismiss rate | Custom JS event | <80% (lower is better) | Weekly |
| Time on site after exit recovery | GA4 (G-38QZ0WCZLG) | >60 seconds post-recovery | Monthly |
| Cost per UGC asset | Content spend / assets produced | <$100/asset | Per content cycle |

### How to Set Up Tracking

The current popup JS (`email-popup.js`) does not push events to the GTM dataLayer. Before any testing begins, the following events should be added:

1. `popup_view` -- fires when the popup becomes visible (in `showPopup()` function)
2. `popup_dismiss` -- fires when the popup is closed without conversion (in `dismiss()` function)
3. `popup_convert` -- fires when the email form is successfully submitted (in `showSuccess()` function)
4. `popup_trigger_type` -- parameter on all events indicating whether the popup was triggered by `delay` or `exit_intent`

These events feed into GTM, GA4, and can be used as audience signals for Meta and Google Ads retargeting.

---

## 10. Next Steps

| Owner | Action | Deadline |
|-------|--------|----------|
| Marketing | Review this brief and select preferred option (A, B, or C) | Within 1 week |
| Finance | Approve budget for selected option | Within 1 week of marketing decision |
| Marketing | If Option C selected, begin UGC content creator outreach using the brief in the Appendix | Week 2 |
| Development | Add dataLayer tracking events to existing popup JS (required for all options) | Before testing begins |
| Development | Implement selected option after approval | Per timeline of selected option |
| Analytics | Configure GTM triggers for popup tracking events | Before testing begins |
| Analytics | Create GA4 custom report for popup performance dashboard | Week 1 |

---

## 11. Appendix: UGC Content Creator Brief Template (for Option C)

This template should be sent to content creators alongside the product shipment. Customize the compensation section per individual agreement.

---

### Optibio Content Creator Brief

**Brand:** Optibio -- Premium KSM-66 Ashwagandha Supplement
**Website:** optibiosupplements.com

#### About Optibio

Optibio is a direct-to-consumer wellness brand offering premium KSM-66 Ashwagandha root extract. Our product contains a full 600mg serving of the most researched ashwagandha extract in the world, backed by 24+ clinical studies. We focus on transparency, quality, and science -- every batch is third-party tested and made in the USA. Our brand voice is warm, authoritative, and grounded in science. We never hype. We let the research speak for itself.

#### What You Will Receive

- 1 bottle of Optibio KSM-66 Ashwagandha (90 capsules, 45-day supply)
- Brand guidelines card
- This content brief

#### Content Requirements

| Requirement | Details |
|-------------|---------|
| **Format** | Vertical video (9:16 ratio) OR lifestyle photo with product visible |
| **Video length** | 15-30 seconds |
| **Video style** | Authentic, phone-quality, natural lighting preferred. No studio lighting required. |
| **Tone** | Honest, conversational, personal. Share your genuine experience. |
| **Product visibility** | Product bottle must be clearly visible in at least one frame/shot |
| **Delivery format** | Original resolution MP4 (video) or JPG/PNG (photo), delivered via Google Drive or email |
| **Delivery deadline** | 14 days after receiving product |
| **Number of assets** | Minimum 2 (one video + one photo, or two of either) |

#### Content Dos

- Share your honest, personal experience with the product
- Film in natural settings (kitchen, desk, gym bag, morning routine)
- Mention how the product fits into your daily routine
- Use phrases like "I've been taking..." or "My experience with..." or "What I noticed..."
- Tag @optibiosupplements if posting to your own channels

#### Content Don'ts -- Critical Compliance Requirements

- **DO NOT** make health claims (e.g., "this cures anxiety," "this fixed my insomnia," "this lowers cortisol")
- **DO NOT** mention specific medical conditions, diseases, or diagnoses
- **DO NOT** use the words "cure," "treat," "diagnose," or "prevent" in relation to any health condition
- **DO NOT** cite specific clinical statistics or study results (e.g., "27.9% cortisol reduction")
- **DO NOT** compare to prescription medications or medical treatments
- **DO NOT** make before/after claims about specific health metrics

**Acceptable language examples:**
- "I feel more balanced since I started taking Optibio"
- "This has become part of my daily wellness routine"
- "I like that it's backed by real research -- not just marketing hype"
- "The quality feels premium compared to other supplements I've tried"

#### Required Disclaimer

If your content mentions any wellness benefits, please include the following disclaimer in your caption or video description:

*"These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease."*

#### Usage Rights

By accepting this partnership, you grant Optibio perpetual, royalty-free rights to use your content across all platforms including but not limited to: website, email marketing, social media (paid and organic), product pages, and advertising campaigns. You retain the right to post the content on your own channels. Optibio may edit content for length or format but will not alter the substance of your message without approval.

#### Compensation

| Component | Details |
|-----------|---------|
| Product | 1 bottle of Optibio KSM-66 Ashwagandha (retail value $39.99) |
| Cash payment | [Negotiated per creator -- typical range $50-200 per deliverable] |
| Payment timing | Within 7 days of approved content delivery |
| Payment method | PayPal, Venmo, or direct deposit |
| Bonus | Ongoing 20% affiliate discount code for your audience (optional, discuss with marketing) |

#### Brand Identity Guidelines

| Element | Guideline |
|---------|-----------|
| Brand name | Always "Optibio" (lowercase "b" -- never "OptiBio") |
| Product name | "Optibio KSM-66 Ashwagandha" or simply "Optibio Ashwagandha" |
| Trademark | Write "KSM-66" with the registered trademark symbol on first mention if possible |
| Voice | Warm, honest, science-respectful. Never hype, never exaggerate. |
| Hashtags (suggested) | #Optibio #KSM66 #Ashwagandha #WellnessRoutine #DailyWellness |

---

*End of Brief*

*Prepared by: Optibio Marketing*
*For questions about this brief, contact: support@optibiosupplements.com*
