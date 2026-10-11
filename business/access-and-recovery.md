---
description: Who can approve payments from your company's account, who can recover it, and where to change either.
---

# Access and recovery

A company account has its own sign-in: the email and the Face ID or fingerprint you used to create the company account. That sign-in approves every transfer from the company's account. In Zold Business, **Settings → Access** shows who can approve. Zold reads it from the account itself each time you open the screen.

Only the company's own sign-in sees **Access**, and only in that company's dashboard. Other members, admins included, see a note that the company's sign-in manages it. So does the company's sign-in in any other organisation it belongs to: its account is not that organisation's account. Members' own sign-in and recovery are in the Zold app, under **Security**.

## Who can approve

**Access** lists:

* **Account**: the account's address.
* **Passkey**: the company sign-in's Face ID or fingerprint key, as long as it is still an approver.
* **Second owner**, or **Other owners**: any backup key that can also approve, such as a hardware wallet you added yourself.
* **Signatures needed**: how many approvals a transfer needs, for example "1 of 1" or "2 of 2".

Zold approves only with the company sign-in's key, and never collects another key's approval. If the account needs 2 approvals, or the sign-in's key is no longer an approver, **Access** says that Zold can't send from this account. Send from Safe's own app instead: **Open the account in Safe{Wallet}** takes you there. See [How Zold works under the hood](../reference/how-it-works.md).

To add or remove a backup key, choose **Change in the app**. The Zold app opens on the same sign-in, and you approve the change with Face ID or fingerprint.

## Recovery

**Access** shows one of four things:

* **Who can recover the account**: Zoldenburg UG, email or phone codes, or both. Masked contacts are shown for codes. A recovery that wasn't set up in Zold, for example one added in Safe{Wallet}, is listed as **Not set up in Zold**, with a warning: it can start a recovery like any other. If no one at the company added it, remove it in Safe{Wallet}.
* **No one can recover this account.** If the company sign-in's device and key are lost, Zoldenburg UG cannot recover the company's account. Only the euro balance can be reclaimed, from Monerium. **Set up recovery** opens the Zold app's **Recovery** screen.
* **A recovery is under way.** Someone has asked to move the account to a new device, and **Access** says when the move can complete. The same warning appears at the top of every Zold Business page within a minute, without reloading. If no one at the company started it, choose **Check it** and cancel it in the app before then.
* **Couldn't check recovery.** Zold couldn't read every recovery set on the account, so it can't say whether a recovery is under way. This does not mean there is none. Choose **Try again**.

Recovery is optional: a company account without it can still be funded and used. Until the company sign-in has answered whether it wants recovery, every screen of the company's dashboard shows a banner saying no one can recover the account. If the sign-in chose not to add it, the banner goes away, and **Access** says when that choice was made. You can add recovery at any time.

How each kind of recovery works, and the waiting period that protects you, is in [Security and recovery](../getting-started/security-and-recovery.md).

{% hint style="info" %}
Changes to approvers and recovery are made in the Zold app, not in Zold Business. Open the app on the company's sign-in, or use the links on **Access**.
{% endhint %}
