import type { HTMLAttributes, ReactNode } from 'react'

import { cn } from '../lib/cn'

type SiteLayoutProps = HTMLAttributes<HTMLDivElement> & {
  header?: ReactNode
  footer?: ReactNode
  children?: ReactNode
}

export function SiteLayout({
  header,
  footer,
  children,
  className,
  ...props
}: SiteLayoutProps) {
  return (
    <div className={cn('min-h-screen bg-canvas text-primary', className)} {...props}>
      {header ? <header>{header}</header> : null}
      <main>{children}</main>
      {footer ? <footer>{footer}</footer> : null}
    </div>
  )
}
