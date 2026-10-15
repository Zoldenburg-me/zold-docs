---
description: Let Shopify customers pay orders in USDC through your Zold payment page.
---

# Shopify

Connect Shopify to accept USDC for EUR orders. When the payment appears, Zold marks the order **paid** and records it in Shopify.

## Manual payment method (available now)

In Shopify, go to **Settings → Payments → Manual payment methods → Create custom payment method**. Name it with “Zold” and set checkout currency to EUR.

In Zold Business, open **Settings → Connections → Shopify**, enter the `myshopify.com` domain and choose **Connect store**. Approve in Shopify and return in the same browser. Zold subscribes to new-order notices. This manual method works on any Shopify plan and needs no Shopify app approval. It refuses a store already connected to another organisation without changing that connection; disconnect it there first. It also refuses if you lose permission to change settings before returning. Approval in another browser or device connects nothing.

Add Zold's **Zold — pay with crypto** block to Shopify's Thank you page and set its **Zold API origin**. In **Settings → Notifications → Order confirmation**, add the store's signed pay link. It opens an order's payment only for someone with that order email. Keep the template private like an API key; test it from the email. Shopify's test flag is shown, but test orders use real money.

The payment goes to the payment page of the account backing the organisation's EUR account. Set up a [payment page](../get-paid/payment-page.md) first.

## What customers and you see

Placing an order leaves it **payment pending**. The customer sees the exact USDC amount, payment-page address, QR and **open in wallet** link on the thank-you page; the email link returns them to pay. When the deposit appears, Shopify marks the order paid and records the transaction. It also appears in **Payment links** and Shopify in the dashboard.

Each request stays open **24 hours**. A later payment still reaches your payment page but is not matched to the order; mark it paid by hand.

## Limits

- **EUR orders only.** Other currencies are ignored; bank transfer is not offered.
- **Unpaid orders hold inventory.** Cancel unwanted unpaid orders; Zold closes their payment request.
- **Refunds are yours to send** from Zold and record on the order. Zold does not send money back to the paying address; it may belong to an exchange.

## Shopify checkout integration

{% hint style="warning" %}
**Not yet available.** A Zold payment method inside Shopify checkout requires approval for Shopify's Payments Apps program. Until approved, use the manual method.
{% endhint %}
