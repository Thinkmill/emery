---
title: Errors
description: Utilities for managing errors
---

# {% $markdoc.frontmatter.title %}

Utilities for managing errors in [try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) statements.

## Functions

### getErrorMessage

Simplifies `error` handling in `try...catch` statements.

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
