---
description: Import up to 500 payees into one business payment draft.
---

# Bulk payments

Business organisations. Choose Payments → New draft → **Import CSV**.

1. Upload a CSV up to **500 rows** and **2 MB**.
2. Map columns to payee name, IBAN or wallet address, positive amount, `EUR` or token, and optional reference.
3. Fix every flagged row. Missing names, malformed addresses or unusable amounts refuse the whole import; nothing imports partially.
4. Review the draft, one line per row.

Rows matching address-book contacts are linked to them, so payee details are checked at review and sending. Others are one-off lines. Imported drafts follow the same [review and sending](payments-and-approvals.md) as manual drafts.
