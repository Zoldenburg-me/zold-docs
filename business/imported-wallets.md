---
description: Watch wallets for bookkeeping or use your company's existing Safe.
---

# Imported wallets

A **watched wallet** is read-only in Zold: Zold books it but never holds its key or approves for it. A company Safe you bring in becomes the account; you approve its transfers with your passkey.

## Watch a wallet

Wallets → **Import wallet**, then enter its address, network and label. Zold books listed-token transfers, categorises them and includes them in reports and exports. Drafted payments become unsigned transactions for you to sign in your own wallet.

Each listed-token transfer is one ledger line with amount, counterparty and euro value at arrival:

- EURe is €1 per token; dollar stablecoins use the ECB reference rate for that day.
- Other Uniswap- or CoinGecko-listed tokens use a transfer-time price. If there is no price, the line says **no price**, not €0.
- Tokens on neither list, ETH, NFTs and balance changes without a transfer are not booked. Tell Zold if a payer uses an unlisted token.
- Addresses on contacts identify senders, including payout contracts and claimed streams. Add each address to the payer's contact.

On Business, choose **Book from** to import earlier history; otherwise booking starts on import day. Wallets shows whether syncing is current, catching up or paused. **Not yet fully live:** sync is enabled network by network; until enabled, that wallet shows **Not syncing** and nothing is booked.

Books hold at most **100,000 lines**. When full, wallet syncing pauses without skipping entries; Wallets shows the pause. Contact support@zoldhq.com to raise the limit; syncing resumes where it stopped.

## Bring in your company's Safe

No money moves during setup. Create the company account and passkey, then choose **Use our company's existing Safe**. Enter the Safe address and check its owners, threshold and network.

Choose whether to keep your wallet as a second owner (either it or your phone can approve alone) or replace it with your phone (the wallet permanently stops being an owner). Then:

1. Choose **Download for Safe{Wallet}**. In app.safe.global, connect the Safe owner wallet, open **Apps → Transaction Builder**, load the file, and sign and send. Zold never sees or sends that signature.
2. Back in Zold, choose **I've sent it**. Wait and check again if the network has not updated.
3. Review the owners shown on the network. An owner other than your phone can move funds alone; approve only if it is yours or your company's.
4. Choose **Approve with Face ID** or, on a computer, **Approve with your passkey**. This binds the exact Safe and owner list. If owners change before completion, check and approve again.

Until final approval, choose **Use a new account instead** if needed. A company with a new account cannot import a Safe later.

Supported Safes need one approval per payment, at most one other owner, version **1.4.1**, the ERC-4337 module, no other modules and no transaction guard. Zold identifies unsupported settings. Zoldenburg or email-code recovery is not available for imported Safes. A second owner can still change owners in Safe{Wallet}. Start and finish setup on the same phone; it remembers the import.
