# Local Storage Fallback
Check and use appropriate storage adapter for browser (localStorage, sessionStorage, cookies, memory).

Rewritten in Typescript from [original local-storage-fallback by ripeworks](https://github.com/ripeworks/local-storage-fallback).

[![npm version](https://badge.fury.io/js/%40conclurer%2Flocal-storage-fallback.svg)](https://badge.fury.io/js/%40conclurer%2Flocal-storage-fallback)

## Installation

```
$ npm install @conclurer/local-storage-fallback
```

## Usage

### Basic Usage

```typescript
import {FallbackStorage} from '@conclurer/local-storage-fallback';

// Auto detect supported storage adapter (default behavior)
let storage = new FallbackStorage();
storage.setItem('foo', 'bar');
storage.getItem('foo'); // => 'bar'
```

### Use as Shim for localStorage

To use local-storage-fallback as shim just import:

```typescript
import '@conclurer/local-storage-fallback/shim';
```

Or add the following lines:

```typescript
import {FallbackStorage} from '@conclurer/local-storage-fallback';

if (!('localStorage' in window)) {
    // tslint:disable-next-line
    (<any>window).localStorage = new FallbackStorage();
}
```

### Specify Storage Adapter
```typescript
import {FallbackStorage, MemoryStorage} from '@conclurer/local-storage-fallback';

let adapter = new MemoryStorage();
let storage = new FallbackStorage(adapter);
```

### Custom Storage Adapters

Custom storage adapters can be used by implementing the `IStorageAdapter` interface:

```typescript
import {FallbackStorage, IStorageAdapter} from '@conclurer/local-storage-fallback';

class CustomAdapter implements IStorageAdapter {
  // Custom implementation
}

let storage = new FallbackStorage(new CustomAdapter());

```

## Purpose

With browser settings like "Private Browsing" it has become a problem to rely on a working `window.localStorage`, even in newer browsers. Even though it may exist, it will throw exceptions when trying to use `setItem` or `getItem`. This module will run appropriate checks to see what browser storage mechanism might be available, and then expose it. It uses the same API as `localStorage` so it should work as a drop-in replacement in most cases.

## Gotchas

* `CookieStorage` __has__ storage limits. Be careful here.
* `MemoryStorage` will __not__ persist between page loads. This is more or less a stop-gap to prevent page crashes, but may be sufficient for websites that don't do full page loads.
