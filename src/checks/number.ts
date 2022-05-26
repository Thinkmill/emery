import { UnaryPredicate } from '../types';

import { negate } from './utils';

/** Checks whether a number is a finite */
export const isFinite: UnaryPredicate<number> = Number.isFinite;

/** Checks whether a number is a infinite */
export const isInfinite = negate(isFinite);

/** Checks whether a number is an integer */
export const isInteger: UnaryPredicate<number> = Number.isInteger;

/** Checks whether a number is a float */
export const isFloat = negate(isInteger);

/** Checks whether a number is even. */
export const isEven = (value: number) => value % 2 === 0;

/** Checks whether a number is odd. */
export const isOdd = (value: number) => Math.abs(value % 2) === 1;

/** Checks whether a number is negative zero */
export const isNegativeZero = (value: number) => 1 / value === Number.NEGATIVE_INFINITY;

/** Checks whether a number is negative */
export const isNegative = (value: number) => value < 0;

/** Checks whether a number is positive */
export const isPositive = (value: number) => value > 0;

/** Checks whether a number is non-negative */
export const isNonNegative = (value: number) => value >= 0;

/** Checks whether a number is non-positive */
export const isNonPositive = (value: number) => value <= 0;
