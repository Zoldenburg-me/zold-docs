---
description: Watch wallets for bookkeeping.
---

# Imported wallets

A **watched wallet** is read-only: Zold books it but never holds its key or approves for it.

## Watch a wallet

Wallets → **Import wallet**: enter address, network and label. Drafted payments become unsigned transactions for you to sign in your own wallet.

Each listed-token transfer is one ledger line (amount, counterparty, euro value at arrival):

- EURe is €1 per token; dollar stablecoins use the ECB reference rate for that day.
- Other Uniswap- or CoinGecko-listed tokens use a transfer-time price. With no price, the line says **no price**, not €0.
- Not booked: tokens on neither list, ETH, NFTs and balance changes without a transfer. Tell Zold if a payer uses an unlisted token.
- Senders are identified by addresses on contacts, including payout contracts and claimed streams. Add each address to the payer's contact.
- On Business, choose **Book from** to import earlier history; otherwise booking starts on import day.

**Not yet fully live:** sync is enabled network by network; until enabled, the wallet shows **Not syncing** and nothing is booked.

Books hold at most **100,000 lines**. When full, syncing pauses without skipping entries. Contact support@zoldhq.com to raise the limit; syncing resumes where it stopped.
