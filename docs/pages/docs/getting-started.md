---
title: Getting started
description: How to get started with Emery
---

# {% $markdoc.frontmatter.title %}

Follow the instructions below to use Emery in your application.

## Install

Install the library:

```shell
npm install emery
```

or

```shell
yarn add emery
```

## Import

Import the library:

```js
const emery = require('emery');
```

If you're using ESM:

```js
import * as emery from 'emery';
```

{% comment %}

### Modules

This library is already tiny, but if you prefer, just grab the parts you need:

```ts
// # assertions
import { assert, assertNever } from 'emery/assertions';

// # checks
import * as checkModules from 'emery/checks';
const { checkAll, checkAllWith, negate, ...check } = checkModules;
// e.g. `check.isNonNegative()`

// # guards
import * as guards from 'emery/guards';

// # utils
import { typedEntries, typedKeys } from 'emery/utils';
```

{% /comment %}
