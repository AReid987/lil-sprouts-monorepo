# Lil Sprouts Monorepo

Turborepo monorepo for Little Sprouts Daycare.

## Apps

| App | Description |
|---|---|
| `apps/web` | Public-facing landing page |
| `apps/dashboard` | Internal dashboard (brand book, design system, research) |

## Packages

| Package | Description |
|---|---|
| `packages/ui` | Shared design tokens and base components |
| `packages/content` | Brand copy, research data, program info |

## Development

```bash
pnpm install
pnpm dev          # run all apps
pnpm dev --filter web       # landing page only (localhost:3000)
pnpm dev --filter dashboard # dashboard only (localhost:3001)
pnpm build        # production build
```
