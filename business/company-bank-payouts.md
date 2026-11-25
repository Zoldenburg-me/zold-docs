---
description: Pay a bank account from the company's own Monerium IBAN.
---

# Company bank payouts

A company pays a bank account from its own IBAN, one payout at a time, in **Settings → Monerium**. An owner signs each payout with their passkey.

**Availability**: bank payouts from a company's IBAN are switched on per deployment. If **Pay a bank account** is not there, they are not available on this site.

## Steps

1. Open **Settings → Monerium**. The company's IBAN must already be issued onto its Safe.
2. Press **Pay a bank account**.
3. Enter the recipient's name, IBAN and amount in euros. A reference is optional and reaches the recipient's statement.
4. Press **Sign and send** and approve with your passkey.
5. The payout shows **Pending at Monerium** until Monerium processes it, then **Sent**.

## Good to know

- **Owner only**: the passkey must be an owner of the company's Safe on chain. Admins and payers can read the list but cannot send.
- **One signer only**: a Safe that needs two or more signatures is refused. Nothing is signed or sent.
- **Amount**: you can send up to what the Safe holds, less payouts that are still pending or unclear. Zold takes no fee; Monerium's own fees apply.
- **Refused, nothing sent**: no issued IBAN, an IBAN Monerium moved or closed, an IBAN on another network, an amount over the available balance, or a Monerium refusal.
- **Unclear**: if Monerium does not confirm, the payout shows **Unclear: check Monerium**. Check Monerium before sending it again; Zold never retries on its own.
- **History**: the last 50 payouts stay on the company's euro account, even after the Monerium keys are removed.

{% hint style="warning" %}
**Sent** means Monerium processed the payout. A bank transfer cannot be recalled by Zold. A payout marked unclear may still have been accepted.
{% endhint %}

## In a payment run

A company's bank run over several payees is not built. Pay those recipients one at a time here. A payment to a crypto wallet is queued on the company's Safe for its owners to sign; see [paying a crypto wallet](payments-and-approvals.md#in-a-company-paying-a-crypto-wallet).
