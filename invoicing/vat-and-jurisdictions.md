---
description: An invoice is governed by where the issuer is established. Here is what Zold checks in each case, and what it leaves to you.
---

# VAT and your country's rules

The country in your organisation settings decides the rule set. Zold never applies one country's law to another: a Polish company is not offered German paragraphs, and an Indian one is not offered EU exemptions.

## Supported and not supported

Only Germany's rules are encoded. Everywhere else is **Not supported** — you can still issue the invoice, on your own verification.

| Your country | Rule set | What Zold checks |
| --- | --- | --- |
| Germany | **Statutory** | The German VAT Act's mandatory details (§ 14 UStG), simplified invoices up to €250 (§ 33 UStDV), the small-business scheme (§ 19, § 34a UStDV), and the wording each exemption requires. Rates of 19% and 7% are enforced. |
| Any other EU member state | **Not supported** | Only your issuing profile and a unique invoice number, plus that the tax reason you picked belongs to the EU rule set. |
| Everywhere else | **Not supported** | Only your issuing profile and a unique invoice number, plus that the tax reason you picked exists. |

Two checks run in every case, unsupported country or not: the invoice must name its issuer and a unique number, and the exemption reason it prints must belong to that country's rule set — a Polish invoice cannot cite a German paragraph. Nothing else is verified outside Germany, so before a non-German invoice goes out Zold asks you to verify the document yourself.

Every readiness check states which of these ran, so "ready" never claims more than it means.

## Exemption reasons

Under the German rule set:

| Reason | Basis | Requires |
| --- | --- | --- |
| Small business scheme (Kleinunternehmerregelung) | § 19 UStG | Turnover under €25,000 last year and expected under €100,000 this year |
| Reverse charge, EU | § 3a Abs. 2 UStG, Art. 196 VAT Directive | Both VAT IDs |
| Reverse charge, domestic | § 13b UStG | — |
| Intra-community supply | § 4 Nr. 1b, § 6a UStG, Art. 138 | Both VAT IDs |
| Export to a non-EU country | § 4 Nr. 1a, § 6 UStG, Art. 146 | — |
| Not taxable here, place of supply abroad | § 3a Abs. 2 UStG, Art. 44 | — |
| Other reason | — | You write the reason and its legal basis; it is printed |

Under the EU rule set the same reasons are cited to the Directive article, plus a **national small-business scheme** entry where you write the note your own rules require. Zold does not invent the wording, because it differs per member state.

Under the structural rule set there is no built-in list. You define your own reasons, see below.

## Rates

Zold does not apply VAT rates by country, because rates change by statute. Germany's 19% and 7% are enforced. Everywhere else you set the rate you charge; under a Not supported rule set the rate is yours to verify.

## Your own rules

Settings → **Your own rules**. Define an exemption reason with an id, a label, its legal basis and the note to print. Required outside the EU; useful inside it. Custom rules are presented as yours everywhere: Zold prints the note and does not check it. A custom rule can require the customer's tax identifier, in which case Zold checks only that one is present, never its shape, since an Indian GSTIN is not an EU VAT ID.

## Why this matters

Two rules have money attached:

* **Show VAT you did not owe and you owe it anyway**, and your customer cannot deduct it (§ 14c UStG in Germany). This is why an exempt invoice in Zold cannot carry a VAT amount.
* **A missing mandatory detail costs the recipient their input-tax deduction** until a corrected invoice arrives. The damage lands on your customer, which is why Zold checks before you issue rather than after.
