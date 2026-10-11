---
description: The parts behind the app, named plainly. Your account, the key that approves, the euros, recovery, and what happens without Zold.
---

# How Zold works under the hood

The rest of these pages describe Zold in everyday words. This page names the parts. You do not need any of it to use the app.

## Your account

Your account is a **Safe** smart account on **Base**, a public network built on Ethereum. Safe is open-source account software, and Base is the network your account lives on.

Network fees for your transactions are paid by Zold. You never need to hold ETH or any other token.

## The key that approves

Your account's only owner is a **passkey**: a key created on your device and kept in its secure hardware. Face ID, your fingerprint, your device PIN or your computer's password is what unlocks it. On a computer you can also use your phone or a security key. The passkey is also how you sign in.

**Zold holds no key.** Zold's server prepares each transfer, but it cannot approve one, move your money or stop you from moving it.

## Every transfer is approved for its exact terms

When you approve a transfer, your passkey signs that one transaction: the token, the amount and the recipient. The network checks the signature and enforces those terms. There is no standing permission, so there is nothing for Zold, or anyone who takes over Zold's server, to spend from.

A second key, the **device key**, is created in your browser the first time you use the account on a device. It signs the payment terms Zold records: the amount, the recipient's details and the transfer. Where your device supports it, the device key is encrypted with a secret only your passkey can produce. On its own the device key moves nothing; every transfer still needs the passkey.

## Your euros

Your euros are **EURe**, an e-money token issued by **Monerium EMI ehf.**, an electronic money institution licensed by the Central Bank of Iceland and passported across the EEA. EURe is regulated as e-money under MiCA, the EU's Markets in Crypto-Assets Regulation.

Every EURe is backed one-for-one by euros that Monerium must safeguard, and you have a legal right to redeem it at par. Zold does not lend it out and pays no interest. E-money is not covered by a deposit guarantee scheme.

Your IBAN is issued by Monerium and linked to your account. A bank transfer to it arrives as EURe; a SEPA payment out redeems EURe, and Monerium sends the euros. As issuer, Monerium can freeze e-money where the law requires it.

You verify your identity with Monerium, on Monerium's own site. Zold does not send your signup details to Monerium.

## Recovery

Recovery is optional, and you choose it.

If you choose **Zoldenburg** as your **recovery guardian**, a recovery module is added to your account. After checking that the person asking is you (against the identity Monerium verified, and with a 1 € transfer from the bank account you confirmed), Zoldenburg can start moving your account to a new passkey. It cannot send money. The move waits 3 days before it takes effect, and during that time your current device can cancel it. Zoldenburg signs recoveries only with a hardware wallet, and Zold's server never holds that key.

Without a guardian, a lost passkey that does not sync to another device means a lost account. Your EURe can then be reclaimed from Monerium, its issuer, but nothing else in the account can be recovered.

The steps are in [Security and recovery](../getting-started/security-and-recovery.md).

## Your own backup key

You can add a second owner of your own, such as a hardware wallet. Zold never asks for that key or collects its signature. It is a backup key you keep: it can approve on its own, so store it as carefully as the money it can move.

If you change the account so that it needs both keys to approve, Zold can no longer send from it, because Zold only ever uses your passkey. You would then approve in Safe's own app. A recovery replaces the whole owner set, so it also removes a backup key you added.

## If Zold is not there

What you can do without Zold depends on whether you added your own backup key.

* **With a backup key**, your account is yours even without Zold. Your backup key can open it in Safe's open-source app at [app.safe.global](https://app.safe.global), or in any tool that speaks to Safe accounts, and move everything.
* **Without one**, you depend on Zold's sign-in at zoldhq.com. A passkey works only on the website it was created for, so your passkey can approve only through zoldhq.com. Your EURe stays redeemable from Monerium either way.

## The card

The card is a **Gnosis Pay** card. It spends from its own account at Gnosis Pay, on Gnosis Chain, separate from your Zold account. A card payment draws on that card account, so a tap at a till does not ask for Face ID; the "only you can approve" rule covers transfers from your Zold account, not card payments. Today Zold shows a Gnosis Pay account you connect; topping the card up from your Zold balance is not yet live. See [Gnosis Pay card](../add-ons/gnosis-pay-card.md).
