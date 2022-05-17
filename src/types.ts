export type Predicate = (...args: unknown[]) => boolean;
export type UnaryPredicate<T> = (value: T) => boolean;

export type ObjectEntry<T> = { [K in keyof T]: [K, T[K]] }[keyof T];
