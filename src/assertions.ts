/**
 * Asserts that a condition is `true`, ensuring that whatever condition is being
 * checked must be true for the remainder of the containing scope.
 *
 * @throws when the condition is `false`
 * @returns void
 */
// NOTE: The narrow type of `boolean` instead of something like `unknown` is an
// intentional design decision. The goal is to promote consideration from
// consumers when dealing with potentially ambiguous conditions like `0` or
// `''`, which can introduce "subtle" bugs.
export function assert(condition: boolean, message = 'Assert failed'): asserts condition {
  if (!condition) {
    developmentDebugger();
    throw new TypeError(message);
  }
}

/**
 * Asserts that allegedly unreachable code has been executed.
 *
 * @throws always
 * @returns void
 */
export function assertNever(condition: never): never {
  developmentDebugger();
  throw new Error(`Unexpected call to assertNever: ${condition}`);
}

/** Pause execution in development to aid debugging. */
function developmentDebugger() {
  if (process.env.NODE_ENV === 'production') {
    return;
  }

  // eslint-disable-next-line no-debugger
  debugger;
}
