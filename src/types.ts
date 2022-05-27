/* eslint-disable @typescript-eslint/no-explicit-any */

// Misc. types
// ------------------------------

export type ErrorLike = { message: string };

export type ObjectEntry<T> = { [K in keyof T]: [K, T[K]] }[keyof T];

export type Nullish = null | undefined;

export type UnaryPredicate<T> = (value: T) => boolean;

// Opaque types
// ------------------------------

declare const OPAQUE_TAG: unique symbol;
declare type Tagged<Token> = { readonly [OPAQUE_TAG]: Token };

export type ValidOpaqueValues = bigint | number | string | symbol;

/** Create an opaque type. */
export type Opaque<Type extends ValidOpaqueValues, Token> = Type & Tagged<Token>;

/** @private Extract the transparent type from an opaque type. */
export type Transparent<OpaqueType extends ValidOpaqueValues> = OpaqueType extends bigint
  ? bigint
  : OpaqueType extends number
  ? number
  : OpaqueType extends string
  ? string
  : OpaqueType extends symbol
  ? symbol
  : never;
