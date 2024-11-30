---
title: "Referential Transparency"
date: 2023-08-03T07:07:19-05:00
draft: true
toc: false
images:
tags:
  - untagged
---

Referential Transparency is a confusing term. It is a _really_ simple concept, I promise.

Referential Transparency is a fancy term for the substitution property of equality. Meaning `=` really means those two things are equal and interchangeable.

Let's see as simple example.

```javascript
const a = 1;
a + a === 1 + 1; // true
```

If `a = 1` then we can replace all instances of `a` with `1` and everything works the same. Let's keep going.

```javascript
const a = Math.random();
a + a ==== Math.random() + Math.random(); // FALSE
```

NOPE! They're not the same. We run into problems with _impure_ functions. Functions that aren't predictable don't work. Now let's imagine we had a random function that was predictable that took a seed value.

```javascript
const a = random(seed);
a + a === random(seed) + random(seed); // true
```

Let's pretend `readChar` is a generator function that reads the following CSV file character by character and parses it as an integer.

```c
1,2
```

```javascript
const a = readCharAsNumber(); // 1

a + a; // 2
```

Simple enough. We call `readCharAsNumber` and get `"1"` which we parse as `1`. Then we take that value and add it twice.

So any time we write `=` that means we can replace the left side with the right side and get the same result. If `x = 3` then `x + x` is the same as `3 + 3`. Let's try that.

```javascript
const a = readCharAsNumber();

readCharAsNumber() + readCharAsNumber(); // 3
```

We got `3` ?! On no. Every time we call our function it runs and gives us a different result!

If we want the next value, we need to say that.

```javascript
const a = readCharAsNumber();

readCharAsNumber() + readCharAsNumber(); // 2 !!!

readCharAsNumber() + @next readCharAsNumber(); // 3
```

The `@next` keyword basically does this

```javascript
readCharAsNumber().next().value;
```

We get a different function every time we call `.next` which means we maintain referential transparency while doing IO!

Effectively think of it as

```javascript
function next(index = 0) {
  readFileLine(index);
}
```
