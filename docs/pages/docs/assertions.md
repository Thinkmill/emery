---
title: Assertions
description: Functions for asserting the "truthiness" of a condition
---

# {% $markdoc.frontmatter.title %}

An assertion declares that a condition be ["truthy"](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) before executing subsequent code.

- If the condition evaluates to `true` the code continues running.
- If the condition evaluates to `false` an error will be thrown.

## Functions

TypeScript supports the `asserts` keyword, for use in the return statement of [assertion functions](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions).

### assert

Asserts that a condition is "truthy", ensuring that whatever condition is being checked must be true for the remainder of the containing scope.

```ts
function assert(condition: any, message?: string): asserts condition;
```

The `assert` function has a default message:

```ts
assert(false);
// → TypeError: Assert failed
```

Or you can provide a custom message:

```ts
let falsyValue = -1;
assert(falsyValue >= 0, `Expected a non-negative number, but received: ${falsyValue}`);
// → TypeError: Expected a non-negative number, but received: -1
```

### assertNever

Asserts that allegedly unreachable code has been executed.

{% callout %}
When called, this function will always throw.
{% /callout %}

```ts
function assertNever(condition: never): never;
```

Use `assertNever` to catch logic forks that shouldn't be possible.

```ts
function doThing(type: 'draft' | 'published' | 'archived') {
  switch (type) {
    case 'draft':
      return; /*...*/
    case 'published':
      return; /*...*/
    case 'archived':
      return; /*...*/

    default:
      assertNever(type);
  }
}
```

## Debugging

In **development** both `assert` and `assertNever` will include a [debugger statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger), which will pause execution to aid debugging.
