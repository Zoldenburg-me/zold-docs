---
description: Watch and book wallets you hold elsewhere, or bring your company's existing Safe into Zold as its account.
---

# Imported wallets

There are two different things here. A **watched wallet** is one you only book in Zold; Zold never signs for it. **Your company's existing Safe**, brought in when you open the account, becomes the account itself, and Zold signs for it with your Face ID like any account it opened.

## Watched wallets

Wallets → **Import wallet**. Enter the address, its network and a label.

An imported wallet is **read-only**. Zold books its token transfers, categorises them, and includes them in reports and exports. It never holds a key for it and never signs for it.

The one-line rule: **if Zold issued the account, Zold can sign for it; if you imported it, you sign for it.** A payment drafted from an imported wallet is built by Zold and handed to you as an unsigned transaction to sign in your own wallet.

### What gets booked

Every transfer of a listed token in and out of a watched wallet becomes one line in **Books → Every transaction**: the amount, the other side's address, and what it was worth in euros on the day it arrived.

- **Who paid.** If the sending address is on a contact, the line names that contact. Put every address a payer uses on their contact, including a payout contract or a payment stream you claim from, and claims are matched like ordinary payments.
- **Value in euros.** EURe is euro e-money: one token, one euro. Dollar stablecoins count as one US dollar, converted at the ECB reference rate for that day. Other tokens on the Uniswap or CoinGecko token lists are priced at the time of the transfer and converted the same way. A listed token Zold has no price for is still booked and marked **no price**, never at €0.
- **Tokens on no list.** Anyone can send a made-up token to your wallet. A transfer of a token that is on neither list is not booked at all, so an airdrop never shows up in your books or counts as revenue. If a payer really pays you in a token that is not listed yet, tell us.
- **Not booked:** the network's own coin (ETH), NFTs, and tokens whose balance changes without a transfer.

When you import a wallet on Business, you can pick a **Book from** day to fill in its history from before the import. Without one, the wallet is booked from the day you add it. The Wallets screen shows, for each wallet, whether it is up to date, still catching up, or not syncing and why.

An organisation's books hold at most 100,000 lines. When they are full, syncing pauses for its wallets: nothing is skipped, each wallet keeps its place, and the Wallets screen says it is paused. Ask support@zoldhq.com to raise the limit, and syncing picks up where it stopped.

{% hint style="warning" %}
**Not yet fully live.** Sync is switched on network by network. Until it is on for a wallet's network, the Wallets screen shows **Not syncing** for that wallet and nothing from it is booked.
{% endhint %}

## Bringing in your company's existing Safe

If your company already holds its money in a Safe, for example one controlled by a Ledger, you can use that Safe as the company's Zold account instead of opening a new one. No money moves.

1. Create the company account and set up Face ID. Zold then asks where the money should sit: choose **Use our company's existing Safe**.
2. Paste the Safe's address. Zold shows its owners, how many approvals it needs and its network, so you can check it is the right one.
3. Choose how to add your phone:
   - **Keep your wallet as a second owner** (the default). Afterwards your phone or your wallet can each approve on their own.
   - **Replace your wallet with your phone.** Your wallet stops being an owner for good.
4. Tap **Download for Safe{Wallet}**. In app.safe.global, connect the wallet that owns the Safe, open **Apps → Transaction Builder**, drag the file in, and sign and send it with your wallet. Zold never sees or sends that signature.
5. Back in Zold, tap **I've sent it**. Zold checks the Safe on the network. If the change has not arrived yet, wait a minute and check again.
6. Zold shows the Safe's owners as the network has them now, and names any owner other than your phone. That owner can move the money on its own, so approve only if it is your wallet or your company's. Tap **Approve with Face ID**: only with that approval does Zold make the Safe the company's account. The approval covers this Safe with exactly these owners; if they change before Zold finishes, it asks you to check and approve again.

Until step 6 succeeds you can still choose **Use a new account instead**. Once the company has its own new account, it can't bring in a Safe later.

Zold works with Safes that need one approval per payment, have at most one other owner, and are set up like the Safes Zold opens itself (Safe version 1.4.1 with the ERC-4337 module, no other modules and no transaction guard). Zold tells you which of these a Safe misses.

{% hint style="info" %}
Recovery through Zoldenburg or an email code is not offered for a Safe you bring in yet. If you keep your wallet as a second owner, it can still add or replace owners in Safe{Wallet}.
{% endhint %}

Start a step on one phone and finish it there: the phone remembers that you are bringing in a Safe, so it does not open a new account in the meantime.
