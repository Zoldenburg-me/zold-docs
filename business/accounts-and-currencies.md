---
description: See available local accounts, their status and company documents.
---

# Accounts and currencies

A global account holds local accounts in different currencies. Open **Accounts → Open an account** to choose one.

## Account status

| Currency | Identifier and rail | Status |
| --- | --- | --- |
| EUR | IBAN, SEPA | Open |
| USD | Account and routing number, ACH and wire | Request now |
| GBP | Account number and sort code, Faster Payments | Not yet open |
| CHF | — | Not yet open |
| KES | M-Pesa | Not yet open |
| NGN | NUBAN, NIP transfer | Not yet open |

Request an unavailable account in the app; it tells you when it opens. The **Currencies** table shows what Zold supports, not your organisation's open accounts.

## Connect a business's euro account

How the euro account is connected depends on how the business was created: as **A sole trader** or as **A company**.

### A business set up as a sole trader

The account starts without an IBAN and is backed by an owner's own account. It can receive **EURe only** on Base: copy its address from Home or Accounts, send EURe, then choose **Connect the company's IBAN**. Until Monerium approves the IBAN, the account shows **Waiting for Monerium**; choose **Check with Monerium again** to refresh.

No **Connect the company's IBAN** button yet? The business login chooses **Connect Monerium** on the account, or in **Settings → Monerium**, to connect the business's Monerium profile and get its IBAN first.

- **Ownership**: the account and its funds become the organisation's. One account cannot belong to two organisations.
- **Books**: its transactions go into company books and statements, visible to members with book access. A Zold-created account includes its full history; an imported wallet includes history from its IBAN connection, or its import date if it has no IBAN.
- **Approval**: only an owner can connect the account. That owner's passkey approves its payments.
- **One per currency**: the euro account is listed under **Accounts** even while it is not open. Connect that one; Zold refuses to open a second.
- **Profile**: the account needs the business's Monerium profile, not a member's personal one. To open a business account after signing up personally, contact support@zoldhq.com.

Where an IBAN isn't available to you (see [supported countries](../reference/supported-countries.md)), a sole trader's owner presses **Connect your wallet** on **Accounts** instead. The organisation's invoices and payment links then pay into your wallet. The account has no IBAN, so nothing is sent from it by bank. A wallet connected to one organisation can't be connected to another.

### A business set up as a company

A business created as **A company** gets a Safe of its own, not a member's account.

1. On **Accounts**, an owner presses **Set up the company’s Safe**.
2. Approve with your passkey. Your passkey becomes the Safe's first signer. Your personal account stays separate.

- **Until then**: nothing can be paid into or sent from the account. Only an owner can set it up.
- **No member funding**: **Connect the company's IBAN**, **Connect Monerium** on the account and **Connect your wallet** aren't offered. A company has one euro account.
- **Monerium keys**: an owner or admin connects the company's own Monerium account in **Settings → Monerium → Add Monerium keys**. Paste the client id and client secret of an app from the company's Monerium developer section. Zold checks them with Monerium, needs a company profile there, and never shows the secret again. **Check keys again** refreshes the profile state. **Replace keys** and **Remove keys** ask for your passkey.
- **The company's IBAN**: once Monerium has approved the company profile, an owner presses **Settings → Monerium → Issue the company's IBAN** and approves with their passkey. That signs Monerium's declaration that the company owns its Safe. Monerium then issues the IBAN onto the Safe; press **Check again** until it shows. The account opens then.
- **Deposits**: bank transfers to the IBAN arrive on the company's Safe as euros (EURe). **Settings → Monerium** lists the latest ones.
- **Not yet live**: paying a bank account from the company's IBAN. A payment to a crypto wallet is queued on the Safe for the owners to sign (see [paying a crypto wallet](payments-and-approvals.md#in-a-company-paying-a-crypto-wallet)).
- **One signer only for now**: a company Safe that needs two or more signatures can't issue its IBAN yet.

## Statements and documents

The login that approves the euro account can open **Statements**: monthly statements, balance confirmations, proofs of ownership and paid bank-transfer receipts. Each opens in a new tab to print or save as PDF, with an address to verify it.

- Documents name the IBAN holder: the company's registered name and you as operator.
- A proof of ownership requires your passkey.
- The statement's address is the account country, not your business-profile address. To print another, enter it under **Your address on this printout**; it is labelled unverified and unsigned, and must be entered each time.
- Monerium's official statement with your verified address is at monerium.app.
