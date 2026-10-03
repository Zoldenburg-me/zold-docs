---
description: One organisation, an account in the currency of each place you do business.
---

# Accounts and currencies

Your **global account** is a set of local accounts. Each local account is in the currency of a place, with the identifier locals use, paying out on that place's rail: an IBAN in the euro area, an account and routing number in the United States, a sort code in the UK, an M-Pesa number in Kenya. All of them sit in the same wallet. On Premium and Business, an organisation can hold several.

Accounts → **Open an account** → choose a currency.

## Status

| Currency | Account | Status |
| --- | --- | --- |
| Euro | IBAN, pays by SEPA | **Open.** See [Your euro account](../getting-started/your-euro-account.md). |
| US dollar | Account and routing number, ACH and wire | Request now. See [Your US dollar account](../add-money/usd-account.md). |
| Pound sterling | Account number and sort code, Faster Payments | Not yet open |
| Swiss franc | — | Not yet open |
| Kenyan shilling | M-Pesa | Not yet open |
| Nigerian naira | NUBAN, NIP transfer | Not yet open |
| Indian rupee | Payouts only | Not yet open |

Every currency shows its status in the app. Where an account is not open yet you can request it, and the app tells you when it opens.

## The token column

The Currencies table in the business dashboard shows, for each currency, whether it is **Available on Zold** or coming soon. That is what Zold supports, not which accounts your organisation has opened; those are under Accounts. It also shows the settlement token where one exists, who issues it, and **what backs it**, in a sentence. E-money with a redemption right, a collateralised peg, and a reserve-backed token under another country's regulator are three different things. The column exists so that you can tell them apart before holding any of them.

## Your company's euro account

When you sign up as a company, your organisation starts with a euro account. It has no IBAN until Monerium has issued your company's IBAN. Then go to Accounts and press **Connect the company's IBAN** on that account. Zold checks with Monerium that the IBAN belongs to an approved company profile before connecting it. While Monerium is still reviewing the company, the account shows **Waiting for Monerium** with the last state Monerium reported and when, and the button reads **Check with Monerium again**. Nothing changes on the account until Monerium approves.

From then on, payments from the account are signed with the passkey of the person whose login connected it.

A company account is backed by a company profile at Monerium, never by a member's personal one. If you signed up personally and want an account for your company, write to support@zoldhq.com: the company gets its own account, with its own wallet.

## Statements and documents

If the euro account spends from your own account, **Statements** in the sidebar (also linked from Accounts) issues a monthly statement, a balance confirmation, a proof of ownership and a receipt for each paid bank transfer. Each opens in a new tab, ready to print or save as PDF, and carries an address where anyone can check it.

The documents name the holder your bank provider has on record for the IBAN. For a company that is its registered name, with you as the person who operates the account. A proof of ownership asks for your Face ID or fingerprint: the account itself signs it, which shows you control it.

If the account spends from another member's account, that member issues its documents.
