---
description: Filter, tag and review transactions across accounts and watched wallets.
---

# Transactions and tags

Business → **Transactions**, or **See all** on Home.

- The ledger lists deposits, payments, conversions, fees and transfers between your accounts and imported wallets.
- Filter by wallet, asset, direction, date, tag or chart category; filters combine.
- Add your own tags and export by tag.
- On Business, each transaction maps to a chart account: rules map most, accountants categorise the rest.
- Changing reporting currency in Settings revalues the display, not the underlying amounts.
- Backfill history with Wallets → a wallet → **Sync history**. Wallets without completed sync show **not synced**, not empty.
- **Wallets**: Books → **Wallets** lists your own Zold account first, marked as the account's own; it cannot be removed. Imported wallets follow.

## Between my own accounts

Money you moved to or from another account of yours is not income or an expense. Zold can't tell which outside account is yours, so you mark it.

Find the payment first: in the app under **Activity**, or in Business under **Books → Statement**.

1. Open the payment, or find its line on the statement.
2. Press **Between my own accounts**.
3. To reverse it, press **Undo**.

- **Books**: the payment leaves Revenue, Expenses and its category. It still counts in cash, because the money did move.
- **Exports**: the Lexware CSV keeps the line and says it is between your own accounts. The transactions CSV shows no category for it, and the tag `internal`.
- **Receipts**: a receipt you already created doesn't change. It still verifies and keeps its category. A receipt created after you mark the payment says it is between your own accounts. It stops verifying if the mark comes off.
- **Who**: anyone on the account who may categorise. Not a viewer or a payer.
- **Not available** for a fee, a reversal, a conversion's gain or loss, a sweep or a payment that settles an invoice.
- **Invoices**: if a marked payment is later matched to an invoice, the mark comes off and the payment books by its invoice.
- **Crypto sends**: mark these on the statement in Business.
