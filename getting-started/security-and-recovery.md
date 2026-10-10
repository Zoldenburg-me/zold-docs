---
description: What protects your account, what you have to protect, and how to get back in if you lose a device.
---

# Security and recovery

## Two keys, both yours

**Your passkey** owns the smart wallet and signs you in. It is verified with your fingerprint, face or device PIN and never leaves your device's secure hardware. Zold asks for that check every time, at sign-in too, so a security key with no PIN or fingerprint set cannot be used.

**Your device key** is a second key, generated in your browser the first time you use the account on a device. It signs the exact terms of every payment — the amount, the payee and the transfer — so that even someone who steals your signed-in session cannot change where money goes. Where your authenticator supports it, the device key is encrypted with a secret only your passkey can produce, so each payment needs a passkey ceremony to unlock it.

Settings → **Security** shows whether the device key on this device is encrypted by your passkey. Where it says **Not encrypted**, the key sits in this browser's storage as it is, because the passkey here cannot encrypt it. A copy of it still moves nothing on its own: every payment also needs your passkey, and your smart wallet checks that signature on the chain. Someone with a copy could sign payment terms, so do not use Zold on a shared computer in that browser, and remove browser extensions you do not trust.

## What Zold can and cannot do

* Zold **cannot** move your money. Every debit is signed by you.
* Zold **cannot** replace your passkey. Registering a new one needs a confirmation from the current one.
* Zold **can** pay the network fees for your transactions.
* If you choose Zoldenburg as your recovery guardian, Zoldenburg **can** start a recovery of your account after checking your identity. It cannot skip the waiting period, and your passkey can cancel it until then.

If you skip recovery, Home shows one line, "Recovery isn't set up", with a link to set it up. You can close that line. **Security** keeps showing that recovery is off until you turn it on.

## Zoldenburg recovery

When you open your account, Zold asks whether Zoldenburg may be your recovery guardian. You can change your answer at any time under Profile → **Recovery**.

**To turn it on:** choose **Add Zoldenburg as a guardian** and approve with your passkey. Zoldenburg's guardian is added to your wallet.

Zoldenburg recovers only accounts whose ID Monerium has verified. As a guardian it cannot send your money: it can only start moving the account to a new device, and you can cancel that during the waiting period.

**To recover on a new device:**

1. On the sign-in screen choose **Recover your account** and enter the email on your account.
2. Create a new passkey on the new device. Zold shows you a reference.
3. Email support@zoldhq.com from the address on your account and quote the reference. We check you against the identity Monerium verified when you opened the account.
4. Once we have signed, a waiting period (3 days) runs before the change takes effect. During it, the account still belongs to the old passkey. While Zold is open on a device signed in to the account, a warning sits at the top of every screen from the moment someone asks. If you did not ask for the recovery, choose **Review** on that warning and cancel with your passkey.
5. When the period ends, the new passkey becomes the only owner of your wallet. Sessions of the old device are ended and its device key is unbound. Any second signer you added is removed as well.

{% hint style="warning" %}
**If you do not choose a guardian:** if you lose access to your account or your passkey, Zoldenburg UG cannot recover your account. Only your e-money balance (EURe) can be recovered, from Monerium, its issuer, under Icelandic e-money law. Anything else held in the account cannot be recovered.
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

**To enrol:** Profile → **Recovery**. Register an email address, a phone number, or both. You confirm each with a one-time code, then approve with your passkey. A recovery guardian is added to your wallet. Each channel is masked wherever it is displayed.

**To recover on a new device:**

1. On the sign-in screen choose **Recover your account** and enter your recovery email.
2. Create a new passkey on the new device.
3. Confirm a one-time code on **every** channel you registered.
4. A waiting period runs before the change takes effect. During it, the account still belongs to the old passkey, and a warning sits at the top of every screen while Zold is open on a device signed in to it. If you did not start the recovery, choose **Review** on that warning and cancel with your passkey.
5. When the period ends, the new passkey becomes the owner. Sessions of the old device are ended and its device key is unbound.

## Sessions

A session ends when you sign out and expires on its own. Signing in on a new device does not sign out others. Two changes do sign out every other device, and both need your passkey: registering a new passkey, and replacing or removing your Monerium connection. If you suspect a device is compromised, start a recovery: finalising it revokes every session that device held.
