import { isBoolean, isFunction, isNumber, isString } from './primitive';

describe('type-check/primitive', () => {
  const mockFn = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('isBoolean', () => {
    it('should return `true` for "boolean" values', () => {
      expect(isBoolean(true)).toBe(true);
      expect(isBoolean(false)).toBe(true);
    });
    it('should return `false` for other values', () => {
      expect(isBoolean(undefined)).toBe(false);
      expect(isBoolean(null)).toBe(false);
      expect(isBoolean(1)).toBe(false);
      expect(isBoolean('')).toBe(false);
      expect(isBoolean({})).toBe(false);
      expect(isBoolean([])).toBe(false);
      expect(isBoolean(mockFn)).toBe(false);
    });
  });
  describe('isFunction', () => {
    it('should return `true` for "function" values', () => {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      function fnA() {}
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      const fnB = () => {};

      expect(isFunction(fnA)).toBe(true);
      expect(isFunction(fnB)).toBe(true);
      expect(isFunction(mockFn)).toBe(true);
      expect(mockFn).toBeCalledTimes(0);
    });
    it('should return `false` for other values', () => {
      expect(isFunction(undefined)).toBe(false);
      expect(isFunction(null)).toBe(false);
      expect(isFunction(1)).toBe(false);
      expect(isFunction('')).toBe(false);
      expect(isFunction({})).toBe(false);
      expect(isFunction([])).toBe(false);
      expect(isFunction(true)).toBe(false);
    });
  });
  describe('isNumber', () => {
    it('should return `true` for "number" values', () => {
      expect(isNumber(0)).toBe(true);
      expect(isNumber(-0)).toBe(true);
      expect(isNumber(1)).toBe(true);
      expect(isNumber(-1)).toBe(true);
      expect(isNumber(1.23)).toBe(true);
      expect(isNumber(-1.23)).toBe(true);
      expect(isNumber(Number.POSITIVE_INFINITY)).toBe(true);
      expect(isNumber(Number.NEGATIVE_INFINITY)).toBe(true);
      expect(isNumber(Number.MAX_SAFE_INTEGER)).toBe(true);
      expect(isNumber(Number.MIN_SAFE_INTEGER)).toBe(true);
    });
    it('should return `false` for other values', () => {
      expect(isNumber(undefined)).toBe(false);
      expect(isNumber(null)).toBe(false);
      expect(isNumber('')).toBe(false);
      expect(isNumber({})).toBe(false);
      expect(isNumber([])).toBe(false);
      expect(isNumber(true)).toBe(false);
      expect(isNumber(mockFn)).toBe(false);
      expect(isNumber(NaN)).toBe(false);
    });
  });
  describe('isString', () => {
    it('should return `true` for "string" values', () => {
      expect(isString('')).toBe(true);
      expect(
        isString(
          `"The answer to the ultimate question of life, the universe and everything is ${42}."`,
        ),
      ).toBe(true);
      expect(isString({}.toString())).toBe(true);
    });
    it('should return `false` for other values', () => {
      expect(isString(undefined)).toBe(false);
      expect(isString(null)).toBe(false);
      expect(isString(1)).toBe(false);
      expect(isString({})).toBe(false);
      expect(isString([])).toBe(false);
      expect(isString(true)).toBe(false);
      expect(isString(mockFn)).toBe(false);
    });
  });
});
