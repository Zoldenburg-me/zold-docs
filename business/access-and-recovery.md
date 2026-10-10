---
description: Who can sign for your company's account, who can recover it, and where to change either.
---

# Access and recovery

A company account has its own sign-in: the email and passkey you used to create the company account. That sign-in's passkey owns the company's smart wallet. In Zold Business, **Settings → Access** shows what is on that wallet. Zold reads it from the chain each time you open the screen.

Only the company's own sign-in sees **Access**, and only in that company's dashboard. Other members, admins included, see a note that the company's sign-in manages it. So does the company's sign-in in any other organisation it belongs to: its wallet is not that organisation's account. Their own passkey and recovery are in the Zold app, under **Security**.

## Who can sign

* **Account**: the wallet's address.
* **Passkey**: the company sign-in's passkey, as long as it is still an owner.
* **Second owner**, or **Other owners**: any other key that owns the wallet, such as a hardware wallet you added yourself.
* **Signatures needed**: for example "1 of 1", or "2 of 2".

Zold signs only with the passkey, and never collects another owner's signature. If the wallet needs more than one signature, or the passkey is no longer an owner, **Access** says that Zold can't send from this account. Send from Safe{Wallet} instead: **Open the account in Safe{Wallet}** takes you there.

To add or remove an owner, choose **Change in the app**. The Zold app opens on the same sign-in, and you approve the change with the passkey.

## Recovery

**Access** shows one of four things:

* **The guardians on the wallet**: Zoldenburg UG, email or phone codes, or both. Masked contacts are shown for codes. A guardian that wasn't set up in Zold, for example one added in Safe{Wallet}, is listed as **Not set up in Zold**, with a warning: it can start a recovery like any other. If no one at the company added it, remove it in Safe{Wallet}.
* **No one can recover this account.** If the company sign-in's passkey is lost, Zoldenburg UG cannot recover the company's account. Only the EURe balance can be reclaimed, from Monerium. **Set up recovery** opens the Zold app's **Recovery** screen.
* **A recovery is under way.** Someone has asked to move the account to a new passkey, and **Access** says when the move can complete. The same warning appears at the top of every Zold Business page within a minute, without reloading. If no one at the company started it, choose **Check it** and cancel it in the app before then.
* **Couldn't check recovery.** Zold couldn't read every guardian, so it can't say whether a recovery is under way. This does not mean there is no guardian. Choose **Try again**.

Recovery is optional: a company account without a guardian can still be funded and used. Until the company sign-in has answered whether it wants a guardian, every screen of the company's dashboard shows a banner saying no one can recover the account. If the sign-in chose not to add one, the banner goes away, and **Access** says when that choice was made. You can add a guardian at any time.

How each guardian works, and the waiting period that protects you, is in [Security and recovery](../getting-started/security-and-recovery.md).

{% hint style="info" %}
Changes to owners and guardians are made in the Zold app, not in Zold Business. Open the app on the company's sign-in, or use the links on **Access**.
{% endhint %}
