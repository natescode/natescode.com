---
title: "Dangers of Functional Programming"
date: 2023-12-06T15:33:15-06:00
draft: false
toc: false
images:
tags:
  - functional programming
---

[Functional Programming](https://en.wikipedia.org/wiki/Function_(computer_programming)) has grown in popularity the last few years. Unfortunately, that also means it has become a bit of a buzzword. Some may call themselves "FP nerds" while only superficially emulating functional programming.

Sometimes mimicking functional techniques, especially in a non-functional language, *I'm looking at you ES2024*, is bit inefficient or dangerous. Let's cover some dangers of blindly using FP techniques without understand *how* they work instead of blindly following some self-proclaimed FP guru (typical FAANG to influencer) told you FP is a panacea.

**DISCLAIMER**

These are my opinions. I like FP, but it is just a tool. I'm not a fanboy of any particular technique; I use want works given my requirements and constraints (yes, skill issues are constraints).


## 1) Dangers of Lies 


The first lie is from FP 'gurus' you'll first here is "it makes code easier to test". While that may be true, FP comes from Lambda Calculus and in mathematics, there are no Unit Tests, only proofs. So strictly speaking if we were doing TRUE FP (no real Scottsman), there would be only proofs in the compiler. Thare are logical languages that do this but you and I are unlikely to ever get paid to use them commercially.


## 2) Danger of Recursion

True FP nerds will even avoid `for` and `while` and opt for recursion. Recursive algorithms / code can be beautiful but also dangerous.

Many major programming languages: `Python`, `C#`, `Java`, `PHP`, `ECMAscript`, `Ruby` either completely lack or don't guarantee runtime or compiler support for [TCO](https://en.wikipedia.org/wiki/Tail_call).

Let's look at the following C# code that recursively implements the fibonacci sequence.

```csharp
public static int fib(int n){
  if(n <= 2) return n;
  return fib( n - 1 ) + fib( n - 2 );
}
```
 
Unfortunately, while C# runtime, CLR, supports TCO, the C# compiler does not. This means that we may be getting stackoverflow then immediately going to the site of the same name to solve our error.

We _can_ use a technique called [bouncing](https://volgarev.me/2013/09/27/tail-recursion-and-trampolining-in-csharp.html), also explained [here](http://blog.functionalfun.net/2008/04/bouncing-on-your-tail.html) to prevent this.


### Stack Overflow

No, not the Q&A website. Many language runtimes, including V8 for Javascript, don't have [TCO](https://exploringjs.com/es6/ch_tail-calls.html) meaning recursive function calls will get added to the stack before they're called, overflowing the stack. I say _language runtime_ instead of language because the ECMAscript specification does infact support TCO. Specifications don't help when they're not properly or completely implemented.

### Big O

Take the classic Fibonacci algorithm. The Iterative solution runs in O(n). The recursive solution runs in O(2^n). Sure it _can_ be O(n) WITH [memoization](), that still means we use O(n) extra memory to do the same thing. We *could* write the recursive version to be more similar to the iterative version but for no gain and loss of code readability.

### Runtime, Immutability, Referencial Transparency

TRUE FP means during runtime ALL code is referencially transparent. What does that mean? A basic definition is given in code below.

```typescript
// a language is RF if the following is ALWAYS true for all expressions
let a = 1;
a + a == 1 + 1; 

let b = Math.random();
b + b == Math.random() + Math.random();
```

Many FP features actually require a runtime. This means system languages like `Rust` and `Zig` can never be fully FP like Haskell. Features that require a runtime: `immutable data-structures`, and often use `monads` as a solution to handle impure operations. FP languages like Haskell require a runtime to evaluate commands to handle IO at runtime.


## Dangers of `map`,`reduce`,`filter`

These methods are great!

### No Early Returns

Unfortunately, most languages aren't `Ruby` so therefore lack [non-local return]() so you can't return early when using [internal iterators]().

```es
let a = [1,2,3];

a.map((v,i)=>{
    // this returns for lambda function NOT for map. Map will continue
   if(v === 2) return; 
});

```

### NOM NOM RAM

More memory usage is also a problem.

## Dangers of Data-Structures

In languages where everything is an object, it is easy to allocate too many object and clone them. If a developer blindly follows
FP they may avoid mutation and in doing so allocate a ton more memory for the GC to clean up later. FP language compilers and runtimes are optimized for this, your ECMAscript that doesn't
even have a standard library in 2024, doesn't.

Unfortunately, many languages: `C#`, `Java`, `Javascript`, `ruby`, `php`... don't natively have immutable data-structures. This means you are spending A LOT of CPU and Memory to copy objects constantly just to avoid mutation. Plus, syntatically it is VERY verbose to do so.

Proper FP languages: `F#, Scala, OCaml, Haskell, Elm` use [Immutable Data Structures]() to prevent freeing too many objects and making the [garbage collector]() go BRRRR.

### More FP = More Objects?

Javascript's `Array.prototype.reduce` method will actually allocate more objects! I know I thought we were being functional.

`...` syntax, in some cases, can also be very inefficient.

## Dangers of Functions

Functions are great. Why would there be anything dangerous about functions?

## More Objects

Creates more objects.

### Currying / Partial Application

[Stackoverflow answer explains it well](https://stackoverflow.com/questions/53852138/functional-programming-when-to-curry)

> Currying is the transformation of applying a sequence of argument to a function to applying a sequence of functions to individual arguments. In JS this translates to creating a bunch of Functions which has a significant cost at runtime. However, this also has benefits in expressiveness for instance:

// the mapping function is
// created at each invocation of add2
const add2 = (coll) => map((x) => x + 2, coll);

// the mapping function is
// created once
const add2 = map((x) => x + 2);

> This illustrates that

> currying is putting emphasis on the fact that functions are 1st class citizens in your language and your domain (you pass around functions and values to model your domain).
> it has significant costs in JS if currying happens on a critical path of your app.
> curried functions must be consistent in their argument positioning. For instance by convention, transformation functions will take the collection on which to iterate as the last argument.

Currying or Partial Application can have a bit of execution overhead when used in Javascript. There will be multiple object created at runtime to support this.

## Conclusion

Functional Programming has many valuable concepts that lend to better code. However, FP is just a tool. It shouldn't be applied blindly or superficially imitated aka cargo cult. Sometimes, a plain old C-style for loop is exactly what is needed. Take the concepts and apply them where appropriate in your language / framework with some thought.
