---
description: Test Zold on Base mainnet with your own Monerium keys.
---

# Test Zold on mainnet

Thanks for helping. This takes about 15 minutes, and you'll move 1 € of real money. If you get stuck at any point, just message Aurel directly. That's the expected path, not a failure.

## Before you start

You need a verified Monerium account. If you don't have one, sign up at **monerium.app** first and come back once it's approved.

Also send [aurel@zoldhq.com](mailto:aurel@zoldhq.com) the email you'll sign in with. Once you're added, you'll get a login code each time you open the app.

## Step 1: Make your Monerium keys (5 min)

![Monerium home](../.gitbook/assets/monerium-home.png)

1. Sign in at **monerium.app** and open **Developers** in the side menu.
2. Under **What kind of application do you want to create?**, press **Continue** on **Private**.

![Choose Private](../.gitbook/assets/monerium-create-app.png)

3. Enter an **App name**, for example "Zold", and press **Create application**.

![Name the app](../.gitbook/assets/monerium-private-app-name.png)

4. Copy the **CLIENT ID** and the **CLIENT SECRET**. Paste the secret somewhere right away. Monerium only shows it once, and if you lose it you'll have to create a new app.
5. Check that the status reads **Live** and the permissions below are **Enabled**.

![Permissions](../.gitbook/assets/monerium-app-permissions.png)

## Step 2: Connect them in Zold (2 min)

{% hint style="warning" %}
**One IBAN per profile.** If your Monerium IBAN already pays into another wallet, Zold offers to move it. Your old wallet then stops receiving. Check this before you press **Get your IBAN**.
{% endhint %}

1. Open **app.zoldhq.com**, create your account and set up your passkey.
2. At the IBAN step, choose **Add Monerium API keys**.
3. Paste the client ID and secret. Zold checks the pair with Monerium before it stores it.
4. Press **Get your IBAN** and approve with your passkey.

## Step 3: Try it (5 min)

Send 1 €, receive 1 €, then go through the [tester checklist](tester-checklist.md). The core checks:

- [ ] Your IBAN shows on **Home**
- [ ] 1 € sent from your bank to your Zold IBAN shows as your balance
- [ ] 1 € sent by SEPA bank transfer to your own bank account arrives there
- [ ] Zold shows that transfer as paid

If something looks wrong, take a screenshot, note the time, and send it to Aurel. Never send your client secret.

## When you're done

Remove the keys in Zold, then delete the app under **Developers** at Monerium.

## Details, if you want them

You're testing real euros on Base mainnet. Keep amounts small; your payout may be one of the first ever.

A Private app can see your whole Monerium account. Zold uses the keys for this, and nothing else:

| Zold reads | What for |
| --- | --- |
| Your Monerium login email | Stored with the keys, to show which account is connected |
| Your profiles: id, name, kind, state | Picks the profile that matches your Zold account (personal or company) |
| Your IBANs and the wallet addresses linked to them | Finds the IBAN linked to your Zold wallet. This list is stored with the connection |
| Your Monerium orders (bank payments in and out) | Credits deposits to your Zold wallet and builds your statement |

- **Only your Zold wallet** shows in the app. Zold shows no balance or activity of your other wallets linked to Monerium.
- **Other wallets stay yours**: every Monerium payment needs a signature from the paying wallet. Zold only gets passkey signatures, for your Zold wallet.
- **No home address, birth date or ID document** is stored. Of a profile, Zold keeps id, name, kind and state.
- **Your secret is encrypted** at rest and never shown again.
- **Removing the keys** in Zold deletes the stored email, profile and address lists. Deposits and payouts pause.
- **One IBAN per profile**: if your Monerium IBAN already pays into another wallet, Zold offers to move it. Your old wallet then stops receiving.
- **Personal vs company**: a personal Zold account uses your personal Monerium profile, a business account your company profile.
