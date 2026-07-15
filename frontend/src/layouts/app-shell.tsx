import type { ReactNode } from 'react'

import { SiteLayout } from './site-layout'

type AppShellProps = {
  header?: ReactNode
  footer?: ReactNode
  children?: ReactNode
}

export function AppShell({ header, footer, children }: AppShellProps) {
  return (
    <SiteLayout header={header} footer={footer}>
      <div className="min-h-screen">{children}</div>
    </SiteLayout>
  )
}
