---
description: Plain-language definitions for words used in Zold.
---

# Glossary

See [How Zold works under the hood](how-it-works.md) for how the parts fit together.

| Term | Meaning |
| --- | --- |
| **Approval** | Your passkey's yes to one transfer's exact amount and recipient. |
| **Approver** | A key allowed to approve account transfers; your passkey is the only one unless you add a backup key. |
| **Backup key** | A second Safe owner you keep, such as a hardware wallet; it can approve on its own and access your account without Zold. |
| **Base** | The public layer-2 network built on Ethereum where your account lives. |
| **Bridge** | Licensed money transmitter providing the USD account and settling ACH and wire payments. |
| **Chart of accounts** | Your bookkeeping categories for transactions. |
| **Device key / payment key** | Key made from your passkey that signs payment terms. After clearing browser data, your passkey makes it again or approves a new one. Alone, it moves no money. |
| **Draft** | A payment prepared for review before sending. |
| **EURe** | Monerium's euro e-money token; one token is one euro, redeemable at par. |
| **E-money** | Licensed electronic money backed one-for-one by safeguarded funds; not a bank deposit and not covered by a deposit guarantee. |
| **Four eyes** | The reviewer cannot be the payment's drafter. |
| **Gas** | Network fee; Zold pays it for your transactions. |
| **Global account** | Your local accounts in different currencies, held in one account. |
| **Guardian** | A party you choose to start moving your account to a new device. It cannot send money; the current device can cancel during the wait. |
| **Invalid data** | Draft state when saved payee details change. |
| **Invoice-Me link** | Link a supplier uses to submit an invoice without an account. |
| **Local account** | Account in a currency with the local identifier used there. |
| **MiCA** | EU Markets in Crypto-Assets Regulation; EURe is regulated under it as an e-money token. |
| **Mid-market rate** | Reference exchange rate used to measure a quote's margin. |
| **Monerium** | Licensed e-money institution that verifies you and issues your IBAN and EURe. |
| **Organisation** | The group holding accounts and members; a personal account is an organisation of one. |
| **Owner (Safe)** | An account approver. Your passkey is the only owner unless you add a backup key. The Business **Owner** role instead turns payment review off and can close the organisation. |
| **Passkey** | Key created in your device's secure hardware and bound to zoldhq.com; Face ID, fingerprint, PIN, Windows Hello, computer sign-in, phone or security key unlocks it. It signs you in and approves transfers. |
| **Payment page** | Public zoldhq.com/pay/handle page showing an address anyone can pay. |
| **Pickup reference** | MoneyGram number the recipient uses to collect cash. |
| **Quote** | Fixed transfer amount, rate and fee, held for 10 minutes. |
| **Recovery module** | Account feature allowing a chosen guardian to move it to a new device after a waiting period. |
| **Reporting currency** | Currency used to value your ledger and reports. |
| **Safe** | Open-source smart-account software used by your account and by tools such as app.safe.global. |
| **SEPA** | Single Euro Payments Area for euro bank transfers between IBANs. |
| **Signature** | Cryptographic proof that your key approved exact transfer terms. |
| **Smart account** | Account controlled by public-network rules rather than one fixed key; yours is a Safe on Base. |
| **Stablecoin** | Token intended to hold a fixed value; USDC is a dollar stablecoin. |
| **Tax lot** | An asset acquisition's date, quantity and cost, used to calculate gains. |
| **Threshold** | Required number of approvers, such as 1 of 1 or 2 of 2. Zold sends only when one approval is required. |
| **USDC** | Circle-issued digital dollars, accepted as a deposit and used in the cash-pickup route. |
