import { Nullish } from './types';

// Primitives
// ------------------------------

/** Checks whether a value is a boolean */
export function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean';
}

/** Checks whether a value is null */
export function isNull(value: unknown): value is null {
  return value === null;
}

/** Checks whether a value is a number */
export function isNumber(value: unknown): value is number {
  return typeof value === 'number' && !isNaN(value);
}

/** Checks whether a value is a string */
export function isString(value: unknown): value is string {
  return typeof value === 'string';
}

/** Checks whether a value is undefined */
export function isUndefined(value: unknown): value is undefined {
  return value === undefined;
}

// Array
// ------------------------------

/** Checks whether or not an array is empty. */
export function isNonEmptyArray<T>(arr: T[]): arr is [T, ...T[]] {
  return arr.length > 0;
}

// Convenience
// ------------------------------

/** Checks whether a value is null or undefined */
export function isNullish(value: unknown): value is Nullish {
  return value == null;
}

/** Checks whether a value is defined */
export function isNonNullish<T>(value: T | undefined | null): value is T {
  return value != null;
}
