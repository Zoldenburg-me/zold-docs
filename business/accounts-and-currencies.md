---
description: One organisation, an account in the currency of each place you do business.
---

# Accounts and currencies

Your **global account** is a set of local accounts. Each local account is in the currency of a place, with the identifier locals use, paying out on that place's rail: an IBAN in the euro area, an account and routing number in the United States, a sort code in the UK, an M-Pesa number in Kenya. All of them sit in the same account. On Premium and Business, an organisation can hold several.

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

Every currency shows its status in the app. Where an account is not open yet you can request it, and the app tells you when it opens.

## The token column

The Currencies table in the business dashboard shows, for each currency, whether it is **Available on Zold** or coming soon. That is what Zold supports, not which accounts your organisation has opened; those are under Accounts. It also shows the settlement token where one exists, who issues it, and **what backs it**, in a sentence. E-money with a redemption right, a collateralised peg, and a reserve-backed token under another country's regulator are three different things. The column exists so that you can tell them apart before holding any of them.

## Your company's euro account

When you sign up as a company, your organisation starts with a euro account. It has no IBAN until Monerium has issued your company's IBAN. Then go to Accounts and press **Connect the company's IBAN** on that account. Zold checks with Monerium that the IBAN belongs to an approved company profile before connecting it. While Monerium is still reviewing the company, the account shows **Waiting for Monerium** with the last state Monerium reported and when, and the button reads **Check with Monerium again**. Nothing changes on the account until Monerium approves.

Before connecting, Zold asks you to confirm what it means. The account then belongs to the organisation, with everything on it. Its transactions appear in the organisation's books and statements, where members who can see the books see them: for an account Zold set up, its whole history; for a wallet you brought into Zold, from when it got its IBAN here, or from when you imported it if it has none. An account connected to one company can't be connected to another organisation at the same time.

From then on, payments from the account are approved with the passkey of the person whose login connected it.

A company account is backed by a company profile at Monerium, never by a member's personal one. If you signed up personally and want an account for your company, write to support@zoldhq.com: the company gets its own Zold login and its own account.

## Statements and documents

If the euro account is the one your login approves for, **Statements** in the sidebar (also linked from Accounts) issues a monthly statement, a balance confirmation, a proof of ownership and a receipt for each paid bank transfer. Each opens in a new tab, ready to print or save as PDF, and carries an address where anyone can check it.

The documents name the holder your bank provider has on record for the IBAN. For a company that is its registered name, with you as the person who operates the account. A proof of ownership asks for your passkey: the account itself confirms the document, which shows you control it.

Zold does not keep a postal address, so a statement shows the account's country under the holder's name. To print a full address, type it into **Your address on this printout** above the statement. It is printed under the name, marked as entered by you and not verified. It stays on that page: Zold does not send or keep it, and it is not part of what the verification address checks. Type it again each time you open the statement. The official statement with your verified address comes from Monerium, from your Monerium account at monerium.app.

If another member's login approves for the account, that member issues its documents.
