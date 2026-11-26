---
description: Pay a bank account from the company's own Monerium IBAN.
---

# Company bank payouts

You pay a bank account from the company's own IBAN in **Settings → Monerium**. You send one payout at a time. You approve each one with your passkey.

**Availability**: this is switched on per site. You see **Pay a bank account** only when all of these hold:

- Payouts from a company's IBAN are switched on for this site.
- The company's IBAN is issued onto its Safe.
- The company's Monerium keys are connected.
- You are an owner.

## Steps

1. Open **Settings → Monerium**.
2. Press **Pay a bank account**.
3. Enter the recipient's name, IBAN and amount in euros. Add a reference if you want one.
4. Press **Sign and send**.
5. Approve with your passkey.

The payout shows **Pending at Monerium** first. It shows **Sent** once Monerium processes it.

## Good to know

- **Owner only**: your passkey must be an owner of the company's Safe on chain. Admins can read the list. They cannot send.
- **One signer only**: a Safe that needs two or more signatures is refused. Nothing is signed or sent.
- **Amount**: you can send up to what the Safe holds. Payouts still pending or unclear are taken off first. Zold takes no fee. Monerium's own fees apply.
- **Reference**: it reaches the recipient's bank statement.
- **Refused, nothing sent**: Zold refuses when there is no issued IBAN, or Monerium moved or closed it. It also refuses an IBAN on another network, an amount over what is available, and a payout Monerium refuses.
- **Unclear**: if Monerium does not confirm, the payout shows **Unclear: check Monerium**. Check Monerium before you send it again. Zold never retries on its own.
- **Bookkeeping**: a payout is booked in the company's statement once Monerium has processed it.
- **History**: the last 50 finished payouts stay on the company's euro account, even after the keys are removed. Pending and unclear ones always stay.

{% hint style="warning" %}
**Sent** means Monerium processed the payout. Zold cannot recall a bank transfer. A payout marked unclear may still have been accepted.
{% endhint %}

## In a payment run

A company's payment run can pay up to 10 bank accounts from its IBAN.

1. A payer or admin prepares the draft in **Payments**; it is reviewed as usual.
2. An owner presses **Send**, then **Sign and send**.
3. Approve each line with your passkey. Nothing is sent until every line is approved.

- **One at a time**: Zold sends the lines in order and stops at the first one Monerium does not accept. Lines before it stay sent; later lines are not sent.
- **Not all or nothing**: each line is its own Monerium order. A stopped run shows **Failed** with each payee's state. Create a new draft for the **Not sent** lines only.
- **Checked first**: payees, the IBAN, your role and the total against what is available are checked before the first line is sent. A payee changed after approval stops the run unsent.
- **Unclear line**: the run stops there and Zold never retries it. Check Monerium before paying that payee again.

A payment to a crypto wallet works differently: see [paying a crypto wallet](payments-and-approvals.md#in-a-company-paying-a-crypto-wallet).
