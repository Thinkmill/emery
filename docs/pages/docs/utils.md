---
title: Utils
description: Utility functions for overiding TypeScript's default behaviour
---

# {% $markdoc.frontmatter.title %}

Utility functions for overiding TypeScript's default behaviour.

## Errors

Utilities for managing [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) objects.

### getErrorMessage

Simplifies error handling in `try...catch` statements.

```ts
function getErrorMessage(error: unknown, fallbackMessage? string): string
```

JavaScript is weird, you can `throw` anything—seriously, [anything of any type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw).

```ts
try {
  someFunctionThatMightThrow();
} catch (error) {
  Monitor.reportError(error.message);
  //                  ~~~~~
  //                  Object is of type 'unknown'.
}
```

#### Type casting

Since it's possible for library authors to throw something unexpected, we have to take precautions. Using `getErrorMessage` takes care of type casting for you, and makes error handling safe and simple.

```ts
Monitor.reportError(getErrorMessage(error));
// 🎉 No more TypeScript issues!
```

Handles cases where the value isn't an actual `Error` object.

```ts
getErrorMessage({ message: 'Object text', other: () => 'Properties' });
// → 'Object text'
```

Supports a fallback message for "falsy" values.

```ts
getErrorMessage(undefined);
// → 'Unknown error'
getErrorMessage(undefined, 'Custom message text');
// → 'Custom message text'
```

Fails gracefully by stringifying unexpected values.

```ts
getErrorMessage({ msg: 'Something went wrong' });
// → '{ "msg": "Something went wrong" }'
```

## Objects

Utility functions for [objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object).

### typedEntries

An alternative to `Object.entries()` that avoids type widening.

{% callout tone="warning" %}
Uses a [type assertion](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions) which could be considered dangerous.
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

const thing2 = typedKeys(obj).map(key => {
  return obj[key];
  // 🎉 No more TypeScript issues!
});
```
