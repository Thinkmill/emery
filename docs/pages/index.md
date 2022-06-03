---
title: Polish for the rough parts of TypeScript
description: Emery is a collection of utilities that improve DX without compromising static types.
---

{% hero prominence="primary" %}

# Polish for the rough parts of TypeScript

TypeScript is great, but there are some parts that are still rough around the edges, especially for developers who are new to the language.

{% /hero %}

{% hero %}

## Emery is a collection of utilities that improve DX without compromising static types.

{% /hero %}

{% feature reverse=true %}

### Check for ambiguous types

Emery exposes ["checks"](/docs/checks) for dealing with ambiguous types.

Checks are just predicates that can't be expressed as [type&nbsp;guards](/docs/guards), without enforcing [opaque&nbsp;types](/docs/opaques).

```ts
import { checkAll, isNonNegative, isInteger } from 'emery';

/**
 * Along with some default check functions, we provide helpers
 * for managing combinations. The `checkAll` helper is a bit
 * like `pipe` for predicates.
 */
export const isNonNegativeInteger = checkAll(isNonNegative, isInteger);
```

{% /feature %}

{% feature %}

### Assert the validity of props

An [assertion](/docs/assertions) declares that a condition be true before executing subsequent code, ensuring that whatever condition is checked must be true for the remainder of the containing scope.

```ts
import { assert } from 'emery';

import { isNonNegativeInteger } from './path-to/check';

function getThingByIndex(index: number) {
  assert(isNonNegativeInteger(index));

  return things[index]; // 🎉 Safely use the `index` argument!
}
```

{% /feature %}

{% feature reverse=true %}

### Smooth over loose types

[Utility functions](/docs/utils) for smoothing over areas of TypeScript that are _loosely_ typed.

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

{% /feature %}

{% hero prominence="secondary" %}

## Emery is deliberate and streamlined

Emery is the distillation of utilities we found ourselves copying between TypeScript projects at [Thinkmill](https://thinkmill.com.au). There's a few libraries that solve similar problems but they often provide too little or too much.

[Read the origin story](/docs/origin-story) for information about how we arrived here.

{% /hero %}
