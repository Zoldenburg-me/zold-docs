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

Every invoice must name its issuer and have a unique number. Its printed exemption reason must belong to the country's rule set. Outside Germany, Zold verifies nothing else and asks you to check the document yourself. The readiness panel says which checks ran.

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

The EU rule set cites the same reasons to Directive articles and lets you write the national small-business note required by your rules. Under the structural rule set there is no built-in list. Define your own exemption ID, label, legal basis and printed note; required outside the EU and useful inside it. Zold prints a custom note but does not check it. A custom rule can require the customer's tax ID; Zold checks only that one is present, not its format.

Germany's **19% and 7%** rates are enforced. Elsewhere you set and verify the rate.

## Check before issuing

Showing VAT you did not owe can make you liable for it and prevent your customer deducting it (§14c UStG in Germany). Missing a mandatory detail can cost your customer its input-tax deduction until corrected. Zold is not a tax adviser; confirm your treatment with your accountant.
