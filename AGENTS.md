# zold-docs — how to write a page

Published at docs.zoldhq.com (`npm run build` → `_site/`) and GitBook-compatible
(`SUMMARY.md` is the nav, `{% hint %}` blocks, images in `.gitbook/assets/`).
The style is a quick guide, modelled on gnosisbusiness.gitbook.io/quick-guide:
a reader should be able to skim one screen and know what to press.

## Page shape

```
---
description: <one line, max 12 words: what you get done here>
---

# Title

<One sentence: what this is. Plan requirement if any.>

![<alt>](../.gitbook/assets/<name>.png)        <- if a screenshot exists

## Steps                                     <- numbered, max 7, one action each
1. Go to **Menu → Item**.
2. ...

## Good to know                              <- max 6 bullets, bold lead word
- **Limit**: ...

{% hint style="warning" %} only for money-loss or irreversible things {% endhint %}
```

Use `## How it works` (3–5 bullets) instead of Steps when the page explains a concept
rather than a task. Extra `##` sections are fine when a case needs its own
heading (e.g. "No Pay button?"); keep each to 2–4 lines.

## Rules

- **Short.** Sentences max ~20 words. No paragraph over 3 lines. Task pages
  max ~400 words; reference pages (FAQ, glossary, states, countries,
  how-it-works) become tables or one-line Q&A, max ~800.
- **Second person, imperative.** "Press **Create and share**", not "The user
  can press...". UI labels in bold, exactly as the app writes them.
- **Cut** internals, repetition and justifications. **Keep, compressed**:
  amounts, fees, limits, plan requirements, fail-closed refusals, "not
  supported" / "not yet live" notes, and the honesty lines (Zold is not a
  bank; e-money has no deposit guarantee; Zold holds no key; Zold is not a
  tax adviser).
- **Never add a fact** a page didn't already state, and never change one.
- **No marketing**: no "seamless", no ✅ benefit lists, no cheerleading.
  Specifics over adjectives.
- **Emoji** only in `SUMMARY.md` nav titles (one per page), never in body text.
- Links between pages are relative `.md` links. Images are
  `../.gitbook/assets/<name>.png` from a subfolder, `.gitbook/assets/` from root.
- Write what is true now. History goes in the commit message.
