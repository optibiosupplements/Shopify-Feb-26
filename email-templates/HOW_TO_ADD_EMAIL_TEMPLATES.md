# How to Customize Shopify Notification Emails

## Steps

1. Go to **Shopify Admin > Settings > Notifications**
2. Under "Customer notifications", click on the email you want to customize
3. Click **"Edit code"** (top right)
4. Replace the email body HTML with the content from the corresponding file below
5. Click **Preview** to verify it looks correct
6. Click **Save**

## Templates Created

| Shopify Notification | File | Key Features |
|---------------------|------|-------------|
| Order Confirmation | `ORDER_CONFIRMATION.html` | Branded header, order summary, "What to Expect" tips, 90-day guarantee |
| Shipping Confirmation | `SHIPPING_CONFIRMATION.html` | Track package CTA, dosage guide, getting started tips |
| Delivery Confirmation | `DELIVERY_CONFIRMATION.html` | Quick start guide, expectation timeline, support link |

## All Templates Include
- Optibio brand header (Navy #1A2F4D + Gold #C9A961)
- FDA disclaimer in footer
- "Individual results may vary" language
- Privacy Policy link
- Support email (support@optibiosupplements.com)
- Correct brand name ("Optibio" lowercase b)
- KSM-66 with registered trademark symbol

## Important Notes
- These templates use Shopify Liquid variables ({{ customer.first_name }}, {{ order_name }}, etc.)
- They'll work in Shopify's notification system as-is
- Test by placing a test order after adding the templates
- The templates are inline-styled for email client compatibility
