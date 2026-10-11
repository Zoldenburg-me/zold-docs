---
description: Take crypto for your Shopify orders and receive euros. Orders are marked paid the moment the payment is seen.
---

# Shopify

Zold connects to a Shopify store so that a customer can pay an order in USDC and you receive the result in your Zold account, converted to euros when you approve it, or kept as USDC.

There are two ways to connect, and only one of them is open today.

## Manual payment method + Zold app (available now)

Your store offers a **manual payment method** named Zold at checkout. When a customer places an order with it, Zold opens a crypto payment for the order total and, with the Zold block added to your thank-you page, the customer sees the USDC amount, the address and a QR code on the very next screen. The moment the payment is seen on the network, Zold marks the order **paid** in your Shopify admin and records the transaction on the order.

This works on any Shopify plan and needs no approval from Shopify: the app is installed on your store directly.

### Set it up

1. In Shopify, **Settings → Payments → Manual payment methods → Create custom payment method**. Name it so that it contains "Zold". Set your checkout currency to EUR.
2. In the Zold business dashboard, open **Settings → Connections → Shopify**, enter your store's `myshopify.com` domain and **Connect store**. You approve the app in Shopify and are sent back; Zold subscribes to your store's new-order notifications.
3. Add the **Zold — pay with crypto** block to your Thank you page in Shopify's checkout editor, and point its "Zold API origin" setting at Zold.
4. In Shopify, **Settings → Notifications → Order confirmation**, add the pay link that Zold's dashboard shows for your store. A customer who leaves the thank-you page uses this link to come back to the payment.

The pay link is signed with a key for your store, so it opens an order's payment only for someone who got that order's email. Keep the template private, as you would an API key. After adding it, place a test order and open the link from the email to check that it works.

A store is connected to one organisation. If it is already connected to another organisation, Zold refuses the connection, both when you press **Connect store** and when Shopify sends you back, and the existing connection keeps its settings. To move a store, disconnect it in the organisation that holds it first. The connection is also refused if, by the time you come back from Shopify, you have left the organisation or can no longer change its settings.

Finish connecting in the browser where you pressed **Connect store**. If the Shopify approval is opened in another browser or on another device, Zold connects nothing and asks you to start again from the dashboard. This is what stops someone from sending your store's admin an approval link that would connect your store to their organisation.

The money goes to the payment page of the account that backs your organisation's EUR account (for a personal organisation, your own). That account needs a [payment page](../get-paid/payment-page.md) first.

### What happens on an order

1. The customer picks Zold at checkout and places the order. The order is created as **payment pending**.
2. On the thank-you page the customer sees the exact USDC figure, your payment-page address and a QR code, with an "open in wallet" link. The order confirmation email carries the pay link to the same payment.
3. When the deposit is seen, the order is marked **paid** in Shopify and the block says so. The transaction is recorded on the order.
4. The payment appears in your **Payment links** and on the dashboard's Shopify screen, with the asset it arrived in.

Each order's payment request stays open for 24 hours. A payment that arrives later still lands on your payment page, but is not matched to the order: mark the order paid by hand in that case.

### Limits, stated plainly

* **The order exists before the money does.** Inventory is held while an order waits for payment. Cancel unpaid orders you do not want to keep waiting for; Zold closes the payment request when you do.
* **EUR stores only.** An order in another currency is ignored.
* **Crypto only.** A bank transfer is not offered on an order payment.
* **Refunds are made by you** from your Zold account, recorded on the order. Zold does not send funds back to whatever address paid, because that is often an exchange's wallet and not the customer's.
* **Test orders are real money.** Shopify's test flag is carried and shown on the page, but Zold has no test money.

## Payment method inside checkout (not yet available)

{% hint style="warning" %}
**Not yet available.** Zold as a payment method inside Shopify's checkout, with no manual method and no pending order, requires Shopify to approve Zold into its Payments Apps program. That approval has not been granted. Until it is, use the manual-method connection above.
{% endhint %}
