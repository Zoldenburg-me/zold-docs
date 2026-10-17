---
description: Check what Zold validates for your country and what you must verify.
---

# VAT and your country's rules

Your organisation's country selects invoice rules. Zold does not apply one country's law to another.

## What Zold checks

| Country | Rule set | Checks |
| --- | --- | --- |
| Germany | Statutory | Mandatory §14 UStG fields, simplified invoices up to **€250** (§33 UStDV), small-business scheme (§19, §34a UStDV), exemption wording, and **19% or 7%** rates. |
| Other EU countries | Not supported | Issuer, unique number, and whether the chosen tax reason belongs to the EU rule set. |
| Elsewhere | Not supported | Issuer, unique number, and whether the chosen tax reason exists. |

Outside Germany, Zold verifies nothing else; check the document yourself. The readiness panel says which checks ran. Elsewhere you set and verify the VAT rate.

## German exemption reasons

| Reason | Legal basis | Required |
| --- | --- | --- |
| Small-business scheme | §19 UStG | Turnover under **€25,000** last year and expected under **€100,000** this year |
| EU reverse charge | §3a(2) UStG, Art. 196 VAT Directive | Both VAT IDs |
| Domestic reverse charge | §13b UStG | — |
| Intra-community supply | §4 Nr. 1b, §6a UStG, Art. 138 | Both VAT IDs |
| Export outside EU | §4 Nr. 1a, §6 UStG, Art. 146 | — |
| Place of supply abroad | §3a(2) UStG, Art. 44 | — |
| Other | — | You enter the reason and legal basis |

## Outside the EU

Choosing **Don't charge VAT** offers two reasons: **Not registered for VAT or GST**, and **Other reason**. Both ask you to write the note that prints on the invoice. Zold has no wording or legal citation for your country, and prints no EU one.

## Custom exemptions

The EU rule set cites the same reasons to Directive articles and lets you write the national small-business note. Anywhere, you can define your own exemption ID, label, legal basis and printed note; the note is required. Zold prints a custom note without checking it. A custom rule can require the customer's tax ID; Zold checks only that one is present, not its format.

## Check before issuing

Showing VAT you did not owe can make you liable for it and stop your customer deducting it (§14c UStG in Germany). A missing mandatory detail can cost your customer its input-tax deduction until corrected. Zold is not a tax adviser; confirm your treatment with your accountant.
