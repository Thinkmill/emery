---
title: Getting started
description: How to get started with TS Runtime DX
---

# {% $markdoc.frontmatter.title %}

Follow the instructions below to use TS Runtime DX in your app.

## Install

Install the TS Runtime DX library:

```shell
npm install ts-runtime-dx
```

or

```shell
yarn add ts-runtime-dx
```

## Import

Import the library in your app:

```js
const tsrdx = require('ts-runtime-dx');
```

If you're using ESM:

```js
import tsrdx from 'ts-runtime-dx';
```

### Module formats

Grab the parts you need without bloating your bundle.

```ts
import { assert, assertNever } from 'ts-runtime-dx/assertions';
import { checkAll, checkAllWith, negate } from 'ts-runtime-dx/checks';
import * as guards from 'ts-runtime-dx/guards';
import { typedEntries, typedKeys } from 'ts-runtime-dx/utils';
```
