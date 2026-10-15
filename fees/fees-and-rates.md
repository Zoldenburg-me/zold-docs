---
description: Check fees, exchange-rate margins and quote protections before paying.
---

# Fees and exchange rates

Every fee appears on the quote before you approve.

| Payment | Zold fee | Exchange-rate margin |
| --- | --- | --- |
| SEPA transfer out | €0 | None |
| EUR ↔ USDC conversion | €0 | None added by Zold; venue rate applies |
| Bank transfer received | €0 | None |
| Crypto deposit | €0; sender pays network fee | Venue rate applies if converted |
| Kenya cash pickup | **€0.99** | **0.5%** over mid-market |
| USD account ACH / wire | Published when rail opens | — |
| Network fees | None for you; Zold pays | — |
| Plans | Starter free; Premium and Business prices in Settings → Plan | — |

{% hint style="warning" %}
**Not yet fully live.** Cash pickup opens when a payout partner is live. The fee and margin above are what it will cost.
{% endhint %}

## Rates and quotes

Zold requests a live mid-market rate and firm quotes from several liquidity venues for your exact amount, then takes the best. The venue is recorded on the transfer. The quote shows the mid-market rate, your execution rate and the measured margin. If the rate feed is unavailable, or a venue price is too far from the market, Zold refuses the quote.

Quotes last **10 minutes**. At execution, Zold checks the rate again; if it moved more than **0.5%** since approval, the transfer is refused and refunded rather than executed at an unseen rate. Better-than-quoted conversion goes to you. Cash pickup rates are estimates; MoneyGram sets the final shilling amount when funded.

Zold does not lend your euros. There is no interest to promise; e-money is backed one-for-one, held in your name and not covered by a deposit guarantee scheme.
