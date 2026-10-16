---
description: Check who approves payments, who signs and how to recover.
---

# Access and recovery

**Settings → Access** shows who approves payments, who signs for the company's account and who can recover it.

- **Every member** sees who approves payments.
- **Signers and recovery** show only to the company's own sign-in (its email and passkey). Other members see a note.
- **Your personal sign-in** is in the Zold app's **Security** screen.

## Who approves payments

Shows whether **Second approval** is on, who can approve (owners and admins), how many owners there are, and what each role may do. Owners turn it on or off here. See [Payments and approvals](payments-and-approvals.md).

## Who can sign for the account

Shows the account address, other signers and backup keys, and the threshold (for example, **1 of 1**). **Payment key** says whether this browser holds the key and whether your passkey encrypts it.

Zold signs only with the company sign-in's key. If the account needs two signatures, or this sign-in no longer signs for it, Zold cannot send. Use **Open the account in Safe{Wallet}** instead.

To add or remove a backup key, choose **Change in the app** and approve with the passkey.

## Recovery status

| Status | What it means |
| --- | --- |
| **Who can recover** | Zoldenburg UG, email codes, phone codes or both. Recovery added directly in Safe{Wallet} shows **Not set up in Zold** with a warning and can still start a recovery. If no one at the company added it, remove it in Safe{Wallet}. |
| **No one can recover this account** | If the company sign-in's device and key are lost, Zoldenburg cannot recover the account. Only the euro balance can be reclaimed from Monerium. Choose **Set up recovery**. |
| **A recovery is under way** | Shows when the move can complete. If nobody at the company started it, choose **Check it** and cancel in the app. |
| **Couldn't check recovery** | Zold could not read every recovery setting; this does not mean none is active. Choose **Try again**. |

Recovery is optional; the account works without it. Until the company sign-in chooses, every company screen warns that nobody can recover the account. Declining removes the banner; you can add recovery later.

Recovery types and waiting periods: [Security and recovery](../getting-started/security-and-recovery.md). Change signers and recovery in the Zold app, not Business.
