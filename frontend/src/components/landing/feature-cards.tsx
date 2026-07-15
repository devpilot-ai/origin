import {
  Activity,
  BookOpen,
  GitPullRequest,
  Rocket,
  Workflow,
} from 'lucide-react'

import { Section } from '../common'
import { FeatureCard } from './feature-card'

const featureCards = [
  {
    icon: GitPullRequest,
    title: 'Review',
    description: 'AI-assisted PR review with inline reasoning that stays tied to the diff, not the whole repo.',
    proof: 'src/api.ts  +14 / -3  // Suggested refactor reduces edge-case handling',
  },
  {
    icon: BookOpen,
    title: 'Docs',
    description: 'Documentation that stays in sync with the codebase and can be updated without breaking flow.',
    proof: 'docs/release-notes.md  synced from the latest merge',
  },
  {
    icon: Rocket,
    title: 'Deploy',
    description: 'Preview environments per PR with one-click promotion once the change is ready.',
    proof: 'preview/origin-web  ready for production promotion',
  },
  {
    icon: Activity,
    title: 'Observe',
    description: 'Traces and logs linked back to the originating commit so production signals stay contextual.',
    proof: 'trace p95 +12ms after merge  // commit 84fd2c1',
  },
  {
    icon: Workflow,
    title: 'Workflows',
    description: 'The glue layer that connects review, docs, deploy, and observability into one workflow.',
    proof: 'automation/origin-ship  5-step thread connected',
  },
] as const

export function FeatureCards() {
  return (
    <Section
      id="product"
      className="border-t border-[rgba(42,42,46,0.7)] bg-[linear-gradient(180deg,rgba(255,255,255,0.01),rgba(255,255,255,0))] py-20 sm:py-24"
    >
      <div className="flex max-w-2xl flex-col gap-3">
        <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-[var(--text-tertiary)]">
          Product pillars
        </p>
        <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[var(--text-primary)] sm:text-4xl">
          Five modules, one connected workflow.
        </h2>
        <p className="max-w-xl text-base leading-7 text-[var(--text-secondary)]">
          Origin packages the most important engineering tasks into a single surface, so the
          handoff between review, docs, deploy, observe, and automation never feels fractured.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {featureCards.map((card) => (
          <FeatureCard
            key={card.title}
            icon={card.icon}
            title={card.title}
            description={card.description}
            proof={card.proof}
          />
        ))}
      </div>
    </Section>
  )
}
