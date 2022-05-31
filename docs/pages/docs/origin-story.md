---
title: Origin story
description: How we arrived here
---

# {% $markdoc.frontmatter.title %}

The seed was planted by this simple Slack message:

> Is there a way to “optimise” the errors returned from TS?

The discussion that followed confirmed a desire for an approach to TypeScript development that improves DX without compromising static types. At [Thinkmill](https://www.thinkmill.com.au/) we collaborate on many design system component libraries—driving design system adoption within companies can be difficult, so removing any obstacle is a big win.

## The problem

To express our intent we often write types that are technically accurate but leave consumers scratching their heads when something goes wrong. Consider this component definition:

{% callout %}
React is used in these examples, but Emery is framework agnostic
{% /callout %}

```tsx
type LabelProps =
  | { 'aria-label': string; 'aria-labelledby'?: never }
  | { 'aria-label'?: never; 'aria-labelledby': string };
type ThingProps = { other: string } & LabelProps;

const Thing = (props: ThingProps) => {
  return; /* omitted for brevity */
};
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

## A solution

Without TypeScript support for influencing the messages surfaced to consumers at buildtime, runtime errors are our next best option.

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
