---
description: Get the books out of Zold and into your accountant's software.
---

# Export and integrations

## Accountant export

Business dashboard → **Books**.

Every movement on your EUR account appears as **one line per economic event**, the way a PayPal or Stripe clearing account appears in the books: a SEPA credit, a SEPA payment, a payment received in USDC and converted, a USDC amount held, a reversal. Behind a crypto payment there are two or three on-chain steps; the line shows the euro figure once, and its **Beleg** holds the detail.

Pick a month and press **Issue Belege**. Zold issues a Beleg for every line that does not have one yet. You can also give each line a category and a memo. Then download:

* **Lexware Office CSV** — the bank-import template Lexware publishes (Buchungstag, Valuta, Auftraggeber, Empfänger, Verwendungszweck, Betrag, Zusatzinfo). Import it onto an offline account in Lexware Office. The Beleg code is in the last column.
* **Belege as ZIP** — one PDF per line, named `<date>_<code>_<reference>.pdf` so it maps to its line.

Each Beleg is a frozen, signed document at `zold.to/v/<CODE>`, re-verified whenever it is opened. A USDC-paid invoice has a Beleg for the payment: the invoice number and payer, what arrived and when the chain says so, and the ECB reference rate it was valued at. Converting the USDC adds a Beleg for the conversion: its transaction, venue, rate and amounts, the difference to the receivable, the gain or loss, and the gas. A payment converted in parts has one conversion Beleg per part.

{% hint style="info" %}
USDC received is valued at the **ECB reference rate** for the day it arrived. The ECB publishes once per business day, so the rate on the Beleg is that day's reference rate, not the rate at the minute of the transaction. On a weekend or before the day's publication, the previous business day's rate applies, and the Beleg says which day it used.
{% endhint %}

## GetMyInvoices

Settings → **Connections** → GetMyInvoices → **Connect**. Paste the API key from your GetMyInvoices account (Settings → API). Zold checks it once, stores it encrypted, and never shows it again.

GetMyInvoices needs one manual bank account for Zold (in GetMyInvoices: Bank accounts → add a manual account, for example "Zold"). Then press **Send a month's Belege** on the GetMyInvoices card in Connections, or **Send to GetMyInvoices** on the month's statement lines in Books. Pick the month and the bank account, and send.

Each bank line of the month is added to that bank account with its Beleg attached, uploaded as a paid payment document numbered with the Beleg code, with the transaction hashes as tags. A line without a Beleg gets one first. Anything already there is skipped, so sending twice adds nothing twice. Without a manual bank account, only the Belege go up; add one and send again to add the lines.

If GetMyInvoices answers too slowly, Zold looks for the Beleg there by its number before reporting anything. A Beleg found that way is listed as arriving slowly; its tags may not have been saved, so check it in GetMyInvoices. One that can't be found yet is listed as getting no answer: send the month again in a few minutes. Whatever did arrive is skipped, so nothing is added twice.

{% hint style="warning" %}
**Beta.** Check the first month in GetMyInvoices before relying on it for a closing period.
{% endhint %}

## CSV export (ledger)

Premium and Business. Business dashboard → Transactions → **Export** gives the full ledger as a generic CSV with date, asset, amount, reporting-currency value, counterparty, chart-of-accounts mapping and tags. The monthly balance report exports the same way from **Reports**.
