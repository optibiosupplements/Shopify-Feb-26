# Optibio Welcome Email Series — Klaviyo Flow

## Flow Configuration

| Setting | Value |
|---|---|
| **Trigger** | Subscribed to List (Newsletter) |
| **Email 1** | Send immediately |
| **Delay** | 3 days |
| **Email 2** | Send after delay |
| **Delay** | 4 more days (7 days from signup) |
| **Conditional Split** | Has placed order? Yes: Exit flow / No: Send Email 3 |
| **Email 3** | Send after split (non-purchasers only) |

---

## Klaviyo Template Design Spec

| Element | Value |
|---|---|
| **Max width** | 600px, mobile-responsive |
| **Header** | Navy `#1A2F4D` background, white Optibio logo centered |
| **Body background** | White `#FFFFFF` |
| **Body font** | Inter, `#475569` |
| **CTA buttons** | Electric Blue `#2563EB`, white text, Sora font, `border-radius: 8px` |
| **Gold accents** | `#C9A961` for section dividers and stat highlight borders |
| **Footer** | FDA disclaimer (where noted), unsubscribe link, support@optibiosupplements.com |

---

## Email 1: Welcome + Discount

**Trigger:** Immediately on list subscribe
**Subject:** Welcome to Optibio — Here's Why We're Different
**Preview Text:** Not another supplement. This one has proof.

**Body:**

Hey {{ first_name|default:"there" }},

Welcome to Optibio. We're glad you're here — and we want to be upfront about something.

Most supplement brands spend more on marketing than on what actually goes into the bottle. We decided to do the opposite.

### Why we started Optibio

We started Optibio because we were tired of the supplement industry's favorite trick: proprietary blends with undisclosed doses, generic ingredients with zero research, and claims that sound great but mean nothing.

So we built a supplement around a single question: *What does the research actually say?*

The answer led us to KSM-66® — the most clinically studied ashwagandha extract in the world. Not a generic root powder. Not an unbranded extract. KSM-66® is produced through a patented extraction process that took 14 years of R&D to develop, and it has been evaluated in 24+ clinical trials published in peer-reviewed journals.

### What makes KSM-66® different

- **Full-spectrum root extract** — mirrors the natural balance of bioactive compounds
- **Patented green chemistry extraction** — no alcohol, no synthetic solvents
- **24+ clinical trials** — more published human research than any other ashwagandha extract
- **Standardized to 5% withanolides** — guaranteed potency in every batch

Every Optibio capsule delivers exactly the dose used in published research. No proprietary blends. No filler. No guesswork.

### A small thank you for joining us

We'd like to offer you 10% off your first order:

### **WELCOME10**

No rush. No pressure. We'd rather you read the research first.

**[ See the Science ]**

Talk soon,
The Optibio Team

---

*You're receiving this because you signed up at optibiosupplements.com. If that wasn't you, just hit unsubscribe below — no hard feelings.*

**CTA Button:** See the Science
**CTA Link:** /pages/science

---

## Email 2: Science Deep Dive — Cortisol

**Trigger:** 3 days after Email 1
**Subject:** 27.9% Lower Cortisol — Here's What That Feels Like
**Preview Text:** The study that changed how we think about stress

**Body:**

{{ first_name|default:"Hey" }},

Let's talk about cortisol — because there's a good chance it's running your life right now, and you don't even know it.

### What cortisol actually does

Cortisol is your body's primary stress hormone. In short bursts, it's useful — it sharpens focus, fuels your fight-or-flight response, and helps you perform under pressure.

The problem is that modern life doesn't produce short bursts. It produces a constant, low-grade stream of stress: deadlines, notifications, financial pressure, poor sleep, too much caffeine, not enough recovery. Your body responds by keeping cortisol elevated — hour after hour, day after day.

### What chronic elevated cortisol feels like

You might not connect these symptoms to stress, but elevated cortisol shows up as:

- **Wired but tired** — exhausted all day, wide awake at 11pm
- **Brain fog** — difficulty concentrating, forgetting things mid-sentence
- **The 3am wake-up** — falling asleep fine, then bolt-awake in the middle of the night
- **Stubborn weight around the midsection** — cortisol promotes visceral fat storage
- **Low motivation** — things you used to enjoy feel like obligations

Sound familiar? You're not broken. Your cortisol might just be working overtime.

### The study that caught our attention

In 2012, researchers led by Dr. K. Chandrasekhar published a landmark study in the *Indian Journal of Psychological Medicine*. Here's what they did:

| Study Detail | Value |
|---|---|
| **Participants** | 64 adults with a history of chronic stress |
| **Design** | Randomized, double-blind, placebo-controlled |
| **Duration** | 60 days |
| **Dose** | 600mg KSM-66® daily (two 300mg capsules) |
| **Measurement** | Serum cortisol via blood test |

This wasn't a survey or a self-reported questionnaire. They drew blood. They measured cortisol in the lab. And here's what they found:

---

> **The KSM-66® group showed a 27.9% reduction in serum cortisol levels.**
>
> *Chandrasekhar et al., 2012 — PubMed ID: 23439798*

---

The same study also measured perceived stress using the validated PSS (Perceived Stress Scale). The KSM-66® group reported a **44% reduction in perceived stress scores** compared to placebo.

Two different measurements. Two clear signals. One ingredient — at the exact dose in every Optibio serving.

### Why this matters for you

This isn't a proprietary blend hoping to do something. This is a specific extract, at a specific dose, studied in a rigorous clinical trial, producing a measurable outcome in a biomarker you can test in your own blood.

That's the Optibio standard: if we can't point to published research at our exact dose, it doesn't go in the bottle.

Your WELCOME10 code is still active — 10% off your first order.

**[ Shop Now ]**

— The Optibio Team

---

*These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. The clinical research cited refers to KSM-66® ashwagandha extract studied in independent trials. Individual results may vary.*

**CTA Button:** Shop Now
**CTA Link:** /products/optibio-ashwagandha-ksm-66

---

## Email 3: Social Proof + Subscribe & Save

**Trigger:** 7 days after signup (only if no order placed — conditional split)
**Subject:** Your First Bottle Is Waiting — 15% Off with Subscribe & Save
**Preview Text:** Four benefits. One capsule. 90 days to decide.

**Body:**

{{ first_name|default:"Hey" }},

We've talked about the science. Now let's talk about what KSM-66® actually does — across four clinically studied benefits, all at the exact dose in every Optibio serving.

---

### What the research shows — 4 clinically studied benefits

**1. Cortisol Support**
27.9% reduction in serum cortisol levels
*Chandrasekhar et al., 2012 — 64 participants, 60 days, double-blind, placebo-controlled*
*(PubMed ID: 23439798)*

**2. Stress Response**
44% reduction in perceived stress (PSS scale)
*Chandrasekhar et al., 2012 — same trial, validated stress questionnaire*
*(PubMed ID: 23439798)*

**3. Sleep Quality**
Sleep efficiency improved from 75.6% to 83.5% (p=0.002)
*Langade et al., 2019 — double-blind, placebo-controlled*
*(PubMed ID: 31728244)*

**4. Physical Endurance**
13% improvement in VO2max (p<0.0001)
*Choudhary et al., 2015 — randomized, double-blind, placebo-controlled*
*(PubMed ID: 26730141)*

Four peer-reviewed, placebo-controlled trials. Real measurements — blood cortisol, validated scales, sleep monitoring, cardiorespiratory testing. Not testimonials. Not "proprietary research." Published science you can look up yourself.

---

### Choose your supply

| Package | Price | Per Bottle | Shipping |
|---|---|---|---|
| **1 Bottle** (90 capsules, 45-day supply) | $39.99 | $39.99 | Free on orders $49+ |
| **3 Bottles** (270 capsules, 135-day supply) — *Most Popular* | $99.99 | $33.33/ea | FREE |
| **6 Bottles** (540 capsules, 270-day supply) — *Best Value* | $179.94 | $29.99/ea | FREE |

Each bottle contains 90 capsules. Recommended serving: 2 capsules daily (600mg KSM-66®).

---

### Subscribe & Save — 15% off every order

For the best value, subscribe and save on any package:

- **15% off** every shipment — applied automatically
- **Free shipping** on every delivery
- **Cancel anytime** — no commitments, no hoops, no fine print
- **Flexible schedule** — monthly, every 3 months, or every 6 months

The 3-bottle Subscribe & Save is our most popular option. You get a 135-day supply at the lowest per-bottle price with free shipping, and you never have to think about reordering.

---

### Our guarantee: 90 days, no questions asked

We're confident in the science, but we also know supplements are personal. If Optibio isn't right for you — for any reason — contact us within 90 days for a full refund. No return shipping hassles. No interrogation. Just a refund.

support@optibiosupplements.com

---

### Your discount is still waiting

Your WELCOME10 code gives you 10% off your first order — and yes, it stacks with Subscribe & Save pricing.

**[ Start Feeling Better ]**

— The Optibio Team

---

*These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. The clinical research cited refers to KSM-66® ashwagandha extract studied in independent trials. Individual results may vary.*

**CTA Button:** Start Feeling Better
**CTA Link:** /products/optibio-ashwagandha-ksm-66
