export type Predicate = (...args: unknown[]) => boolean;
export type UnaryPredicate<T> = (value: T) => boolean;
