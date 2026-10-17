---
description: Issue signed transaction documents and export books for your accountant.
---

# Export and integrations

Business → **Books**. Each economic event on the EUR account is one line; crypto steps appear in its **booking receipt** (German: *Beleg*), the signed document your accountant files against the line.

## Create and download receipts

Choose a month → **Create receipts**. Zold creates a frozen, signed receipt for each line without one. Add a category or memo, then download:

- **Lexware Office CSV**, in Lexware's bank-import fields (Buchungstag, Valuta, Auftraggeber, Empfänger, Verwendungszweck, Betrag, Zusatzinfo). Import to an offline account; the receipt code is in the last column.
- **Receipts as ZIP**, one PDF per line named `<date>_<code>_<reference>.pdf`.

Each receipt is at `zold.to/v/<CODE>` and checked whenever opened:

- **Signed by Zold**: Zold's document key signed this exact receipt, so nothing on it has changed.
- **Records still match**: Zold re-reads the line and the deposit, transfer or order it was built from; the figures on the receipt still match. For money received on chain it also re-reads the transaction.
- **Holder name**: **Verified by Monerium** when Monerium reported it; **Not verified** when it is the name you typed.

- A USDC invoice payment receipt records invoice, payer, arrival and ECB valuation.
- A conversion gets its own receipt: transaction, venue, rate, amounts, difference to receivable, gain or loss, network fee. Partial conversions get one per part.
- USDC arrival uses that day's ECB reference rate, published once per business day. On weekends or before publication the prior business-day rate applies; the receipt names the date.

## GetMyInvoices

1. Settings → **Connections → GetMyInvoices → Connect**.
2. Add the API key from GetMyInvoices Settings → API. Zold stores it encrypted and never shows it again.
3. Create a manual bank account in GetMyInvoices for Zold.
4. Choose **Send a month's receipts** or **Send to GetMyInvoices** on the month's statement; select month and bank account.

Each line uploads as a paid payment document numbered with its receipt code, with the receipt attached and transaction hashes as tags. Existing items are skipped. Without a manual bank account only receipts upload; add one and resend to add lines.

If GetMyInvoices is slow, Zold checks by receipt number. Receipts found without tags may need checking there; items not found can be retried in a few minutes.

{% hint style="warning" %}
**Beta.** Check the first month in GetMyInvoices before using it for a closing period.
{% endhint %}

## CSV export

Transactions → **Export** downloads the ledger: date, asset, amount, reporting value, counterparty, chart mapping, tags. **Reports** exports monthly balances.
