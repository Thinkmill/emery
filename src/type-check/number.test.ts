import {
  isFinite,
  isFloat,
  isInfinite,
  isInteger,
  isNegative,
  isNegativeFloat,
  isNegativeInteger,
  isNegativeZero,
  isNonNegative,
  isNonNegativeFloat,
  isNonNegativeInteger,
  isNonPositive,
  isNonPositiveFloat,
  isNonPositiveInteger,
  isPositive,
  isPositiveFloat,
  isPositiveInteger,
} from './number';

describe('type-check/number', () => {
  describe('core', () => {
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
      expect(isNonPositive(-1.23)).toBe(true);
      expect(isNonPositive(1)).toBe(false);
      expect(isNonPositive(1.23)).toBe(false);
    });
  });

  describe('convenience', () => {
    it('`isNegativeInteger` should correctly evaluate values', () => {
      expect(isNegativeInteger(-1)).toBe(true);
      expect(isNegativeInteger(1)).toBe(false);
      expect(isNegativeInteger(1.23)).toBe(false);
      expect(isNegativeInteger(-1.23)).toBe(false);
    });
    it('`isPositiveInteger` should correctly evaluate values', () => {
      expect(isPositiveInteger(1)).toBe(true);
      expect(isPositiveInteger(-1)).toBe(false);
      expect(isPositiveInteger(1.23)).toBe(false);
      expect(isPositiveInteger(-1.23)).toBe(false);
    });
    it('`isNonNegativeInteger` should correctly evaluate values', () => {
      expect(isNonNegativeInteger(0)).toBe(true);
      expect(isNonNegativeInteger(-0)).toBe(true);
      expect(isNonNegativeInteger(1)).toBe(true);
      expect(isNonNegativeInteger(1.23)).toBe(false);
      expect(isNonNegativeInteger(-1)).toBe(false);
    });
    it('`isNonPositiveInteger` should correctly evaluate values', () => {
      expect(isNonPositiveInteger(-0)).toBe(true);
      expect(isNonPositiveInteger(0)).toBe(true);
      expect(isNonPositiveInteger(-1)).toBe(true);
      expect(isNonPositiveInteger(-1.23)).toBe(false);
      expect(isNonPositiveInteger(1)).toBe(false);
    });

    it('`isNegativeFloat` should correctly evaluate values', () => {
      expect(isNegativeFloat(-1.23)).toBe(true);
      expect(isNegativeFloat(0)).toBe(false);
      expect(isNegativeFloat(1)).toBe(false);
      expect(isNegativeFloat(-1)).toBe(false);
    });
    it('`isPositiveFloat` should correctly evaluate values', () => {
      expect(isPositiveFloat(1.23)).toBe(true);
      expect(isPositiveFloat(0)).toBe(false);
      expect(isPositiveFloat(1)).toBe(false);
      expect(isPositiveFloat(-1)).toBe(false);
      expect(isPositiveFloat(-1.23)).toBe(false);
    });
    it('`isNonNegativeFloat` should correctly evaluate values', () => {
      expect(isNonNegativeFloat(1.23)).toBe(true);
      expect(isNonNegativeFloat(0)).toBe(false);
      expect(isNonNegativeFloat(1)).toBe(false);
      expect(isNonNegativeFloat(-1)).toBe(false);
      expect(isNonNegativeFloat(-1.23)).toBe(false);
    });
    it('`isNonPositiveFloat` should correctly evaluate values', () => {
      expect(isNonPositiveFloat(-1.23)).toBe(true);
      expect(isNonPositiveFloat(0)).toBe(false);
      expect(isNonPositiveFloat(1)).toBe(false);
      expect(isNonPositiveFloat(-1)).toBe(false);
      expect(isNonPositiveFloat(1.23)).toBe(false);
    });
  });
});
