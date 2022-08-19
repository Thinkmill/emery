/// <reference lib="es2020.promise" />
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
export function isNonEmptyArray<T>(value: readonly T[]): value is [T, ...T[]] {
  return value.length > 0;
}

// Convenience
// ------------------------------

/** Checks whether a value is null or undefined */
export function isNullish(value: unknown): value is Nullish {
  return value === null || value === undefined;
}

/** Checks whether a value is defined */
export function isDefined<T>(value: T): value is NonNullable<T> {
  return !isNullish(value);
}

// Promise
// ------------------------------

/**
 * Checks whether a result from `Promise.allSettled` is fulfilled
 *
 * ```ts
 * const results = await Promise.allSettled(promises);
 * const fulfilledValues = results.filter(isFulfilled).map(result => result.value);
 * ```
 */
export function isFulfilled<T>(
  result: PromiseSettledResult<T>,
): result is PromiseFulfilledResult<T> {
  return result.status === 'fulfilled';
}

/**
 * Checks whether a result from `Promise.allSettled` is rejected
 *
 * ```ts
 * const results = await Promise.allSettled(promises);
 * const rejectionReasons = results.filter(isRejected).map(result => result.reason);
 * ```
 */
export function isRejected(result: PromiseSettledResult<unknown>): result is PromiseRejectedResult {
  return result.status === 'rejected';
}
