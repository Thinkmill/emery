---
title: Checks
description: Utilities for dealing with ambiguous types
---

# {% $markdoc.frontmatter.title %}

Emery considers "checks" predicates that cannot be expressed as [type guards](/docs/guards), without enforcing [opaque types](/docs/opaques). While we recommend opaque types where appropriate, we can't make assumptions about your program's requirements.

## Utils

While the available checks are useful for specific cases, we expose a handful of convenient utility functions to extend their behaviour or create your own purpose-built checks.

### checkAll

Returns a new function for checking _all_ cases against a value, a bit like `pipe` for predicates.

```ts
function checkAll<T>(...predicates: UnaryPredicate<T>[]): UnaryPredicate<T>;
```

Useful for creating a new predicate that combines all those provided, which can be called elsewhere in your program.

```ts
import { checkAll, isNonNegative, isInteger } from 'emery';

export const isNonNegativeInteger = checkAll(isNonNegative, isInteger);
```

When combined with [assertions](/docs/assertions), checks become incredibly powerful for simplifying logic.

```ts
import { assert } from 'emery';
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
function negate<T>(predicate: UnaryPredicate<T>): UnaryPredicate<T>;
```

Useful for inverting an existing predicate:

```ts
const hasSpaces = (value: string) => /\s/g.test(value);
const hasNoSpaces = negate(hasSpaces);
```

## Number

Common checks for `number` types.

### isFinite

Checks whether a number is finite.

```ts
isFinite(1); // → true
isFinite(Number.POSITIVE_INFINITY); // → false
isFinite(Number.NEGATIVE_INFINITY); // → false
```

### isInfinite

Checks whether a number is infinite.

```ts
isInfinite(Number.POSITIVE_INFINITY); // → true
isInfinite(Number.NEGATIVE_INFINITY); // → true
isInfinite(1); // → false
```

### isInteger

Checks whether a number is an integer.

```ts
isInteger(1); // → true
isInteger(Number.MAX_SAFE_INTEGER); // → true
isInteger(1.2); // → false
```

### isFloat

Checks whether a number is a float.

```ts
isFloat(1.2); // → true
isFloat(-1.2); // → true
isFloat(1); // → false
```

### isEven

Checks whether a number is even.

```ts
isEven(2); // → true
isEven(-2); // → true
isEven(1); // → false
```

### isOdd

Checks whether a number is odd.

```ts
isOdd(1); // → true
isOdd(-1); // → true
isOdd(2); // → false
```

### isNegativeZero

Checks whether a number is negative zero.

```ts
isNegativeZero(-0); // → true
isNegativeZero(0); // → false
isNegativeZero(1); // → false
```

### isNegative

Checks whether a number is negative.

```ts
isNegative(-1); // → true
isNegative(0); // → false
isNegative(1); // → false
```

### isPositive

Checks whether a number is positive.

```ts
isPositive(1); // → true
isPositive(0); // → false
isPositive(-1); // → false
```

### isNonNegative

Checks whether a number is **not** negative.

```ts
isNonNegative(1); // → true
isNonNegative(0); // → true
isNonNegative(-1); // → false
```

### isNonPositive

Checks whether a number is **not** positive.

```ts
isNonPositive(-1); // → true
isNonPositive(0); // → true
isNonPositive(1); // → false
```
