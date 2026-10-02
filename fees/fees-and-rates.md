---
description: What Zold charges for each kind of payment, and how the exchange rate on a quote is arrived at.
---

# Fees and exchange rates

## The rule

Every cost is on the quote before you approve. A quote shows the fee, and for a conversion, the mid-market rate, the rate you get and the margin between them. There is no fee that appears afterwards.

## What each payment costs

| | Zold fee | Exchange-rate margin |
| --- | --- | --- |
| SEPA bank transfer out | €0 | None; no conversion |
| Euro ↔ dollar conversion (EURe ↔ USDC) | €0 | None added by Zold; you get the venue's rate |
| Receiving a bank transfer | €0 | None |
| Receiving a crypto deposit | €0; the sender pays their own network fee | Only if the deposit is converted, at the venue's rate |
| Cash pickup (euros → Kenyan shillings) | €0.99 per transfer | 0.5% over the mid-market rate |
| USD account (ACH / wire) | Published when the rail opens | — |
| Network (gas) fees | Paid by Zold. You never need to hold ETH | — |
| Plans | Starter is free; Premium and Business are priced in Settings → Plan | — |

### SEPA bank transfers

Free. Monerium does not charge for redeeming EURe into a SEPA payment, so Zold does not either. The amount you enter is the amount the payee's bank receives.

### Conversions

Zold adds no fee and no margin of its own. The rate you get is the price the liquidity venue executes at, and the quote shows how far that is from the mid-market rate.

### Cash pickup

{% hint style="warning" %}
**Not yet fully live.** Cash pickup opens when a payout partner is live. The fee below is what it will cost.
{% endhint %}

A fixed **€0.99** per transfer, plus a **0.5%** margin between the mid-market rate and the rate the recipient is paid at. Both are on the quote. The recipient pays nothing at the agent.

## Exchange rates

For a conversion, Zold fetches a live mid-market rate and then asks its liquidity venues for a firm price for your exact amount. Several venues are quoted in parallel and the best one is taken, and the choice is recorded on the transfer. The quote shows:

* **Mid-market rate** — the reference rate at that moment.
* **Your rate** — what the venue will deliver.
* **Margin** — the difference between the two, measured, not asserted.

If the live rate feed is unavailable, Zold does not quote. If a venue's price is unreasonably far from the mid-market rate, Zold refuses it rather than pass it on.

A quote is held for **ten minutes**. At execution, the rate is checked against the quote; if the market has moved more than 0.5% since you approved, the transfer is refused and refunded rather than settled at a rate you did not see.

If the conversion settles better than quoted, the difference goes to you.

## Cash pickup rates

The local-currency amount on a cash-pickup quote is Zold's estimate of MoneyGram's rate. MoneyGram sets the final amount when the payout is funded; the transfer detail shows it.
