---
description: Read each transfer state and see what happens if a payment fails.
---

# Transfer states

| State | Meaning |
| --- | --- |
| **Created** | Terms are fixed and waiting for your approval; nothing moved. Unapproved transfers expire and stop counting toward your daily limit. |
| **Debited** | Funds left your account. |
| **Swapped** | Cash rail converted euros to USDC at its quoted venue. |
| **Bridged** | Cash rail is moving to the payout network. |
| **Payout details pending** | Partner is completing recipient details. |
| **Payout funding pending** | Waiting for partner to confirm funds. |
| **Payout funded** | Partner has funds. |
| **Payout ready** | Cash pickup reference issued. |
| **Payout submitted** | SEPA payment sent to the payee's bank. |
| **Paid** | Cash collected or SEPA payment delivered. |
| **Manual review** | A person must review; funds are safe and accounted for, and you will be contacted. |
| **Failed** | A step failed; compensation follows. |
| **Refunded** | Funds returned at the current rate, with deductions itemised. |

Bank transfers have no swap or bridge steps.

If a later step fails after funds leave, Zold reverses what it can. A completed conversion is reversed at the then-current rate; the transfer shows what returned and any round-trip loss. Failures that cannot be reversed automatically go to **Manual review**.
