import { Button } from '../ui'
import { Container } from '../common'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[var(--bg-canvas)] py-20 sm:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(94,234,212,0.13),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(94,234,212,0.08),transparent_30%)]"
      />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-[rgba(94,234,212,0.16)] bg-[rgba(94,234,212,0.06)] px-3 py-1 font-mono text-[0.75rem] uppercase tracking-[0.18em] text-[var(--text-secondary)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-signal)]" aria-hidden="true" />
              Origin · Open source engineering workspace
            </p>

            <h1 className="mt-6 max-w-xl text-4xl font-semibold tracking-[-0.03em] text-[var(--text-primary)] sm:text-5xl lg:text-[4.5rem] lg:leading-[1.03]">
              The AI-native engineering workspace.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--text-secondary)] sm:text-lg">
              Review code, keep docs in sync, ship deploys, and follow traces in one place without
              changing the tools your team already uses.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button size="lg" href="#product">
                Explore Origin
              </Button>
              <Button variant="ghost" size="lg" href="https://github.com" target="_blank">
                View on GitHub
              </Button>
            </div>

            <p className="mt-6 font-mono text-[0.75rem] tracking-[0.16em] text-[var(--text-tertiary)]">
              1,204 deploys today across 340 repos
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-[rgba(42,42,46,0.8)] bg-[var(--bg-surface)] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.35)] sm:p-5">
            <div className="rounded-[1.25rem] border border-[rgba(94,234,212,0.18)] bg-[var(--bg-surface-raised)] p-5 sm:p-6">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <p className="font-mono text-[0.75rem] uppercase tracking-[0.18em] text-[var(--text-tertiary)]">
                    Thread visualization
                  </p>
                  <h2 className="mt-2 text-lg font-medium tracking-[-0.01em] text-[var(--text-primary)] sm:text-xl">
                    Commit → Review → Docs → Deploy → Trace
                  </h2>
                </div>
                <span className="rounded-full border border-[rgba(42,42,46,0.9)] px-3 py-1 font-mono text-[0.75rem] text-[var(--text-secondary)]">
                  Static preview
                </span>
              </div>

              <div
                role="img"
                aria-label="Placeholder for the unified thread visualization"
                className="relative flex min-h-[19rem] items-center justify-center overflow-hidden rounded-[1rem] border border-[rgba(42,42,46,0.85)] bg-[#0c0c0e] p-5"
              >
                <div className="absolute inset-x-8 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-[rgba(94,234,212,0.6)] to-transparent" />
                <div className="grid w-full gap-3 text-center sm:grid-cols-5 sm:gap-3">
                  {[
                    { label: 'Commit', note: '84fd2c1' },
                    { label: 'Review', note: '3 suggestions' },
                    { label: 'Docs', note: 'synced' },
                    { label: 'Deploy', note: 'preview green' },
                    { label: 'Trace', note: 'p95 +12ms' },
                  ].map((step) => (
                    <div key={step.label} className="flex flex-col items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(94,234,212,0.24)] bg-[rgba(94,234,212,0.08)] text-sm font-medium text-[var(--text-primary)]">
                        {step.label.charAt(0)}
                      </div>
                      <div>
                        <span className="block font-mono text-[0.75rem] uppercase tracking-[0.14em] text-[var(--text-secondary)]">
                          {step.label}
                        </span>
                        <span className="mt-1 block font-mono text-[0.7rem] text-[var(--text-tertiary)]">
                          {step.note}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
