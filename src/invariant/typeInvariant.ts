const isProduction = process.env.NODE_ENV === 'production';

/**
 * Asserts the "truthiness" of a condition:
 * - will throw when ["falsy"](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
 * - will NOT throw when ["truthy"](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)
 *
 * While TypeScript is expressive, the errors it returns can be difficult to
 * decipher, especially for folks who are still learning. Runtime type errors
 * are expected to complement type definitions, not replace them.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function typeInvariant(condition: any, message: string): asserts condition {
  if (!isProduction) {
    if (condition) {
      return;
    }

    throw new TypeError(message);
  }
}
