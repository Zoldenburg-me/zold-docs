---
description: Prepare, review and send business payments with four-eyes approval.
---

# Payments and approvals

Payments → **New draft**. A draft has one or more lines; each pays one recipient one amount in one currency. Save it and add lines later.

## Review

Choose **Submit for review**. When review is on, a draft must be reviewed before it can be sent. An admin or owner approves or rejects each line with a note. The reviewer cannot be the drafter, whatever their role.

- **Turning it on**: an owner chooses **Settings → Who approves payments → Turn review on**.
- **Review off**: the drafter can send. Only an owner can turn it off, at **Settings → Who approves payments → Turn review off**, confirmed with a passkey and recorded with who and when.
- **Drafts already awaiting review** stay there and are sent only when approved, even after review is turned off.
- **Editing** a pending or approved draft returns it to **Draft** and makes the editor its drafter.
- **Cancel this payment run** withdraws it before sending; it stays under **Cancelled** with who cancelled and why, and an invoice waits for payment again. Anyone allowed to draft or review can cancel. Once sending starts, a draft cannot be edited or cancelled.

## Check details and send

Zold fingerprints payee details when saved and checks them at review and at sending. If a contact changed, the draft stops at **Invalid data** until someone confirms the details and resubmits it.

**Send** creates one transfer per line. Zold validates the whole batch first: a gated currency, too-small amount, exceeded limit or insufficient total balance stops everything. Balance is checked against the total, not per line. The member whose login approves for the account signs every transfer with their passkey.

If a line fails part-way, earlier transfers are unapproved and expire without moving money. The draft becomes **Failed**; create a new draft to try again.

| State | Next action |
| --- | --- |
| Draft | Drafter |
| Pending review | Reviewer other than drafter |
| Reviewed | Account approver |
| Rejected | Drafter; read review note |
| Invalid data | Confirm payee details and resubmit |
| Executing | None; transfers are moving |
| Executed | Done |
| Failed | Create a new draft |
| Cancelled | None; withdrawn before sending |
