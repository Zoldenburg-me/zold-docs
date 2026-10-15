---
description: Opening a Zold account takes three screens and your face or fingerprint.
---

# Create your account

Open the app at **zoldhq.com/app** and choose **Create an account**. It takes three screens; everything else waits for you on Home.

## Step 1 — Personal or business

Choose **Personal** for an account in your own name, or **Business** for an account in your company's name.

## Step 2 — Tell us about you

One screen asks for:

* **Your name**, as it is on your ID: the same name you'll give Monerium.
* **Your email.** Recovery and sign-in help find your account by it. You confirm it later, from Home.
* **Country of residence.**
* **Are you a US citizen, a Green Card holder, or a US tax resident?**
* Your acceptance of Zold's Terms.

A business account asks on the same screen for the company's legal name (and a trading name, if customers know it by another), its country of incorporation, whether it is incorporated in the US or has a US owner of 25% or more, and your confirmation that you may open an account for it.

These answers decide which account you can have. Most residents of the EEA, the United Kingdom and Switzerland get the full account. Residents of other countries get an account with an IBAN wherever our euro issuer will serve them, and a wallet account (no IBAN, no identity check) in most countries it does not serve. Zold is not available to US persons, to residents of sanctioned countries, or in a few countries where we offer no account at all. If that applies to you, the app tells you when you create the account, before anything is stored. See [Supported countries](../reference/supported-countries.md).

{% hint style="info" %}
Answer the US question carefully. A "yes" closes the account path regardless of where you live, and the answer is recorded.
{% endhint %}

## Step 3 — Add a way back in

{% hint style="warning" %}
**Not yet fully live.** Recovery with your Google or Apple login is not offered yet, so this screen does not appear. The steps below describe how it will work.
{% endhint %}

Choose **Continue with Google** or **Continue with Apple** and log in. That login becomes your recovery helper: if you lose this phone, it can move your account to a new one. It cannot send your money, and a move waits first, so this phone can cancel it. See [Security and recovery](security-and-recovery.md#google-or-apple-login).

It is added in the same approval that creates your account in the next step, so it costs no extra Face ID. You can also choose **Skip for now** and set up recovery later.

## Step 4 — Set up Face ID or your fingerprint

Your face or fingerprint is the key to your account. Your device creates a key in its secure hardware, and Face ID, Touch ID, Windows Hello or your device PIN unlocks it. There is no password. Your browser or phone may call this a **passkey**.

You don't need a face or a fingerprint. On a computer without Touch ID, approve with your computer's password, with your phone by scanning the QR code your browser shows, or with a security key. Where the key is saved depends on the option you choose: in iCloud Keychain, in your browser's password manager, on your phone or on the security key.

While the prompt is open, Zold shows how long it stays open and a **Cancel** button that closes it. The prompt stays open for two minutes. If Zold says a prompt is still open, close the one already showing (it may be in another window, a tab or your password manager), reload the page, then try again.

This is not only how you sign in. It is the one approver on your account: every transfer needs it, and Zold cannot replace it. Keep the device safe and set up recovery — see [Security and recovery](security-and-recovery.md).

{% hint style="warning" %}
If your key syncs through iCloud Keychain, Google Password Manager or a password manager, it follows you to your other devices. If it does not sync, losing the device means going through recovery. Check which kind you have.
{% endhint %}

Then you approve once more, and Zold creates your account. This is free and takes a few seconds. Your account's address is fixed from this moment on.

## Step 5 — Finish on Home

The app opens on Home, with a **Finish setting up** list:

* **Confirm your email** — a 6-digit code to the address you gave.
* **Verify your identity** and **IBAN active** — your IBAN is issued by Monerium, the e-money institution that issues your euros. You connect (or open) a Monerium account and activate your IBAN with one approval. See [Get your IBAN](connect-monerium.md).

Until then you can use Zold as a wallet, or keep it that way: receive and hold digital dollars and euros, get paid through your payment page, and send invoices. Bank transfers in and out need the IBAN. If you have no recovery set up, Home also shows a reminder; it never blocks anything.

If you have a wallet account (see [Supported countries](../reference/supported-countries.md)), there is no IBAN step.

## Your profile

The **Profile** tab holds everything about you: your name, your Zold tag and payment link, your account details, security, settings and help. From there you also open Zold Business, or create your personal space for invoices and books.

You can change your name under Profile until Monerium verifies you. After that it is the name your IBAN is held under, so it is locked. A company account always carries the company's name.

How the key and the account work in detail: [How Zold works under the hood](../reference/how-it-works.md).
