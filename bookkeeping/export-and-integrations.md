---
description: Issue signed transaction documents and export books for your accountant.
---

# Export and integrations

Business → **Books**. Each economic event on the EUR account is one line; crypto steps appear in its **Beleg**.

## Issue and download Belege

Choose a month → **Issue Belege**. Zold creates a frozen, signed Beleg for each line without one. Add a category or memo, then download:

- **Lexware Office CSV**, in Lexware's bank-import fields (Buchungstag, Valuta, Auftraggeber, Empfänger, Verwendungszweck, Betrag, Zusatzinfo). Import to an offline account; the Beleg code is in the last column.
- **Belege as ZIP**, one PDF per line named `<date>_<code>_<reference>.pdf`.

Each Beleg is at `zold.to/v/<CODE>` and re-verified whenever opened.

- A USDC invoice payment Beleg records invoice, payer, arrival and ECB valuation.
- A conversion gets its own Beleg: transaction, venue, rate, amounts, difference to receivable, gain or loss, network fee. Partial conversions get one per part.
- USDC arrival uses that day's ECB reference rate, published once per business day. On weekends or before publication the prior business-day rate applies; the Beleg names the date.

## GetMyInvoices

1. Settings → **Connections → GetMyInvoices → Connect**.
2. Add the API key from GetMyInvoices Settings → API. Zold stores it encrypted and never shows it again.
3. Create a manual bank account in GetMyInvoices for Zold.
4. Choose **Send a month's Belege** or **Send to GetMyInvoices** on the month's statement; select month and bank account.

Each line uploads as a paid payment document numbered with its Beleg code, with the Beleg attached and transaction hashes as tags. Existing items are skipped. Without a manual bank account only Belege upload; add one and resend to add lines.

If GetMyInvoices is slow, Zold checks by Beleg number. Belege found without tags may need checking there; items not found can be retried in a few minutes.

{% hint style="warning" %}
**Beta.** Check the first month in GetMyInvoices before using it for a closing period.
{% endhint %}

## CSV export

Premium and Business. Transactions → **Export** downloads the ledger: date, asset, amount, reporting value, counterparty, chart mapping, tags. **Reports** exports monthly balances.
