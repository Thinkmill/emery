/* eslint-disable @typescript-eslint/no-explicit-any */

export type Predicate = (...args: unknown[]) => boolean;
export type UnaryPredicate<T> = (value: T) => boolean;
export type GuardedPredicate<T> = (value: any) => value is T;

export type ObjectEntry<T> = { [K in keyof T]: [K, T[K]] }[keyof T];

export type Nullish = null | undefined;
