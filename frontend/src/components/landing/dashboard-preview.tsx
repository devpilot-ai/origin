import { Activity, BarChart3, CheckCircle2, Clock3, GitBranch, Server, TriangleAlert } from 'lucide-react'

import { Container, Section } from '../common'
import { Button } from '../ui'
import { cn } from '../../lib/cn'

type Metric = {
  label: string
  value: string
  delta: string
  tone: 'success' | 'neutral' | 'warn'
}

type ActivityItem = {
  title: string
  detail: string
  time: string
  icon: typeof Activity
}

type DeploymentItem = {
  name: string
  status: 'healthy' | 'warning' | 'queued'
  detail: string
}

const metrics: Metric[] = [
  { label: 'Deploy frequency', value: '38 / day', delta: '+12%', tone: 'success' },
  { label: 'Lead time', value: '14m 22s', delta: '-8%', tone: 'success' },
  { label: 'Open incidents', value: '2', delta: '+1', tone: 'warn' },
  { label: 'PR throughput', value: '124', delta: '+19', tone: 'neutral' },
]

const activityItems: ActivityItem[] = [
  {
    title: 'Build passed on origin-web',
    detail: 'Commit 84fd2c1 promoted to preview after the test suite cleared.',
    time: '2 min ago',
    icon: CheckCircle2,
  },
  {
    title: 'Latency regression detected',
    detail: 'p95 on /api/search drifted above the baseline after merge.',
    time: '11 min ago',
    icon: TriangleAlert,
  },
  {
    title: 'Branch review updated',
    detail: '3 review notes applied to the diff and synced back to the PR thread.',
    time: '24 min ago',
    icon: GitBranch,
  },
]

const deployments: DeploymentItem[] = [
  {
    name: 'origin-web',
    status: 'healthy',
    detail: 'Preview environment is green and ready to promote.',
  },
  {
    name: 'origin-api',
    status: 'warning',
    detail: 'One flaky integration test is still under observation.',
  },
  {
    name: 'origin-worker',
    status: 'queued',
    detail: 'Waiting for the next deploy window after docs sync completes.',
  },
]

const chartBars = [18, 34, 42, 28, 52, 48, 66, 58, 72, 64, 80, 70]

const toneClasses: Record<Metric['tone'], string> = {
  success: 'text-[var(--status-success)]',
  neutral: 'text-[var(--accent-signal)]',
  warn: 'text-[var(--status-warn)]',
}

const statusClasses: Record<DeploymentItem['status'], string> = {
  healthy: 'text-[var(--status-success)] bg-[rgba(74,222,128,0.12)]',
  warning: 'text-[var(--status-warn)] bg-[rgba(251,191,36,0.12)]',
  queued: 'text-[var(--accent-signal)] bg-[rgba(94,234,212,0.12)]',
}

export function DashboardPreview() {
  return (
    <Section className="border-t border-[var(--border-hairline)] bg-[linear-gradient(180deg,rgba(255,255,255,0.01),rgba(255,255,255,0))] py-20 sm:py-24">
      <div className="flex max-w-2xl flex-col gap-4">
        <p className="font-mono text-[0.8125rem] uppercase tracking-[0.18em] text-[var(--text-tertiary)]">
          Live product preview
        </p>
        <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[var(--text-primary)] sm:text-4xl">
          A modern engineering dashboard, fully mocked.
        </h2>
        <p className="max-w-xl text-base leading-7 text-[var(--text-secondary)]">
          This preview is static by design. It shows the kind of density, status hierarchy, and
          workflow context Origin brings to a single workspace without relying on backend data.
        </p>
      </div>

      <Container className="mt-10">
        <div className="overflow-hidden rounded-[1.75rem] border border-[var(--border-hairline)] bg-[var(--bg-surface)] shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
          <div className="flex flex-col gap-4 border-b border-[var(--border-hairline)] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div>
              <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-[var(--text-tertiary)]">
                Repository snapshot
              </p>
              <h3 className="mt-1 text-lg font-medium text-[var(--text-primary)]">
                origin-web / main
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button variant="secondary" size="sm" className="gap-2">
                <BarChart3 className="h-4 w-4" aria-hidden="true" />
                Metrics
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <Server className="h-4 w-4" aria-hidden="true" />
                Preview env
              </Button>
            </div>
          </div>

          <div className="grid gap-6 p-5 lg:grid-cols-[1.35fr_0.95fr] lg:p-6">
            <div className="grid gap-5">
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {metrics.map((metric) => (
                  <article
                    key={metric.label}
                    className="rounded-[1.25rem] border border-[var(--border-hairline)] bg-[var(--bg-surface-raised)] p-4"
                  >
                    <p className="font-mono text-[0.75rem] uppercase tracking-[0.16em] text-[var(--text-tertiary)]">
                      {metric.label}
                    </p>
                    <div className="mt-3 flex items-end justify-between gap-3">
                      <div className="text-2xl font-semibold tracking-[-0.02em] text-[var(--text-primary)]">
                        {metric.value}
                      </div>
                      <span className={cn('font-mono text-[0.75rem]', toneClasses[metric.tone])}>
                        {metric.delta}
                      </span>
                    </div>
                  </article>
                ))}
              </div>

              <section className="rounded-[1.25rem] border border-[var(--border-hairline)] bg-[var(--bg-surface-raised)] p-4 sm:p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-mono text-[0.75rem] uppercase tracking-[0.16em] text-[var(--text-tertiary)]">
                      Throughput
                    </p>
                    <h4 className="mt-1 text-base font-medium text-[var(--text-primary)]">
                      Deploys and PR activity over the last 12 hours
                    </h4>
                  </div>
                  <div className="rounded-full border border-[var(--border-hairline)] px-3 py-1 font-mono text-[0.75rem] text-[var(--text-secondary)]">
                    Static mock data
                  </div>
                </div>

                <div className="mt-6 flex h-56 items-end gap-2 rounded-[1rem] border border-[var(--border-hairline)] bg-[#0d0d0f] p-4">
                  {chartBars.map((height, index) => (
                    <div key={index} className="flex-1">
                      <div className="mx-auto w-full max-w-[1.1rem] rounded-t-full bg-[linear-gradient(180deg,rgba(94,234,212,0.95),rgba(94,234,212,0.25))]" style={{ height: `${height}%` }} />
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-4 text-xs text-[var(--text-tertiary)]">
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[var(--accent-signal)]" aria-hidden="true" />
                    Deploy volume
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[var(--status-success)]" aria-hidden="true" />
                    PRs merged
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[var(--status-warn)]" aria-hidden="true" />
                    Review queue
                  </span>
                </div>
              </section>
            </div>

            <aside className="grid gap-5">
              <section className="rounded-[1.25rem] border border-[var(--border-hairline)] bg-[var(--bg-surface-raised)] p-4 sm:p-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-mono text-[0.75rem] uppercase tracking-[0.16em] text-[var(--text-tertiary)]">
                      Recent activity
                    </p>
                    <h4 className="mt-1 text-base font-medium text-[var(--text-primary)]">
                      Engineering signal feed
                    </h4>
                  </div>
                  <Activity className="h-4 w-4 text-[var(--text-tertiary)]" aria-hidden="true" />
                </div>

                <div className="mt-5 space-y-4">
                  {activityItems.map((item) => {
                    const Icon = item.icon

                    return (
                      <article key={item.title} className="flex gap-3 rounded-[1rem] border border-[var(--border-hairline)] bg-[#0f0f11] p-3">
                        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[rgba(94,234,212,0.18)] bg-[rgba(94,234,212,0.08)] text-[var(--accent-signal)]">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-3">
                            <h5 className="text-sm font-medium text-[var(--text-primary)]">{item.title}</h5>
                            <span className="shrink-0 font-mono text-[0.7rem] text-[var(--text-tertiary)]">
                              {item.time}
                            </span>
                          </div>
                          <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">{item.detail}</p>
                        </div>
                      </article>
                    )
                  })}
                </div>
              </section>

              <section className="rounded-[1.25rem] border border-[var(--border-hairline)] bg-[var(--bg-surface-raised)] p-4 sm:p-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-mono text-[0.75rem] uppercase tracking-[0.16em] text-[var(--text-tertiary)]">
                      Deployments
                    </p>
                    <h4 className="mt-1 text-base font-medium text-[var(--text-primary)]">
                      Environment health
                    </h4>
                  </div>
                  <Clock3 className="h-4 w-4 text-[var(--text-tertiary)]" aria-hidden="true" />
                </div>

                <div className="mt-5 space-y-3">
                  {deployments.map((deployment) => (
                    <article key={deployment.name} className="rounded-[1rem] border border-[var(--border-hairline)] bg-[#0f0f11] p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h5 className="text-sm font-medium text-[var(--text-primary)]">{deployment.name}</h5>
                          <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">{deployment.detail}</p>
                        </div>
                        <span className={cn('rounded-full px-2.5 py-1 font-mono text-[0.7rem] uppercase tracking-[0.14em]', statusClasses[deployment.status])}>
                          {deployment.status}
                        </span>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            </aside>
          </div>
        </div>
      </Container>
    </Section>
  )
}
