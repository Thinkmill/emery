import {
  isEven,
  isFinite,
  isFloat,
  isInfinite,
  isInteger,
  isNegative,
  isNegativeZero,
  isNonNegative,
  isNonPositive,
  isOdd,
  isPositive,
} from './number';

describe('checks/number', () => {
  it('`isFinite` should correctly evaluate values', () => {
    expect(isFinite(1)).toBe(true);
    expect(isFinite(123e4 / 12.3)).toBe(true);
    expect(isFinite(Number.MAX_SAFE_INTEGER)).toBe(true);
    expect(isFinite(Number.MIN_SAFE_INTEGER)).toBe(true);
    expect(isFinite(Number.POSITIVE_INFINITY)).toBe(false);
    expect(isFinite(Number.NEGATIVE_INFINITY)).toBe(false);
  });
  it('`isInfinite` should correctly evaluate values', () => {
    expect(isInfinite(Number.POSITIVE_INFINITY)).toBe(true);
    expect(isInfinite(Number.NEGATIVE_INFINITY)).toBe(true);
    expect(isInfinite(1)).toBe(false);
    expect(isInfinite(123e4 / 12.3)).toBe(false);
    expect(isInfinite(Number.MAX_SAFE_INTEGER)).toBe(false);
    expect(isInfinite(Number.MIN_SAFE_INTEGER)).toBe(false);
  });

  it('`isInteger` should correctly evaluate values', () => {
    expect(isInteger(1)).toBe(true);
    expect(isInteger(-1)).toBe(true);
    expect(isInteger(1.23)).toBe(false);
    expect(isInteger(-1.23)).toBe(false);
  });
  it('`isFloat` should correctly evaluate values', () => {
    expect(isFloat(1.23)).toBe(true);
    expect(isFloat(-1.23)).toBe(true);
    expect(isFloat(1)).toBe(false);
    expect(isFloat(-1)).toBe(false);
  });

  it('`isEven` should correctly evaluate values', () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(-22)).toBe(true);
    expect(isEven(1)).toBe(false);
    expect(isEven(2.2)).toBe(false);
  });
  it('`isOdd` should correctly evaluate values', () => {
    expect(isOdd(1)).toBe(true);
    expect(isOdd(-11)).toBe(true);
    expect(isOdd(2)).toBe(false);
    expect(isOdd(1.1)).toBe(false);
  });

  it('`isNegativeZero` should correctly evaluate values', () => {
    expect(isNegativeZero(-0)).toBe(true);
    expect(isNegativeZero(1)).toBe(false);
    expect(isNegativeZero(0)).toBe(false);
  });

  it('`isNegative` should correctly evaluate values', () => {
    expect(isNegative(-1)).toBe(true);
    expect(isNegative(-1.23)).toBe(true);
    expect(isNegative(1)).toBe(false);
    expect(isNegative(0)).toBe(false);
    expect(isNegative(-0)).toBe(false);
  });
  it('`isPositive` should correctly evaluate values', () => {
    expect(isPositive(1)).toBe(true);
    expect(isPositive(1.23)).toBe(true);
    expect(isPositive(-1)).toBe(false);
    expect(isPositive(0)).toBe(false);
    expect(isPositive(-0)).toBe(false);
  });

  it('`isNonNegative` should correctly evaluate values', () => {
    expect(isNonNegative(0)).toBe(true);
    expect(isNonNegative(-0)).toBe(true);
    expect(isNonNegative(1)).toBe(true);
    expect(isNonNegative(1.23)).toBe(true);
    expect(isNonNegative(-1)).toBe(false);
    expect(isNonNegative(-1.23)).toBe(false);
  });
  it('`isNonPositive` should correctly evaluate values', () => {
    expect(isNonPositive(0)).toBe(true);
    expect(isNonPositive(-0)).toBe(true);
    expect(isNonPositive(-1)).toBe(true);
    expect(isNonPositive(1)).toBe(false);
    expect(isNonPositive(1.23)).toBe(false);
  });
});
