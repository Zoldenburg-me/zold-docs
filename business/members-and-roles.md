---
description: Invite members and limit each role to its job.
---

# Members and roles

Go to Members → **Invite**, enter an email and choose a role. Send the link yourself; it expires after **3 days**. The invitee signs in with their passkey.

| Role | Can do |
| --- | --- |
| **Viewer** | Read everything |
| **Accountant** | Read, draft payments, manage contacts, categorise transactions, edit the chart and run reports; cannot send |
| **Payer** | Read and send; cannot approve drafts or edit the chart |
| **Admin** | Draft, approve and send; invite or change members, open accounts and manage books |
| **Owner** | Admin plus turning payment review off and closing the organisation |

This is the table for a sole trader. In a company only owners sign, so payers and admins don't see **Send**; see [In a company](#in-a-company).

Your role must allow an action. A Viewer cannot send.

## In a company

A company's account is its own Safe, and only owners sign its payments.

- **Payer**: drafts payments; doesn't see **Send**.
- **Admin**: drafts and approves payments; doesn't see **Send**.
- **Owner**: signs with their passkey, if that passkey is an owner on the company's Safe.
- **Members**: the **Can** column shows **Sign** instead of **Send**.

A sole trader's business keeps the table above.

## Review and approval

The reviewer cannot be the drafter, whatever their role. See [Payments and approvals](payments-and-approvals.md).

For a sole trader, a transfer needs the passkey of the member whose login approves for that account. If you send from an account you do not approve for, the app names who can. In a company, the Safe's owners sign and a payer can't send.

## Deactivate a member

Members are deactivated, not deleted, so history stays attributed. Zold refuses changes that would remove or demote the last active Owner.
