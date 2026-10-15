---
description: Turn receipts from imported wallets into a monthly paid invoice.
---

# Invoices from receipts

Premium and Business. Create a monthly invoice from tokens paid into your [imported wallets](../business/imported-wallets.md), when the payer chooses the amount.

{% hint style="warning" %}
**Not yet fully live.** Drafts use wallet sync. It is enabled network by network; until a wallet's network is enabled, its transfers are not included.
{% endhint %}

{% hint style="info" %}
Zold is not a tax adviser. Choose each payer's tax line with your accountant, including whether an invoice after payment fits your situation.
{% endhint %}

## Set a payer rule

Contacts → open a contact → **Set payer rule**. Enter the service description; every payer address (network ID and address, including payout contracts or streams); the legal entity's name, address and VAT ID; tax rate or a reason for no VAT; and invoice language. No tax line is preselected. Choose English, German, French or Spanish; the payer's choice overrides the invoice default. **Stop invoicing** removes the rule but keeps existing drafts and invoices.

## Collect a month

Invoices → **Collect receipts**, then choose a month. Each payer with a rule gets a draft with one line per receipt: date, token, quantity, euro value on arrival and transaction. The total sums those values. A summary lists included, excluded and unmatched receipts, including receipts from contacts without a rule. You can collect a month still in progress; later receipts join the next collection.

Receipts without an invoice value are listed under **Not included**:

- tokens with no price, or tokens on no token list (booked as quantity without value);
- transfers between your addresses or entries tagged `refund`;
- non-payment events, such as one leg of a swap or a realised gain.

An address shared by two contacts matches neither. If wallet sync is behind, the draft warns that the month may be incomplete. Sync it and collect again; issuing an incomplete draft requires confirmation.

## Issue the draft

With VAT, the received amount is gross; Zold calculates net and included VAT. It rounds VAT once per rate. If rounding prevents net plus VAT matching to the cent, issue that invoice by hand instead.

Choose **Issue invoice**. The invoice uses the next number and today's date, with the receipt month as its supply period. It follows the usual [readiness check](issue-an-invoice.md#steps): errors block, warnings can be accepted. It is marked paid by the receipts immediately.

If receipts or the payer rule changed after collection, Zold updates the draft and asks you to review it. An invoice has at most **200 lines**; issue the draft and collect again for the rest.

An issued invoice is frozen. Later receipts for an invoiced month form a new draft at the next collection. **Discard draft** returns its receipts to the uninvoiced pool.
