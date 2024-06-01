---
title: Type guards
description: Common guards for narrowing the type of a value
---

# {% $markdoc.frontmatter.title %}

Type guards allow you to [narrow the type](https://www.typescriptlang.org/docs/handbook/2/narrowing.html) of a value:

```ts
function doThing(x: number | string) {
  if (typeof x === 'string') {
    // `x` is string
    return x.substring(1);
  }

  // `x` is number
  return x * x;
}
```

## Primitive

Guards for [primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) types.

### isBoolean

Checks whether a value is `boolean`.

```ts
function isBoolean(value: unknown): value is boolean;
```

### isNull

Checks whether a value is `null`.

```ts
function isNull(value: unknown): value is null;
```

### isNumber

Checks whether a value is a `number`.

{% callout tone="warning" %}
Does not consider `NaN` a valid value
{% /callout %}

```ts
function isNumber(value: unknown): value is number;
```

### isString

Checks whether a value is a `string`.

```ts
function isString(value: unknown): value is string;
```

### isUndefined

Checks whether a value is `undefined`.

```ts
function isUndefined(value: unknown): value is undefined;
```

## Nullish

Guards for [nullish](https://developer.mozilla.org/en-US/docs/Glossary/Nullish) types.

### isNullish

Checks whether a value is `null` or `undefined`.

```ts
function isNullish(value: unknown): value is Nullish;
```

### isDefined

Checks whether a value is **not** `null` or `undefined`.

```ts
function isDefined<T>(value: T | Nullish): value is NonNullable<T>;
```

## Array

Guards for [array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) types.

### isNonEmptyArray

Checks whether an array is **not** empty.

```ts
function isNonEmptyArray<T>(value: T[]): value is [T, ...T[]];
```

## Promise

Guards for [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) related types.

### isFulfilled

Checks whether a result from [`Promise.allSettled`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled) is fulfilled

```ts
function isFulfilled<T>(result: PromiseSettledResult<T>): result is PromiseFulfilledResult<T>;
```

```ts
const results = await Promise.allSettled(promises);
const fulfilledValues = results.filter(isFulfilled).map(result => result.value);
```

### isRejected

Checks whether a result from [`Promise.allSettled`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled) is rejected.

```ts
function isRejected(result: PromiseSettledResult<unknown>): result is PromiseRejectedResult;
```

```ts
const results = await Promise.allSettled(promises);
const rejectionReasons = results.filter(isRejected).map(result => result.reason);
```
