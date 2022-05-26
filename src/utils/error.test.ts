import { getErrorMessage } from './error';

describe('utils/errors', () => {
  describe('getErrorMessage', () => {
    it('should validate real errors', () => {
      expect(getErrorMessage(new Error('Error text'))).toBe('Error text');
    });
    it('should validate error-like objects', () => {
      expect(getErrorMessage({ message: 'Object text' })).toBe('Object text');
    });
    it('should return the default fallback message', () => {
      expect(getErrorMessage(undefined)).toBe('Unknown error');
    });
    it("should return the consumer's fallback message", () => {
      expect(getErrorMessage(undefined, 'Custom message')).toBe('Custom message');
    });
    it('should return the stringified content for "truthy" error args', () => {
      const obj = { misshapen: 'Message text' };
      expect(getErrorMessage(obj)).toBe(JSON.stringify(obj));
      expect(getErrorMessage(123)).toBe('123');
      expect(getErrorMessage('Text')).toBe('"Text"');
    });
  });
});
