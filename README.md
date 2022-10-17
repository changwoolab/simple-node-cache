## simple-node-cache

A simple in-memory cache for node.js

There are no type limitations. You can cache almost everything.

## Installation

```tsx
npm i simple-node-cache
```

## How to use?

```tsx
import { CacheManager } from 'simple-node-cache';

const cache = new CacheManager();

cache.set('key', 'value');
console.log(cache.get('key'));
```

## Supports

### set

Stores value with given key

**Caution**: This overrides existing value

### del

Deletes value with given key

### expire

Set Time To Live in seconds

### get

Get value by given key

Returns `undefined` if there is no key

### clear

Deletes all keys

### size

Get current number of entries

### keys

Get all cache keys
