import {
  isBoolean,
  isDefined,
  isNonEmptyArray,
  isNull,
  isNullish,
  isNumber,
  isString,
  isUndefined,
} from './guards';
import { getValuesByType, getValuesByTypeWithout } from './testing';

describe('guards', () => {
  describe('primitives', () => {
    it('isBoolean should validate assumed values', () => {
      expect(isBoolean(true)).toBe(true);
      expect(isBoolean(false)).toBe(true);

      getValuesByTypeWithout('boolean').forEach(val => {
        expect(isBoolean(val)).toBe(false);
      });
    });

    it('isNull should validate assumed values', () => {
      expect(isNull(null)).toBe(true);

      getValuesByTypeWithout('null').forEach(val => {
        expect(isNull(val)).toBe(false);
      });
    });

    it('isNumber should validate assumed values', () => {
      getValuesByType('number').forEach(val => {
        expect(isNumber(val)).toBe(true);
      });

      getValuesByTypeWithout('number').forEach(val => {
        expect(isNumber(val)).toBe(false);
      });

      expect(isNumber(NaN)).toBe(false);
    });

    it('isString should validate assumed values', () => {
      getValuesByType('string').forEach(val => {
        expect(isString(val)).toBe(true);
      });

      getValuesByTypeWithout('string').forEach(val => {
        expect(isString(val)).toBe(false);
      });
    });

    it('isUndefined should validate assumed values', () => {
      expect(isUndefined(undefined)).toBe(true);

      getValuesByTypeWithout('undefined').forEach(val => {
        expect(isUndefined(val)).toBe(false);
      });
    });
  });

  describe('array', () => {
    it('isNonEmptyArray should validate assumed values', () => {
      expect(isNonEmptyArray([1, 2])).toBe(true);
      expect(isNonEmptyArray([])).toBe(false);
    });
  });

  describe('convenience', () => {
    it('isNullish should validate assumed values', () => {
      expect(isNullish(null)).toBe(true);
      expect(isNullish(undefined)).toBe(true);

      getValuesByTypeWithout(['null', 'undefined']).forEach(val => {
        expect(isNullish(val)).toBe(false);
      });
    });
    it('isDefined should validate assumed values', () => {
      expect(isDefined(null)).toBe(false);
      expect(isDefined(undefined)).toBe(false);

      getValuesByTypeWithout(['null', 'undefined']).forEach(val => {
        expect(isDefined(val)).toBe(true);
      });
    });
  });
});
