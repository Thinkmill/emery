---
title: Documentation
description: Utilities to help polish the parts of TypeScript that are a bit rough.
---

# Polish the rough parts of TypeScript

TypeScript is great, but there are some parts that are still rough around the edges, especially for developers who are new to the language.

**Emery** is a collection of utility functions and types that improve **TypeScript DX** (Developer Experience) by taking the hassle out of working with ambiguous types, forked logic, error messages, and more – without compromising static types.

## Like this:

```ts
const isNonNegativeInteger = checkAll(isNonNegative, isInteger);

function getThingByIndex(index: number) {
  assert(isNonNegativeInteger(index), `Expected a non-negative integer, but received "${index}"`);
  /* ... */
}

getThingByIndex(-1.2);
// → TypeError: Expected a non-negative integer, but received "-1.2"
```

{% comment %}

Emery's utility functions are great for:

- Casting types to improve usability — [utils](/docs/utils)
- Narrowing & checking types — [checks](/docs/checks) and [guards](/docs/guards)
- Providing a better developer experience — [assertions](/docs/assertions)

{% /comment %}

[Read the docs &rarr;](/docs)

## Why?

The seed was planted by this simple Slack message:

> Is there a way to “optimise” the errors returned from TS?

The discussion that followed confirmed a desire for an approach to TypeScript development that improves DX without compromising static types. At Thinkmill we collaborate on many large applications and design systems, and we've learned that so removing any obstacle to quality engineering is a big win.

So with this in mind, we built Emery to polish "TypeScript the rough parts". Read more about both the problem and solution in [Emery's Origin Story](/docs/origin-story)


