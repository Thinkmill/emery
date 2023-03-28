# Emery

<a href="https://emery-ts.vercel.app/">
  <img src=".github/assets/banner.svg" alt="Polish for the rough parts of TypeScript" />
</a>
<p>
  <a aria-label="NPM version" href="https://www.npmjs.com/package/emery.svg">
    <img alt="" src="https://img.shields.io/npm/v/emery.svg?style=for-the-badge&labelColor=0869B8">
  </a>
  <a aria-label="License" href="#">
    <img alt="" src="https://img.shields.io/npm/l/emery.svg?style=for-the-badge&labelColor=579805">
  </a>
  <a aria-label="Website" href="https://emery-ts.vercel.app/">
    <img src="https://img.shields.io/badge/Website-2F6BFF.svg?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWdsb2JlIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCI+PC9jaXJjbGU+PGxpbmUgeDE9IjIiIHkxPSIxMiIgeDI9IjIyIiB5Mj0iMTIiPjwvbGluZT48cGF0aCBkPSJNMTIgMmExNS4zIDE1LjMgMCAwIDEgNCAxMCAxNS4zIDE1LjMgMCAwIDEtNCAxMCAxNS4zIDE1LjMgMCAwIDEtNC0xMCAxNS4zIDE1LjMgMCAwIDEgNC0xMHoiPjwvcGF0aD48L3N2Zz4=&labelColor=0737ad&locoColor=white&logoWidth=0">
  </a>
  <a aria-label="Thinkmill Logo" href="https://www.thinkmill.com.au/open-source?utm_campaign=github-emery">
    <img src="https://img.shields.io/badge/A%20Thinkmill%20Project-ed0000.svg?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTg2IiBoZWlnaHQ9IjU4NiIgdmlld0JveD0iMCAwIDU4NiA1ODYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xOTk2XzQwNikiPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTU4NiAyOTNDNTg2IDQ1NC44MTkgNDU0LjgxOSA1ODYgMjkzIDU4NkMxMzEuMTgxIDU4NiAwIDQ1NC44MTkgMCAyOTNDMCAxMzEuMTgxIDEzMS4xODEgMCAyOTMgMEM0NTQuODE5IDAgNTg2IDEzMS4xODEgNTg2IDI5M1pNMjA1Ljc3NiAzNTguOTQ0QzE5MS4zNzYgMzU4Ljk0NCAxODUuOTA0IDM1Mi4zMiAxODUuOTA0IDMzNS45MDRWMjYyLjc1MkgyMTQuNDE2VjIzNy42OTZIMTg1LjkwNFYyMDEuMTJIMTUzLjA3MlYyMzcuNjk2SDEyOC41OTJWMjYyLjc1MkgxNTMuMDcyVjM0MC44QzE1My4wNzIgMzcyLjc2OCAxNjYuNjA4IDM4NS43MjggMTk3LjQyNCAzODUuNzI4QzIwMy40NzIgMzg1LjcyOCAyMTAuOTYgMzg0LjU3NiAyMTUuODU2IDM4My4xMzZWMzU3LjUwNEMyMTMuNTUyIDM1OC4zNjggMjA5LjUyIDM1OC45NDQgMjA1Ljc3NiAzNTguOTQ0Wk00MDcuMzc2IDIzNC4yNEMzODUuMiAyMzQuMjQgMzcxLjA4OCAyNDQuMDMyIDM2MC40MzIgMjYwLjczNkMzNTIuOTQ0IDI0My40NTYgMzM3LjM5MiAyMzQuMjQgMzE3LjIzMiAyMzQuMjRDMjk5Ljk1MiAyMzQuMjQgMjg2Ljk5MiAyNDEuMTUyIDI3Ni42MjQgMjU1LjI2NEgyNzYuMDQ4VjIzNy42OTZIMjQ0LjY1NlYzODRIMjc3LjQ4OFYzMDUuNjY0QzI3Ny40ODggMjc3LjQ0IDI4OC43MiAyNjAuNzM2IDMwOC4zMDQgMjYwLjczNkMzMjUuMjk2IDI2MC43MzYgMzM0LjUxMiAyNzIuODMyIDMzNC41MTIgMjkzLjU2OFYzODRIMzY3LjM0NFYzMDUuMDg4QzM2Ny4zNDQgMjc3LjE1MiAzNzguODY0IDI2MC43MzYgMzk4LjE2IDI2MC43MzZDNDE0LjU3NiAyNjAuNzM2IDQyNC42NTYgMjcxLjEwNCA0MjQuNjU2IDI5Ny4wMjRWMzg0SDQ1Ny40ODhWMjkzLjg1NkM0NTcuNDg4IDI1NC40IDQzOC40OCAyMzQuMjQgNDA3LjM3NiAyMzQuMjRaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzE5OTZfNDA2Ij4KPHJlY3Qgd2lkdGg9IjU4NiIgaGVpZ2h0PSI1ODYiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==&labelColor=C60200&locoColor=white&logoWidth=0">
  </a>
</p>

---

💎 Polish for the rough parts of TypeScript.

TypeScript is great but there's parts that are still rough around the edges, especially for developers who are new to the language.

## Purpose and intent

Emery is a small collection of utilities that improve DX without compromising static types.

### Check for ambiguous types

Emery exposes "checks" for dealing with ambiguous types.

Checks are just predicates that can't be expressed as type guards, without enforcing opaque types.

```ts
import { checkAll, isNonNegative, isInteger } from 'emery';

/**
 * Along with some default check functions, we provide helpers
 * for managing combinations. The `checkAll` helper is a bit
 * like `pipe` for predicates.
 */
export const isNonNegativeInteger = checkAll(isNonNegative, isInteger);
```

### Assert the validity of props

An assertion declares that a condition be true before executing subsequent code, ensuring that whatever condition is checked must be true for the remainder of the containing scope.

```ts
import { assert } from 'emery';

import { isNonNegativeInteger } from './path-to/check';

function getThingByIndex(index: number) {
  assert(isNonNegativeInteger(index));

  return things[index]; // 🎉 Safely use the `index` argument!
}
```

### Smooth over loose types

Utility functions for smoothing over areas of TypeScript that are loosely typed.

Because of JavaScript's dynamic implementation the default TS behaviour is correct, but can be frustrating in certain situations.

```ts
import { typedKeys } from 'emery';

const obj = { foo: 1, bar: 2 };

const thing = Object.keys(obj).map(key => {
  return obj[key]; // 🚨 'string' can't be used to index...
});
const thing2 = typedKeys(obj).map(key => {
  return obj[key]; // 🎉 No more TypeScript issues!
});
```

## Philosophy and motivation

Like all good things, Emery started with curiosity. At [Thinkmill](https://thinkmill.com.au/) we have an internal Slack channel for TypeScript where a question was raised about how to offer consumers error messages that convey intent, not just cascading type failures.

While that's not currently possible, it became apparent that there was demand for a solution. We also discovered that many developers were carrying around miscellaneous utilities for working with TypeScript between projects.

---

## License

Copyright (c) 2023
[Thinkmill Labs](https://www.thinkmill.com.au/labs?utm_campaign=github-emery)
Pty Ltd. Licensed under the MIT License.
