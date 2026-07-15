import type { HTMLAttributes, ReactNode } from 'react'

import { cn } from '../../lib/cn'
import { Container } from './container'

type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode
}

export function Section({ className, children, ...props }: SectionProps) {
  return (
    <section className={cn('py-16 md:py-24', className)} {...props}>
      <Container>{children}</Container>
    </section>
  )
}
