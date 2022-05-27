import { castToOpaque } from './opaques';
import { Opaque } from './types';

describe('opaques', () => {
  describe('castToOpaque', () => {
    it('should be equivalent to an identity function at runtime', () => {
      type OpaqueString = Opaque<string, 'OpaqueString'>;
      type OpaqueNumber = Opaque<number, 'OpaqueNumber'>;
      type OpaqueBigInt = Opaque<bigint, 'OpaqueBigInt'>;
      type OpaqueSymbol = Opaque<symbol, 'OpaqueSymbol'>;

      const opaqueString = castToOpaque<OpaqueString>('string');
      const opaqueNumber = castToOpaque<OpaqueNumber>(1);
      const opaqueBigInt = castToOpaque<OpaqueBigInt>(BigInt(1));
      const opaqueSymbol = castToOpaque<OpaqueSymbol>(Symbol('symbol'));

      expect(opaqueString).toBe('string');
      expect(opaqueNumber).toBe(1);
      expect(opaqueBigInt).toBe(BigInt(1));
      expect(opaqueSymbol.toString()).toBe(Symbol('symbol').toString());
    });

    it('should expect TS error when Token parameter omitted', () => {
      // @ts-expect-error the second parameter `Token` is required
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      type AccountNumber = Opaque<number>;
    });
    it('should expect TS error when variable assigned with type declaration', () => {
      // @ts-expect-error variable with type declaration not allowed
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const value: OpaqueNumber = 123;
    });
    it('should expect TS error when called without explicit type', () => {
      // @ts-expect-error must be called with an explicit type
      castToOpaque('string');
    });
  });
});
