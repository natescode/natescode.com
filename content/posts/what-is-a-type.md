---
title: "Fundamentals 1: What is a Type?"
date: 2015-01-01T00:03:46-05:00
draft: true
---

Welcome to my new fundamentals series. This series will cover deceivingly simple question. We'll learn how to answer them in one sentence!
Ok, let's go.

## Why Definitions Matter

I like asking the most basic questions. Those are the hardest after all. Everything else is built off of those definitions.

You might think you know what a Bicycle is and how to recognize one, until you have to teach a computer to do the same.

If you can't explain something in a single sentence, at least at a high level, you probably don't know it very well.

## What is a Type?

> "A type is a set of valid values" - NatesCode

That's it. Sure there is A LOT more to it like operations are restricted to certain types but ultimately that is what types are.

We know what a value is: `"hi"`, `true`, `false`, `42069`, `0x1F` etc...

The TYPE or category tells us which values are valid. We know that the answer to a math operation is never going to be "pink" or false. It
must be a number (though we have NaN in JavaScript)

Let's try to relate this to code.
const isAlive = true
Now, JavaScript has types. They're dynamic, meaning the type associated to a variable may change. At runtime, isAlive will be a boolean type.
The TYPE is dynamic and dynamic means it can change.

Boolean only has two valid values: true and false.

Unfortunately Type systems lie. For too long in C#, Java etc a 'int32' could not only be all numeric values but ALSO `NULL` which has cost
billion in bugs.

In Typescript and other ML languages we have SUM types. Meaning we can combine our own values or types (group of values together).
We could define our own type with our desired valid values. This is clearer in Typescript.

```typescript
type BoolOrNumber = Bool | Number;
type greeting = "Hello" | "Hi" | "Howdy" | "Sup";
```

The pipe | means OR. So a greeting is type with only those four strings as valid values.

## Sets and Category Theory

I don't mean to go keep into Lambda Calculus or Category Theory but understanding the absolute basics are crucial in software.

I see it all the time. If Minnesotans (my home state) are Americans, NOT all Americans are Minnesotans.
