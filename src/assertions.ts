/**
 * Asserts that a condition is ["truthy"](https://developer.mozilla.org/en-US/docs/Glossary/Truthy).
 *
 * @throws when given a ["falsy"](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) condition.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function assert(condition: any, message = 'Assert failed'): asserts condition {
  if (!condition) {
    developmentDebugger();
    throw new TypeError(message);
  }
}

/**
 * Asserts that allegedly unreachable code has been executed.
 *
 * @throws always.
 */
export function assertNever(value: never): never {
  developmentDebugger();
  throw new Error(`Unexpected call to assertNever: ${value}`);
}

/** @private Pause execution in development to aid debugging. */
function developmentDebugger() {
  if (process.env.NODE_ENV === 'production') {
    return;
  }

  // eslint-disable-next-line no-debugger
  debugger;
}
