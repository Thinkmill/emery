# ts-runtime-dx

Utility functions to improve TypeScript DX at runtime.

## Why?

TypeScript errors are famously cryptic. There's articles about [how to understand them](https://betterprogramming.pub/understanding-typescript-errors-for-beginners-65d15f3e3561), some pioneering [libraries attempting to give insights](https://github.com/mattpocock/ts-error-translator) into these arcane texts, and [a page on the TS docs](https://www.typescriptlang.org/docs/handbook/2/understanding-errors.html) dedicated to interpreting error messages.

Granted, they've have gotten better over time, and we hope they continue to do so. It makes you wonder though, what if there was a simple way to improve the experience of your consumers today?

## What?

### What it is NOT

This is not a library of utility types, that problem is [largely](https://github.com/sindresorhus/type-fest) [solved](https://github.com/millsp/ts-toolbelt).

This is not, in any way, a replacement for static types. We expect this library to complement your TS implementations.

### What it is

This library is an experiment to see if we can patch "the parts that TS forgot", without sacrificing the developer experience. When you encounter a type error the last thing you need is more work, researching some mysterious incantation. You should be presented with a message that tells you exactly what went wrong, and ideally how to fix it.

Consider this contrived code snippet:

```ts
function getThingByIndex(index: number) {
  const things = ['foo', 'bar', 'baz'];
  return things[index];
}
```

There's already bugs, that was quick! The consumer can supply an "index" of `1.23` or `-5`, while adhering to the type declaration. An `integer` type would be nice, but it doesn't solve the problem. We could write [some fancy type](https://www.typescriptlang.org/play?#code/C4TwDgpgBAcg9gOxhA5gQ2ASwG4QJILCoQBOAPACpQQAeRCAJgM5QICuAtgEakB8UAXgBQUUa048S1OhEYsqIsUoD8rCLimKlogFxQABgBIA3hQC++6fWYGAtCabASmBCgtQAPgYdOXbgHQ+zq4WWtoqahpQYeG6UBQA3EJCAGZsCADGWIhQKBDAFAAWfgBCIAQMtGQwVrI27Nx8ABQulTR68EioGDj4hMTkMLwAlFDGihmIjlDAxa4sAlAA2gDkKXBwKwA0UCtcaCTbu-sAXisAuook+WwkCDNzKExLrbSXZsmTCExwADYQ-l+cBQTTyBUeZQqtCaAEZhsMhF8fv9AcDQfkiqVyoxobYAKzwxFTP4AoEgsGY1yQnE0WH+ABMAGZ4UA) that accurately expresses the intent:

<!-- prettier-ignore -->
```ts
type NonNegativeInteger<T extends number> = number extends T
  ? never
  : `${T}` extends `-${string}` | `${string}.${string}`
    ? never
    : T;
```

<!-- prettier-ignore-end -->

...but the errors are almost impossible to decipher. Nobody deserves this in their day:

> Argument of type 'number' is not assignable to parameter of type 'never'.

## How?

Static type checking should always be the source-of-truth. However, we can also surface a more palatable error message for consumers. A potential approach might be:

```ts
function getThingByIndex<N extends number>(index: NonNegativeInteger<N>) {
  typeInvariant(
    isNonNegativeInteger(index),
    `The 'index' argument must be a non-negative integer.`
  );
  ...
}
```

Which would yield a runtime error in development.

> The 'index' argument must be a non-negative integer.

That's a bit easier to understand, right?

## Who?

It's expected that this library will mainly be useful for authors that must employ complex types, whose audience aren't necessarily TypeScript experts.

The desire for an alternative approach was born from maintaining design system component libraries. In an environment that's already rife with obstacles it's prudent to mitigate friction wherever possible. Over the lifetime of a project, you're also likely to save a bunch of time by avoiding questions about obscure TS error messages.
