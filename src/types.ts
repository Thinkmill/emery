/* eslint-disable @typescript-eslint/no-explicit-any */

// Predicate types
// ------------------------------

export type Predicate = (...args: unknown[]) => boolean;
export type UnaryPredicate<T> = (value: T) => boolean;
export type GuardedPredicate<T> = (value: any) => value is T;

// Misc. types
// ------------------------------

export type ObjectEntry<T> = { [K in keyof T]: [K, T[K]] }[keyof T];

export type Nullish = null | undefined;

// Opaque types
// ------------------------------

declare const tag: unique symbol;
declare type Tagged<Token> = { readonly [tag]: Token };
export type ValidOpaqueValues = bigint | number | string | symbol;

/** Create an opaque type. */
export type Opaque<Type extends ValidOpaqueValues, Token> = Type &
  Tagged<Token extends void ? never : Token>;

/** Extract the transparent type from an opaque type. */
export type Transparent<OpaqueType extends ValidOpaqueValues> = OpaqueType extends bigint
  ? bigint
  : OpaqueType extends number
  ? number
  : OpaqueType extends string
  ? string
  : OpaqueType extends symbol
  ? symbol
  : never;
