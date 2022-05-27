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

export { castToOpaque } from './opaques';

export { getErrorMessage } from './utils/error';
export { typedEntries, typedKeys } from './utils/object';

// Types
// ------------------------------

export type { Nullish, Opaque, UnaryPredicate } from './types';
