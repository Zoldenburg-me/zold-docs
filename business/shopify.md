---
description: Let Shopify customers pay orders in USDC through your Zold payment page.
---

# Shopify

Accept USDC for EUR orders. When the payment appears, Zold marks the order **paid** and records it in Shopify.

## Manual payment method (available now)

Works on any Shopify plan and needs no Shopify app approval. Set up a [payment page](../get-paid/payment-page.md) first; payments go to the payment page of the account backing the organisation's EUR account.

1. In Shopify, go to **Settings → Payments → Manual payment methods → Create custom payment method**. Put “Zold” in the name and set checkout currency to EUR.
2. In Zold Business, open **Apps**, enter the `myshopify.com` domain and choose **Connect store**. Owners and admins only. Without a payment page, the card says whose is missing and offers **Set up your page** when it is yours.
3. Approve in Shopify and return in the same browser. Approval in another browser or device connects nothing.
4. Add Zold's **Zold — pay with crypto** block to Shopify's Thank you page and set its **Zold API origin**.
5. In **Settings → Notifications → Order confirmation**, add the store's signed pay link. It opens an order's payment only for someone with that order email. Keep the template private like an API key; test it from the email.

Connecting refuses a store already connected to another organisation (disconnect it there first) and refuses if you lose permission to change settings before returning. Shopify's test flag is shown, but test orders use real money.

## What happens to an order

An order starts **payment pending**. The customer sees the exact USDC amount, payment-page address, QR and **open in wallet** link on the thank-you page; the email link returns them to pay. When the deposit appears, Shopify marks the order paid. It also appears in **Payment links** and Shopify in the dashboard.

Each request stays open **24 hours**. A later payment still reaches your payment page but is not matched to the order; mark it paid by hand.

## Limits

- **EUR orders only.** Other currencies are ignored.
- **Unpaid orders hold inventory.** Cancel unwanted ones; Zold closes their payment request.
- **Refunds are yours to send** from Zold and record on the order. Zold does not send money back to the paying address; it may belong to an exchange.

## Bank transfer

Off by default. Zold turns it on, and your account needs an IBAN. It applies only to stores connected through Pay with Zold, Zold's separate checkout service. Stores connected with **Connect store** stay USDC-only.

The pay page then also shows your IBAN, account holder and the order's reference. A transfer with that reference marks the order paid if it arrives within the 24 hours. Only the order's customer gets the pay link. Anyone holding it sees your IBAN.

## Shopify checkout integration

{% hint style="warning" %}
**Not yet available.** A Zold payment method inside Shopify checkout requires approval for Shopify's Payments Apps program. Until approved, use the manual method.
{% endhint %}
