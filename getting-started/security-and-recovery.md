---
description: What protects your account, what you have to protect, and how to get back in if you lose a device.
---

# Security and recovery

## Two keys, both yours

**Your face or fingerprint** approves every transfer and signs you in. Behind it is a key kept in your device's secure hardware that never leaves it. Zold asks for that check every time, at sign-in too, so a security key with no PIN or fingerprint set cannot be used.

**Your payment key** is a second key, created in your browser the first time you use the account on a device. It signs the exact terms of every payment — the amount, the payee and the transfer — so that even someone who steals your signed-in session cannot change where money goes. Where your device supports it, the payment key is encrypted with a secret only your Face ID or fingerprint can unlock, so each payment needs that check to use it.

Settings → **Security** shows whether the payment key on this device is encrypted. Where it says **Not encrypted**, the key sits in this browser's storage as it is, because the authenticator here cannot encrypt it. A copy of it still moves nothing on its own: every payment also needs your Face ID or fingerprint, and your account checks that approval itself. Someone with a copy could sign payment terms, so do not use Zold on a shared computer in that browser, and remove browser extensions you do not trust.

## What Zold can and cannot do

* Zold **cannot** move your money. Every transfer is approved by you.
* Zold **cannot** replace your passkey. Registering a new one needs an approval from the current one.
* Zold **does** pay the network fees for your transactions, so you never pay them.
* If you choose Zoldenburg for recovery, Zoldenburg **can** start moving your account to a new phone after checking your identity. It cannot send money, it cannot skip the waiting period, and you can cancel the move from your current device until then.

If you skip recovery, Home shows one line, "Recovery isn't set up", with a link to set it up. You can close that line. **Security** keeps showing that recovery is off until you turn it on.

## Zoldenburg recovery

When you open your account, Zold asks whether Zoldenburg may recover your account if you lose your phone. You can change your answer at any time under Profile → **Recovery**.

**To turn it on:** choose **Add Zoldenburg recovery** and approve with Face ID or your fingerprint. Zoldenburg is added to your account's recovery.

Adding it takes up to a minute after you approve; the button says so while it runs.

**Then confirm your bank account.** You move 1 € from your own bank account to your Zold IBAN. It is your money and lands in your balance; nothing is charged. It tells Zoldenburg which bank account is yours. Until you do, Zoldenburg cannot sign a recovery for you: Profile → **Security** shows **1 step left**, and Home and **Recovery** say so. Tap the **Recovery** row to go to the step. If your Zold IBAN is not active yet, that comes first: the recovery page shows **2 steps left** and a **Get my Zold IBAN** button.

1. On the recovery page (Profile → **Recovery**), choose **Confirm my bank account** and approve with Face ID or your fingerprint. Zold shows your IBAN, your name and a reference such as `ZOLD 7K3M-Q9PX`. The code is shown once; if you lose it, get a new one.
2. From a bank account in your own name, send at least 1 € to your Zold IBAN with that reference. The money lands in your account like any other transfer.
3. When it arrives, Zold checks that the name on the paying account matches the name Monerium verified for you. A transfer from your Zold IBAN itself does not count. Choose **I sent it — check now**, or wait: Zold also checks on its own. A bank transfer can take a working day.

Once it matches, **Recovery** shows **Your bank account** with its last 4 characters. If you ever need a recovery, you send 1 € again from this same account, so keep it open. Changed banks? Choose **Changed banks? Use another account** and repeat the steps; your old account stays on file until the new one is confirmed.

Zold keeps a fingerprint of that bank account and its last 4 characters, not the IBAN and not the payer's name. Removing Zoldenburg from your recovery deletes them.

Zoldenburg recovers only accounts whose ID Monerium has verified. It cannot send your money: it can only start moving the account to a new device, and you can cancel that during the waiting period.

**To move your account to a new phone:**

1. On the sign-in screen choose **Recover your account** and enter the email on your account.
2. Set up Face ID or your fingerprint on the new device. Zold shows you a reference.
3. Move 1 € to yourself again, from the same bank account you confirmed when you set up recovery, to your Zold IBAN. Your bank's record of that first transfer shows your Zold IBAN, and so does your Monerium account. Choose **Show my transfer details**: Zold shows a reference such as `ZOLD 4HN2-W8RC`. Send at least 1 € with it, then choose **I sent it — check now**, or keep the page open: Zold checks every few minutes. A payment from another account, or from an account in another name, does not count. Lost the reference? Get a new one; a transfer you already sent with an earlier one still counts. Only send this if you started the recovery yourself: nobody from Zold or Zoldenburg will ask you to.
4. Email support@zoldhq.com from the address on your account and quote the reference. We check you against the identity Monerium verified when you opened the account. Zoldenburg cannot sign until the 1 € from your bank account has arrived.
5. Once we have signed, a waiting period (3 days) runs before the change takes effect. During it, the account still belongs to your old device. While Zold is open on a device signed in to the account, a warning sits at the top of every screen from the moment someone asks. Zold also emails the address on your account when someone asks, and again when the waiting period starts, with the date it ends. If you did not ask for the recovery, choose **Review** on that warning and cancel with Face ID or your fingerprint.
6. When the period ends, the new device becomes the only approver on your account. Sessions of the old device are ended and its payment key is unbound. Any backup key you added is removed as well.

{% hint style="warning" %}
**If you do not choose recovery:** if you lose access to your account or to the device that approves for it, Zoldenburg UG cannot recover your account. Only your euro balance can be recovered, from Monerium, its issuer, under Icelandic e-money law. Anything else held in the account cannot be recovered.
{% endhint %}

{% hint style="info" %}
The recovery emails never contain a link and never ask you to approve anything or to give a code. To cancel, open the Zold app yourself.
{% endhint %}

{% hint style="info" %}
**It was me** on the warning hides it on that device until you close the tab. If Zold can't check whether a recovery is under way, it says so in the same place rather than show nothing.
{% endhint %}

{% hint style="info" %}
The waiting period protects you. Zoldenburg can start a recovery on its own — that is what makes it work when you have lost everything — so the period, and your ability to cancel during it, is what stops anyone from asking for your account in your name.
{% endhint %}

## Email / SMS recovery

{% hint style="warning" %}
**Not yet fully live.** Email / SMS recovery is not offered yet. The steps below describe how it will work.
{% endhint %}

**To set it up:** Profile → **Recovery**. Register an email address, a phone number, or both. You confirm each with a one-time code, then approve with Face ID or your fingerprint. Each channel is masked wherever it is displayed.

**To move your account to a new phone:**

1. On the sign-in screen choose **Recover your account** and enter your recovery email.
2. Set up Face ID or your fingerprint on the new device.
3. Confirm a one-time code on **every** channel you registered.
4. A waiting period runs before the change takes effect. During it, the account still belongs to your old device, and a warning sits at the top of every screen while Zold is open on a device signed in to it. If you did not start the recovery, choose **Review** on that warning and cancel with Face ID or your fingerprint.
5. When the period ends, the new device becomes the approver. Sessions of the old device are ended and its payment key is unbound.

## A backup key you keep

You can add a backup key of your own, for example a hardware wallet, under Settings → **Who approves payments**. Zold never asks for it and never uses it. It can approve on its own, so keep it as carefully as the money it can move. With it, you can reach your account even without Zold. See [How Zold works under the hood](../reference/how-it-works.md#your-own-backup-key).

## Sessions

A session ends when you sign out and expires on its own. Signing in on a new device does not sign out others. Two changes do sign out every other device, and both need your Face ID or fingerprint: registering a new sign-in key, and replacing or removing your Monerium connection. If you suspect a device is compromised, start a recovery: finishing it revokes every session that device held.
