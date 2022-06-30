import { ObjectEntry } from '../types';

/**
 * An alternative to `Object.entries()` that avoids type widening.
 *
 * @example
 * Object.entries({ foo: 1, bar: 2 }) // [string, number][]
 * typedEntries({ foo: 1, bar: 2 }) // ["foo" | "bar", number][]
 */
export function typedEntries<T extends object>(value: T) {
  return Object.entries(value) as ObjectEntry<T>[];
}

/**
 * An alternative to `Object.keys()` that avoids type widening.
 *
 * @example
 * Object.keys({ foo: 1, bar: 2 }) // string[]
 * typedKeys({ foo: 1, bar: 2 }) // ("foo" | "bar")[]
 */
export function typedKeys<T extends object>(value: T) {
  return Object.keys(value) as Array<keyof T>;
}
