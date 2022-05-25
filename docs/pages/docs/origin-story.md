---
title: Origin story
description: How we arrived at TS Runtime DX
---

# {% $markdoc.frontmatter.title %}

The seed for TS Runtime DX was planted by this simple Slack message:

> Is there a way to “optimise” the errors returned from TS?

The discussion that followed confirmed a desire for an approach to TypeScript development that improves DX without compromising static types. At [Thinkmill](https://www.thinkmill.com.au/) we collaborate on many design system component libraries—driving design system adoption within companies can be difficult, so removing any obstacle is a big win.

## The problem

To express our intent we often write types that are technically accurate but leave consumers scratching their heads when something goes wrong. Consider this component definition:

{% callout %}
React is used in these [examples](https://www.typescriptlang.org/play?jsx=4&noErrorTruncation=false#code/JYWwDg9gTgLgBAcigUwIYGMYHoBWBnADwFooBXAOxlGQQG4BYAKCZgE8xk4AZVAI2QA2ABSgQweOAF44Ab0SoowVEQF9BCAFxw8MReQDmAGnmLlq-gIHIAJr1YIA-FvLIAbsihwAvnAA+skyUVNQFHZzcPWkCzEKtbey0dPX1vFnZOABUAC2ADETEJaTkIGCyPRN1clJ8AMm4Q-PEmJnQIch04bKqpOAAKMFFxLS68wbwASikAPlkmODgUGFIocjgAHmtgV1kAOj2Bgp8sKaYvZsZkAkhYOFb2+ABRAlRwKwB5EGA8PGA2nt7JpIZjI5gtkEsVusRikSmUoJIAEQAdSyqBgESgCLgx1O5ywWDgl2u8DuHSeLzAVgAwhAQLxcmjfqtpADprNGPj5mCIas1tC4LCPIiUWiMViFEFzIJEU9KcB0MB4FKBOLTMELHE7Ii8LTkERgNYsTiOQSzowgA), but ts-runtime-dx is framework agnostic
{% /callout %}

```tsx
type LabelProps =
  | { 'aria-label': string; 'aria-labelledby'?: never }
  | { 'aria-label'?: never; 'aria-labelledby': string };
type ThingProps = { other: string } & LabelProps;

const Thing = (props: ThingProps) => /* omitted for brevity */
```

### TypeScript errors (buildtime)

When a consumer uses this component with missing props they're confronted with a confusing error message:

```tsx
const ExampleOmission = () => {
  return <Thing other="Example" />;
  //      ~~~~~
  //      Type '{ other: string; }' is not assignable to type 'ThingProps'.
  //        Property ''aria-labelledby'' is missing in type '{ other: string; }' but required in type '{ 'aria-label'?: never; 'aria-labelledby': string; }'.
};
```

Not only is the error message difficult to understand, especially for those new to TypeScript, it's misleading! Simply because of the union's declaration order the final line implies that providing `'aria-labelledby'` will rectify the problem, while `'aria-label'` would also be appropriate.

If the consumer, for some reason, provides both label props the message becomes more cryptic:

```tsx
const ExampleCombination = () => {
  return <Thing other="Example" aria-label="Explicit label" aria-labelledby="some-id" />;
  //      ~~~~~
  //      Type '{ other: string; "aria-label": string; "aria-labelledby": string; }' is not assignable to type 'ThingProps'.
  //        Type '{ other: string; "aria-label": string; "aria-labelledby": string; }' is not assignable to type '{ 'aria-label'?: never; 'aria-labelledby': string; }'.
  //          Types of property ''aria-label'' are incompatible.
  //            Type 'string' is not assignable to type 'never'.
};
```

## The solution

Without a way to influence TypeScript in a way that would surface more useful messages to consumers at buildtime, runtime errors are our next best option.

### Custom errors (runtime)

We can improve DX without compromising static types by including an [assertion](/docs/assertions) that yields a more _human friendly_ error message.

```ts
const Thing = (props: ThingProps) => {
  validateProps(props);
  return; /* omitted for brevity */
};

function validateProps(props: ThingProps) {
  assert(
    'aria-label' in props || 'aria-labelledby' in props,
    'You must provide either `aria-label` or `aria-labelledby`.',
  );
}
```
