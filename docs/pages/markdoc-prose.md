# Markdoc prose tests

## h2 Heading

### h3 Heading

#### h4 Heading

##### h5 Heading

###### h6 Heading

## Inline

This is a paragraph with _emphasised text_ and **strongly emphasised text**. It may also contain [links](https://markdoc.io/) and ~~strikethrough~~ text.

Here's a new paragraph that contains inline `code`.

## Block

### Horizontal rule

---

### Blockquotes

> Blockquotes can also be nested...
>
> > ...by using additional greater-than signs right next to each other...
> >
> > > ...or with spaces between arrows.

### Lists

Unordered

- Create a list by starting a line with `+`, `-`, or `*`
- Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    - Ac tristique libero volutpat at
    * Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
- Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

### Code

Block code "fences"

```
Sample text here...
```

Syntax highlighting

```js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

### Tables

| Option | Description                                                               |
| ------ | ------------------------------------------------------------------------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default.    |
| ext    | extension to be used for dest files.                                      |

### Images

![Octocat](https://octodex.github.com/images/original.png)

## Tags

### Callout

{% callout %}
The "note" type is the default
{% /callout %}

{% callout type="positive" %}
Indicate success with a "positive" callout
{% /callout %}

{% callout type="warning" %}
Give readers a "warning" when appropriate
{% /callout %}

{% callout type="critical" %}
Highlight "critical" areas with a callout
{% /callout %}
