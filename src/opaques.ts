import { Opaque, Transparent, ValidOpaqueValues } from './types';

/**
 * A generic helper function that takes a primitive value, and returns the value
 * after casting it to the provided opaque type.
 */
export function toOpaque<OpaqueType extends Opaque<ValidOpaqueValues, unknown> = never>(
  value: Transparent<OpaqueType>,
) {
  return value as unknown as OpaqueType;
}

/**
 * A generic helper function that takes an opaquely typed value, and returns the
 * value after widening it to the primitive transparent type.
 */
export function toTransparent<OpaqueType extends Opaque<ValidOpaqueValues, unknown>>(
  value: OpaqueType,
) {
  return value as unknown as Transparent<OpaqueType>;
}
