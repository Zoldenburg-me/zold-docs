---
description: Receive USDC on Base at your Zold account address.
---

# Crypto deposit

Open **Add money → Crypto wallet** and copy your account address or scan its QR code.

Or open **Get paid → Account details** to find the same address as **Wallet address (Base)**, with its network.

Send only **USDC on Base**. Other tokens or networks are not recognised by the app. They remain in your account, but Zold cannot see or move them for you.

## Convert to euros

USDC counts as received on arrival, valued at that day's ECB reference rate; an invoice or payment link it pays is marked paid at that value. **Settings → Main currency** sets what happens next:

| Main currency | What happens |
| --- | --- |
| Euros, ask me to convert | USDC waits under **Waiting to convert**. Choose **Convert**, check the price and approve. |
| Euros, keep them as dollars | USDC stays under **Kept as dollars**; convert later if you choose. |
| Digital dollars (USDC) | USDC stays as dollars. |

- **Approval**: nothing converts without it.
- **Floor**: if the amount would fall below the quote's floor, nothing converts. Any unconverted remainder stays as USDC.
- **Fee**: Zold charges none; you are credited the measured amount.
- A conversion that is **Checking** cannot be requested again.
- **No Convert button?** A conversion was started but its result was not recorded. It may have gone through, so the payment is not offered again until it is checked on chain. If it was included on chain but reverted, the payment says the conversion didn't go through and nothing was converted; it is still checked first. [Contact support](mailto:support@zoldhq.com).
- **EURe** sent from another wallet is credited as received.
- **Business accounts**: deposits are book entries dated on arrival; a later USDC conversion adds a second entry with its gain or loss.

For other tokens or networks, use your [payment page](../get-paid/payment-page.md).
