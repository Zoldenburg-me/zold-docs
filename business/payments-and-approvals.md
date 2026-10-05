---
description: Draft, review, send. Two people, never one pressing the same button twice.
---

# Payments and approvals

A business payment has more than one person in it. In Zold that is a **draft**: something one person prepares, another reviews, and the account's signer sends.

Payments → **New draft**.

## Draft

A draft has one or more **lines**. Each line pays one payee one amount in one currency: a contact's bank account or wallet, or details typed in for a one-off. Save it, come back, add lines.

## Submit for review

When it is ready, **Submit for review**. The draft appears in the reviewers' queue.

When review is on, a draft **must** be reviewed before it can be sent. When it is off, the person who drafts can send.

## Review stays on until an owner turns it off

Review comes with the Business plan and its trial. Once your organisation works with it, it is your organisation's rule, not the plan's: if the trial ends or you move to Starter, review **stays on**. Nobody can start sending payments alone just because the plan changed.

To turn it off: **Settings → Who approves payments → Turn review off**. Only an owner can, and you confirm with Face ID or fingerprint. The change is recorded with who made it and when. Turning review back on needs a plan that includes it.

Drafts that were already waiting for review keep waiting after review is turned off, or after a downgrade. They are sent once someone approves them.

## Edit or cancel a draft

Until sending starts, a draft is only a proposal. Open it in Payments:

- **Edit** changes the amounts and notes. Editing a draft that is waiting for review, or already approved, puts it back to **Draft**: what was approved is no longer what is in it, so it has to be reviewed again. You become its drafter, so someone else approves it.
- **Cancel this payment run** withdraws it. Nothing was sent. The draft stays under **Cancelled** with who cancelled it and why, and an invoice it was paying waits for payment again. Anyone who may draft or review payments can cancel.

To pay someone else, cancel the run and start a new payment. Once sending has started, a draft can no longer be edited or cancelled.

## Review

An admin or owner opens the draft, checks each line, and **approves** or **rejects** it with a note.

**Four eyes.** The reviewer cannot be the person who drafted it, whatever their role. An admin who drafts a payment still needs a second admin to approve it.

## Invalid data

At save time each line records a fingerprint of the payee's details. It is checked again at review and again at the moment of sending. If a contact's account changed in between, the draft moves to **Invalid data** and stops. Someone reopens it, confirms the details, and submits it again. So an address-book change between approval and sending is always caught.

## Send

**Send** turns the approved draft into one transfer per line. Every line is planned before anything is created: a gated currency, an amount below the fee, an amount over a limit, or an insufficient total balance stops the whole batch with nothing sent. The balance is checked against the **total** of all lines, not line by line.

The member whose wallet backs the account signs each transfer with their passkey. A payer can approve and press send, but only that member can sign; the screen tells you who that is.

## What can go wrong

If one line fails part-way, the lines before it exist as unsigned transfers that cannot move money and simply expire. The draft is marked **Failed**. To send again, create a new draft; this avoids stacking a second batch on the first.

A draft's status is always read from its transfers. It cannot show "sent" while one of its payments is still under review.

## States

| State | Who acts next |
| --- | --- |
| Draft | The drafter |
| Pending review | A reviewer who is not the drafter |
| Reviewed | The account's signer |
| Rejected | The drafter, with the reviewer's note |
| Invalid data | Anyone who can draft, to confirm the payee |
| Executing | Nobody; transfers are moving |
| Executed | Done |
| Failed | The drafter, to re-draft |
| Cancelled | Nobody; it was withdrawn before anything was sent |
