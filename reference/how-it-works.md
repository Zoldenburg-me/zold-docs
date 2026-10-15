---
description: How your account, passkey, euros and recovery fit together.
---

# How Zold works under the hood

## Your account

Your account is a **Safe** smart account on **Base**, a public network built on Ethereum. Safe is open-source account software. Zold pays network fees; you need no ETH.

## The key that approves

Your only account owner is a **passkey** stored in your device's secure hardware. Face ID, fingerprint, device PIN or computer password unlocks it; on a computer you can also use your phone or a security key. It also signs you in.

**Zold holds no key.** Its server prepares transfers but cannot approve, move or block your money. Each approval signs one transaction's token, amount and recipient; the network enforces those terms. There is no standing permission for Zold to spend.

A **device key** is created in each browser on first use. It signs the amount, recipient and transfer Zold records, and is encrypted where supported. Alone, it cannot move money; every transfer still needs your passkey.

## Your euros

Monerium EMI ehf. issues your IBAN and EURe e-money. It is licensed by Iceland's Central Bank and passported across the EEA; EURe is regulated under MiCA. Each EURe is backed one-for-one by safeguarded euros and redeemable at par. E-money has no deposit guarantee, and Zold does not lend it or pay interest.

A bank transfer to your Monerium IBAN arrives as EURe; a SEPA payment redeems it and Monerium sends euros. Monerium may freeze e-money where law requires. You verify with Monerium on its site; Zold does not send your signup details.

## Recovery

Recovery is optional. If you choose Zoldenburg, it checks your identity against Monerium's records and requires €1 from your confirmed bank account before it can start moving your account to a new passkey. It cannot send money. The move waits **3 days**; your current device can cancel. Zoldenburg signs with a hardware wallet; Zold's server never holds that key.

Without a chosen guardian, a lost, unsynced passkey means the account cannot be recovered. Only EURe can be reclaimed from Monerium; other assets cannot. Follow [Security and recovery](../getting-started/security-and-recovery.md).

## Your own backup key

You can add a second owner, such as a hardware wallet. Zold never asks for or collects its signature. It can approve by itself, so keep it as carefully as the money it can move.

If you change the account to require both keys, Zold cannot send because it uses only your passkey; use Safe's own app. Recovery replaces the owner set, including any backup key.

## If Zold is not there

- **With a backup key:** open your account in [Safe's app](https://app.safe.global) or another Safe tool and move funds.
- **Without one:** your passkey works only on the website it was created for: zoldhq.com. Euros remain redeemable from Monerium either way.

## The card

The Gnosis Pay Visa spends from its own account on Gnosis Chain, separate from your Zold account. Card payments do not ask for Face ID; Zold's approval rule covers Zold transfers, not card spending. Zold can show an existing connected account; topping it up from Zold is not yet live. See [Gnosis Pay card](../add-ons/gnosis-pay-card.md).
