/**
 * Asserts that a condition is `true`, ensuring that whatever condition is being
 * checked must be true for the remainder of the containing scope.
 *
 * @throws when the condition is `false`
 */
// NOTE: The narrow type of `boolean` instead of something like `unknown` is an
// intentional design decision. The goal is to promote consideration from
// consumers when dealing with potentially ambiguous conditions like `0` or
// `''`, which can introduce "subtle" bugs.
export function assert(condition: boolean, message = 'Assert failed'): asserts condition {
  if (!condition) {
    throw new TypeError(message);
  }
}

/**
 * Asserts that allegedly unreachable code has been executed.
 *
 * @throws always
 */
export function assertNever(arg: never): never {
  throw new Error('Expected never to be called, but received: ' + JSON.stringify(arg));
}

/**
 * Similar to `assert` but only logs a warning if the condition is not met. Only
 * logs in development.
 */
export function warning(condition: boolean, message: string) {
  if (!(process.env.NODE_ENV === 'production')) {
    if (condition) {
      return;
    }

    // follow message prefix convention
    const text = `Warning: ${message}`;

    // IE9 support, console only with open devtools
    if (typeof console !== 'undefined') {
      console.warn(text);
    }

    // NOTE: throw and catch immediately to provide a stack trace:
    // https://developer.chrome.com/blog/automatically-pause-on-any-exception/
    try {
      throw Error(text);
      // eslint-disable-next-line no-empty
    } catch (x) {}
  }
}
