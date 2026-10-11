---
description: Every payment follows the same five screens, whichever rail it uses.
---

# How a payment works

Press **Send** on the dashboard.

## 1. Where

Choose the destination. Zold offers the corridors that are open: **Europe** (bank transfer in euros). **Kenya** (cash pickup) appears once its payout partner is live, and more open as payout partners are added. The list only ever shows what can actually be paid.

## 2. How

Pick the method for that destination. In Europe it is a SEPA transfer to an IBAN. In Kenya it is cash collected at a MoneyGram agent.

## 3. How much

Enter the amount. Zold fetches a **quote**: the amount the recipient gets, the fee, and, for a currency conversion, the live mid-market rate and the margin between it and the rate you receive. The quote is held for ten minutes.

If Zold cannot get a fresh market rate it says so and does not quote. It never falls back to an old rate.

## 4. Who

Choose a saved contact or enter the recipient's details. For a bank transfer that is the name and IBAN, plus an optional reference the payee sees on their statement. For a cash pickup it is the recipient's name as it appears on their ID and their mobile number.

## 5. Confirm

The confirmation screen repeats every term: amount sent, amount received, rate, fee, recipient, reference. Approve with Face ID or your fingerprint.

Your approval covers the exact terms shown: the amount, the transfer, and a fingerprint of the recipient's identity and account, so nothing can be changed after you approve. The transaction that moves the money out of your account is approved at the same moment, by you, and by no one else. See [How Zold works under the hood](../reference/how-it-works.md).

## After you confirm

The progress screen shows the transfer's real state as it moves. You can leave; the transfer continues without you. Open it later from **Activity**.

If a step fails after money has left your account, Zold reverses what it can and returns the funds to your account at the current rate, with each deduction listed. A transfer that needs a person to look at it is marked for review, and you are contacted. See [Transfer states](../reference/transfer-states.md).
