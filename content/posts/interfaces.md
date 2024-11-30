---
title: "Interfaces"
date: 2023-03-26T02:07:32-05:00
draft: true
toc: false
images:
tags:
  - Concepts
---

Interfaces are a crucial concept in software. There are APIs or Application Programming Interfaces, there are ABIs Application Binary Interfaces, UIs User Interfaces,
they are everywhere! Even the humble function signature is an interface. Let's not forget the actual `interface` keyword in many languages too! So what is a @#$% interface?

Let's find out.

## Baby's first abstraction

> "...abstract thinking is a higher-level mode of thinking that involves processing theoretical concepts and allows us to make connections and see patterns. -- Calmerry.com"

I really like the use of "connections" and "patterns" here.

My first abstraction when I taugh myself TI-BASIC was functions. Function have input and ouput. As far as the caller is concerned, everything in the middle is magic. Just like fast food is like a function. Your order and money go in, food comes out. The details in the middle don't matter. The point of execution or calling is the interface. The contract that is agreed upon, explicitly or implicitly, for two systems to communicate. The RULES around that communication is know as a _PROTOCOL_; that's for a different blog post.

Interfaces are _really_ important.

```javascript
function foo(a, b, c) {
  if (a) {
    return b(c);
  }
  return false;
}
```

We can see that Foo assumes a is a boolean, b is function and c is a parameter for b. If have a function that accepts a `foo` function, as long as our function acts the same, we're good.
