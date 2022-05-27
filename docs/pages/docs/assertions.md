---
title: Assertions
description: Functions for asserting the "truthiness" of a condition
---

# {% $markdoc.frontmatter.title %}

An assertion declares that a condition be `true` before executing subsequent code.

- If the condition resolves to `true` the code continues running.
- If the condition resolves to `false` an error will be thrown.

## Functions

TypeScript supports the `asserts` keyword, for use in the return statement of [assertion functions](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions).

### assert

Asserts that a condition is `true`, ensuring that whatever condition is being checked must be true for the remainder of the containing scope.

```ts
function assert(condition: boolean, message?: string): asserts condition;
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

#### Condition type

{% callout %}
The narrow type of `boolean` is an intentional design decision.
{% /callout %}

Other assertion functions may accept ["truthy"](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) and ["falsy"](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) conditions, while `assert` only accepts conditions that resolve to `boolean`.

The goal is to promote consideration from consumers when dealing with potentially ambiguous values like `0` or `''`, which can introduce subtle bugs.

### assertNever

Asserts that allegedly unreachable code has been executed.

```ts
function assertNever(condition: never): never;
```

Use `assertNever` to catch logic forks that shouldn't be possible.

```ts
function doThing(type: 'draft' | 'published') {
  switch (type) {
    case 'draft':
      return; /*...*/
    case 'published':
      return; /*...*/

    default:
      assertNever(type);
  }
}
```

{% callout type="warning" %}
Regardless of the condition, this function **always** throws.
{% /callout %}

```ts
doThing('archived');
// → Error: Unexpected call to assertNever: 'archived'
```

## Debugging

In **development** both `assert` and `assertNever` will include a [debugger statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger), which will pause execution to aid debugging.
