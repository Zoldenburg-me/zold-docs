---
description: Connect Monerium, complete its identity check and activate your IBAN.
---

# Get your IBAN

Monerium issues your IBAN and checks your identity on its own site. Zold runs no separate identity check and does not send it your signup details.

## Connect and activate

1. After setting up your passkey, choose **Sign up or sign in with Monerium**.
2. Sign in or open a Monerium account. Monerium checks your details, document and liveness; this usually takes minutes but can take longer. It emails you if it needs more.
3. Approve the connection and return to Zold.
4. Press **Get your IBAN** and approve with your passkey. When the IBAN appears, your account is active and can receive euros.

While Monerium reviews you, Zold shows **Monerium is checking your ID** or **Monerium is issuing your IBAN** and, while the screen is open, when it last checked. You can leave; the IBAN appears on your dashboard when ready.

## If you already have a Monerium IBAN

Monerium gives each profile one IBAN. If it currently pays into another wallet, Zold offers **Use your Monerium IBAN in Zold** and shows its last four digits and current destination. Type `MOVE` and approve. Payments then reach Zold; the old wallet stops receiving them. Payers keep using the same IBAN, and you can move it back through Monerium. Cancel to leave everything unchanged.

## Use your own Monerium API keys

If you have a Monerium developer app, choose **Add Monerium API keys** and enter its client ID and secret. Zold checks the pair before saving it encrypted; it never shows the secret again. Your credentials then handle deposits, activation and SEPA payments.

Removing the keys leaves your IBAN on record but pauses deposits and payouts. Replacing or removing a Monerium connection requires your passkey and signs you out on other devices.

## Pending, declined or failed

Until the IBAN is active, your account works as a wallet: receive and hold digital dollars and euros, convert dollars to euros, get paid through your payment page and send invoices. Bank deposits and transfers need the IBAN.

Monerium decides whom it verifies. If it declines, your wallet remains open without an IBAN or bank transfers; try another Monerium account or contact support@zoldhq.com. If activation fails after approval, open your account and press **Get your IBAN** to retry.
