# Klaviyo Template Verification Checklist

Use this checklist to verify that every email template in the local files matches what's live in Klaviyo. Each template should be visually confirmed and test-sent before marking as verified.

---

## Verification Steps (Per Template)

1. Open Klaviyo → Flows → click the flow name (use Flow ID to find it)
2. Click each email action node in the flow
3. Click "Edit Template" or preview the template
4. Confirm the template content matches the corresponding HTML file
5. Send a test email to the Preview List
6. Verify rendering in Gmail, Apple Mail, and Outlook
7. Check the box below when verified

---

## Template Matrix

| Flow | Flow ID | Email | Template File | Klaviyo Template ID | Verified? |
|------|---------|-------|---------------|---------------------|-----------|
| Welcome Series | Srh8uu | Email 1 (Non-Purchaser) | WELCOME_EMAIL_1.html | Vy2hWm | [ ] |
| Welcome Series | Srh8uu | Email 2 (Non-Purchaser) | WELCOME_EMAIL_2.html | V9tgfK | [ ] |
| Welcome Series | Srh8uu | Email 3 (Non-Purchaser) | WELCOME_EMAIL_3.html | UwsdD8 | [ ] |
| Welcome Series | Srh8uu | Email 1 (Purchaser) | WELCOME_PURCHASER_1.html | T5tYrQ | [ ] |
| Welcome Series | Srh8uu | Email 2 (Purchaser) | WELCOME_PURCHASER_2.html | URTRWj | [ ] |
| Welcome Series | Srh8uu | Email 3 (Purchaser) | WELCOME_PURCHASER_3.html | SssVPd | [ ] |
| Abandoned Cart | RRVAf2 | Email 1 | ABANDONED_CART_EMAIL_1.html | VFR4wY | [ ] |
| Abandoned Cart | RRVAf2 | Email 2 | ABANDONED_CART_EMAIL_2.html | XugW3t | [ ] |
| Abandoned Cart | RRVAf2 | Email 3 | ABANDONED_CART_EMAIL_3.html | WRfTqQ | [ ] |
| Browse Abandon | TMk3Gq | Email 1 | BROWSE_ABANDON_EMAIL_1.html | UD4mgv | [ ] |
| Browse Abandon | TMk3Gq | Email 2 | BROWSE_ABANDON_EMAIL_2.html | VNtcam | [ ] |
| Post-Purchase | US7CeS | Email 1 | POST_PURCHASE_1_THANKYOU.html | WXS34d | [ ] |
| Post-Purchase | US7CeS | Email 2 | POST_PURCHASE_2_USAGE.html | Uyr6V7 | [ ] |
| Post-Purchase | US7CeS | Email 3 | POST_PURCHASE_3_SCIENCE.html | S8YaMZ | [ ] |
| Post-Purchase | US7CeS | Email 4 | POST_PURCHASE_4_SUBSCRIBE.html | WTeLGP | [ ] |
| Replenishment | Ruxn5d | Email 1 | REPLENISH_REMINDER_1.html | S4kUsB | [ ] |
| Replenishment | Ruxn5d | Email 2 | REPLENISH_REMINDER_2.html | WNBwmr | [ ] |
| Replenishment | Ruxn5d | Email 3 | REPLENISH_REMINDER_3.html | RXHE7d | [ ] |
| Winback | XKj6hP | Email 1 | WINBACK_EMAIL_1.html | Ywq9ww | [ ] |
| Winback | XKj6hP | Email 2 | WINBACK_EMAIL_2.html | Sw7sns | [ ] |
| Winback | XKj6hP | Email 3 | WINBACK_EMAIL_3.html | Rg5m9c | [ ] |
| Sunset | VMCG6y | Email 1 | SUNSET_EMAIL_1.html | YrLTb8 | [ ] |
| Sunset | VMCG6y | Email 2 | SUNSET_EMAIL_2.html | W2jX42 | [ ] |
| Campaign | — | Stress Science | CAMPAIGN_STRESS_SCIENCE.html | UeSPjG | [ ] |

---

## Checklist Summary

- **Total templates:** 24
- **Original (already uploaded):** 6 (Welcome 1-3, Abandoned Cart 1-3)
- **Previously uploaded (Phase 1):** 14 (Browse Abandon, Post-Purchase, Replenishment, Winback, Sunset)
- **New (uploaded Feb 27):** 4 (Welcome Purchaser 1-3, Campaign Stress Science) — IDs: T5tYrQ, URTRWj, SssVPd, UeSPjG

---

## Quality Checks (Run Against All Templates)

- [ ] **Merge tags:** All templates contain `{{ first_name|default:"there" }}` (or `"Hey"` variant)
- [ ] **Unsubscribe:** All templates contain `{{ unsubscribe_url }}`
- [ ] **Manage preferences:** All templates contain `{{ manage_preferences_url }}`
- [ ] **Brand name:** "Optibio" only (never "OptiBio")
- [ ] **Language compliance:** "clinically studied" only (never "clinically proven")
- [ ] **KSM-66 trademark:** KSM-66 always has `®` symbol
- [ ] **FDA disclaimers:** Present on all templates with health/wellness claims
- [ ] **PubMed IDs:** 23439798 (cortisol), 31728244 (sleep), 26730141 (VO2max)
- [ ] **Design consistency:** Navy header (#1A2F4D), gold dividers (#C9A961), blue CTAs (#2563EB)
- [ ] **Mobile responsive:** All templates render correctly on mobile devices

---

## Segment Verification (Replenishment Flow)

| Segment | Definition | Timing |
|---------|-----------|--------|
| 1-Bottle Buyers | SKU contains OB-1-OT OR variant = "1 Bottle (45-Day Supply)" | Wait 25 days → E1 → 3d → E2 → 4d → E3 |
| 3-Bottle Buyers | SKU contains OB-3-OT OR variant = "3 Bottles (135-Day Supply)" | Wait 80 days → E1 → 5d → E2 → 7d → E3 |
| 6-Bottle Buyers | SKU contains OB-6-OT OR variant = "6 Bottles (270-Day Supply)" | Wait 170 days → E1 → 5d → E2 → 7d → E3 |

- [ ] Segments created in Klaviyo
- [ ] Conditional splits added to Replenishment flow (Ruxn5d)
- [ ] Timing verified for each branch

---

## Sunset Auto-Suppression Verification

- [ ] 7-day wait added after SUNSET_EMAIL_2.html
- [ ] Conditional split: opened/clicked in last 7 days
- [ ] YES branch: end flow (re-engaged)
- [ ] NO branch: suppress profile / unsubscribe

---

## A/B Test Verification

| Flow | Email | Variant A | Variant B | Metric | Duration |
|------|-------|-----------|-----------|--------|----------|
| Welcome (Srh8uu) | Email 1 | "Welcome to Optibio — Here's Why We're Different" | "{{ first_name\|default:'Hey' }}, here's why Optibio is different" | Click rate | 72 hrs |
| Abandoned Cart (RRVAf2) | Email 3 | "Still thinking? Here's 10% off your Optibio order" | "Your Optibio cart expires soon — save 10%" | Click rate | 72 hrs |

- [ ] A/B tests configured in Klaviyo
- [ ] Winning metric set to Click rate (not Open rate)
- [ ] 50/50 split confirmed

---

## DMARC Escalation Tracking

| Date | Action | Record Value |
|------|--------|-------------|
| Current | p=none | `v=DMARC1; p=none; rua=mailto:dmarc-reports@optibiosupplements.com` |
| March 28, 2026 | Escalate to quarantine | `v=DMARC1; p=quarantine; pct=100; rua=mailto:dmarc-reports@optibiosupplements.com` |
| April 28, 2026 | Escalate to reject | `v=DMARC1; p=reject; pct=100; rua=mailto:dmarc-reports@optibiosupplements.com` |

- [ ] DMARC reports reviewed (30-day window before each escalation)
- [ ] No legitimate emails failing authentication
- [ ] GoDaddy DNS TXT record updated
