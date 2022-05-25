---
title: Getting started
description: How to get started with TS Runtime DX
---

# {% $markdoc.frontmatter.title %}

Follow the instructions below to use TS Runtime DX in your application.

&ZeroWidthSpace;

---

{% callout type="warning" %}
WIP: This library is not yet published to npm.
{% /callout %}

---

## Install

Install the library:

```shell
npm install ts-runtime-dx
```

or

```shell
yarn add ts-runtime-dx
```

## Import

Import the library:

```js
const tsrdx = require('ts-runtime-dx');
```

If you're using ESM:

```js
import tsrdx from 'ts-runtime-dx';
```

### Modules

This library is already tiny, but if you prefer, just grab the parts you need:

```ts
// # assertions
import { assert, assertNever } from 'ts-runtime-dx/assertions';

// # checks
import * as checkModules from 'ts-runtime-dx/checks';
const { checkAll, checkAllWith, negate, ...check } = checkModules;
// e.g. `check.isNonNegative()`

// # guards
import * as guards from 'ts-runtime-dx/guards';

// # utils
import { typedEntries, typedKeys } from 'ts-runtime-dx/utils';
```
