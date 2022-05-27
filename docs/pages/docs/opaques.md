---
title: Opaque types
description: Utilities for managing opaque types
---

# {% $markdoc.frontmatter.title %}

Utilities for managing [opaque types](https://codemix.com/opaque-types-in-javascript/). Opaque types are [included with Flow](https://flow.org/en/docs/types/opaque-types/), but there's a bit of extra ceremony required for TypeScript.

## Types

In TypeScript, types are transparent by default — if two types are structurally identical they are deemed compatible. Transparent types can ensure type safety, but they don’t encode any information about program semantics.

### Opaque

Create an opaque type, which hides its internal details from the public.

The `Type` parameter is limited to primitive types. For more complex requirements consider an [interface](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces) or [record](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type).

```ts
type AccountNumber = Opaque<number, 'AccountNumber'>;
```

The `Token` parameter is required and must be unique, it allows the compiler to differentiate between types.

```ts
type ThingOne = Opaque<string>;
//              ~~~~~~~~~~~~~~
//              Generic type 'Opaque' requires 2 type argument(s).

type ThingTwo = Opaque<string, 'ThingTwo'>;
// 👍 So far, so good

type ThingThree = Opaque<string, 'ThingTwo'>;
// 🚨 Non-unique `Token` parameter
```

While string literals are accepted tokens, we recommend [unique symbols](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#unique-symbol) for your opaque types to make them stronger. Each reference to a unique symbol implies a completely unique identity that’s tied to a given declaration.

```ts
const AccountNumberSymbol: unique symbol = Symbol();

type AccountNumber = Opaque<number, typeof AccountNumberSymbol>;
```

Another approach is to use recursive types.

```ts
type Account = {
  accountNumber: Opaque<number, Account>;
  name: string;
};
```

## Functions

At runtime these are each equivalent to an [identity function](https://en.wikipedia.org/wiki/Identity_function).

### castToOpaque

A generic helper function that takes a primitive value, and returns the value after casting it to the provided opaque type.

```ts
function castToOpaque<OpaqueType>(value: bigint | number | string | symbol): OpaqueType;
```

Opaque types cannot be assigned to variables with standard type declarations—this is by design, ensuring that opaquely typed values flow through the program without degrading.

```ts
const value: AccountNumber = 123;
//    ~~~~~
//    Type 'number' is not assignable to type 'AccountNumber'.
```

Instead use `castToOpaque` to create opaquely typed values.

```ts
type AccountNumber = Opaque<number, 'AccountNumber'>;

const value = 123;
// → 'value' is 'number'
const opaqueValue = castToOpaque<AccountNumber>(value);
// → 'opaqueValue' is 'AccountNumber'
```

Ideally, each opaque type would have a companion function for managing their creation.

```ts
export type AccountNumber = Opaque<number, 'AccountNumber'>;

export function createAccountNumber(value: number) {
  return castToOpaque<AccountNumber>(value);
}
```

Ensures basic type safety before casting to avoid invalid primitive assignment.

```ts
const value = castToOpaque<AccountNumber>('123');
//                                        ~~~~~
//                                        Argument of type 'string' is not assignable to parameter of type 'number'.
```
