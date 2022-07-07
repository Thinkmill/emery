---
title: Assertions
description: Utilities for managing assertions in TypeScript
---

# {% $markdoc.frontmatter.title %}

An assertion declares that a condition be `true` before executing subsequent code.

- If the condition resolves to `true` the code continues running.
- If the condition resolves to `false` an error will be thrown.

## Errors

### assert

Asserts that a condition is `true`, ensuring that whatever condition is being checked must be true for the remainder of the containing scope.

{% callout %}
The narrow type of `boolean` is an intentional design decision.
{% /callout %}

```ts
function assert(condition: boolean, message?: string): asserts condition;
```

Other assertion functions may accept ["truthy"](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) and ["falsy"](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) conditions, while `assert` only accepts conditions that resolve to `boolean`.

The goal is to promote consideration from consumers when dealing with potentially ambiguous values like `0` or `''`, which can introduce subtle bugs.

#### Messages

The `assert` function has a default message:

```ts
assert(false);
// → TypeError: Assert failed
```

Or you can provide a custom message:

```ts
let invalidValue = -1;
assert(invalidValue >= 0, `Expected a non-negative number, but received: ${invalidValue}`);
// → TypeError: Expected a non-negative number, but received: -1
```

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

{% callout tone="warning" %}
Regardless of the condition, this function **always** throws.
{% /callout %}

```ts
doThing('archived');
// → Error: Unexpected call to assertNever: 'archived'
```

## Logs

### warning

Similar to `assert` but only logs a warning if the condition is not met.

```ts
function warning(condition: boolean, message: string): void;
```

Use `warning` to let consumers know about potentially hazardous circumstances.

{% callout %}
Never logs in production.
{% /callout %}

```ts
warning(options.scrollEventThrottle === 0, 'Unthrottled scroll handler may harm performance.');
// → console.warn('Warning: Unthrottled scroll handler may harm performance.');
```
