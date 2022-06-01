---
title: Documentation
description: Utilities to help polish the rough parts of TypeScript
---

# Polish the rough parts of TypeScript

TypeScript is great, but there are some parts that are still rough around the edges, especially for developers who are new to the language.

## What?

**Emery** is a collection of utility functions and types that improve **TypeScript DX** (Developer Experience) by taking the hassle out of working with ambiguous types, forked logic, error messages, and more &mdash; without compromising static types.

```ts
const isNonNegativeInteger = checkAll(isNonNegative, isInteger);

function getThingByIndex(index: number) {
  assert(isNonNegativeInteger(index), `Expected a non-negative integer, but received "${index}"`);
  /* ... */
}

getThingByIndex(-1.2);
// → TypeError: Expected a non-negative integer, but received "-1.2"
```

[Read the docs &rarr;](/docs)

## Why?

We wanted an approach to TypeScript development that improves DX without compromising static types. At [Thinkmill](https://www.thinkmill.com.au) we collaborate on many large applications and design systems, and we've learned that removing any obstacle to quality engineering is a big win.

So with this in mind, we built Emery to polish "TypeScript the rough parts".

[Read the origin story](/docs/origin-story) for more information about both the problem and solution.

Like it? ⭐️ [Star Emery on GitHub](https://github.com/thinkmill/emery)!
