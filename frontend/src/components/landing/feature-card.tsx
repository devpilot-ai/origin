import type { LucideIcon } from 'lucide-react'

import { cn } from '../../lib/cn'

type FeatureCardProps = {
  icon: LucideIcon
  title: string
  description: string
  proof: string
  className?: string
}

export function FeatureCard({ icon: Icon, title, description, proof, className }: FeatureCardProps) {
  return (
    <article
      className={cn(
        'group rounded-[1.5rem] border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-6 shadow-[0_1px_0_rgba(255,255,255,0.02)_inset] transition-colors hover:border-[rgba(94,234,212,0.35)] hover:bg-[var(--bg-surface-raised)]',
        className,
      )}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(94,234,212,0.18)] bg-[rgba(94,234,212,0.08)] text-[var(--accent-signal)]">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>

      <h3 className="mt-5 text-lg font-medium tracking-[-0.01em] text-[var(--text-primary)]">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{description}</p>

      <p className="mt-5 rounded-xl border border-[var(--border-hairline)] bg-[#101012] px-4 py-3 font-mono text-[0.8125rem] leading-6 text-[var(--text-primary)]">
        {proof}
      </p>
    </article>
  )
}
