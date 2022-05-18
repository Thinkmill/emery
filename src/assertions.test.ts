import { assert, assertNever } from './assertions';

describe('assertions', () => {
  describe('assert', () => {
    it('should throw when the condition is "falsy"', () => {
      expect(() => assert(false)).toThrow();
      expect(() => assert(+0)).toThrow();
      expect(() => assert(-0)).toThrow();
      expect(() => assert('')).toThrow();
      expect(() => assert(null)).toThrow();
      expect(() => assert(undefined)).toThrow();
      expect(() => assert(NaN)).toThrow();
    });
    it('should not throw when the condition is "truthy"', () => {
      const mockFn = jest.fn();

      expect(() => assert(true)).not.toThrow();
      expect(() => assert(1)).not.toThrow();
      expect(() => assert(-1)).not.toThrow();
      expect(() => assert('test')).not.toThrow();
      expect(() => assert({})).not.toThrow();
      expect(() => assert([])).not.toThrow();

      expect(() => assert(mockFn)).not.toThrow();
      expect(mockFn).toBeCalledTimes(0);
    });

    it('should throw a TypeError with the "default" message, when none provided', () => {
      try {
        assert(false);
      } catch (error) {
        assert(error instanceof TypeError);
        expect(error.message).toBe('Assert failed');
      }
    });
    it('should throw a TypeError with the consumer message, when provided', () => {
      try {
        assert(false, 'Custom message');
      } catch (error) {
        assert(error instanceof TypeError);
        expect(error.message).toBe('Custom message');
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
        assert(error instanceof Error);
        expect(error.message).toBe(`Unexpected call to assertNever: ${value}`);
      }
    });
  });
});
