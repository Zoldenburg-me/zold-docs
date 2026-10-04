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

Each Beleg is a frozen, signed document at `zold.to/v/<CODE>`, re-verified whenever it is opened. A USDC-paid invoice's Beleg shows the invoice number and payer, what arrived and when the chain says so, the ECB reference rate it was valued at, the conversion's transaction, venue, rate and amounts, the difference to the receivable and the gain or loss, and the gas.

{% hint style="info" %}
USDC received is valued at the **ECB reference rate** for the day it arrived. The ECB publishes once per business day, so the rate on the Beleg is that day's reference rate, not the rate at the minute of the transaction. On a weekend or before the day's publication, the previous business day's rate applies, and the Beleg says which day it used.
{% endhint %}

## GetMyInvoices

Settings → **Connections** → GetMyInvoices → **Connect**. Paste the API key from your GetMyInvoices account (Settings → API). Zold checks it once, stores it encrypted, and never shows it again.

GetMyInvoices needs one manual bank account for Zold (in GetMyInvoices: Bank accounts → add a manual account, for example "Zold"). Then press **Send a month's Belege** on the GetMyInvoices card in Connections, or **Send to GetMyInvoices** on the month's statement lines in Books. Pick the month and the bank account, and send.

Each bank line of the month is added to that bank account with its Beleg attached, uploaded as a paid payment document numbered with the Beleg code, with the transaction hashes as tags. A line without a Beleg gets one first. Anything already there is skipped, so sending twice adds nothing twice. Without a manual bank account, only the Belege go up; add one and send again to add the lines.

GetMyInvoices can take 20 seconds or more to accept a Beleg, so sending a busy month takes a while. When it is done, Zold lists what happened:

| Result | What it means | What to do |
| --- | --- | --- |
| Bank lines added, Belege sent now | They are in GetMyInvoices. | Nothing. |
| Already there, skipped | GetMyInvoices had them before this send. | Nothing. |
| Arrived slowly and may be missing their tags | GetMyInvoices answered too slowly, but Zold found the Beleg there by its number. Its tags (the transaction hashes) may not have been saved. | Check the Beleg in GetMyInvoices and add the tags if they are missing. |
| Got no answer and can't be found there yet | GetMyInvoices did not answer, and Zold could not find the item afterwards. | Send the month again in a few minutes. Whatever did arrive is skipped, so nothing is added twice. |
| Failed | GetMyInvoices refused it. | Send again. If it fails again, read the error and contact support. |
| Could not get a Beleg | Zold could not issue a Beleg for the line, so it was not sent. | Contact support. |

{% hint style="warning" %}
**Beta.** Check the first month in GetMyInvoices before relying on it for a closing period.
{% endhint %}

## CSV export (ledger)

Premium and Business. Business dashboard → Transactions → **Export** gives the full ledger as a generic CSV with date, asset, amount, reporting-currency value, counterparty, chart-of-accounts mapping and tags. The monthly balance report exports the same way from **Reports**.
