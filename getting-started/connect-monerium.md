---
description: One identity check, at the institution that issues your euros, and your IBAN is linked to your account.
---

# Get your IBAN

Your IBAN comes from the institution that issues your euros, and so does the identity check. Zold does not run one of its own. That means one identity relationship, held by a licensed e-money institution, instead of a second copy of your documents somewhere else.

That institution is **Monerium**. You open or sign in to your Monerium account on Monerium's own site, and you enter your details there. Zold does not send Monerium what you typed into Zold at signup.

## Sign up or sign in with Monerium

After your Face ID or fingerprint is set up and your account is ready, the app shows **Connect Monerium**.

1. Choose **Sign up or sign in with Monerium**. You are taken to Monerium's own site.
2. If you already have a Monerium account, sign in. If not, open one there in the same step. Monerium runs the identity verification: your details, a document, and a liveness check. This usually takes minutes but can take longer if a document needs a human look.
3. Approve the connection. You are returned to Zold.
4. Press **Activate IBAN with passkey** and approve with Face ID or your fingerprint. This confirms to Monerium that the account is yours, and Monerium attributes an IBAN to it.

Your account is **active** as soon as the IBAN appears. Money sent to it lands in your account as euros.

## Waiting for your IBAN

Once you have approved, the rest is Monerium's. The app shows what is done and what Monerium is doing: **Monerium is checking your ID** while they still verify you, or **Monerium is issuing your IBAN** once they have. If Monerium needs anything from you, they write to you by email.

While this screen is open, Zold checks with Monerium in the background and shows when it last checked. When the IBAN arrives, the screen changes to **Your IBAN is ready** and shows it.

You do not have to wait on this screen. Press **Go to dashboard** at any time; your IBAN appears there once Monerium has issued it. A company account opens the business dashboard.

## If you already have a Monerium IBAN

Monerium gives each profile one IBAN. If yours already exists and pays into another wallet, Zold uses that same IBAN rather than asking for a second one. After you press **Activate IBAN with passkey**, the app shows **Use your Monerium IBAN in Zold** with the last four digits of the IBAN and where it pays today.

Type `MOVE` and approve with Face ID or your fingerprint. From then on, payments to that IBAN arrive in your Zold account and the old wallet stops receiving them. Anyone paying you keeps using the same IBAN, and you can move it back from Monerium.

If you cancel, nothing changes. Press **Activate IBAN** again whenever you are ready.

## Adding Monerium API keys instead

If you are a developer or a business with your own Monerium developer app, the same screen offers **Add Monerium API keys**. Paste the app's client id and secret. Zold checks the pair with Monerium before saving anything, stores the secret encrypted, and never shows it again. Deposits, activation and SEPA payments for your account then run on your own credentials.

Removing the keys later keeps your IBAN on record, since it exists at Monerium regardless. Deposits and payouts pause until you add keys again.

Once your account has a Monerium connection or an IBAN, replacing or removing that connection needs your Face ID or fingerprint, and it signs you out on every other device. Being signed in is not enough.

## What "pending" means

While the connection is incomplete, your account is **pending**. It works as a wallet: you can receive and hold digital dollars and euros, convert dollars to euros, get paid through your payment page, and send invoices. The IBAN, bank deposits and bank transfers open once Monerium is connected and the IBAN is activated. The set-up list on Home tells you which step is left.

## If Monerium can't verify you

Monerium decides who it verifies, and Zold can't change its answer. If it declines, the app tells you that our banking partner can't onboard you at the moment. Your account stays open as a wallet, with everything above except the IBAN and bank transfers. You can try again with a different Monerium account, or write to support@zoldhq.com.

## If activation fails

Occasionally your account is ready but the IBAN is not issued. Nothing is lost. Open your account and press **Activate IBAN** to retry.
