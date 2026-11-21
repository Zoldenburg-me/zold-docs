---
description: Approve a payment after checking its amount, recipient and quote.
---

# How a payment works

## Steps

1. Choose **Send**.
2. **Where**: choose an open destination. Europe is available for SEPA. Kenya cash pickup appears only when its payout partner is live.
3. **How**: choose the method offered.
4. **How much**: enter an amount. The quote shows recipient amount, fee, live mid-market rate and margin, and lasts **10 minutes**. With no fresh rate, Zold refuses to quote; it never uses an old one.
5. **Who**: choose a contact or enter details. Bank transfers need a name and IBAN, with an optional reference. Cash pickup needs the recipient's ID name and mobile number.
6. **Confirm**: check amounts, rate, fee, recipient and reference, then approve with your passkey. Approval binds the exact amount, recipient and account; the same approval moves the money.

The transfer continues if you leave. Track it in **Activity**.

If a step fails after funds leave, Zold reverses what it can and returns the funds at the current rate, showing deductions. If a person must review it, the transfer says **Manual review** and you are contacted. See [Transfer states](../reference/transfer-states.md).

If your connection drops while you approve, the app may say it can't confirm the payment. Until you choose **Check Activity**, it offers no approval for a new payment: a payment that went out is listed there. While a payment is still waiting for Zold's answer, the app also offers no approval for a new one. If Zold refuses the payment while you wait, the app shows why. If nothing changes after a few minutes, reload the app and check Activity before you pay again.

If you cancel the passkey prompt that approves the payment, Zold refuses the approval, or the approval expires, nothing is sent and that quote is used up. A prompt cancelled earlier, while Zold sets up your payment key, uses up nothing.

After a used-up quote, the next approval needs a new price. On a computer, Zold shows one for the same amount and recipient; check it before you approve again. If it can't get one, it goes back to the recipient step and says why. A payment in **Manual review** offers no new send from its result; on a computer, choose **Check Transactions**.
