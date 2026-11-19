---
description: Check who approves payments, who signs and how to recover.
---

# Access and recovery

**Settings → Access** shows who approves payments, who signs for the company's account and who can recover it.

- **Every member** sees who approves payments.
- **Signers and recovery** show only to the company's own sign-in (its email and passkey). Other members see a note. A company with its own Safe is the exception: every member sees its card ([below](#a-company-with-its-own-safe)).
- **Your personal sign-in** is in the Zold app's **Security** screen.

## Who approves payments

Shows whether **Second approval** is on, who can approve (owners and admins), how many owners there are, and what each role may do. Owners turn it on or off here. See [Payments and approvals](payments-and-approvals.md).

## Who can sign for the account

Shows the account address, other signers and backup keys, and the threshold (for example, **1 of 1**). **Payment key** says whether this browser holds the key and whether your passkey encrypts it.

On the company sign-in's own account, Zold signs only with that sign-in's key. If the account needs two signatures, or this sign-in no longer signs for it, Zold cannot send. Use **Open the account in Safe{Wallet}** instead. A company's own Safe signs differently: see [below](#a-company-with-its-own-safe).

To add or remove a backup key, choose **Change in the app** and approve with the passkey.

## A company with its own Safe

If the legal form is a company, the card shows the company's own Safe to every member, read from the chain on each visit.

- **Signatures needed**: the threshold the Safe holds, for example **2 of 3**.
- **Each signer**: the member's name (or email) and address. **Added outside Zold** marks a signer no member matches, with a warning; if no one at the company added it, remove it in Safe{Wallet}.
- **No passkey yet**: an owner who has not set up a passkey does not sign.
- **This login's passkey changed**: the Safe still lists that owner's old signer. Zold keeps the address it added only as a label; the Safe on chain decides who signs.
- **Couldn't check who can sign**: Zold could not read the Safe; this does not mean no one. Choose **Try again** to read it again.
- **Not set up yet**: the company's Safe does not exist yet, so no one signs for it.
- **Not a signer yet**: an owner whose passkey the Safe does not list.

### Recovery of the company's Safe

Zoldenburg UG is the only recovery guardian Zold adds to a company's Safe. The card reads it from the chain on each visit.

- **No guardian**: Zold hasn't set up recovery for the company's Safe. If an owner loses their passkey, the other owners replace that signer in Safe{Wallet}. If fewer owners are left than the signatures needed, no one can recover it.
- **Waiting for the owners' signatures**: adding Zoldenburg UG is queued. It takes effect once as many owners sign as the Safe needs.
- **Guardian, not armed**: Zoldenburg UG is on the Safe, but isn't armed until the company's IBAN is set up. Until then Zoldenburg won't sign a recovery.
- **Not set up in Zold**: a guardian someone else added, with a warning. It can start a recovery alone; if no one at the company added it, remove it in Safe{Wallet}.
- **A recovery is under way**: it would replace every signer. If no one at the company started it, contact support@zoldhq.com; Zold can't cancel it from this screen yet.
- **Couldn't check recovery**: Zold could not read the Safe; this does not mean none. Choose **Try again**.

## Recovery status

| Status | What it means |
| --- | --- |
| **Who can recover** | Zoldenburg UG, email codes, phone codes or both. Recovery added directly in Safe{Wallet} shows **Not set up in Zold** with a warning and can still start a recovery. If no one at the company added it, remove it in Safe{Wallet}. |
| **No one can recover this account** | If the company sign-in's device and key are lost, Zoldenburg cannot recover the account. Only the euro balance can be reclaimed from Monerium. Choose **Set up recovery**. |
| **A recovery is under way** | Shows when the move can complete. If nobody at the company started it, choose **Check it** and cancel in the app. |
| **Couldn't check recovery** | Zold could not read every recovery setting; this does not mean none is active. Choose **Try again**. |

Recovery is optional; the account works without it. Until the company sign-in chooses, every company screen warns that nobody can recover the account. Declining removes the banner; you can add recovery later.

Recovery types and waiting periods: [Security and recovery](../getting-started/security-and-recovery.md). Change signers and recovery in the Zold app, not Business. For a company's own Safe, change signers in Safe{Wallet}.
