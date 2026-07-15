import type { ReactNode } from 'react'

export type LayoutSlot = ReactNode

export type LayoutChrome = {
  header?: LayoutSlot
  footer?: LayoutSlot
}
