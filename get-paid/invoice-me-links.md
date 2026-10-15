---
description: Request a supplier invoice through a link, then pay it from Zold.
---

# Invoice-Me links

**Premium** and **Business**. Invoices → **Request an invoice**.

## Steps

1. Optionally enter the supplier and a note.
2. Optionally set a password, a second factor if someone else can read the email carrying the link.
3. Choose **Create link**, then copy and send it yourself. Zold does not email it.
4. The supplier opens it without a Zold account and enters details, invoice number, dates, lines (up to **200**) and an IBAN or wallet address.

Submitted invoices are timestamped and locked. If something is wrong, request a new one through a new link.

## Pay the invoice

The invoice appears under **Invoices**. **Pay** creates a payment draft with bank details filled in, the invoice number as reference, and the supplier added to your [address book](../business/address-book.md). On Business with approvals on, the draft goes through [review](../business/payments-and-approvals.md); the account holder approves the transfer.

**Pay requires an IBAN.** An invoice with only a wallet address stays on record; after paying another way, mark it paid elsewhere.

| State | Meaning |
| --- | --- |
| Link created | Waiting for supplier |
| Submitted | Ready to pay |
| Paying | Payment in progress |
| Paid | Zold payment settled |
| Reconciled | Matched to a book transaction |
| Deleted | Removed before anyone was paid |

You can delete an invoice only while nobody has been paid against it. The link is a credential (Zold stores only its hash): send it only to the supplier.
