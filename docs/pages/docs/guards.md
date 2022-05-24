---
title: Guards
description: Common guards for narrowing the type of a value
---

# {% $markdoc.frontmatter.title %}

Type guards allow you to [narrow the type](https://www.typescriptlang.org/docs/handbook/2/narrowing.html) of a value:

```ts
function doSomething(x: number | string) {
  if (isString(x)) {
    // `x` is string
    return x.substr(1);
  }

  // `x` is number
  return x * x;
}
```

## Primitve

Guards for primitive types.

### isBoolean

```ts
function isBoolean(value: unknown): value is boolean;
```

### isNull

```ts
function isNull(value: unknown): value is null;
```

### isNumber

```ts
function isNumber(value: unknown): value is number;
```

### isString

```ts
function isString(value: unknown): value is string;
```

### isUndefined

```ts
function isUndefined(value: unknown): value is undefined;
```

## Nullish

Guards for [nullish](https://developer.mozilla.org/en-US/docs/Glossary/Nullish) types.

### isNullish

```ts
function isNullish(value: unknown): value is Nullish;
```

### isNonNullish

```ts
function isNonNullish<T>(value: T | Nullish): value is T;
```

## Array

Guards for array types.

### isNonEmptyArray

```ts
function isNonEmptyArray<T>(arr: T[]): arr is [T, ...T[]];
```
