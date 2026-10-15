---
description: The issuer identity and defaults every invoice is built from. Fill it in once.
---

# Invoice settings

Everything about you as the issuer is entered once and prefilled onto every invoice. It lives in two cards under **Settings** in the business dashboard.

![The invoicing profile: your details, tax and numbering defaults, bank details and the optional blocks.](../.gitbook/assets/invoicing-profile.png)

## Organisation

| Field | Notes |
| --- | --- |
| Name | The trading name shown in the app. |
| Legal name | Printed on invoices in place of the trading name, since the legal entity is what the tax office matches. |
| Registered address | Street, postcode, city and country. The country decides which invoicing rules apply. |
| Tax ID | Your general tax identifier. |
| Notification email | Printed on invoices as the issuer contact. |
| Reporting currency | For the books; not printed. |
| Reporting time zone | The zone your monthly reports run in. It starts as your browser's zone; change it if your books follow another. |

## Your details on an invoice

| Field | Notes |
| --- | --- |
| VAT ID (USt-IdNr.) | Required for reverse-charge and intra-community supplies. |
| Tax number (Steuernummer) | Required under the German rule set unless you use the small-business scheme. |
| Small-business scheme | Tick it if § 19 UStG (or your country's equivalent) applies. Invoices are then issued exempt and the "Charge VAT" option is off until you untick it. |
| Default VAT rate | The rate new lines start with. Germany is fixed at 19% or 7%; elsewhere you set it. |
| Payment terms | Days, plus the note printed on the invoice, e.g. "Payable within 14 days without deduction". |
| Invoice number series | A prefix (`RE-{YYYY}-` inserts the year) and the next number. The next number to be issued is shown. |
| Invoice language | English, German, French or Spanish — the language new invoices are written in. Until you pick one it follows your country (German for Germany, Austria, Switzerland and Liechtenstein; French for France; Spanish for Spain; English elsewhere). |

## Bank details and footer

| Field | Notes |
| --- | --- |
| Account holder, IBAN, BIC | Printed in the bank block. Leave the IBAN empty and invoices print your Zold account's IBAN; the field shows which one. Payments to that IBAN mark invoices paid. If you enter another IBAN, the field is tagged **Not matched**: Zold doesn't see payments to it, so you mark those invoices paid by hand. |
| Register court and number | Where the law requires them on business letters (Amtsgericht, HRB number). |
| Managing director | Printed with the register details. |
| Footer note | Free text at the bottom of every invoice. |

## Display defaults

The **What appears on the invoice** toggles have organisation-wide defaults here and can be changed per invoice. They cover optional blocks only. Everything your rule set requires is printed unconditionally and is not a toggle.

## On the invoice form

When you issue an invoice, a **Prefilled from your organisation** card shows your name, address, VAT ID and tax number as they will print, marks anything still missing, and links back here to fix it. Nothing on the issuer side is retyped per document.

## Snapshot on issue

Each issued invoice stores a copy of these details as they were at the moment of issue. Changing them here affects future invoices only.
