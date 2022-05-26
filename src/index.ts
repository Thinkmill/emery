// Functions
// ------------------------------

export { assert, assertNever } from './assertions';

export {
  isFinite,
  isFloat,
  isInteger,
  isNegative,
  isNegativeZero,
  isNonNegative,
  isNonPositive,
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
} from './guards';

export { toOpaque, toTransparent } from './opaques';

export { getErrorMessage } from './utils/error';
export { typedEntries, typedKeys } from './utils/object';

// Types
// ------------------------------

export type {
  GuardedPredicate,
  Nullish,
  Opaque,
  Predicate,
  Transparent,
  UnaryPredicate,
} from './types';
