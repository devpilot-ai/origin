import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

import { cn } from '../../lib/cn'

type ButtonVariant = 'default' | 'secondary' | 'ghost'
type ButtonSize = 'default' | 'sm' | 'lg'

type SharedButtonProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
}

type ButtonAsButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  SharedButtonProps & {
    href?: undefined
  }

type ButtonAsLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  SharedButtonProps & {
    href: string
  }

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps

const variantClasses: Record<ButtonVariant, string> = {
  default:
    'bg-[var(--accent-signal)] text-[#071013] shadow-[0_0_0_1px_rgba(94,234,212,0.2)] hover:bg-[rgba(94,234,212,0.88)]',
  secondary:
    'border border-[var(--border-hairline)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:border-[rgba(94,234,212,0.45)] hover:bg-[var(--bg-surface-raised)]',
  ghost:
    'bg-transparent text-[var(--text-primary)] hover:bg-white/5 hover:text-white',
}

const sizeClasses: Record<ButtonSize, string> = {
  default: 'h-11 px-5 text-sm',
  sm: 'h-9 px-4 text-sm',
  lg: 'h-12 px-6 text-base',
}

export function Button({
  className,
  variant = 'default',
  size = 'default',
  children,
  ...props
}: ButtonProps) {
  const sharedClassName = cn(
    'inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-signal)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-canvas)] disabled:pointer-events-none disabled:opacity-50 hover:-translate-y-0.5 active:translate-y-0',
    variantClasses[variant],
    sizeClasses[size],
    className,
  )

  if ('href' in props && props.href) {
    const { href, target, rel, ...anchorProps } = props

    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? rel ?? 'noreferrer noopener' : rel}
        className={sharedClassName}
        {...anchorProps}
      >
        {children}
      </a>
    )
  }

  const { type: buttonType = 'button', ...buttonProps } = props as ButtonAsButtonProps

  return (
    <button
      type={buttonType}
      className={sharedClassName}
      {...buttonProps}
    >
      {children}
    </button>
  )
}
