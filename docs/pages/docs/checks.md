---
title: Checks
description: Checks are predicates that cannot easily be expressed as type guards
---

# {% $markdoc.frontmatter.title %}

This library considers "checks" predicates that cannot be expressed as [type guards](/docs/guards), without enforcing some [opaque type](#opaque-types).

## Utils

While the available checks are useful for specific cases, we expose a handful of convenient utility functions to extend their behaviour or create your own purpose-built checks.

### checkAll

Returns a new function for checking _all_ cases against a value, a bit like `pipe` for predicates.

```ts
function checkAll<T>(...predicates: UnaryPredicate<T>[]): (value: T) => boolean;
```

Useful for creating a new predicate that combines all those provided, which can be called elsewhere in your program.

```ts
import { checkAll, isNonNegative, isInteger } from 'ts-runtime-dx';

export const isNonNegativeInteger = checkAll(isNonNegative, isInteger);
```

When combined with [assertions](/docs/assertions), checks become incredibly powerful for simplifying logic.

```ts
import { assert } from 'ts-runtime-dx';
import { isNonNegativeInteger } from './path-to/check';

function getThingByIndex(index: number) {
  assert(isNonNegativeInteger(index));

  // safely use `index`
  return things[index];
}
```

### checkAllWith

Apply _all_ checks against a value.

```ts
function checkAllWith<T>(value: T, ...predicates: UnaryPredicate<T>[]): boolean;
```

Useful for calling predicates immediately:

```ts
function getThingByIndex(index: number) {
  assert(checkAllWith(index, isNonNegative, isInteger));

  // safely use `index`
  return things[index];
}
```

### negate

Returns a new negated version of the stated predicate function.

```ts
function negate<T>(predicate: UnaryPredicate<T>): (value: T) => boolean;
```

Useful for inverting an existing predicate:

```ts
const isEven = (value: number) => value % 2 === 0;
const isOdd = negate(isEven);
```

## Number

Common checks for `number` types.

### isFinite

Checks whether a number is a finite

### isInfinite

Checks whether a number is a infinite

### isInteger

Checks whether a number is an integer

### isFloat

Checks whether a number is a float

### isEven

Checks whether a number is even

### isOdd

Checks whether a number is odd

### isNegativeZero

Checks whether a number is negative zero

### isNegative

Checks whether a number is negative

### isPositive

Checks whether a number is positive

### isNonNegative

Checks whether a number is non-negative

### isNonPositive

Checks whether a number is non-positive

## Opaque types

In TypeScript, types are transparent by default — if two types are structurally identical they are deemed to be compatible. For example:

```ts
type Username = string;
type Password = string;
```

`Username` and `Password` are both strings, so they are equivalent as far as TypeScript is concerned, even though they represent different concepts. Transparent types can ensure type safety, but they don’t encode any information about the program semantics.

An opaque type's true structure is obfuscated to the compiler at compile-time. The tend to look something like:

```ts
type SomeType = string & { __opaque: 'SomeType' };

function createSomeType(input: string): SomeType {
  // validation logic
  // - pass: return `input` with type assertion
  // - fail: throw error
}
```

While we recommend opaque types where appropriate, we can't make assumptions about your program's requirements.
