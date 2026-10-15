---
description: Set the issuer details and defaults used on every new invoice.
---

# Invoice settings

Set your identity in **Settings → Business profile** and invoice defaults in **Settings → Invoicing profile**. New invoices use both.

## Business profile

| Field | Printed or used for |
| --- | --- |
| Name, legal name | Trading name in the app; legal name prints on invoices. |
| Registered address | Invoice identity and country-specific rules. |
| VAT ID, tax number | VAT/GST/sales-tax and national tax identifiers; EU VAT IDs are checked against the member state's format. Most countries require the tax number or VAT ID on invoices. |
| Company register, number, managing director | Printed registration details; in Germany, Amtsgericht and HRB number. |
| Notification email | Zold messages. |
| Reporting currency, time zone | Books and monthly report timing; not printed. The time zone starts as your browser's. |

The Invoicing profile shows issuer details read-only; choose **Edit** to return to the business profile.

## Invoicing profile

![The invoicing profile: your details, tax and numbering defaults, bank details and the optional blocks.](../.gitbook/assets/invoicing-profile.png)

| Setting | Default |
| --- | --- |
| Language | English, German, French or Spanish. Until selected: German for Germany, Austria, Switzerland and Liechtenstein; French for France; Spanish for Spain; English elsewhere. |
| Small-business scheme | Select if §19 UStG or your country's equivalent applies. Invoices are exempt until you turn it off. |
| VAT rate | Default for new lines. Germany uses 19% or 7%; elsewhere you set it. |
| Payment terms | Due days and printed note, such as “Payable within 14 days without deduction”. |
| Invoice number series | Prefix and next number, both shown. `{YYYY}` inserts the year; default is `INV-{YYYY}-`, or `RE-{YYYY}-` for German-speaking companies. |

## Bank details and display

Set account holder, IBAN and BIC for the bank block. Leave IBAN empty to print your Zold IBAN; payments there mark invoices paid. A different IBAN is marked **Not matched**; Zold cannot see its payments, so mark those invoices paid by hand. Add a free-text footer note; it prints with your registration details.

**What appears on the invoice** controls optional blocks and can be changed per invoice. Legally required fields always print. The form previews issuer details and links to your profile if address or tax number is missing. Issued invoices keep a snapshot; later profile changes affect future invoices only.
