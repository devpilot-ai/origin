import { useEffect, useId, useState } from 'react'
import type { HTMLAttributes } from 'react'

import { Button } from '../ui'
import { LogoMark } from '../common'
import { cn } from '../../lib/cn'
import './navbar.css'

type NavItem = {
  label: string
  href: string
}

type NavbarProps = HTMLAttributes<HTMLElement> & {
  brandLabel?: string
  brandHref?: string
  product?: NavItem
  docs?: NavItem
  github?: NavItem
  star?: NavItem
}

const defaultItems = {
  brandLabel: 'Origin',
  brandHref: '#top',
  product: { label: 'Product', href: '#product' },
  docs: { label: 'Docs', href: '#dashboard' },
  github: { label: 'GitHub', href: 'https://github.com' },
  star: { label: 'Star', href: 'https://github.com' },
} satisfies Required<Pick<NavbarProps, 'brandLabel' | 'brandHref' | 'product' | 'docs' | 'github' | 'star'>>

export function Navbar({
  brandLabel = defaultItems.brandLabel,
  brandHref = defaultItems.brandHref,
  product = defaultItems.product,
  docs = defaultItems.docs,
  github = defaultItems.github,
  star = defaultItems.star,
  className,
  ...props
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuId = useId()

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 80)
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = ''
      }
    }

    document.body.style.overflow = ''
    return undefined
  }, [menuOpen])

  return (
    <header
      className={cn('navbar', isScrolled && 'navbar--scrolled', className)}
      {...props}
    >
      <div className="navbar__inner">
        <a className="navbar__brand" href={brandHref} aria-label={brandLabel}>
          <span className="navbar__mark" aria-hidden="true">
            <LogoMark />
          </span>
          <span className="navbar__brand-text">{brandLabel}</span>
        </a>

        <nav className="navbar__nav" aria-label="Primary">
          <a className="navbar__link" href={product.href}>
            {product.label}
          </a>
          <a className="navbar__link" href={docs.href}>
            {docs.label}
          </a>
          <a className="navbar__link" href={github.href} rel="noreferrer noopener">
            {github.label}
          </a>
        </nav>

        <div className="navbar__actions">
          <Button
            type="button"
            href={star.href}
            target="_blank"
            variant="secondary"
            size="sm"
            className="navbar__star navbar__star--desktop"
            aria-label={`Star Origin on GitHub`}
          >
            {star.label}
          </Button>
          <button
            type="button"
            className="navbar__menu-toggle"
            aria-expanded={menuOpen}
            aria-controls={menuId}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span aria-hidden="true" className="navbar__menu-icon" />
          </button>
        </div>
      </div>

      <div
        id={menuId}
        className={cn('navbar__mobile-panel', menuOpen && 'navbar__mobile-panel--open')}
        hidden={!menuOpen}
      >
        <nav className="navbar__mobile-nav" aria-label="Primary mobile">
          <a className="navbar__mobile-link" href={product.href} onClick={() => setMenuOpen(false)}>
            {product.label}
          </a>
          <a className="navbar__mobile-link" href={docs.href} onClick={() => setMenuOpen(false)}>
            {docs.label}
          </a>
          <a
            className="navbar__mobile-link"
            href={github.href}
            rel="noreferrer noopener"
            onClick={() => setMenuOpen(false)}
          >
            {github.label}
          </a>
          <a className="navbar__mobile-link navbar__mobile-link--accent" href={star.href} onClick={() => setMenuOpen(false)}>
            {star.label}
          </a>
        </nav>
      </div>
    </header>
  )
}
