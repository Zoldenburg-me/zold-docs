---
description: Protect your sign-in key and choose how to recover a lost device.
---

# Security and recovery

Your passkey approves transfers. Recovery can move your account to a new device, but never sends money.

## Your two keys

- **Passkey**: unlocked by Face ID, fingerprint, device PIN or computer sign-in; needed at sign-in and for each transfer. A security key without a PIN or fingerprint cannot be used.
- **Payment key**: each browser creates one on first use. It signs the amount, payee and transfer, and is encrypted where supported.

![Setting up sign-in during account setup.](../.gitbook/assets/passkey-setup.png)

Settings → **Security** shows whether this device's payment key is encrypted. **Not encrypted** means a copy could sign payment terms, though not move money without your passkey. Do not use Zold in a shared browser.

Zold cannot move your money or replace your passkey. A new passkey needs approval by the current one.

## Choose Zoldenburg recovery

Zold asks when you open your account. Change it any time: Profile → **Recovery** → **Add Zoldenburg recovery**, then approve. It works only for accounts whose identity Monerium verified. If you skip it, Home shows **Recovery isn't set up**.

Zoldenburg can start a device move after checking your identity. It cannot send money or skip the wait, and your current device can cancel.

### Confirm your bank account

Send at least **€1** from a bank account in your own name to your Zold IBAN. It reaches your balance; nothing is charged.

1. On **Recovery**, choose **Confirm my bank account** and approve. Note the one-time reference; request another if you lose it.
2. Send the €1 with that reference. A transfer from your Zold IBAN does not count.
3. Choose **I sent it — check now**, or wait. A bank transfer can take a working day. The sender name must match Monerium's verified name.

**Security** shows **1 step left** until confirmed, or **2 steps left** with **Get my Zold IBAN** if your IBAN is not active.

Keep that account: recovery needs another €1 from it. If your bank changes, choose **Changed banks? Use another account**. Zold stores a fingerprint and the last four characters, not the full IBAN or payer name; removing Zoldenburg recovery deletes them.

### Recover a lost device

1. At sign-in choose **Recover your account**, enter your account email and set up a passkey on the new device.
2. Choose **Show my transfer details**. Send at least €1 from the confirmed bank account to your Zold IBAN with the displayed reference. Another account or name does not count; a payment with an earlier reference still counts.
3. Choose **I sent it — check now**, or wait; Zold checks every few minutes. Send this only if you started recovery; Zoldenburg never asks for it.
4. Email support@zoldhq.com from your account address with the reference. Zoldenburg cannot sign until the €1 arrives.
5. After Zoldenburg signs, a **3-day** wait begins. Your old device stays in control. Zold emails you when recovery is requested and when the wait starts, and warns on every screen of a signed-in device. If you did not request it, choose **Review** and cancel with your passkey.
6. When the wait ends, the new device is the only approver. Old sessions end, its payment key is unbound, and any backup key is removed.

{% hint style="warning" %}
Without recovery, Zoldenburg UG cannot recover a lost account or device. Only your euro balance can be reclaimed from Monerium under Icelandic e-money law; other assets cannot be recovered.
{% endhint %}

Recovery emails contain no link and never ask for approval or a code. Open Zold yourself to cancel.

## Email or SMS recovery

{% hint style="warning" %}
**Not yet fully live.** SMS recovery is not offered yet.
{% endhint %}

- Register an email, phone or both at Profile → **Recovery**. Confirm each with a one-time code and approve with your passkey.
- To recover, enter your recovery email at sign-in, set up a passkey, and confirm a code on **every** channel.
- A wait follows; your old device can cancel. After it, the new device becomes the approver, old sessions end and its payment key is unbound.

## Your own backup login

Choose one recovery helper: your Google or Apple login, email confirmed with a 6-digit code, or a recovery passkey. Set it up during account creation or at Profile → **Recovery**; the recovery passkey is offered only there. Save it on a security key or another device so it survives losing your phone. Only one helper can be active; remove Zoldenburg or email recovery first.

Google or Apple logins get their own key, held by Turnkey for you alone. It can sign only a move to a new phone, never a payment; the move waits, and the phone you still have can cancel.

**If you lose your phone:** on the new one choose **Recover your account**, create a new key, and approve with the same backup login.

Use a login with a different email from your Zold account, with two-step sign-in on.

## Your own backup key

Add a key you keep, such as a hardware wallet, under Settings → **Who approves payments**. Zold never asks for or uses it. It can approve on its own, so protect it like the money it can move; with it, you can reach the account without Zold. See [How Zold works under the hood](../reference/how-it-works.md#your-own-backup-key).

Until you add one, **Finish setting up** on Home lists **Add a backup key** once your account is live.

## Sessions

Signing in on a new device does not sign out others. Registering a new passkey, or replacing or removing Monerium, signs out every other device and requires your passkey. If a device may be compromised, start recovery; completion revokes its sessions.
