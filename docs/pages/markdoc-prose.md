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

> Blockquotes example with _inline_ **tags** included.

### Lists

#### Unordered

Prefer dash `-` for unordered lists.

- Create a list by starting a line with `-`
- Sub-lists
  - are made by
  - indenting 2 spaces

#### Ordered

Prefer non-sequential indicators for ordered lists—it's easier to more items around.

1. Lorem ipsum dolor sit amet
1. Consectetur adipiscing elit
1. Integer molestie lorem at massa

### Code

Only code "fences" e.g. ` ``` ` supported, not indentation syntax.

```
Sample text here...
```

Provide a language after the backticks e.g. ` ```js` for syntax highlighting.

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
The "neutral" tone is the default
{% /callout %}

{% callout tone="positive" %}
Indicate success with a "positive" callout
{% /callout %}

{% callout tone="warning" %}
Give readers a "warning" when appropriate
{% /callout %}

{% callout tone="critical" %}
Highlight "critical" areas with a callout
{% /callout %}
