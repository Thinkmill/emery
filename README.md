# Emery

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
