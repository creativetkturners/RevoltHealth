# Revolt Healthcare Alliance

A responsive Next.js App Router recreation of the supplied investor landing page.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3000.

## Checks

```sh
npm run lint
npm run typecheck
npm run build
```

## Implementation

- TypeScript with strict checking; React Server Components throughout.
- Optimized, preloaded hero using `next/image`; CSS scales the desktop composition to the reference proportions.
- Responsive layout, native keyboard-accessible navigation menus, visible focus indicators, and a skip link.
- App Router metadata and statically generated supporting navigation pages.
- The quote action opens a contact page with the phone number from the reference. No unconnected lead form or backend is implied.

The original reference is used for the exact header brand crop. The hero artwork is an AI-cleaned background derived from the reference, so artwork can differ slightly. Replace it with the original clean brand asset for a pixel-perfect production match. Supporting pages contain only brief copy based on the reference; supply approved brand content before publishing. Metrics reproduce the screenshot and have not been independently verified.
