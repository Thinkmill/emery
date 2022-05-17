import { typeInvariant } from './typeInvariant';

describe('utils/typeInvariant', () => {
  it('should throw when the condition is "falsy"', () => {
    expect(() => typeInvariant(false, '')).toThrow();
    expect(() => typeInvariant(+0, '')).toThrow();
    expect(() => typeInvariant(-0, '')).toThrow();
    expect(() => typeInvariant('', '')).toThrow();
    expect(() => typeInvariant(null, '')).toThrow();
    expect(() => typeInvariant(undefined, '')).toThrow();
    expect(() => typeInvariant(NaN, '')).toThrow();

    expect(() => typeInvariant(false, 'Custom message')).toThrow('Custom message');
  });

  it('should NOT throw when the condition is "truthy"', () => {
    const mockFn = jest.fn();

    expect(() => typeInvariant(true, '')).not.toThrow();
    expect(() => typeInvariant(1, '')).not.toThrow();
    expect(() => typeInvariant(-1, '')).not.toThrow();
    expect(() => typeInvariant('test', '')).not.toThrow();
    expect(() => typeInvariant({}, '')).not.toThrow();
    expect(() => typeInvariant([], '')).not.toThrow();

    expect(() => typeInvariant(mockFn, '')).not.toThrow();
    expect(mockFn).toBeCalledTimes(0);
  });
});
