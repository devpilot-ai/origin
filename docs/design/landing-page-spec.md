# Origin — Landing Page Product Specification
**Prepared by:** Lead Product Design, Vercel-style studio brief
**Product:** Origin — the AI-native engineering workspace (GitHub + AI code review + docs + deploy + observability)
**Context:** Product Hunt launch, developer-first premium SaaS

---

## 0. Design Thesis

Origin's single job: convince a senior engineer, in under 8 seconds of scroll, that this is the tool that finally collapses their 6-tab workflow into one coherent system — without smelling like "AI wrapper." The hero is not a headline, it's a **live unified timeline**: one real commit shown moving through review → docs → deploy → trace, rendered as a single connected thread. That thread motif (a single glowing line connecting distinct states) is the signature element, and it recurs at every layer: nav, section dividers, changelog, footer.

Everything else stays quiet: near-black canvas, one accent, restrained motion, monospace used with intent (not decoration).

---

## 1. Information Architecture

```
Nav (sticky, transparent → solid on scroll)
├── Hero (thesis: the unified thread)
├── Social proof strip (logos + install count)
├── Problem framing (the 6-tab reality)
├── Product pillars (5 modules, thread-connected)
│   ├── Review
│   ├── Docs
│   ├── Deploy
│   ├── Observe
│   └── Workflows (glue layer)
├── Live product preview (interactive dashboard demo)
├── AI-native proof (model transparency, not hype)
├── Workflow deep-dive (a PR's full lifecycle, scroll-driven)
├── Integrations grid (GitHub, Slack, Linear, PagerDuty, etc.)
├── Performance / observability metrics strip
├── Open-source credibility (stars, contributors, license)
├── Pricing (Free / Team / Enterprise)
├── Testimonials (engineer quotes, not logos-only)
├── Final CTA (install command, not "contact sales")
└── Footer (thread motif closes the loop)
```

**UX rationale:** Order follows a developer's actual trust ladder — *what is it → do I have this pain → how does it solve it → can I see it work → is it real AI or theater → prove it end-to-end → does it fit my stack → is it fast/reliable → is it legitimately open source → what does it cost → do people like me use it → let me try it now.* Pricing sits late because devs self-qualify on capability before cost. CTA is a terminal command (`npx create-origin` or `origin init`), never a form.

---

## 2. Complete Section-by-Section Layout

### 2.1 Navigation (sticky)
- Left: Origin logotype (custom mark: single continuous line forming an "O" that never closes — implies "always in motion")
- Center-left: Product / Docs / Pricing / Changelog / GitHub (star count live)
- Right: `Sign in` (ghost) + `Install` (solid, accent) button
- Transparent over hero, gains 1px hairline bottom border + `rgba(10,10,11,0.8)` blur backdrop after 80px scroll

### 2.2 Hero
- Eyebrow: `ORIGIN — v1.0 · OPEN SOURCE` (monospace, letter-spaced, accent-colored dot)
- H1 (2-line, display serif-adjacent grotesk): "Your GitHub, review, docs, deploy, and traces. One thread."
- Subhead (body, muted): One sentence, plain: "Origin connects the tools you already use into a single AI-native workspace — no migration, no lock-in."
- Primary CTA: `Install Origin` (terminal-icon button, reveals `npx create-origin@latest` on hover)
- Secondary CTA: `Watch 90s demo` (ghost, play-icon)
- Hero visual: full-width interactive **thread visualization** — a horizontal glowing line with 5 nodes (Commit → Review → Docs → Deploy → Trace), each node pulses in sequence on load (orchestrated, ~3.5s loop, pauses on hover/interaction, respects reduced-motion)
- Below fold-line: small live ticker — "1,204 deploys today across 340 repos" (real-feeling, not gamified)

### 2.3 Social proof strip
- Muted grayscale logo row (6–8 companies), single row, no carousel
- Right-aligned stat: `GitHub ⭐ 24.1k` live-fetched, monospace tabular figures

### 2.4 Problem framing
- Left: short copy block — "Right now, shipping code means six tabs." List of current tools as a faded, disconnected cluster of icons (GitHub, Notion, Vercel, Datadog, Slack, Jira) rendered with intentionally misaligned, disconnected positioning
- Right (or below on scroll): same icons snap into the single thread line — this transition is the section's whole argument, executed via scroll-triggered animation

### 2.5 Product pillars (5 modules)
Grid layout, 5 cards along the horizontal thread (desktop), stacked with connecting vertical thread (mobile):
1. **Review** — AI-assisted PR review, inline reasoning, not just comments
2. **Docs** — auto-generated + human-editable, stays in sync with code
3. **Deploy** — preview envs per PR, one-click promote
4. **Observe** — traces and logs linked back to the originating commit
5. **Workflows** — the automation/glue layer connecting all four

Each card: icon (outline, 1.5px stroke), module name, one-line plain-spoken description, small inline code snippet or metric as proof (e.g., Review card shows an actual diff snippet with an inline AI comment bubble).

### 2.6 Live product preview (interactive)
- Full-width dark "window" chrome (no literal OS chrome, just a subtle bordered panel)
- Tabs: Review / Docs / Deploy / Observe — clicking swaps the panel content with a crossfade (200ms)
- Real UI density: file tree, diff view, terminal log, trace waterfall — all fabricated but plausible sample data
- This is the "let me touch it" moment before asking for install

### 2.7 AI-native proof section
- Headline: "Not a chatbot bolted onto GitHub."
- 3-column breakdown: what model context Origin uses (repo history, past incidents, doc drift), how suggestions are scoped (diff-level, not repo-wide guesses), and an opt-out/transparency note (no training on private code by default)
- Tone: matter-of-fact, slightly defensive against AI fatigue — this section exists specifically to earn skeptic trust

### 2.8 Workflow deep-dive (scroll-driven narrative)
- Single PR followed end-to-end: opened → AI review comment appears → docs diff auto-generated → preview deploy link posted → trace shows p95 latency delta post-merge
- Left: sticky code/terminal panel updating per scroll step
- Right: short annotation text per step (4–5 steps max)
- This is the most "premium" feeling section — treat pacing like a Stripe/Linear feature-scroll, not a slideshow

### 2.9 Integrations grid
- Icon grid, 12–16 tools (Slack, Linear, PagerDuty, Vercel, AWS, Datadog, Sentry, Notion, Jira, Figma, Discord, Terraform)
- Each icon on hover: lifts 2px, shows one-line integration description in tooltip
- Footer note: "40+ integrations, all open source" linking to a registry page

### 2.10 Performance / observability metrics strip
- 3–4 real-feeling numbers in tabular monospace: `p50 deploy time`, `AI review latency`, `uptime`, `avg PR cycle time reduction`
- No icons, no cards — just large numbers, small labels, hairline dividers between them (data as typography, not chart)

### 2.11 Open-source credibility
- License badge (MIT/Apache — pick Apache 2.0 for enterprise comfort)
- Contributor avatar cluster (real GitHub avatars, capped at ~30 + "and 200 more")
- Link to monorepo, contribution guide, roadmap (public Linear/GitHub Projects board embed or screenshot)

### 2.12 Pricing
- 3-tier: **Free** (individual/OSS), **Team** ($/seat), **Enterprise** (custom)
- Table format, not cards — dense, scannable, dev-familiar (à la Railway/Vercel pricing tables)
- Every tier's CTA is action-oriented: `Start free`, `Start trial`, `Talk to engineering` (not "sales")

### 2.13 Testimonials
- 3–4 quotes, engineer name + real role + company, no stock photography — GitHub avatar only
- Quotes focus on specific workflow pain solved, not generic praise
- Laid out as a quiet single-column list with hairline separators, not a carousel

### 2.14 Final CTA
- Full-bleed section, near-black with subtle thread-line animation in background (very low opacity, slow drift)
- H2: "Ship the whole thing. Not just the code."
- CTA: terminal-style install command block (copy button) + `Read the docs` ghost link
- No email capture form — for a dev tool, the CTA IS the install

### 2.15 Footer
- Thread motif closes visually: the glowing line from hero reappears thin and static, running under the footer columns, terminating at the Origin mark — visual bookend
- Standard columns: Product, Developers, Company, Legal, Social
- Bottom bar: `Origin is open source under Apache 2.0` + GitHub/Discord/X icons

---

## 3. Typography

| Role | Typeface | Notes |
|---|---|---|
| Display (H1/H2) | **Söhne** or **General Sans** (grotesk, tight tracking, weight 500–600) | Not a serif — this is an engineering tool, not an editorial brand. Avoid Inter-default-look by using slightly tighter tracking (-1.5%) and a taller x-height face. |
| Body | **Inter** (weight 400–450) | The one place Inter is fine — body copy is where neutrality is correct. |
| Monospace / data / code | **JetBrains Mono** or **Berkeley Mono** | Used for: nav eyebrow, metrics strip, terminal snippets, tabular figures (stats). This is the typeface doing personality work, not the display face — fitting for a dev tool. |

**Scale (desktop, rem):**
- H1: 4.5rem / 1.05 line-height / -2% tracking
- H2: 2.75rem / 1.1 / -1.5%
- H3: 1.5rem / 1.3
- Body large: 1.25rem / 1.6
- Body: 1rem / 1.6
- Caption/mono: 0.8125rem / 1.5 / +2% tracking (mono gets slightly loosened tracking, not tightened)

---

## 4. Color Palette

Avoiding the acid-green-on-black AI default and the warm-cream/terracotta default. Origin's accent is a **cool signal blue-white**, referencing terminal cursors and status LEDs rather than "AI green."

| Token | Hex | Use |
|---|---|---|
| `bg-canvas` | `#0A0A0B` | Base background |
| `bg-surface` | `#131315` | Cards, panels |
| `bg-surface-raised` | `#1C1C1F` | Nested panels, code blocks |
| `border-hairline` | `#2A2A2E` | 1px dividers |
| `text-primary` | `#EDEDEF` | Headlines, primary copy |
| `text-secondary` | `#9C9CA3` | Subheads, muted copy |
| `text-tertiary` | `#5C5C63` | Captions, disabled |
| `accent-signal` | `#5EEAD4` → used sparingly | The thread line, active states, primary CTA — a cool teal-cyan, not green, not blue-violet (avoids "generic SaaS gradient" and "AI green") |
| `accent-signal-dim` | `#2DD4BF` at 40% opacity | Hover glows, thread idle state |
| `status-success` | `#4ADE80` | Deploy success only (functional, not brand) |
| `status-warn` | `#FBBF24` | Warnings only |
| `status-error` | `#F87171` | Errors only |

Accent used **only** on: the thread line, primary CTA fill, active nav underline, and hover glows. Never as large background fills — this keeps it feeling premium rather than gamer-aesthetic.

---

## 5. Component Hierarchy

```
<Nav>
  <Logo /> <NavLinks /> <GitHubStars /> <SignIn /> <InstallButton (primary)/>
<Hero>
  <Eyebrow /> <H1 /> <Subhead /> <CTAGroup> <PrimaryCTA/> <SecondaryCTA/> </CTAGroup>
  <ThreadVisualization (interactive, orchestrated loop) />
  <LiveTicker />
<LogoStrip> <GrayscaleLogo x8 /> <StatBadge /> </LogoStrip>
<ProblemSection>
  <DisconnectedIconCluster (scroll-triggers) /> <ConnectedThreadState />
<PillarGrid>
  <PillarCard x5> <Icon/> <Title/> <Description/> <ProofSnippet/> </PillarCard>
<LivePreviewPanel>
  <TabBar> <Tab x4 /> </TabBar> <PreviewWindow (crossfade content) />
<AIProofSection>
  <SectionHeadline /> <ProofColumn x3>
<WorkflowNarrative (scroll-pinned)>
  <StickyCodePanel /> <StepAnnotation x5>
<IntegrationsGrid>
  <IntegrationIcon x16 (hover tooltip)>
<MetricsStrip>
  <BigNumber x4> <Label/> </BigNumber>
<OSSCredibility>
  <LicenseBadge/> <ContributorAvatars/> <RoadmapLink/>
<PricingTable>
  <TierColumn x3> <Price/> <FeatureList/> <CTA/>
<Testimonials>
  <Quote x4> <Avatar/> <Name/> <Role/>
<FinalCTA>
  <H2/> <InstallCommandBlock (copy)/> <DocsLink/>
<Footer>
  <ThreadLineStatic/> <ColumnLinks/> <BottomBar/>
```

---

## 6. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| **≥1440px** | Full 5-node horizontal thread in hero and pillar grid; workflow narrative uses sticky two-column layout |
| **1024–1439px** | Thread compresses node spacing; pillar grid becomes 3+2; nav links reduce to icons + labels |
| **768–1023px** | Pillar grid becomes 2-column; workflow narrative loses sticky-pin, becomes sequential scroll cards; integrations grid drops to 4 cols |
| **≤767px (mobile)** | Thread reorients vertically (top-to-bottom) everywhere it appears — hero, pillars, footer; nav collapses to hamburger with full-screen overlay menu; pricing table becomes stacked cards with tier switcher tabs; metrics strip becomes 2×2 grid; live preview panel becomes swipeable tabs instead of click-tabs |

Touch targets minimum 44×44px on mobile. Hero H1 drops to 2.5rem, tracking normalizes to -1%.

---

## 7. Animations

**Principle: one orchestrated moment (hero thread), everything else is restrained micro-interaction.**

- **Hero thread load-in:** nodes light up sequentially left→right, 400ms stagger, ease-out, total ~2s, then settles into slow idle pulse (4s loop, opacity 0.4↔0.7). Pauses entirely under `prefers-reduced-motion`.
- **Problem → Pillar transition:** scroll-triggered (IntersectionObserver), disconnected icons animate into thread positions over 600ms, ease-in-out, triggered once (not on every scroll re-entry).
- **Live preview tab switch:** 200ms crossfade + 8px vertical slide, no bounce.
- **Workflow narrative:** scroll-pinned section, content advances via scroll-linked progress (not scroll-jacking) — code panel updates line-by-line as user scrolls through 5 steps.
- **Hover states:** buttons — 120ms background/border transition, no scale-transform (scale reads as "template AI site"); integration icons — 2px lift + tooltip fade-in 150ms.
- **Nav scroll transition:** backdrop-blur + border fade-in over 200ms triggered at 80px scroll.
- **CTA copy button:** icon swaps to checkmark for 1.5s on click, no toast needed.

No parallax, no scroll-jacking beyond the one workflow section, no particle effects, no gradient mesh backgrounds.

---

## 8. CTA Strategy

- **Primary action across the whole page is "Install," never "Sign up" or "Get started."** This is a credibility signal to developers — the product is usable before any account exists.
- Hero primary CTA reveals the actual terminal command on hover/focus (`npx create-origin@latest`) — reduces friction, builds trust instantly.
- Pricing CTAs are tier-appropriate: Free → `Start free`, Team → `Start trial`, Enterprise → `Talk to engineering` (never "Contact sales" — wrong register for this audience).
- Final CTA repeats the install command as a copyable code block, not a button — treating the command itself as the interface.
- Secondary CTA throughout is always `Read the docs` or `View on GitHub` — never a generic "Learn more."

---

## 9. Icon Recommendations

- Use **Lucide** or a custom outline set at consistent 1.5px stroke, 24px grid — matches the dev-tool register (Linear, Vercel, Railway all converge here for good reason: legibility at small sizes, no fill-ambiguity).
- Pillar icons: `git-pull-request` (Review), `book-open` (Docs), `rocket` (Deploy), `activity` (Observe), `workflow` (Workflows) — literal, not abstract, because developers scan icons for meaning, not vibe.
- Integration icons: use each tool's actual monochrome mark, desaturated to `text-secondary`, full color only on hover.
- Avoid any icon that implies "magic" (sparkles, wands) — undermines the "not a chatbot bolted on" positioning.

---

## 10. Dashboard Preview Ideas

1. **Diff + AI review overlay:** real-looking unified diff, with an inline AI comment bubble anchored to a specific line, showing reasoning in 2 lines max (e.g., "This mutation could race with the debounce above — see similar fix in #4021").
2. **Docs drift indicator:** a docs page with a small amber marker showing "3 sections may be out of sync with recent commits," clicking reveals a diff-style comparison.
3. **Deploy trace waterfall:** a preview-deploy card linked directly to a trace waterfall showing the exact commit's performance impact (p95 before/after), color-coded by service.
4. **Unified activity feed:** single scrolling feed mixing PR events, deploy events, and alert events in one chronological thread — the clearest visual proof of "unification" as a concept, could double as a standalone marketing screenshot.
5. **Command palette (⌘K) preview:** shown as a floating overlay in one screenshot — reinforces "built for keyboard-first engineers."

---

## 11. Spacing System

8px base unit, scale: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128 / 192

| Context | Spacing |
|---|---|
| Section vertical padding (desktop) | 128px top/bottom |
| Section vertical padding (mobile) | 64px |
| Component internal padding (cards) | 24–32px |
| Grid gap (pillar cards) | 24px |
| Nav height | 72px |
| Max content width | 1200px (1440px for full-bleed hero visual) |
| Gutter (mobile) | 20px |

---

## 12. Design Tokens (summary object)

```
tokens.color.bg.canvas        = #0A0A0B
tokens.color.bg.surface        = #131315
tokens.color.bg.surfaceRaised  = #1C1C1F
tokens.color.border.hairline   = #2A2A2E
tokens.color.text.primary      = #EDEDEF
tokens.color.text.secondary    = #9C9CA3
tokens.color.text.tertiary     = #5C5C63
tokens.color.accent.signal     = #5EEAD4
tokens.color.accent.signalDim  = rgba(45,212,191,0.4)
tokens.color.status.success    = #4ADE80
tokens.color.status.warn       = #FBBF24
tokens.color.status.error      = #F87171

tokens.font.display  = "General Sans", weight 500-600
tokens.font.body     = "Inter", weight 400-450
tokens.font.mono     = "JetBrains Mono"

tokens.radius.sm = 6px   // inputs, small buttons
tokens.radius.md = 10px  // cards
tokens.radius.lg = 16px  // panels, preview windows
tokens.radius.pill = 999px // pills, badges

tokens.space.unit = 8px
tokens.motion.fast = 120ms
tokens.motion.base = 200ms
tokens.motion.slow = 600ms
tokens.motion.ease = cubic-bezier(0.16, 1, 0.3, 1)
```

---

## 13. Accessibility Recommendations

- **Contrast:** `text-primary` (#EDEDEF) on `bg-canvas` (#0A0A0B) = 17.9:1 (AAA). `text-secondary` on canvas = 7.1:1 (AAA for body). `accent-signal` on canvas = 11.2:1 — safe for text use, not just decoration.
- **Motion:** all orchestrated animations (hero thread, scroll-pinned workflow) must check `prefers-reduced-motion: reduce` and fall back to static end-states instantly, no fade.
- **Focus states:** every interactive element gets a visible 2px `accent-signal` focus ring with 2px offset — never rely on browser default, never remove outline without replacement.
- **Keyboard nav:** command-palette pattern (⌘K) should be a real, functional keyboard shortcut on the actual site, not just a screenshot — reinforces brand promise and helps power users navigate the marketing site itself.
- **Semantic structure:** single `<h1>` in hero, sequential `<h2>` per major section, pillar cards as `<article>` elements with proper heading levels.
- **Alt text:** dashboard preview images need functional alt text describing the actual UI state shown (e.g., "AI review comment on line 42 flagging a potential race condition"), not just "product screenshot."
- **Copy-to-clipboard CTA:** must announce state change via `aria-live="polite"` region ("Copied to clipboard"), not rely on visual checkmark alone.
- **Color independence:** status colors (success/warn/error) always paired with icon + text label, never color alone.

---

## Signature Element Recap

The **single continuous thread line** — appearing as the interactive hero visualization, the problem→solution transition, the pillar grid connector, and the static footer bookend — is the one unifying visual device the whole page is built to be remembered by. It literally *is* the product's value proposition (fragmented tools → one connected line), which is why it earns repetition rather than reading as decoration.