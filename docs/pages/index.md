---
title: Documentation
description: Utilities to help polish the parts of TypeScript that are a bit rough.
---

# Utilities to help polish the parts of TypeScript that are a bit rough.

Emery is a collection of functions and types that offer an approach to TypeScript development that improves DX without compromising static types.

```ts
const isNonNegativeInteger = checkAll(isNonNegative, isInteger);

function getThingByIndex(index: number) {
  assert(isNonNegativeInteger(index), `Expected a non-negative integer, but received "${index}"`);
  /* ... */
}

getThingByIndex(-1.2);
// → TypeError: Expected a non-negative integer, but received "-1.2"
```

[View docs &rarr;](/docs)

## Why?

TypeScript is great, we enjoy using it in our projects but there's some parts that are still rough around the edges, especially for those new to the language. Emery improves the developer experience by taking the hassle out of working with ambiguous types, forked logic, error messages, etc.

{% comment %}

Emery's utility functions are great for:

- Casting types to improve usability — [utils](/docs/utils)
- Narrowing & checking types — [checks](/docs/checks) and [guards](/docs/guards)
- Providing a better developer experience — [assertions](/docs/assertions)

{% /comment %}
