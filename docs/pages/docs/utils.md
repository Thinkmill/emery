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

Now the key parameter in the find method is a union type of the objects keys, so everything works as expected.

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

Differences

```ts
Object.keys({ foo: 1, bar: 2 });
// →  string[]
typedKeys({ foo: 1, bar: 2 });
// →  ("foo" | "bar")[]
```

Usage

```ts
const r = Object.keys(obj).find(key => {
  // ⛔️ Error:  No index signature with a parameter of
  // type 'string' was found on type
  // '{ name: string; department: string; country: string; }'.
  return obj[key] === 'accounting';
});
```
