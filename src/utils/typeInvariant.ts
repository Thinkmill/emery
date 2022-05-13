const isProduction = process.env.NODE_ENV === 'production';

/**
 * An `invariant` function takes a condition:
 * - when "falsy" the function will throw
 * - when "truthy" the function will NOT throw
 *
 * While TypeScript is expressive, the errors it returns can sometimes be
 * difficult to decipher, especially for folks who are still learning. Runtime
 * type errors are expected to compliment TS type definitions, not replace them.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function typeInvariant(condition: any, message: string): void {
  // bail in production — wrapping check for dead-code elimination
  if (!isProduction) {
    if (condition) {
      return;
    }

    throw TypeError(message);
  }
}
