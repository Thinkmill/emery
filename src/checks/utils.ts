import { UnaryPredicate } from '../types';

/**
 * Returns a new function for checking *all* cases against a value, a bit
 * like `pipe` for predicates.
 */
export function checkAll<T>(...predicates: UnaryPredicate<T>[]) {
  return (value: T) => predicates.every(p => p(value));
}

/** Apply *all* checks against a value. */
export function checkAllWith<T>(value: T, ...predicates: UnaryPredicate<T>[]) {
  return checkAll(...predicates)(value);
}

/** Returns a new negated version of the stated predicate function. */
export function negate<T>(predicate: UnaryPredicate<T>) {
  return (value: T) => !predicate(value);
}
