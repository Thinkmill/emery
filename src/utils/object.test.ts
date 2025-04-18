import { typedEntries, typedKeys, typedObjectFromEntries } from './object';

describe('utils/object', () => {
  describe('typedEntries', () => {
    it('should return the correct entries', () => {
      const result = typedEntries({ foo: 1, bar: 2 });
      expect(result).toEqual([
        ['foo', 1],
        ['bar', 2],
      ]);
    });
  });
  describe('typedKeys', () => {
    it('should return the correct keys', () => {
      const result = typedKeys({ foo: 1, bar: 2 });
      expect(result).toEqual(['foo', 'bar']);
    });
  });
  describe('typedObjectFromEntries', () => {
    it('should return the correct object', () => {
      const result = typedObjectFromEntries([
        ['foo', 1],
        ['bar', 2],
      ]);
      expect(result).toEqual({ foo: 1, bar: 2 });
    });
  });
});
