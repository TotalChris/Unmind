# unmind — Project Breakdown

> This document captures intent, current state, and open decisions. It is not a substitute for reading the code.

---

## Concept

An interactive wellness journal that tracks **financial health alongside the habits that drive it**. The app helps users understand how behavioral changes translate into financial progress, and should feel effortless to use.

The three core concepts are **Expenses**, **Habits**, and **Goals** — each feeds into the others.

---

## Features

### Today

The daily home screen. A single unified list of that day's expenses and habit check-ins, both presented as to-do items in a smart or user-defined completion order.

**Swipe gestures** handle completion inline:

- _Complete direction_: marks a habit check-in as done, or an expense as paid.
- _Defer direction_: marks a habit check-in as missed. For expenses, reveals a slider the user drags to choose how many days to push the expense forward.

**Sort order** is user-selectable:

- _Importance_ — ordered by a priority the user sets per item.
- _Due time_ — ordered by the time of day set per item.
- _Smart_ — uses the user’s historical completion times to place each item into one of three invisible buckets (morning, afternoon, evening) and orders accordingly.

The app stays passive during the day. If incomplete items remain at the check-in time, a single contextual notification prompts a full check-in. Copy adapts to what’s outstanding:

- Mostly habits incomplete — e.g. _“How much did you put away today? Check-in now.”_
- Mostly expenses outstanding — e.g. _“Need some more time to pay rent? Check-in now.”_

The check-in notification time is optional. When enabled, it defaults to the time the user most frequently engages with the app, or can be set manually.

### Onboarding

Minimal — three questions to seed the user's financial picture:

1. **What** — frequent expenses (e.g. rent, subscriptions).
2. **How often** — the recurrence (weekly, biweekly, monthly, etc.).
3. **How much** — the typical amount.

This creates a personal **preset library** used throughout the app. Users can optionally provide a recurring date upfront for any preset; otherwise dates can be inferred after the first payment. An option for periodical/irregular income is available for freelance or variable earners.

**Income** is configured once during onboarding — amount, frequency, and date — and is set-and-forget for most users. It exists to establish an accurate financial baseline for Goals, not as an ongoing entry workflow. Income is not a primary surface in the app.

### Expenses

Expenses are the primary display and interaction in the app. Entry options:

- **Presets** — the user's library from onboarding is presented as a checklist. Tap to select, enter the final amount, done.
- **Custom** — a one-time entry with any name and amount.
- **Reason** — optional free-text note on any entry (e.g. "impulse movie trip").

An expense has two states:

| State               | Meaning                                  |
| ------------------- | ---------------------------------------- |
| **Planned**         | Scheduled in advance; amount is editable |
| **Paid / Received** | Locked — amount and date are final       |

When a recurring preset is marked paid, it regenerates for the next target date. The seed amount is user-configurable per preset; the default is to roll over the previous amount.

Apple Cash import is a post-MVP possibility.

### Goals

The main overview. Shows the user's overall picture of financial progress and its key contributors: habit streaks, notable or unnecessary expenses, and savings accumulated from habit plans.

Real expenses and habit savings are displayed **separately** — actual money spent is never blended with theoretical deficit savings. The “Saved via habits” figure is shown alongside expenses as a motivating positive.

Financial stability is **user-defined** and expressed as a **monthly savings rate**. During onboarding the user provides their income shape, then either:

- Sets a **rate goal** directly (e.g. save 20% of income per month), or
- Sets a **target amount + timeframe** (e.g. save $3,000 in 18 months), which the app converts to an equivalent monthly rate.

Both paths converge on a single monthly rate the app tracks against. The motivating frame is: _spending less → building savings → being ready for the unexpected_.

### Habits

The most distinct feature. A habit plan is built in three steps:

1. **Input a bad habit** (e.g. “I spend too much on takeout”).
2. **Receive suggestions** for a counteractive good habit, via:
   - **On-device AI** — Apple Foundation Models (iOS 18+). Generates a simple antithetical suggestion and lets the user refine it in conversation. Uses model-assisted classification to detect sensitive topics before engaging[^sensitive].
   - **Human suggestions** — friends/family submit via a temporary shared link or iMessage app, party-game style. Submitters can choose to be anonymous; the receiving user always sees suggestions, but anonymous ones are unlabelled.
3. **Build a habit plan** by pairing the bad habit with one or more suggestions, then configuring:
   - **Savings amount** — a fixed amount or a range per period (e.g. $5/day or $3–$8/day). A ranged habit produces a range deficit on Goals rather than a fixed number.
   - **Tracking mode** — chosen per habit:
     - _Expense-linked_: the habit is tied to a recurring expense; the check-in is driven by whether that expense is logged.
     - _Check-in prompted_: the user is prompted at a set frequency to confirm the habit. Surfaced on Today and via notification.
   - **Missed check-in impact** — user-configurable per habit: zero contribution or a negative amount. Default is **negative** — a missed check-in actively worsens the deficit and triggers a notification (e.g. “You spent $5 on coffee this morning”), creating urgency to correct course.
   - **Savings range** — ranged habits (e.g. $3–$8/day) display as the full range on Goals (e.g. “Saved $90–$240 via habits”).
   - **Pause switch** — a habit can be paused at any time, suspending check-ins and deficit tracking without deleting the plan or its history.

---

## Design Principles

- **Effortless maintenance**: habit tracking must require the minimum possible interaction while gathering enough long-term data to stay informative and motivating. Every required action should be completable in seconds. Passive tracking (expense-linked habits) reduces burden where possible. Notifications should feel like nudges, not pressure.

---

## Ideas: Proposed, Not Yet Committed

- **Pre-planned expense flagging**: When pre-planning an expense that matches a bad habit, surface a gentle nudge.

---

[^sensitive]: When a sensitive topic is detected (gambling, substances, self-harm, and similar), the AI suggestion path is disabled. The user is instead offered the friend/family suggestion flow and a curated list of local professional resources appropriate to their region. This moderation surface does not need to be minimal — it should be thorough and compassionate.
