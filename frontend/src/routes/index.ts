export type RoutePath = '/' | '/docs' | '/pricing' | '/changelog'

export const routePaths = {
  home: '/',
  docs: '/docs',
  pricing: '/pricing',
  changelog: '/changelog',
} as const satisfies Record<string, RoutePath>
