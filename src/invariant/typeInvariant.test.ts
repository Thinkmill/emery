import { typeInvariant } from './typeInvariant';

describe('utils/typeInvariant', () => {
  it('should throw when provided a falsy value', () => {
    expect(() => typeInvariant(null, '')).toThrowError();
    expect(() => typeInvariant(undefined, '')).toThrowError();
    expect(() => typeInvariant(false, '')).toThrowError();
    expect(() => typeInvariant(0, '')).toThrowError();
    expect(() => typeInvariant(null, 'Error message')).toThrow('Error message');
  });

  it('should NOT throw when provided a truthy value', () => {
    const mockFn = jest.fn();

    expect(typeInvariant(true, '')).toBeUndefined();
    expect(typeInvariant(123, '')).toBeUndefined();
    expect(typeInvariant('Test', '')).toBeUndefined();
    expect(typeInvariant({}, '')).toBeUndefined();
    expect(typeInvariant([], '')).toBeUndefined();
    expect(typeInvariant(mockFn, '')).toBeUndefined();
    expect(mockFn).toBeCalledTimes(0);
  });
});
