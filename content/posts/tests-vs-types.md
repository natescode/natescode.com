---
title: "Tests vs Types"
date: 2023-08-02T08:52:40-05:00
draft: true
toc: false
images:
tags:
  - fundamentals
---

```
"We don't need complex, stupid, cumbersome types and compilation to prevent bugs in production, types can't prevent all bugs anyways. Just write more tests!" -- Tess

"Yes we do! We wouldn't need to write so many complex mocks for tests that take forever to run in our CI / CD pipeline if we used a REAL language that is statically typed. " -- Tyler

```

As you can see from the conversation, or argument above, Tess prefers Tests and Tyler prefers types; _who is correct?_

## Two sides; Same Coin

I myself believed one side of this false dichotomy at one point. They aren't mutually exclusive. Now **PLEASE** I am not getting into the weed of TDD, type systems etc in this post. I'm merely showing that Types cannot replace test, generally, and tests cannot replace types, generally.

When I say `test` I mean _Black box unit testing_.

## The Proof is in the Code

So let's write a Jest test for a simple `sum` function.

```javascript
const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
```

Here is the implementation of the `sum` function.

```javascript
function sum(a, b) {
  return a + b;
}

module.exports = sum;
```

So what if we write a new function to calculate the bill total at a restaurant.

```javascript
function billTotal(subtotal, tax, tip) {
  return sum(subtotal, tax, tip);
}

billTotal(70.2, -0, "5%");
```

Notice that we are _using_ the function incorrectly. Where does our test prevent that? It doesn't. Sure a unit test could handle that case BUT our `billTotal` function still wouldn't work. Yes, we could write `yet another test` to test billTotal BUT tests should verify implementation, NOT usage. This also make it the user's responisiblity to check that. A type system would catch this immediately, no test required.

With Types

```typescript
function sum(a: number, b: number): number {
  return a + b;
}
```

## Advanced Types

Types can do A LOT more than that. `Rust` uses Types to create safe and fast code. Prevent race conditions. In fact, `great` language like `OCaml` have types but _you_ don't write them, they're inferred.

Types can replace logic checks. Error handling.

```typescript
type TempResult = Tempdata | Error;

function Foo(request: Request): ResultError {}

if (Foo() === Error) {
  // handle error
} else {
  bar();
}

function bar(temp: Tempdata): bool {}
```

### Types instead of Garbage Collection

Rust uses its types system to prevent data races, memory leaks and many other common errors that are often prevented or cleaned up by garbage collectors and runtimes. Types systems CAN prove anything you want them to.

Prolog for example uses types with a SMT solver to actually fill in the blanks and solve programming problems for you!
