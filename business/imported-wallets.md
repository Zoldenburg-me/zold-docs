---
description: Watch wallets for bookkeeping or use your company's existing Safe.
---

# Imported wallets

A **watched wallet** is read-only: Zold books it but never holds its key or approves for it. A company Safe you bring in becomes the account; you approve its transfers with your passkey.

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

## Bring in your company's Safe

No money moves during setup. Create the company account and passkey, choose **Use our company's existing Safe**, then enter the Safe address and check its owners, threshold and network.

Choose whether to keep your wallet as a second owner (either it or your phone can approve alone) or replace it with your phone (the wallet permanently stops being an owner). Then:

1. Choose **Download for Safe{Wallet}**. In app.safe.global, connect the Safe owner wallet, open **Apps → Transaction Builder**, load the file, and sign and send. Zold never sees or sends that signature.
2. Back in Zold, choose **I've sent it**. If the network has not updated, wait and check again.
3. Review the owners shown. An owner other than your phone can move funds alone; approve only if it is yours or your company's.
4. Choose **Approve with Face ID** or, on a computer, **Approve with biometrics**. This binds the exact Safe and owner list; if owners change first, check and approve again.

Before final approval you can choose **Use a new account instead**. A company with a new account cannot import a Safe later.

- **Supported Safes**: one approval per payment, at most one other owner, version **1.4.1**, the ERC-4337 module, no other modules, no transaction guard. Zold flags unsupported settings.
- **Recovery**: Zoldenburg or email-code recovery is not available for imported Safes. A second owner can still change owners in Safe{Wallet}.
- **Phone**: start and finish setup on the same phone.
