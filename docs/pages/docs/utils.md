---
title: Utils
description: Utility functions for overiding TypeScript's default behaviour
---

# {% $markdoc.frontmatter.title %}

Utility functions for overiding TypeScript's default behaviour

## Objects

Utility functions for objects.

### typedEntries

An alternative to `Object.entries()` that avoids type widening.

{% callout type="warning" %}
Uses a [type assertion](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions) which could be considered dangerous in some circumstances.
{% /callout %}

```ts
function typedEntries<T extends Record<string, unknown>>(value: T): ObjectEntry<T>[];
```

Differences:

```ts
Object.entries({ foo: 1, bar: 2 });
// → [string, number][]
typedEntries({ foo: 1, bar: 2 });
// → ['foo' | 'bar', number][]
```

### typedKeys

An alternative to `Object.keys()` that avoids type widening.

```ts
function typedKeys<T extends Record<string, unknown>>(value: T): Array<keyof T>;
```

Differences:

```ts
Object.keys({ foo: 1, bar: 2 });
// →  string[]
typedKeys({ foo: 1, bar: 2 });
// →  ("foo" | "bar")[]
```

Example use case:

```ts
const obj = { foo: 1, bar: 2 };
const thing = Object.keys(obj).map(key => {
  return obj[key];
  //     ~~~~~~~~
  //     Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{ foo: number; bar: number; }'.
  //       No index signature with a parameter of type 'string' was found on type '{ foo: number; bar: number; }'.
});
```
