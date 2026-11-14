---
description: Send EURe or USDC to an ENS name or wallet address.
---

# Crypto wallet

{% hint style="warning" %}
**Not yet fully live.** **Send → Crypto wallet** shows as coming soon until it opens; the app will offer it then.
{% endhint %}

Send EURe or USDC from your account to a wallet, by ENS name (`name.eth`) or `0x` address. Start at **Send → Crypto wallet**.

## Steps

1. In **To**, enter an ENS name or a `0x` address.
2. Choose the **Token**.
3. Enter the **Amount**.
4. Press **Check the address**.
5. Compare the full address with the recipient's, then tick **I checked this address with them**.
6. Press **Send**.
7. Approve with your passkey.

## Good to know

- **Network**: the payment goes out on Base. An ENS name with no Base address is refused.
- **Name changes**: Zold looks the name up again just before sending. If the address changed, nothing is sent.
- **Connection drops**: if your connection drops while you approve, the app may say it can't confirm the payment. Until you choose **Check Activity**, it offers no **Send** for a new payment: a payment that went out is listed there.
- **Fees**: no Zold fee. Gas is paid as for any payment from your account. If gas is paid in USDC, the app shows the most USDC you can send.
- **Limits**: counts toward your daily limit, EURe at face value and USDC at the live mid-market rate. With no fresh rate, USDC is refused. The minimum is €0.01.
- **Refused addresses**: your own account's address and the token contracts. A Zold payment page's address takes only what the page lists (USDC), while it is open; otherwise ask for their wallet address.
- **Who can send**: personal accounts with verified identity and an active passkey account, and businesses (below).

## From a business

1. Go to **Send** and choose **Crypto wallet**.
2. Pick the account and a contact with a wallet, or **Add a wallet contact** with an ENS name or `0x` address.
3. Choose **EURe** or **USDC**, enter the **Amount**, and press **Submit for approval** (**Save payment** with review off).
4. After approval, the member whose login approves for the account presses **Send** and approves with their passkey.

- **Saved address**: an ENS name is looked up when you add the contact; the address is what Zold pays. If the contact's wallet changes before sending, nothing is sent.
- **Checksum**: an address in mixed case with a wrong checksum is refused; copy it again.
- **One payment per run**: a payment run to a wallet has one line, and **Submit for approval** refuses more.

{% hint style="warning" %}
A wallet payment can't be called back. Money sent to a wrong address is lost.
{% endhint %}
