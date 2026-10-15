---
description: Share a public address for people to pay any amount.
---

# Your payment page

Your public link, **zoldhq.com/pay/yourname**, shows a QR code and address. The payer scans it with their own wallet; the page has no amount field or wallet connection.

## Claim a handle

Go to Profile → **Payment page**. Handles must be unique, 3–30 characters, lowercase Latin letters, digits and internal hyphens. They cannot start with `0x`, match an app route, or use Zold, partner, staff-role or well-known-person names, even inside a longer handle.

You can claim one as soon as your account exists. Set a different display name or the page shows your handle.

## What the payer sees

The page lists your address, QR code, **open in wallet** link and accepted tokens, networks, minimums and bridge fees. USDC on Base arrives directly; USDC from other listed networks arrives in your account as USDC on Base.

{% hint style="warning" %}
Send only a listed token on its listed network, and at least its minimum. Other transfers do not reach your account automatically.
{% endhint %}

Open **Get paid → Your page** to see the list.

## Privacy

The page is public. Every payment lands at one address; anyone with the link can look up its history on a public explorer. Anyone who knows or guesses your handle can find the page. Do not assume it is private.

For a private request, send a [receipt](../send-money/tracking-and-receipts.md) or [Invoice-Me link](invoice-me-links.md). To request a specific amount and description, create a [payment link](payment-links.md).
