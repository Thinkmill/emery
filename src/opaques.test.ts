import { toOpaque, toTransparent } from './opaques';
import { Opaque } from './types';

type OpaqueString = Opaque<string, 'OpaqueString'>;
type OpaqueNumber = Opaque<number, 'OpaqueNumber'>;
type OpaqueBigInt = Opaque<bigint, 'OpaqueBigInt'>;
type OpaqueSymbol = Opaque<symbol, 'OpaqueSymbol'>;

describe('opaques', () => {
  const opaqueString = toOpaque<OpaqueString>('string');
  const opaqueNumber = toOpaque<OpaqueNumber>(1);
  const opaqueBigInt = toOpaque<OpaqueBigInt>(BigInt(1));
  const opaqueSymbol = toOpaque<OpaqueSymbol>(Symbol('symbol'));

  describe('toOpaque', () => {
    it('should be equivalent to an identity function', () => {
      expect(opaqueString).toBe('string');
      expect(opaqueNumber).toBe(1);
      expect(opaqueBigInt).toBe(BigInt(1));
      expect(opaqueSymbol.toString()).toBe(Symbol('symbol').toString());
    });
    it('should expect TS error when Token parameter omitted', () => {
      // @ts-expect-error the second parameter `Token` is required
      type AccountNumber = Opaque<number>;
    });
    it('should expect TS error when variable assigned with type declaration', () => {
      // @ts-expect-error variable with type declaration not allowed
      const value: OpaqueNumber = 123;
    });
    it('should expect TS error when called without explicit type', () => {
      // @ts-expect-error must be called with an explicit type
      toOpaque('string');
    });
  });

  describe('toTransparent', () => {
    it('should be equivalent to an identity function', () => {
      expect(toTransparent(opaqueString)).toBe('string');
      expect(toTransparent(opaqueNumber)).toBe(1);
      expect(toTransparent(opaqueBigInt)).toBe(BigInt(1));
      expect(toTransparent(opaqueSymbol).toString()).toBe(Symbol('symbol').toString());
    });
    it('should expect TS error when called with non-opaque type', () => {
      // @ts-expect-error only useful when called with opaque type
      toTransparent('string');
    });
  });
});
