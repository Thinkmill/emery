---
title: Getting started
description: How to install, import, and get the most out of Emery
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

Emery's already tiny (~3kB minified) but if you prefer just grab the parts you need:

#### [Assertions](/docs/assertions)

An assertion declares that a condition be `true` before executing subsequent code, ensuring that whatever condition is checked must be true for the remainder of the containing scope.

```ts
import assertions from 'emery/assertions';
```

#### [Checks](/docs/checks)

Checks are just predicates that can't easily be expressed as type guards. Handy for dealing with ambiguous types.

```ts
import checks from 'emery/checks';
```

#### [Guards](/docs/guards)

A collection of common guards. Type guards allow you to narrow the type of a value.

```ts
import guards from 'emery/guards';
```

#### [Opaques](/docs/opaques)

Opaque types encode primitive types with information about program semantics.

```ts
import opaques from 'emery/opaques';
```

#### [Utils](/docs/utils)

Utilities for smoothing over areas of TS that are loosely typed.

```ts
import utils from 'emery/utils';
```
