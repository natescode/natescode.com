---
title: "Code is Data; Data is Code"
date: 2015-01-01T00:03:46-05:00
draft: true
---

# Code is Data; a gentle guide

## algorithms

I remember a 10 year old doing a talk once. He was coding in Java for a tank robots game. Great introduction to coding. I remember him thinking code is just a bunch of if them statements, which is fine for his experience level. But how do AI and larger programs do it? Turn Code to Data!

## Data == Code

Let's start with the timeless Fizz buzz interview question. There are virtually infinite ways to write it. I'll write it in JavaScript.

So we do several checks. If or switch case. Now how would we handle additions or an arbitrary list of values? What if we want to have
all numbers that are divisble by 3 say "tree", 4 say "fore!" etc? Do we keep writing if / else statements?0

```javascript
function fizzbuzz(n) {
  let message = n;
  if (n % 3 === 0) {
    message = "fizz";
  } else if (n % 4 === 0) {
    message = "buzz";
  } else if (n % 5 === 0) {
    message = "oogabooga";
  } else if (n % 15 === 0) {
    message = "fizzbuzz";
  }
  // ... continue with too many if/else statements
}
```
