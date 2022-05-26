import { ErrorLike } from '../types';

/**
 * Simplifies `error` handling in `try...catch` statements.
 *
 * JavaScript is weird, you can `throw` anything. Since it's possible for
 * library authors to throw something unexpected, we have to take precautions.
 */

export function getErrorMessage(error: unknown, fallbackMessage = 'Unknown error') {
  if (isErrorLike(error)) {
    return error.message;
  }

  return error ? JSON.stringify(error) : fallbackMessage;
}

/** Handle situations where the error object isn't an _actual_ error. */
function isErrorLike(error: unknown): error is ErrorLike {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as Record<string, unknown>).message === 'string'
  );
}
