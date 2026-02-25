# Optibio Abandoned Cart Recovery Flow — Klaviyo

**Last Updated:** 2026-02-25
**Flow Name:** Abandoned Checkout Recovery
**Platform:** Klaviyo (Shopify integration)
**Store:** optibio-store-2026 (optibiosupplements.com)

---

## Flow Architecture

```
Trigger: "Checkout Started" (Klaviyo auto-detects Shopify abandoned checkouts)
    |
    v
[Wait 1 hour]
    |
    v
[Conditional Split] Has Placed Order since starting flow? = No
    |--- Yes ---> EXIT
    |--- No ----> Email 1: Gentle Reminder
                      |
                      v
                  [Wait 23 hours] (24 hours total from checkout)
                      |
                      v
                  [Conditional Split] Has Placed Order? = No
                      |--- Yes ---> EXIT
                      |--- No ----> Email 2: Trust Building
                                        |
                                        v
                                    [Wait 24 hours] (48 hours total from checkout)
                                        |
                                        v
                                    [Conditional Split] Has Placed Order? = No
                                        |--- Yes ---> EXIT
                                        |--- No ----> Email 3: Final Push + Discount
```

---

## Design System

| Element | Value |
|---|---|
| Max Width | 600px, mobile-responsive |
| Header Background | Navy `#1A2F4D`, white Optibio logo centered |
| Body Background | White `#FFFFFF` |
| Body Font | Inter, `#475569` |
| Heading Font | Sora, `#1A2F4D` |
| CTA Buttons | Electric Blue `#2563EB`, white text, Sora font, `8px` border-radius, 48px height, full-width on mobile |
| Gold Accents | `#C9A961` — used for section dividers and highlight borders |
| Footer | Light gray background, FDA disclaimer (when applicable), unsubscribe link, support@optibiosupplements.com |

---

## Email 1: Gentle Reminder

**Trigger:** 1 hour after checkout started; conditional split confirms recipient has NOT placed an order since entering the flow.

**Subject:** You left something behind

**Preview Text:** Your Optibio is waiting

**Body:**

---

[HEADER: Navy `#1A2F4D` background, white Optibio logo centered]

---

Hi {{ first_name|default:"there" }},

Looks like you didn't finish checking out. No worries — your cart is saved and ready when you are.

---

[DYNAMIC PRODUCT BLOCK — Klaviyo "Abandoned Cart" items]

{% for item in event.extra.line_items %}

[Product Image: {{ item.product.image }}]

**{{ item.product.title }}**
Qty: {{ item.quantity }} | {{ item.line_price|floatformat:2 }}

{% endfor %}

---

[CTA BUTTON — Electric Blue `#2563EB`, white text, Sora font, 8px border-radius]

**Complete Your Order**

---

Just so you know:

- **Free shipping** on orders $49+
- **90-day money-back guarantee** — no questions asked

If you have any questions, just reply to this email.

— The Optibio Team

---

[FOOTER]

Optibio | optibiosupplements.com
support@optibiosupplements.com

{% unsubscribe %}

---

**CTA Button:** Complete Your Order

**CTA Link:** {{ event.extra.checkout_url }}

**Notes:**
- No discount offered — this is a simple, low-pressure reminder.
- No clinical claims or health language — FDA disclaimer is NOT needed.
- Keep the tone warm and brief. The goal is a quick nudge, not a sell.
- Dynamic product block pulls the actual items from their abandoned cart.

---

## Email 2: Trust Building

**Trigger:** 24 hours after checkout started (23 hours after Email 1); conditional split confirms recipient has NOT placed an order since entering the flow.

**Subject:** Still thinking it over?

**Preview Text:** Here's why so many people trust KSM-66®

**Body:**

---

[HEADER: Navy `#1A2F4D` background, white Optibio logo centered]

---

Hi {{ first_name|default:"there" }},

We get it. You've probably tried supplements before that promised the world and delivered nothing. That kind of skepticism is healthy — it means you care about what you put in your body.

Here's the thing: you already know the feeling. The alarm goes off after another restless night. You reach for coffee just to function. By mid-afternoon, you're running on fumes. And the cycle repeats.

That feeling isn't something you have to accept as normal.

---

[GOLD `#C9A961` DIVIDER LINE]

---

**Why KSM-66® is different from what you've tried before**

KSM-66® isn't a generic ashwagandha powder. It's the most clinically studied ashwagandha extract in the world, and every capsule of Optibio delivers a full 600mg serving — the same amount used in the research.

Here's what the science shows:

- In a randomized, double-blind, placebo-controlled trial, participants taking KSM-66® saw **sleep efficiency improve from 75.6% to 83.5%** — a meaningful difference in actual restorative sleep.
  *(Langade et al., 2019 — PubMed ID: 31728244)*

That's not marketing copy. That's a peer-reviewed study you can look up yourself.

---

**What's inside every bottle of Optibio:**

- **600mg KSM-66® per serving** — a full serving, not a token dose
- **90 capsules** (45-day supply at 2 capsules/day)
- **Third-party tested** for purity and potency
- **GMP certified** manufacturing
- **Made in the USA**

---

[GOLD `#C9A961` DIVIDER LINE]

---

**Our guarantee is simple.**

Try Optibio for up to 90 days. If you don't feel the difference, we'll refund every penny. No questions asked. No hoops to jump through.

We can make that promise because we trust the product.

---

**Your cart is still waiting:**

{% for item in event.extra.line_items %}

[Product Image: {{ item.product.image }}]

**{{ item.product.title }}**
Qty: {{ item.quantity }} | {{ item.line_price|floatformat:2 }}

{% endfor %}

---

[CTA BUTTON — Electric Blue `#2563EB`, white text, Sora font, 8px border-radius]

**Complete Your Order**

---

Questions? Just reply to this email — a real person will answer.

— The Optibio Team

---

[FOOTER]

*These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.*

Optibio | optibiosupplements.com
support@optibiosupplements.com

{% unsubscribe %}

---

**CTA Button:** Complete Your Order

**CTA Link:** {{ event.extra.checkout_url }}

**Notes:**
- This email contains health-related claims (sleep efficiency data) — FDA disclaimer is REQUIRED.
- Only one clinical stat is cited (Langade 2019, sleep efficiency). This is intentional — a single compelling data point is more persuasive than a wall of numbers for a skeptical audience.
- The problem-agitate section describes the feeling without making diagnostic claims.
- "Clinically studied" language is used, NEVER "clinically proven."
- The guarantee section does the heavy lifting on objection handling.

---

## Email 3: Final Push + Discount

**Trigger:** 48 hours after checkout started (24 hours after Email 2); conditional split confirms recipient has NOT placed an order since entering the flow.

**Subject:** Still thinking it over? Here's 10% off.

**Preview Text:** Use code WELCOME10 on your order

**Body:**

---

[HEADER: Navy `#1A2F4D` background, white Optibio logo centered]

---

Hi {{ first_name|default:"there" }},

We noticed you're still on the fence — and that's okay. Making a good decision about your health shouldn't be rushed.

But we'd like to make this one a little easier.

---

[GOLD `#C9A961` ACCENT BORDER — LEFT SIDE]

**Use code WELCOME10 for 10% off your order.**

[LARGE DISPLAY: **WELCOME10** — Sora font, `#1A2F4D`, centered]

---

**Here's what your savings look like:**

| Option | Regular Price | With WELCOME10 |
|---|---|---|
| 1 Bottle | $39.99 | **$35.99** |
| 3 Bottles ($33.33/ea) | $99.99 | **$89.99** |
| 6 Bottles ($29.99/ea) | $179.94 | **$161.95** |

*Want to save even more? Subscribe & Save for 15% off every order + free shipping. Cancel anytime.*

---

[GOLD `#C9A961` DIVIDER LINE]

---

**Everything you get with Optibio:**

- 10% off with WELCOME10
- Free shipping on orders $49+
- Subscribe & Save for 15% off every order
- 90-day money-back guarantee — full refund, no questions asked
- Third-party tested for purity and potency
- 600mg KSM-66® per serving — the most clinically studied ashwagandha extract

---

**Your cart is still saved:**

{% for item in event.extra.line_items %}

[Product Image: {{ item.product.image }}]

**{{ item.product.title }}**
Qty: {{ item.quantity }} | {{ item.line_price|floatformat:2 }}

{% endfor %}

---

[CTA BUTTON — Electric Blue `#2563EB`, white text, Sora font, 8px border-radius]

**Use Code WELCOME10**

---

Questions before you order? Just reply to this email — we're real people and we're happy to help.

— The Optibio Team

---

[FOOTER]

*These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.*

Optibio | optibiosupplements.com
support@optibiosupplements.com

{% unsubscribe %}

---

**CTA Button:** Use Code WELCOME10

**CTA Link:** {{ event.extra.checkout_url }}

**Notes:**
- WELCOME10 is an evergreen discount code. Do NOT add fake urgency ("expires in 24 hours," "limited time," etc.). The code is always available.
- The savings table shows concrete dollar amounts for each bundle tier, making the value tangible.
- Subscribe & Save is mentioned as an additional savings path, not the primary CTA — the goal is to close this sale, not overwhelm with options.
- The value stack uses checkmarks for scanability.
- "Clinically studied" is used, NEVER "clinically proven."
- FDA disclaimer is REQUIRED — the email references KSM-66® as "clinically studied," which constitutes health-adjacent language.

---

## Implementation Checklist

- [ ] Create flow in Klaviyo with "Checkout Started" trigger
- [ ] Set time delays: 1 hour, then 23 hours, then 24 hours
- [ ] Add conditional splits ("Has Placed Order since starting this flow" = No) before each email
- [ ] Build each email using Klaviyo drag-and-drop editor matching the design system above
- [ ] Insert dynamic product blocks using Klaviyo's built-in abandoned cart content block
- [ ] Verify `{{ event.extra.checkout_url }}` resolves correctly in CTA links
- [ ] Verify `{{ first_name|default:"there" }}` personalization fallback works
- [ ] Confirm WELCOME10 discount code is active in Shopify (Discounts > WELCOME10)
- [ ] Send test emails to verify rendering on desktop and mobile (Gmail, Apple Mail, Outlook)
- [ ] Set flow status to "Live"

---

## Key Compliance Reminders

1. **FDA Disclaimer** — Required on Email 2 and Email 3 (health claims present). Not needed on Email 1.
2. **No Fake Urgency** — WELCOME10 is evergreen. Never imply scarcity or expiration.
3. **"Clinically Studied"** — Always use this phrase. Never say "clinically proven."
4. **CAN-SPAM** — Every email must include: physical mailing address, unsubscribe link, accurate sender info.
5. **Unsubscribe** — Klaviyo handles `{% unsubscribe %}` automatically. Verify it renders in all emails.
6. **Brand Name** — Always "Optibio" (lowercase b). Never "OptiBio."
7. **KSM-66®** — Always include the registered trademark symbol. In Klaviyo's editor, use the actual ® character.
