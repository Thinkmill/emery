// Functions
// ------------------------------

export { assert, assertNever, warning } from './assertions';

export {
  isEven,
  isFinite,
  isFloat,
  isInfinite,
  isInteger,
  isNegative,
  isNegativeZero,
  isNonNegative,
  isNonPositive,
  isOdd,
  isPositive,
} from './checks/number';
export { checkAll, checkAllWith, negate } from './checks/utils';

export {
  isBoolean,
  isDefined,
  isNonEmptyArray,
  isNull,
  isNullish,
  isNumber,
  isString,
  isUndefined,
  isFulfilled,
  isRejected,
} from './guards';

export { castToOpaque } from './opaques';

export { getErrorMessage } from './utils/error';
export { typedEntries, typedKeys } from './utils/object';

// Types
// ------------------------------

export type { Nullish, Opaque, UnaryPredicate } from './types';
