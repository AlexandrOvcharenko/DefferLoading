# Angular Deferred Loading Lab

This is a learning project for practicing Angular deferred loading with `@defer`.

The app is intentionally built as a small sandbox: each card demonstrates one deferred loading
scenario, so you can open DevTools, watch Network requests, and see when Angular loads each lazy
chunk.

## What This Project Demonstrates

- **Idle loading**: loads a recommendations block when the browser becomes idle.
- **Interaction loading**: loads comments after the user clicks or uses the keyboard on a trigger.
- **Hover loading**: loads a profile preview when the user hovers over the trigger.
- **Timer loading**: loads a promo block after a fixed delay.
- **Conditional loading with `when`**: loads admin tools when a signal becomes `true`.
- **Prefetching**: prefetches the report builder on idle, then displays it after interaction.
- **Viewport loading**: loads customer reviews when the user scrolls to that section.

Each deferred payload is a standalone component under:

```text
src/app/deferred/
```

The main examples are wired in:

```text
src/app/app.html
```

## Development

For regular UI development, run:

```bash
npm start
```

Then open:

```text
http://localhost:4200/
```

This is the fastest way to edit the UI, but `ng serve` uses development tooling that can affect how
deferred chunks appear in Network.

## Verifying Deferred Loading

To verify real lazy chunk behavior, use a production build:

```bash
npm run build
npx http-server dist/deferred-loading/browser -p 4201
```

Then open:

```text
http://localhost:4201/
```

Use DevTools Network with cache disabled and interact with each card. You should see separate lazy
chunks load for the deferred payload components.

## Tests

Run unit tests with:

```bash
npm test -- --watch=false
```

## Useful Angular Docs

- [Deferred loading with `@defer`](https://angular.dev/guide/templates/defer)
- [Angular CLI](https://angular.dev/tools/cli)
