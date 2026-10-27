---
description: Send EURe or USDC to an ENS name or wallet address.
---

# Crypto wallet

{% hint style="warning" %}
**Not yet fully live.** **Send → Crypto wallet** shows as coming soon until it opens; the app will offer it then.
{% endhint %}

Send EURe or USDC from your account straight to a wallet, by its ENS name (like `name.eth`) or its `0x` address.

## Steps

1. Go to **Send → Crypto wallet**.
2. In **To**, enter an ENS name or a `0x` address.
3. Choose the **Token** and enter the **Amount**, then press **Check the address**.
4. Compare the full address with the one the recipient gave you.
5. Tick **I checked this address with them** and press **Send**.
6. Approve with your passkey.

## Good to know

- **Network**: the payment goes out on Base. An ENS name with no Base address is refused.
- **Name changes**: Zold looks the name up again just before sending. If it points to a different address than the one you checked, nothing is sent.
- **Fees**: no Zold fee. Network gas is paid as for any payment from your account; when gas is paid in USDC, a USDC send leaves room for it and the app says the most you can send.
- **Limits**: counts toward your daily limit. EURe counts at face value, USDC at the live mid-market rate. With no fresh rate, Zold refuses the USDC send. The smallest payment is worth €0.01.
- **Refused addresses**: your own account's address and the token contracts themselves.
- **Zold payment pages**: a page's address takes only what the page lists (USDC), and only while the page is open. Anything else is refused; ask for their wallet address.
- **Who can send**: personal accounts with verified identity and an active passkey account.

{% hint style="warning" %}
A wallet payment can't be called back. Money sent to a wrong address is lost.
{% endhint %}
