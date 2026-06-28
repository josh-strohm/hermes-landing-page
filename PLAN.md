# Landing Page Plan: Hermes Agent Setup & Operations for Small Businesses

## Goal

Create a conversion-focused landing page that turns small business owners into clients for a **done-for-you Hermes Agent deployment** — not just installation, but the full infrastructure, integrations, and business-specific configuration required for the agent to do **real, recurring work** (not a chatbot demo that sits unused after week one).

**Primary conversion action:** Book a free 20-minute discovery call (Calendly) or submit a short intake form.

**Secondary conversion action:** Download a one-page "Is your business ready for an AI agent?" checklist (email capture).

---

## Positioning Statement

> **Strohm Partners sets up Hermes Agent — a self-hosted AI employee that remembers your business, runs on a schedule, and works from the apps you already use — so you never have to touch servers, API keys, or YAML files.**

Hermes Agent (by [Nous Research](https://nousresearch.com)) is powerful open-source software. Small businesses hear about AI agents constantly but stall at: *Where does it run? Which model? How do I connect email, calendar, and CRM? What should I actually ask it to do every day?* This service removes that entire gap.

---

## Target Audience

### Primary persona: "Overwhelmed Owner-Operator"
- Local service businesses: contractors, cleaners, auto shops, therapists, salons, landscapers, property managers
- 1–25 employees; owner still answers phones and chases leads
- Age 35–60; uses smartphone + email daily; not a developer
- Has tried ChatGPT or Copilot for one-off tasks but nothing persists or runs automatically
- Wants leverage without hiring a full-time admin or IT person

### Secondary persona: "Ops-Minded Manager"
- Office manager or GM at a small firm
- Already uses Google Workspace, QuickBooks, a basic CRM, or spreadsheets
- Tasked with "figure out AI" by leadership
- Needs something auditable, on infrastructure they control (or that a trusted partner manages)

### What they are **not**
- Enterprise IT teams rolling their own k8s
- Developers who want to self-host and tinker
- Businesses looking for a generic chatbot widget on their website (that's a different product — see cross-sell note below)

---

## Core Value Proposition

**Get a working AI agent that knows your business, runs 24/7 on dedicated infrastructure, and handles real tasks — installed, configured, and maintained for you.**

| Pain | Promise |
|------|---------|
| "I don't know where to start with AI agents" | We handle install, hosting, models, and security end-to-end |
| "ChatGPT forgets everything every session" | Hermes has persistent memory, skills, and scheduled jobs |
| "I don't have time to learn YAML, APIs, or Linux" | You talk to your agent via text, email, or a simple web dashboard |
| "I need it connected to *my* tools" | We wire up calendars, inboxes, forms, CRM, and automations for your workflows |
| "I tried AI once and it didn't stick" | We define 3–5 concrete daily/weekly jobs before go-live |

---

## Messaging Hierarchy

### One-liner (nav / meta description)
*Done-for-you Hermes Agent setup for small businesses — infrastructure, integrations, and workflows included.*

### Hero headline (pick one for A/B later)
1. **"Your AI employee — installed, configured, and working in days."** *(recommended default)*
2. **"Stop experimenting with ChatGPT. Start running an agent that remembers your business."**
3. **"We build the infrastructure. Hermes does the work."**

### Hero subheadline
*Strohm Partners deploys [Hermes Agent](https://hermes-agent.nousresearch.com) on secure cloud infrastructure, connects it to the tools you already use, and configures real recurring tasks — lead follow-up, inbox summaries, appointment prep, and more — so you get results without touching a terminal.*

### Proof strip (under CTAs)
- **3–5 days** typical go-live
- **24/7** agent uptime on managed VPS
- **You own** your data & configuration
- **No coding** required from you

---

## Page Structure & Sections

### 0. Sticky Navigation
**Layout:** Logo left | anchor links center | primary CTA right | mobile hamburger

**Links:** What You Get · How It Works · Use Cases · Pricing · FAQ · **Book a Call** (button)

**Brand block:**
- Logo: Strohm Partners mark (reuse `strohmpartners-logo.png` from existing site)
- Title line: **Hermes Agent Setup**
- Subtitle: *by Strohm Partners*

**Behavior:** Semi-transparent dark bar on scroll; CTA button uses accent fill; active section highlight on scroll (optional).

---

### 1. Hero Section

**Layout:** Two-column grid (copy left, visual right). On mobile: copy first, visual second.

**Copy elements:**
- Eyebrow: `Done-for-you AI agent deployment`
- H1: *(see Messaging Hierarchy)*
- Body: 2–3 sentences (subheadline above)
- Primary CTA: **"Book a Free Discovery Call"** → `#contact` / Calendly
- Secondary CTA: **"See what it can do"** → `#use-cases`
- Proof strip: 3 stat pills (days to launch, uptime, no coding)

**Hero visual — "Agent Command Center" mockup (CSS/HTML, no screenshot dependency):**

Design a stylized composite card (similar in craft to the AI Websites browser mockup) showing:

```
┌─────────────────────────────────────────────┐
│  ● ● ●   Hermes · Acme Landscaping          │
├─────────────────────────────────────────────┤
│  ┌─────────────────┐  ┌────────────────┐  │
│  │ Morning briefing │  │ Cron: Mon 8am  │  │
│  │ ✓ 3 new leads    │  │ Inbox summary  │  │
│  │ ✓ 2 appts today  │  │ → your phone   │  │
│  └─────────────────┘  └────────────────┘  │
│  ┌─────────────────────────────────────────┐│
│  │ 💬 "Follow up with leads from yesterday"││
│  │    Agent drafted 3 emails — awaiting OK ││
│  └─────────────────────────────────────────┘│
│  Connected: Gmail · Google Calendar · Sheets│
└─────────────────────────────────────────────┘
```

**Visual details:**
- Dark navy shell (`#020617` family — consistent with Strohm Partners site)
- Warm gold accent (`#C6AC8F` / `#EAE0D5`) on active elements — nod to Hermes WebUI "Sienna" / default gold palette without copying their UI wholesale
- Subtle animated pulse on "Cron: Mon 8am" badge (CSS only, respects `prefers-reduced-motion`)
- Floating connector chips: Gmail, Calendar, SMS, CRM (generic icons)

**Do not** use stock photos of robots shaking hands. The mockup *is* the product preview.

---

### 2. Problem Section — "Why most small businesses never get past the demo"

**Eyebrow:** The problem  
**H2:** AI demos are easy. A working agent is not.

**Intro paragraph:** Name the gap honestly — business owners are sold "AI" but left with a login and no plan.

**Pain grid (4 cards, numbered 01–04):**

| # | Title | Body |
|---|-------|------|
| 01 | **Installation paralysis** | Hermes runs on a server, needs model providers, env files, and gateways — most owners stop at the install script. |
| 02 | **No connections** | An agent that can't see your inbox, calendar, or lead forms is just another chat window. |
| 03 | **No recurring jobs** | Without scheduled tasks and memory, you re-explain your business every single session. |
| 04 | **No one to call** | When API keys expire or cron jobs fail at 2am, DIY setups quietly die. |

**Tone:** Empathetic, not condescending. These owners are capable — they're time-starved, not ignorant.

---

### 3. Solution Section — "What Strohm Partners actually delivers"

**Eyebrow:** The solution  
**H2:** We don't hand you software. We hand you a working agent.

**Intro:** Frame the deliverable as three layers — **Infrastructure**, **Configuration**, **Workflows**.

**Three pillar cards (icon + title + bullet list):**

#### Pillar A — Infrastructure (the part you never want to think about)
- Managed VPS or cloud host (e.g. Hostinger, Hetzner — sized for the business)
- Hermes Agent + WebUI installed and hardened
- HTTPS access, firewall, automatic restarts, backup of `~/.hermes` state
- Model provider wired (Nous Portal, OpenRouter, or client-preferred)
- Optional: isolated Docker deployment for cleaner upgrades

#### Pillar B — Configuration (making Hermes *yours*)
- Business `SOUL.md` / personality tuned to brand voice
- Context files: services, pricing, service area, FAQs, team roster
- Memory seeded with company facts so day-one conversations aren't cold starts
- Messaging surface: SMS, email, Telegram, or Slack — owner's preference
- Security: command approval rules, credential isolation, least-privilege API scopes

#### Pillar C — Workflows (the part that pays for itself)
- 3–5 **go-live automations** chosen in discovery (see Use Cases)
- Cron jobs with delivery to phone/email (morning briefings, lead digests)
- N8N bridges where needed (form → agent → CRM → follow-up sequence)
- MCP / skill packs for their stack (Google Workspace, QuickBooks, industry tools)
- 30-day tuning period: we adjust prompts, schedules, and integrations based on real usage

**Callout box (highlighted):**
> **You interact like a owner, not an admin.** Text your agent, check the web dashboard, or read scheduled summaries — we maintain everything underneath.

---

### 4. "What is Hermes Agent?" — Credibility without jargon

**Eyebrow:** The technology  
**H2:** Built on Hermes Agent — the open-source agent that gets smarter over time.

**Layout:** Short explainer (left) + feature checklist (right). Link to official docs for technical visitors.

**Plain-language explainer (max 120 words):**
Hermes is a self-hosted AI agent created by Nous Research. Unlike a chatbot, it **remembers** your business across sessions, **learns** reusable skills from real work, and **runs jobs on a schedule** — even when you're not online. It connects to email, messaging apps, calendars, and business tools through secure integrations. We chose Hermes because it's open, runs on infrastructure you control, and is built for long-running operational work — not one-off Q&A.

**Feature checklist (with simple icons):**
- ✅ Persistent memory across sessions
- ✅ Scheduled automations (cron)
- ✅ 20+ messaging channels (SMS, email, Telegram, Slack, …)
- ✅ Self-improving skills from real tasks
- ✅ Web dashboard for chat & monitoring
- ✅ Open source — no vendor lock-in on the agent itself

**Trust link:** "Learn more about Hermes Agent →" (external, `hermes-agent.nousresearch.com`)

---

### 5. Use Cases Section — "Real work, not toy prompts"

**Eyebrow:** Use cases  
**H2:** What your agent can do in the first 30 days.

**Layout:** Tabbed or filterable grid by industry **and** a "Universal" row. Default tab: **All businesses**.

**Universal use cases (always visible):**

| Use case | What the owner sees | What we configure under the hood |
|----------|---------------------|----------------------------------|
| **Morning briefing** | 8am text/email: today's calendar, overnight leads, weather if relevant | Cron + calendar API + inbox summary skill |
| **Lead follow-up drafts** | Agent drafts personalized replies; owner approves with one tap | Form/webhook → memory → messaging gateway |
| **Inbox triage** | Urgent vs. can-wait summary twice daily | Email integration + classification skill |
| **Weekly KPI snapshot** | Monday digest: leads, jobs booked, outstanding quotes | Sheets/CRM read + scheduled report |
| **Appointment prep** | Night-before brief for tomorrow's site visits | Calendar + customer notes in memory |

**Industry-specific cards (pick 4–6 on page, rest in expandable "More examples"):**

- **Contractors / trades:** Permit deadline reminders, quote follow-up sequences, job-site note capture via voice/text
- **Cleaning / home services:** Recurring client check-ins, supply reorder reminders, review request drafts
- **Auto / glass / repair:** Insurance claim status tracking, parts vendor email drafts, emergency after-hours triage
- **Health & wellness:** Appointment reminder prep (no PHI in examples — keep HIPAA disclaimer in FAQ), intake form summaries
- **Professional services:** Proposal first-draft generation, meeting notes → action items, client onboarding checklists

**Each card structure:**
- Icon (line style, single color)
- Title (verb-led: "Follow up on quotes automatically")
- One-sentence outcome
- Tag pill: `Daily` / `Weekly` / `On-demand`

**Micro-CTA under grid:** "Don't see your workflow? We'll design it in discovery." → `#contact`

---

### 6. How It Works — 4-step timeline

**Eyebrow:** Process  
**H2:** Live in days, not months.

**Layout:** Horizontal timeline on desktop; vertical numbered steps on mobile.

| Step | Title | Description | Owner time required |
|------|-------|-------------|---------------------|
| **1** | **Discovery call** | We map your tools, pain points, and top 3–5 jobs for the agent. | 20–30 min |
| **2** | **We build your stack** | Server, Hermes install, integrations, memory seeding, automations. | 0 min (we work) |
| **3** | **Go-live & training** | 45-min walkthrough: how to talk to your agent, approve actions, request changes. | 45 min |
| **4** | **Tune & support** | 30 days of adjustments included; optional ongoing care plan after. | ~5 min/week |

**Visual:** Step connectors with small icons (phone → server rack → graduation cap → wrench).

**Reassurance line below timeline:**
*You never SSH into a server. You never edit a config file. If something breaks, you call us.*

---

### 7. What's Included — Deliverables checklist

**Eyebrow:** Deliverables  
**H2:** Everything in your deployment package.

**Layout:** Two-column checklist with section headers.

**Infrastructure**
- [ ] Cloud VPS provisioned & secured
- [ ] Hermes Agent (latest stable) + WebUI
- [ ] TLS/HTTPS dashboard access
- [ ] Model provider setup & cost guardrails
- [ ] Automated backups of agent state
- [ ] Uptime monitoring & alert to Strohm Partners

**Business configuration**
- [ ] Brand-voice agent personality (`SOUL.md`)
- [ ] Company context pack (services, policies, team)
- [ ] Owner/user profile in agent memory
- [ ] Preferred messaging channel (SMS / email / app)
- [ ] Approval rules for sensitive actions

**Integrations (pick from client's stack in discovery)**
- [ ] Google Workspace (Gmail, Calendar, Drive) *or* Microsoft 365
- [ ] Contact form / website lead capture
- [ ] Spreadsheet or lightweight CRM
- [ ] N8N automation hub (self-hosted, same VPS or separate)
- [ ] Industry-specific tools where APIs exist

**Workflows at launch**
- [ ] 3–5 scheduled or triggered automations (defined in discovery)
- [ ] Written "Agent playbook" PDF: what to ask, what not to ask, escalation paths
- [ ] 30-day tuning & support window

---

### 8. Comparison Section — "Why not DIY or ChatGPT?"

**Eyebrow:** Compare  
**H2:** This is not a chatbot subscription.

**Layout:** 3-column comparison table (responsive: cards on mobile).

| | ChatGPT / Copilot | DIY Hermes install | **Strohm Partners setup** |
|---|-----------------|-------------------|---------------------------|
| Remembers your business | Limited / manual | Yes, if configured | Yes, pre-seeded |
| Runs while you sleep | No | Yes, if you build cron | Yes, day one |
| Connected to your tools | Partial | You wire it | We wire it |
| Time to first real task | Minutes | Weeks (if you stick with it) | Days |
| Someone to call when it breaks | No | Discord / GitHub | Us |
| Monthly cost | $20–30/user | VPS + API + your time | Predictable care plan |

**Tone:** Fair to DIY — acknowledge Hermes is open source and power users can self-host. Position the service as **time recovery**, not superiority.

---

### 9. Pricing Section

**Eyebrow:** Pricing  
**H2:** Simple packages. No surprise infrastructure bills from us.

**Layout:** 3-tier pricing cards; middle tier marked "Most popular".

#### Starter — "Agent Foundation"
**$1,500 one-time setup**  
*Best for: solo owners testing their first operational agent*

- 1 business profile / 1 owner user
- Standard VPS (suitable for light daily use)
- Hermes + WebUI + 1 messaging channel
- 2 go-live workflows
- Google or Microsoft email + calendar
- 14-day post-launch tuning
- Agent playbook document

**Ongoing:** **$149/mo** care plan (hosting management, model cost monitoring, monthly health check, up to 1hr support)

---

#### Growth — "Agent Operator" ⭐ Most popular
**$2,500 one-time setup**  
*Best for: businesses ready to replace 5–10 hrs/week of admin work*

- Everything in Starter
- Upgraded VPS for heavier cron + integrations
- 5 go-live workflows
- N8N automation hub (up to 3 active flows)
- CRM or Sheets pipeline integration
- SMS or second messaging channel
- **30-day** post-launch tuning
- Bi-weekly check-in call (first month)

**Ongoing:** **$249/mo** care plan (priority support, integration tweaks, 2hrs/mo agent adjustments)

---

#### Custom — "Multi-location / Team"
**From $4,500** — scoped after discovery  
*Best for: multi-location, office manager + owner, compliance-sensitive workflows*

- Multi-user routing & approval chains
- Custom skill development
- Advanced integrations (industry CRM, QuickBooks, etc.)
- Dedicated onboarding for staff
- SLA options

**Ongoing:** Custom care plan (quoted)

---

**Pricing footnotes (small text below cards):**
- Model/API usage (OpenRouter, Nous Portal, etc.) billed separately at pass-through cost — we set spend caps.
- Client owns VPS and agent data; we manage it on their behalf.
- Setup fee due at kickoff; care plan begins at go-live.

**CTA under pricing:** **"Not sure which tier? Book a free call — we'll recommend in 20 minutes."**

---

### 10. Social Proof & Trust

**Eyebrow:** Results  
**H2:** Owners who stopped babysitting their inbox.

**Layout:** 3 testimonial cards + logo strip + guarantee badge row.

**Testimonials (placeholders until real clients — write believable, specific, non-HIPAA-violating copy):**

> "I thought AI meant another app to check. Now I get a text every morning with what actually matters — leads, schedule, follow-ups I forgot. I didn't touch a single setting."  
> — **Mike T., Landscaping owner, Central PA**

> "We'd been 'trying ChatGPT' for months. Strohm had Hermes answering quote follow-ups within a week. The approval step before emails go out sold me."  
> — **Lisa R., Office manager, residential cleaning**

> "I'm not technical. I didn't want technical. I wanted someone to own the server and tell me what to ask the agent. That's what I got."  
> — **James K., Auto glass shop owner**

**Logo strip:** Strohm Partners + "Powered by Hermes Agent" + "Built with N8N" (if used) — grayscale, low contrast.

**Trust badges row:**
- 🔒 You own your data
- 📋 Written agent playbook included
- 🛠️ 30-day tuning (Growth)
- 💬 Human support — not a ticket black hole

**Optional:** Link to existing Strohm Partners website client work (JT3 Hauling, Mrs. Redbottom's, Central PA Auto Glass) as proof of local business fluency — separate subsection: *"We already build AI-powered systems for local businesses."*

---

### 11. FAQ Section

**Eyebrow:** FAQ  
**H2:** Common questions.

**Accordion list (8–10 items):**

1. **Do I need to buy my own server?**  
   We provision and manage it. You own the account; we handle the rest. If you ever leave, you keep the VPS and full agent export.

2. **What is Hermes Agent — is it like ChatGPT?**  
   ChatGPT is a conversation. Hermes is a persistent agent that runs on your server, remembers your business, connects to tools, and executes scheduled work. We use it because it's open-source and operational — not a wrapper around a single chat window.

3. **How much do AI model API costs run?**  
   Typically $30–$120/month for a small business with daily briefings and moderate email drafting — depends on volume. We configure spend caps and show you a monthly usage summary.

4. **Is my customer data safe?**  
   Data stays on infrastructure we set up for you (or your existing cloud, for Custom). Credentials live in encrypted env files. We configure approval gates so the agent can't send external emails or messages without rules you agree to.

5. **What tools can you connect?**  
   Google Workspace and Microsoft 365 are the most common. We also integrate contact forms, spreadsheets, lightweight CRMs, and industry tools with APIs. Discovery call is where we confirm your stack.

6. **Do I need to learn to "prompt"?**  
   No. We give you a playbook with example requests. The agent already knows your services, hours, and tone. You talk normally.

7. **What if I already pay for ChatGPT Team?**  
   Keep it for ad-hoc brainstorming if you like. Hermes handles *operational* work — scheduled, connected, remembered. They complement each other.

8. **Can the agent answer my customer-facing phone or website chat?**  
   That's a separate integration (voice/chat widget). We can add it on Custom plans. Standard packages focus on **owner and staff** operational assistance first — where ROI is fastest.

9. **What happens after the tuning period ends?**  
   Continue on a care plan (recommended) or run self-managed. We'll hand off credentials and documentation either way.

10. **How is this different from your AI Website service?**  
    The [AI Powered Websites](https://github.com/strohmpartners/ai-local-website-service) package gives you a lead-generating site. **Hermes Agent Setup** gives you an always-on employee that works across email, calendar, and back-office tasks. Many clients will want both; we can bundle.

---

### 12. Final CTA Section

**Layout:** Full-width band, slightly lighter surface, strong contrast.

**H2:** Ready for an agent that actually works?

**Body:** Book a free 20-minute discovery call. We'll tell you honestly if Hermes is a fit — and which 3 tasks would pay for the setup in month one.

**Primary CTA:** **"Book My Discovery Call"** (Calendly embed or link)

**Secondary:** **"Send me the readiness checklist"** (email field → N8N webhook, same pattern as AI Websites site)

**Urgency (use only if true):**  
*"Taking 4 new deployments per month to keep quality high — [X] slots left for [Month]."*

---

### 13. Contact / Booking Section (`#contact`)

**Layout:** Split — Calendly inline embed left, short intake form right.

**Intake form fields (minimal):**
- Name
- Business name
- Industry (dropdown)
- Email
- Phone (optional)
- "What's the one task you wish someone handled every day?" (textarea)
- Submit → N8N webhook → Google Sheet + notification email

**Privacy note:** One line under form — *We'll only use this to prepare for your call.*

---

### 14. Footer

**Columns:**
- Brand + one-line description
- Links: Process · Pricing · FAQ · Contact
- Resources: Hermes Agent docs (external) · Strohm Partners
- Legal: Privacy · Terms (stub pages OK for v1)

**Copyright:** © 2026 Strohm Partners

---

## Visual Design System

### Design direction: "Trusted operator, not sci-fi startup"

Small business owners need to feel **competence and calm**, not hype. The page should read like a serious local IT/consulting firm that happens to deploy cutting-edge open-source AI — not a crypto landing page or a generic SaaS template.

### Relationship to existing Strohm Partners site

Reuse the **dark navy foundation** from `ai-local-website-service/style.css` for brand continuity, but shift accent from sky-blue to **warm gold/bronze** to visually distinguish this offering and align with Hermes' own aesthetic (warm neutrals, gold accents).

### Color palette

| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#020617` | Page background |
| `--bg-soft` | `#071124` | Section alternates |
| `--surface` | `#0b1224` | Cards, panels |
| `--surface-muted` | `#101b33` | Nested elements |
| `--text` | `#f8fafc` | Primary text |
| `--muted` | `#b6c5dc` | Secondary text |
| `--line` | `rgba(148,163,184,0.16)` | Borders |
| `--primary` | `#C6AC8F` | CTAs, links, active states (Hermes gold) |
| `--primary-dark` | `#A68B6B` | CTA hover |
| `--accent` | `#EAE0D5` | Highlights, eyebrows |
| `--accent-soft` | `rgba(198,172,143,0.14)` | Tinted backgrounds |
| `--success` | `#86C08B` | Checkmarks, positive states |
| `--info` | `#38bdf8` | Technical callouts only (sparingly) |

### Typography

| Role | Font | Size / weight |
|------|------|---------------|
| Headings | Inter, system-ui | H1: clamp(2.4rem, 5vw, 3.6rem) / 700; H2: 2rem / 700 |
| Body | Inter, system-ui | 16–18px / 400; line-height 1.6 |
| Eyebrows | Inter | 12px / 600; uppercase; letter-spacing 0.08em; color `--accent` |
| Mono accents | SF Mono, ui-monospace | Code snippets in technical callouts only; 13px |

### Spacing & shape

- Section padding: `clamp(4rem, 8vw, 6rem)` vertical
- Container: `min(1120px, calc(100% - 40px))`
- Card radius: `--radius-lg: 28px`, `--radius-md: 18px`, `--radius-sm: 12px`
- Shadows: deep soft shadows on hero mockup and pricing cards (`0 24px 70px rgba(0,0,0,0.38)`)

### Iconography & illustration

- **Style:** Simple line icons (Lucide or Phosphor), 1.5px stroke, `--primary` color
- **No:** 3D robots, brain clipart, purple gradient "AI" stock art
- **Yes:** Server/cloud, calendar, inbox, clock, checklist, phone-message, shield — operational metaphors
- **Hero mockup:** Pure CSS/HTML composite (browser-chrome card pattern from AI Websites site)

### Motion

- Subtle fade-up on scroll for section headings (Intersection Observer; one-time)
- Cron badge soft pulse in hero (disable with `prefers-reduced-motion`)
- Accordion FAQ: height transition 200ms ease
- No parallax, no particle fields

### Photography (optional, v2)

If real photos are added later: owner at job site, office manager at desk, phone notification close-up — warm natural light, not staged headset support reps.

---

## Copy Tone & Voice

- **Plain English.** Replace "LLM", "MCP", "YAML" with "AI model", "integrations", "settings" on the main page. Jargon OK only in FAQ footnotes and the Hermes explainer link-out.
- **Outcome-first.** Every feature bullet leads with what the owner experiences, not what we install.
- **Honest scope.** Say what the agent won't do (replace licensed professionals, handle unchecked customer-facing medical advice, etc.).
- **Local business fluency.** Use examples from trades, cleaning, auto, wellness — mirroring Strohm Partners' existing client verticals.
- **Confidence without hype.** Avoid "revolutionary", "10x", "AGI". Use "working agent", "real tasks", "less admin work".

---

## Technical Implementation Notes

### Stack (recommended — match AI Websites site for velocity)

| Piece | Choice |
|-------|--------|
| Markup | Single `index.html` |
| Styles | `style.css` (CSS variables, no framework required) |
| Behavior | `script.js` (mobile nav, FAQ accordion, scroll spy, form POST) |
| Hosting | Netlify, Vercel, or GitHub Pages |
| Forms | N8N webhook at `n8n.strohmpartners.com` (existing pattern) |
| Booking | Calendly inline embed |
| Analytics | Plausible or Fathom (privacy-friendly); UTM params on CTAs |
| SEO | Title ≤ 60 chars; meta description ≤ 155 chars; OG image with hero mockup |

### Performance targets

- Lighthouse Performance ≥ 90 mobile
- No external font blocking — use system font stack or self-host Inter subset
- Hero mockup is CSS-only (no heavy images)
- Total page weight < 500KB excluding Calendly embed

### Accessibility

- WCAG 2.1 AA contrast on all text
- Focus rings on interactive elements (`outline: 2px solid var(--primary)`)
- `prefers-reduced-motion` respected
- Form labels, aria-expanded on FAQ, skip-to-main link

### Files to create

```
landing-page/
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── strohmpartners-logo.png   (copy from ai-local-website-service)
│   ├── og-image.png              (1200×630, hero mockup render)
│   └── favicon.png
└── PLAN.md                       (this file)
```

---

## Conversion & Growth Strategy

### Primary traffic sources
1. **LinkedIn outreach** to local business owners (same motion as AI Websites plan)
2. **Warm network** — existing website clients offered agent setup add-on
3. **Local business groups** — chamber of commerce, trade associations
4. **Content cross-link** from Strohm Partners AI Websites page → Hermes setup page

### Conversion targets
| Metric | Target |
|--------|--------|
| Visitor → discovery call booking | 3–7% |
| Visitor → checklist download | 8–12% |
| Discovery call → paid setup | 25–40% |
| Calls needed per client | 3–5 |

### A/B tests (post-launch)
- Hero headline option 1 vs 2
- Primary CTA: "Book a call" vs "Get a custom quote"
- Pricing: show Starter first vs Growth first (anchor pricing)

---

## Cross-sell & Product Ladder

```
AI Powered Website ($500 + $49/mo)  →  captures leads
        ↓
Hermes Agent Setup ($1,500–$2,500)  →  works those leads + daily ops
        ↓
Care Plan ($149–$249/mo)             →  ongoing tuning + hosting
```

**Bundle idea (future):** "Growth Stack" — website + Hermes Growth tier at 10% discount.

---

## Success Criteria for v1 Launch

- [ ] Page live on production URL with SSL
- [ ] Calendly booking flow tested end-to-end
- [ ] Intake form hits N8N → Sheet + email notification
- [ ] Mobile nav, FAQ, and all anchor links work
- [ ] OG/social preview renders correctly
- [ ] One internal stakeholder review for copy accuracy (no overpromising on Hermes capabilities)
- [ ] Pricing matches what Strohm Partners will actually honor for first 3 clients

---

## Next Steps After Plan Approval

1. **Wireframe** — sketch hero mockup and pricing cards in browser (static HTML prototype)
2. **Copy pass** — finalize headline, testimonials (real or clearly marked draft), pricing footnotes
3. **Build** — implement `index.html` + `style.css` + `script.js` following this spec
4. **Integrate** — Calendly + N8N webhook + analytics
5. **Review** — mobile QA, accessibility spot-check, Lighthouse run
6. **Launch** — deploy, share with 2–3 friendly business owners for feedback before paid outreach

---

## Open Questions (resolve before build)

1. **Final pricing** — are Starter/Growth numbers right for your margin after VPS + your labor?
2. **Brand URL** — subdomain (`hermes.strohmpartners.com`) or path (`strohmpartners.com/hermes`)?
3. **Real testimonials** — any early Hermes deployments to quote, or launch with "case study in progress"?
4. **Geographic focus** — Central PA local only, or national remote setup?
5. **Care plan SLA** — response time commitment (e.g. 1 business day)?