/** Checks whether or not a value is a boolean. */
export function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean';
}

/** Checks whether or not a value is a function. */
// eslint-disable-next-line @typescript-eslint/ban-types
export function isFunction(value: unknown): value is Function {
  return !!(value && {}.toString.call(value) == '[object Function]');
}

/** Checks whether or not a value is a number. */
export function isNumber(value: unknown): value is number {
  return typeof value === 'number' && !isNaN(value);
}

/** Checks whether or not a value is a string. */
export function isString(value: unknown): value is string {
  return typeof value === 'string';
}
