---
title: "The Last Monad Tutorial"
date: 2023-08-08T11:49:16-05:00
draft: true
toc: false
images:
tags:
  - untagged
---

# Monad

Definition:

> Monad is a monoid in the category of endofunctors

That's it!

Just kidding.

Monad is a container type that has some associated methods

```typescript
interface monad<T> {
  wrap(T): Monad<T>;
  unwrap<T>(): T;
  map(monad: monad<T>): monad<T>;
  flatmap(monad: monad<T>, fn): monad<T>;
}
```

The simplist monad is an _array_.

```typescript
[1];
```

We can `unwrap` the array and get the containing values.

```typescript
function unwrap(array:[]any):any {
  return array[0]
}
```

we can `wrap` a value into an array

```typescript
function wrap(value:any):[]any {
  return [value]
}

```

we can `flatmap` an array. Meaning we unwrap it, perform some operation on the values and rewrap them.

```typescript

function flatmap(items:[]any,  action:(any):[]any):[]any {
  return items.map(action)
}
```

## Summary

```javascript
const wrap = (value) => [values];

const unwrap = (array, index) => array[index];

const flatMap = (array, func) => array.map(func);
```

## That's it?!

Basically. The difficult part is seeing the true abstraction here.

## Maybe?!

The common example is to use maybe. Basically wrapped types have more information. Example, sending a letter requires the letter be put into an envelope, `wrap` and then sent.

The envelope adds information `u

## IO Monad

We _can_ do IO in a pure way, sorta. So instead of our code reaching out into the world to get console input or logging, we ask the runtime to do it and pass it to the program as a parameter

```javascript
const world = {
  console: {
    input: "Bob",
  },
};

function getNameFromConsole(world) {
  return world.console.input;
}
```

The above function **is** pure because the `world` is now a parameter and not some mutable outside state.
