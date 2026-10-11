---
description: Words used in the app and in these pages, briefly, including the technical ones.
---

# Glossary

The everyday pages avoid technical words. This list keeps all of them, in plain sentences. For how the parts fit together, see [How Zold works under the hood](how-it-works.md).

**Approval** — Your yes to one transfer, given with your passkey: Face ID, your fingerprint or your device PIN on a phone; Touch ID, Windows Hello, your computer's password, your phone or a security key on a computer. It covers that amount and that recipient, and nothing else.

**Approver** — A key that can approve transfers from an account. On a Zold account the only approver is your passkey, unless you add a backup key.

**Backup key** — A second key you add and keep yourself, such as a hardware wallet. It can approve on its own, and with it you can reach your account without Zold. In Safe's terms it is a second owner.

**Base** — The public network your account lives on. A layer-2 network built on Ethereum.

**Bridge** — The licensed money transmitter that issues your US dollar account and settles its ACH and wire payments.

**Chart of accounts** — Your list of bookkeeping categories, against which transactions are mapped.

**Device key** — See **Payment key**.

**Draft** — A payment prepared for review before it is sent.

**EURe** — The euros in your account. Euro e-money issued by Monerium as a token on a public network. One EURe is one euro, redeemable at par.

**E-money** — Electronic money issued by a licensed institution, backed one-for-one by funds it must safeguard. It is not a bank deposit and is not covered by a deposit guarantee scheme.

**Four eyes** — The rule that the person who reviews a payment cannot be the person who drafted it.

**Gas** — The network fee a transaction costs. Zold pays it for your transactions.

**Global account** — Your set of local accounts, one per currency, held in one account.

**Guardian** — Whoever may start moving your account to a new device if you lose yours. Zoldenburg is a guardian only if you choose it. A guardian can never send money, and your current device can cancel a move during the waiting period.

**Invalid data** — The state a draft enters when a payee's saved details changed after the draft was made.

**Invoice-Me link** — A one-time link a supplier uses to submit an invoice to you without an account.

**Local account** — An account in the currency of a place, with the identifier used there.

**MiCA** — The EU's Markets in Crypto-Assets Regulation. EURe is regulated under it as an e-money token.

**Mid-market rate** — The reference exchange rate between the buy and sell prices, used to measure the margin on a quote.

**Monerium** — The licensed e-money institution that verifies your identity, issues your IBAN and issues your euros (EURe).

**Organisation** — The tenant that holds accounts and members. A personal account is an organisation of one.

**Owner** — Safe's word for an approver. Your passkey is your account's only owner unless you add a backup key. (In a business, the **Owner** role is something else: the member who manages the plan and can close the organisation.)

**Passkey** — The key you approve with: Face ID or your fingerprint on a phone; Touch ID, Windows Hello, your computer's password, your phone or a security key on a computer. Your device creates it in its secure hardware, it is bound to zoldhq.com, and it both signs you in and approves your transfers. It is your account's only owner.

**Payment key** — A second key created in your browser on each device. It signs the exact terms of each payment. Where your device supports it, it is encrypted so that only your passkey can unlock it. On its own it moves nothing.

**Payment page** — Your public link at zoldhq.com/pay/handle, showing an address anyone can pay.

**Pickup reference** — The MoneyGram number a recipient gives at the counter to collect cash.

**Quote** — The fixed terms of a transfer: amounts, rate, fee. Held for ten minutes.

**Recovery module** — The part of your account that lets a guardian move it to a new device after a waiting period. It is added only if you choose recovery.

**Reporting currency** — The currency your ledger and reports are valued in.

**Safe** — Open-source smart account software. Your Zold account is a Safe, so tools built for Safe, such as app.safe.global, can open it with a key that owns it.

**SEPA** — The Single Euro Payments Area. Euro bank transfers between IBANs in it.

**Signature** — The technical form of an approval: your key's proof that you said yes to these exact terms.

**Smart account** — An account controlled by rules on a public network rather than by one fixed key. Yours is a Safe on Base, sometimes called a smart wallet.

**Stablecoin** — A token meant to hold a fixed value, usually one US dollar. USDC is one.

**Tax lot** — One acquisition of an asset, with its date, quantity and cost, used to compute gains.

**Threshold** — How many approvals a transfer needs, for example "1 of 1" or "2 of 2". Zold sends only from accounts that need one approval.

**USDC** — Digital dollars: a US-dollar stablecoin issued by Circle. Accepted as a deposit and used inside the cash-pickup route.
