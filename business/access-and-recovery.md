---
description: Check who approves a company account and how it can be recovered.
---

# Access and recovery

The company's own sign-in (its email and passkey) approves transfers from its account. **Settings → Access** is visible only to that sign-in; other members, including admins, see a note. Members manage their personal sign-in in the Zold app's **Security** screen.

## Who can approve

**Access** shows the account address, the approvers and backup keys, and the threshold (for example, **1 of 1**).

Zold uses only the company sign-in's key and never collects another key's approval. If the account needs two approvals, or this sign-in is no longer an approver, Zold cannot send. Use **Open the account in Safe{Wallet}** instead. To add or remove a backup key, choose **Change in the app** and approve with the passkey.

## Recovery status

| Status | What it means |
| --- | --- |
| **Who can recover** | Zoldenburg UG, email codes, phone codes or both. Recovery added directly in Safe{Wallet} shows **Not set up in Zold** with a warning and can still start a recovery. If no one at the company added it, remove it in Safe{Wallet}. |
| **No one can recover this account** | If the company sign-in's device and key are lost, Zoldenburg cannot recover the account. Only the euro balance can be reclaimed from Monerium. Choose **Set up recovery**. |
| **A recovery is under way** | Shows when the move can complete. If nobody at the company started it, choose **Check it** and cancel in the app. |
| **Couldn't check recovery** | Zold could not read every recovery setting; this does not mean none is active. Choose **Try again**. |

Recovery is optional; the account works without it. Until the company sign-in chooses, every company screen warns that nobody can recover the account. Declining removes the banner; you can add recovery later.

Recovery types and waiting periods: [Security and recovery](../getting-started/security-and-recovery.md). Change approvers and recovery in the Zold app, not Business.
