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

## Connect a company's euro account

A company account starts without an IBAN. It can receive **EURe only** on Base: copy its address from Home or Accounts, send EURe, then choose **Connect the company's IBAN**. Until Monerium approves the IBAN, the account shows **Waiting for Monerium**; choose **Check with Monerium again** to refresh.

- **Ownership**: the account and its funds become the organisation's. One account cannot belong to two organisations.
- **Books**: its transactions go into company books and statements, visible to members with book access. A Zold-created account includes its full history; an imported wallet includes history from its IBAN connection, or its import date if it has no IBAN.
- **Approval**: only an owner can connect the account. That owner's passkey approves its payments.
- **Profile**: company accounts need a company Monerium profile, not a member's personal one. To open a company account after signing up personally, contact support@zoldhq.com.

### With a wallet account

Where an IBAN isn't available to you (see [supported countries](../reference/supported-countries.md)), press **Connect your wallet** on **Accounts**. Only an owner can. The organisation's invoices and payment links then pay into your wallet. The account has no IBAN, so nothing is sent from it by bank. A wallet connected to one organisation can't be connected to another.

## Statements and documents

The login that approves the euro account can open **Statements**: monthly statements, balance confirmations, proofs of ownership and paid bank-transfer receipts. Each opens in a new tab to print or save as PDF, with an address to verify it.

- Documents name the IBAN holder: the company's registered name and you as operator.
- A proof of ownership requires your passkey.
- The statement's address is the account country, not your business-profile address. To print another, enter it under **Your address on this printout**; it is labelled unverified and unsigned, and must be entered each time.
- Monerium's official statement with your verified address is at monerium.app.
