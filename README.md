# Emery

Utilities to help polish the rough parts of TypeScript.

```ts
const isNonNegativeInteger = checkAll(isNonNegative, isInteger);

function getThingByIndex(index: number) {
  assert(isNonNegativeInteger(index), `Expected a non-negative integer, but received "${index}"`);
  /* ... */
}

getThingByIndex(-1.2);
// → TypeError: Expected a non-negative integer, but received "-1.2"
```

[View docs &rarr;](https://emery-ts.vercel.app/)

## Why?

TypeScript is great, we enjoy using it in our projects but there's some parts that are still rough around the edges, especially for those new to the language. Emery improves the developer experience by taking the hassle out of working with ambiguous types, forked logic, error messages, etc.
