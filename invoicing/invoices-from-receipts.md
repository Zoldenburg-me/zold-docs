---
description: When a payer decides the amount themselves, collect what arrived in your wallet into a monthly draft invoice and issue it yourself.
---

# Invoices from receipts

Some customers do not pay an invoice you send. A DAO paying a delegate decides the amount after its own checks and pays in tokens, sometimes from a multisig, sometimes from a payout contract or a stream you claim. You cannot invoice that up front, because you do not know the amount. So the invoice follows the money: Zold collects what arrived into a draft, and you issue it.

Available on Premium and Business. It reads the transfers into your [imported wallets](../business/imported-wallets.md).

{% hint style="warning" %}
**Not yet fully live.** Drafts are made from what wallet sync has booked. Sync is switched on network by network; until it is on for a wallet's network, nothing from that wallet reaches a draft.
{% endhint %}

{% hint style="info" %}
Zold is not a tax adviser. You choose the tax line for each payer, and Zold applies it as given. How a payment from a DAO or a foundation is taxed, and whether an invoice written after payment suits your case, is a question for your accountant.
{% endhint %}

## Set a payer rule

Contacts → open the contact → **Set payer rule**. The rule holds what the receipts cannot say:

- **What you invoice.** The service description printed on every line.
- **Addresses it pays from.** One per line: the network id, then the address. List every address the payer uses, including a payout contract or a stream.
- **Who the invoice is addressed to.** Name and address of the legal entity, and its VAT ID if it has one.
- **Tax line.** Either a VAT rate, or no VAT with the reason, from the list your country's rule set offers. There is no default.
- **Language.** German or English.

The rule and the addresses are saved together. **Stop invoicing** removes the rule; drafts and invoices already made stay.

## Collect a month

Invoices → **Collect receipts**, pick the month. For each contact with a payer rule you get one draft with:

- one line per receipt: the date, the token and quantity, its euro value when it arrived, and the transaction;
- a total that is the sum of those euro values.

A summary tells you what happened to every receipt of the month: how many are on a draft, how many were left out and why, and how many came from a contact without a rule or from an address that is in no contact.

A month that is still running can be collected. What arrives later joins the draft the next time you collect.

## What is left out

A receipt is on a draft only when it has a euro value. These are listed on the draft under **Not included**, each with its reason, and never invoiced:

- a token Zold has **no price** for yet;
- a token that is **on no token list**, which is booked as a quantity with no value;
- a transfer **between your own addresses**;
- a receipt you tagged **`refund`**: money returned to you is not income;
- anything that is not a plain incoming payment, such as **one leg of a swap** or a **realised gain**.

If the same address is on two contacts, a receipt from it is given to neither. Put it on one.

If a wallet was behind when you collected, the draft says the month may be incomplete. Collect again once the wallet has caught up. Issuing such a draft asks you to confirm first.

## With a VAT rate

When the rule charges VAT, what you received is the gross amount: the invoice shows the net and the VAT contained in it, and the total still equals what arrived. VAT is rounded once per rate, so for a few amounts no net and VAT add up to the cent. The draft says so, and cannot be issued from here; issue that invoice by hand instead.

## Issue the draft

Open the draft and press **Issue invoice**. Nothing is issued until you do.

- The invoice gets the **next number** in your series and **today's date**. It is never dated back to the month of the receipts. The month is printed as the supply period.
- It goes through the same [readiness check](issue-an-invoice.md#the-readiness-check) as any invoice. Errors block issuing; warnings you can accept.
- It is marked **paid** straight away, by the receipts it bills. There is nothing to collect and no difference between what was billed and what arrived.

If a receipt on the draft changed after you collected, or the payer rule was edited, Zold updates the draft and asks you to look at it again instead of issuing.

An invoice holds 200 lines. With more receipts than that in a month, issue the draft and collect the month again for the rest.

## After issuing

An issued invoice is frozen. A receipt that arrives for a month you have already invoiced goes on a new draft for that month the next time you collect, so it gets an invoice of its own.

**Discard draft** throws a draft away. Its receipts go back to being uninvoiced, and collecting the month again makes a new draft from them.
