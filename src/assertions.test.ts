import { assert, assertNever } from './assertions';
import { getErrorMessage } from './utils/error';

describe('assertions', () => {
  describe('assert', () => {
    it('should throw when the condition is `false`', () => {
      expect(() => assert(false)).toThrow();
    });
    it('should not throw when the condition is `true`', () => {
      expect(() => assert(true)).not.toThrow();
    });

    it('should expect TS error when called with non-boolean conditions', () => {
      const falsyValues = [0, -0, '', null, undefined, NaN];
      const truthyValues = [1, -1, 'test', {}, [], Number.POSITIVE_INFINITY];

      falsyValues.forEach(val => {
        // @ts-expect-error should not accept non-boolean conditions
        expect(() => assert(val)).toThrow();
      });
      truthyValues.forEach(val => {
        // @ts-expect-error should not accept non-boolean conditions
        expect(() => assert(val)).not.toThrow();
      });
    });

    it('should throw a TypeError with the "default" message, when none provided', () => {
      try {
        assert(false);
      } catch (error) {
        expect(getErrorMessage(error)).toBe('Assert failed');
      }
    });
    it('should throw a TypeError with the consumer message, when provided', () => {
      try {
        assert(false, 'Custom message');
      } catch (error) {
        expect(getErrorMessage(error)).toBe('Custom message');
      }
    });
  });

  describe('assertNever', () => {
    it('should always throw', () => {
      // @ts-expect-error: for testing
      expect(() => assertNever(0)).toThrow();
      // @ts-expect-error: for testing
      expect(() => assertNever(null)).toThrow();
      // @ts-expect-error: for testing
      expect(() => assertNever('test')).toThrow();
      // @ts-expect-error: for testing
      expect(() => assertNever({})).toThrow();
    });
    it('should throw with error message', () => {
      const value = 1;

      try {
        // @ts-expect-error: for testing
        assertNever(value);
      } catch (error) {
        expect(getErrorMessage(error)).toBe(`Unexpected call to assertNever: '${value}'`);
      }
    });
  });
});
