# TS Runtime DX

Utility functions to improve TypeScript DX at runtime.

```ts
const isNonNegativeInteger = checkAll(isNonNegative, isInteger);
// → (value: number) => boolean
assert(isNonNegativeInteger(-1));
// → TypeError: Assert failed
assert(isNonNegativeInteger(1.2), `The 'index' argument must be a non-negative integer.`);
// → TypeError: The 'index' argument must be a non-negative integer.
```

## Why TS Runtime DX

TS Runtime DX improves the developer experience of TypeScript by taking the hassle out of working with ambiguous types, forked logic, error messages, etc.

TS Runtime DX's utility functions are great for:

- Casting types to improve usability — [utils](/docs/utils)
- Narrowing & checking types — [checks](/docs/checks) and [guards](/docs/guards)
- Providing human readable error messages — [assertions](/docs/assertions)

{% comment %}

## Related libraries

Libraries that solve similar problems:

- [ts-error-translator](https://github.com/mattpocock/ts-error-translator) — TypeScript errors in plain English
- [runtypes](https://github.com/pelotom/runtypes) — Runtime validation for static types
- [tiny-invariant](https://github.com/alexreardon/tiny-invariant) — A tiny invariant function

{% /comment %}
