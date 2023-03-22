import { assert, assertNever, warning } from './assertions';
import { getErrorMessage } from './utils/error';
import { falsyValues, truthyValues } from './testing';

describe('assertions', () => {
  describe('assert', () => {
    it('should throw when the condition is `false`', () => {
      expect(() => assert(false)).toThrow();
    });
    it('should not throw when the condition is `true`', () => {
      expect(() => assert(true)).not.toThrow();
    });

    it('should expect TS error when called with non-boolean conditions', () => {
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
        expect(getErrorMessage(error)).toBe(`Expected never to be called, but received: ${value}`);
      }
    });
  });

  describe('warning', () => {
    beforeEach(() => {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      jest.spyOn(console, 'warn').mockImplementation(() => {});
    });
    afterEach(() => {
      // @ts-expect-error: mocked
      console.warn.mockRestore();
    });

    it('should not warn if the condition is true', () => {
      warning(true, 'test message');
      expect(console.warn).not.toHaveBeenCalled();
    });
    it('should warn if the condition is false', () => {
      const message = 'test message';
      warning(false, message);

      expect(console.warn).toHaveBeenCalledWith('Warning: ' + message);
      // @ts-expect-error: mocked
      console.warn.mockClear();
    });
  });
});
