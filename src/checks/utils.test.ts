import { checkAll, checkAllWith, negate } from './utils';

describe('checks/utils', () => {
  const isEven = jest.fn(x => x % 2 === 0);
  const isNumberish = jest.fn(x => typeof x === 'number');
  const lessThanTen = jest.fn(x => x < 10);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('negate', () => {
    it('should return a negated predicate', () => {
      const isOdd = negate(isEven);

      expect(isOdd(4)).toEqual(false);
      expect(isEven).toHaveBeenCalledTimes(1);
      expect(isEven).toHaveBeenCalledWith(4);
    });
  });

  describe('checkAll', () => {
    it('should create a new function', () => {
      expect(checkAll(isEven)).toBeDefined();
    });
    it('should call provided fns, and return correct result', () => {
      const checker = jest.fn(checkAll(isNumberish, lessThanTen, isEven));
      const bool = checker(4);

      expect(isNumberish).toHaveBeenCalledTimes(1);
      expect(lessThanTen).toHaveBeenCalledTimes(1);
      expect(isEven).toHaveBeenCalledTimes(1);

      expect(checker).toHaveBeenCalled();
      expect(checker).toHaveBeenCalledWith(4);
      expect(bool).toEqual(true);
    });
    it('should call provided fns in sequence, and early exit when appropriate', () => {
      const checker = jest.fn(checkAll(isNumberish, lessThanTen, isEven));
      const bool = checker(25);

      expect(isNumberish).toHaveBeenCalledTimes(1);
      expect(lessThanTen).toHaveBeenCalledTimes(1);
      expect(isEven).toHaveBeenCalledTimes(0);

      expect(checker).toHaveBeenCalledWith(25);
      expect(bool).toEqual(false);
    });
    it('should support built-ins', () => {
      const checker = jest.fn(checkAll(Array.isArray));
      const bool = checker([]);

      expect(checker).toHaveBeenCalledWith([]);
      expect(bool).toEqual(true);
    });
  });

  describe('checkAllWith', () => {
    it('should return the correct result', () => {
      expect(checkAllWith(5, isEven)).toBe(false);
    });
    it('should call provided fns, and return correct result', () => {
      const bool = checkAllWith(4, isNumberish, lessThanTen, isEven);

      expect(isNumberish).toHaveBeenCalledTimes(1);
      expect(lessThanTen).toHaveBeenCalledTimes(1);
      expect(isEven).toHaveBeenCalledTimes(1);
      expect(bool).toEqual(true);
    });
    it('should call provided fns in sequence, and early exit when appropriate', () => {
      const bool = checkAllWith(25, isNumberish, lessThanTen, isEven);

      expect(isNumberish).toHaveBeenCalledTimes(1);
      expect(lessThanTen).toHaveBeenCalledTimes(1);
      expect(isEven).toHaveBeenCalledTimes(0);
      expect(bool).toEqual(false);
    });
  });
});
