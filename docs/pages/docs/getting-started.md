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

### Modules

This library is already tiny (~3kB minified) but if you prefer just grab the parts you need:

#### [Assertions](/docs/assertions)

An assertion declares that a condition be `true` before executing subsequent code.

```ts
import assertions from 'emery/assertions';
```

#### [Checks](/docs/checks)

This library considers "checks" predicates that cannot easily be expressed as type guards.

```ts
import checks from 'emery/checks';
```

#### [Guards](/docs/guards)

Type guards allow you to narrow the type of a value.

```ts
import guards from 'emery/guards';
```

#### [Opaques](/docs/opaques)

Opaque types encode primitive types with information about program semantics.

```ts
import opaques from 'emery/opaques';
```

#### [Utils](/docs/utils)

Utility functions for overiding TypeScript's default behaviour.

```ts
import utils from 'emery/utils';
```
