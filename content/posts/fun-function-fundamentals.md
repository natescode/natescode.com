---
title: "Fun Function Fundamentals"
date: 2023-03-26T02:28:19-05:00
draft: true
toc: false
images:
tags:
  - untagged
---

Functions are great. Let's cover some function fundamentals.

## Closures

The following code will print `11` 10 times. This is because Javascript using `var` is function scoped, closures.

```javascript
for (var x = 0; x < 10; ++x) {
  setTimeout(() => console.log(x), 100);
}
```

The old school solution is to use a closure.

```javascript
for (var x = 0; x < 10; ++x) {
  (function () {
    setTimeout(() => console.log(x), 100);
  })(x);
}
```

A closure is when a function wraps another function.

### Closures as modules

> "Back in my day we didn't have fancy CommonJS or ES modules, we had Closures, up hill both ways."

```javascript
var myModule;
(function (module) {
  module.method = function () {
    //code
  };
)(myModule);
```

## High-Order Functions

A high-order function is a function that takes a function as an argument and/or returns a function as a result.

```javascript
function withLogging(fn){
    console.log(`${fn} \n ${...args}`)
    return fn
}

function cube(n){
    return n * n * n
}

const cubeWithLogging = withLogging(cube)
cubeWithLogging(3) // returns 27; console "cube" "3"

```

### Practical example with Express.JS

## Dependency Injection

Passing a function to a function, high-order function, is a common form of dependency injection!

function

## Middleware

## Currying
