# emery

## 1.4.0

### Minor Changes

- [#37](https://github.com/Thinkmill/emery/pull/37) [`810b5bf`](https://github.com/Thinkmill/emery/commit/810b5bf771d970408ff5cb27a4906d64280de119) Thanks [@jossmac](https://github.com/jossmac)! - Add `warning` fn

## 1.3.0

### Minor Changes

- [#34](https://github.com/Thinkmill/emery/pull/34) [`3d3888a`](https://github.com/Thinkmill/emery/commit/3d3888aba63b7638f4d71c3b952e5a1b7590b3b0) Thanks [@jossmac](https://github.com/jossmac)! - Assertions: support opt-out of debugger

## 1.2.2

### Patch Changes

- [#30](https://github.com/Thinkmill/emery/pull/30) [`f3bed0d`](https://github.com/Thinkmill/emery/commit/f3bed0d894b3780ed95b29481259018fb33f21ff) Thanks [@jossmac](https://github.com/jossmac)! - Loosely type object util args.

  If folks had strongly typed objects, they wouldn't need these utils. Support any object to save some headaches. Affects:

  - `typedEntries()`
  - `typedKeys()`

## 1.2.1

### Patch Changes

- [#28](https://github.com/Thinkmill/emery/pull/28) [`2b8620a`](https://github.com/Thinkmill/emery/commit/2b8620ac73cebe99543af26f7e1ce31978e7752c) Thanks [@mitchellhamilton](https://github.com/mitchellhamilton)! - Fixed `isFulfilled` and `isRejected` guards not being exported from the main entry point.

## 1.2.0

### Minor Changes

- [#25](https://github.com/Thinkmill/emery/pull/25) [`cec7317`](https://github.com/Thinkmill/emery/commit/cec7317185a9485709b134453063e0ec991e26ca) Thanks [@mitchellhamilton](https://github.com/mitchellhamilton)! - Added `isFulfilled` and `isRejected` guards for use with `Promise.allSettled`
