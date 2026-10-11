---
description: Issue an invoice that carries every mandatory detail, with the VAT treatment your country's rules require.
---

# Issue an invoice

Zold issues invoices as well as receiving them. Invoices → **Issue an invoice**. Available on Premium and Business.

{% hint style="info" %}
Zold is not a tax adviser. What the software guarantees is narrower and exact: it will not produce a document that is missing a mandatory field for your country's rule set, and it will not show VAT you have said you do not owe. Whether a supply is exempt, and which exemption applies, is your decision with your accountant.
{% endhint %}

## Before your first invoice

Fill in **Settings → Your details on an invoice** once: legal name and address, VAT ID and tax number, bank details, register court and number where applicable, default payment terms, the invoice number series and a footer. Every invoice you issue is prefilled from it. See [Invoice settings](invoice-settings.md).

## The form

**Customer.** Pick a contact or type the customer's name and address. For a reverse-charge or intra-community supply, their VAT ID is required and the form says so.

**Dates.** Invoice date, and the **date of supply** or a supply period. The date of supply is required even when it equals the invoice date. The **due date** comes from your payment terms; you can set a different one on any invoice.

**Language.** German or English, from your invoice settings; you can choose the other for one invoice.

**Number.** Taken from your series; you can override it. Numbers must be unique.

**Lines.** Description, quantity, unit price, and a VAT rate per line. Add as many as you need.

**VAT.** Either the invoice is taxable at the rates on its lines, or it is **exempt** for a reason you choose from the list your jurisdiction offers. When it is exempt, no line carries VAT: the form removes the rate, and the totals show none. An exempt invoice with a VAT amount is not something the form can produce. Each reason shows its legal basis next to it, and the note the law requires is printed on the document verbatim.

**What appears on the invoice.** Toggles for the optional blocks: tax number, VAT IDs, supply period, payment terms, bank details, purchase order number, notes, footer, and a bilingual German/English layout. Everything the law requires is printed regardless and is not in this list.

## The readiness check

The panel on the right says **Ready to issue** or lists what is still needed, with the rule behind each item. Under the German rule set, for example, a missing date of supply or a missing tax number is an error; under the Kleinunternehmer scheme the tax number becomes a warning. Errors block issuing; warnings do not.

The panel also lists what Zold **does not verify** for your country. For a German entity that includes whether your chosen exemption actually applies and whether the customer's VAT ID is valid. For an Indian one it names GSTIN, HSN/SAC codes, place of supply and the CGST/SGST/IGST split, none of which Zold models.

## Issue

Press **Issue**. The invoice is numbered, timestamped and frozen: both parties, the treatment and the display choices are stored as they were at that moment. Changing your organisation profile later does not rewrite an issued invoice. Open it at any time from its number or its customer in the invoice list, for a printable A4 document and a link to send.

## Get paid by link

An issued invoice that is still open has a **Payment link** action in the business dashboard's invoice list. It makes a [payment link](../get-paid/payment-links.md) for the invoice's amount. Your customer pays it by bank transfer or in USDC, and the invoice is marked paid when the money arrives. Send the link with the invoice.

The link pays into your organisation's euro account, so only the member whose login connected that account can make it. Anyone else who tries is told that the link has to come from that member.

Until your organisation has its own [payment page](../get-paid/payment-page.md), the link opens under that member's page address (`/pay/<their page>/…`). The money goes to the organisation's account either way; set up the company's page under **Get paid** for links in the company's name.

## Totals

Amounts are kept in whole cents. VAT is rounded once per rate, the way a tax office recomputes it, and the per-line VAT column adds up exactly.

## Simplified invoices

In Germany an invoice up to **€250 gross** may omit the recipient, the invoice number, the tax number and the date of supply. Zold applies that shortcut only under the German rule set; elsewhere full content is required, because the thresholds of other countries have not been checked.

## Correcting an issued invoice

An issued invoice cannot be edited or deleted, whether it is still open or already paid. It stays in your records under its number, so your invoice series has no gaps.

{% hint style="warning" %}
**Not yet fully live.** Cancellation invoices and credit notes are coming. Until then, Zold cannot cancel or correct an issued invoice, so check it before you press **Issue**.
{% endhint %}

## E-invoicing

{% hint style="warning" %}
**Not yet fully live.** Structured e-invoices (XRechnung / ZUGFeRD, EN 16931) are coming. German businesses must already be able to receive them; the obligation to issue them phases in from 2027. Until then, the A4 document Zold produces is the invoice.
{% endhint %}
