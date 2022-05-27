import { Opaque, Transparent, ValidOpaqueValues } from './types';

/**
 * A generic helper function that takes a primitive value, and returns the value
 * after casting it to the provided opaque type.
 */
// 1. extend `Opaque` to exclude transparent types e.g. `castToOpaque<number>(1)`
// 2. default `never` to prohibit unfulfilled type e.g. `castToOpaque(1)`
// 3. explicit `Transparent` to prevent invalid values e.g. `castToOpaque<OpaqueString>(1)`
// 4. cast `unknown` first to avoid invalid expression instantiation
export function castToOpaque<
  OpaqueType extends Opaque<ValidOpaqueValues, unknown> /* 1. */ = never /* 2. */,
>(value: Transparent<OpaqueType> /* 3. */) {
  /* 4. */
  return value as unknown as OpaqueType;
}
