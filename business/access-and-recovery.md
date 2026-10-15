---
description: Check who approves a company account and how it can be recovered.
---

# Access and recovery

The company's own sign-in—its email and passkey—approves transfers from its account. In Business, **Settings → Access** is visible only to that sign-in. Other members, including admins, see a note. The company sign-in sees the same note in other organisations; its account is separate. Members manage their personal sign-in in the Zold app's **Security** screen.

## Who can approve

**Access** shows the account address, whether this sign-in is an approver, backup keys or other approvers, and the required threshold (for example, **1 of 1**).

Zold uses only the company sign-in's key; it never collects another key's approval. If the account needs two approvals, or this sign-in is no longer an approver, Zold cannot send. Use **Open the account in Safe{Wallet}** instead. To add or remove a backup key, choose **Change in the app** and approve there with the passkey.

## Recovery status

**Access** shows one of these:

| Status | What it means |
| --- | --- |
| **Who can recover** | Zoldenburg UG, email codes, phone codes or both. Contacts are masked. Recovery added directly in Safe{Wallet} appears as **Not set up in Zold** with a warning; it can still start a recovery. If no one at the company added it, remove it in Safe{Wallet}. |
| **No one can recover this account** | Losing the company sign-in's device and key means Zoldenburg cannot recover it. Only the euro balance can be reclaimed from Monerium. Choose **Set up recovery** to open the app. |
| **A recovery is under way** | Access shows when the move can complete. A warning appears on every Business page within a minute, without reload. If nobody at the company started it, choose **Check it** and cancel in the app. |
| **Couldn't check recovery** | Zold could not read every recovery setting. This does not mean none is active. Choose **Try again**. |

Recovery is optional; the account can still be funded and used without it. Until the company sign-in chooses, every company screen warns that nobody can recover the account. If it declines, the banner goes away and Access records when; recovery can be added later.

Recovery types and waiting periods are in [Security and recovery](../getting-started/security-and-recovery.md). Change approvers and recovery in the Zold app, not Business; use the links on **Access**.
