---
title: "Tests vs Types"
date: 2015-01-01T00:03:46-05:00
draft: true
---

Types vs Tests: A False Dichotomy

#

testing

#

typescript

#

beginners
I've often heard from those against static typing, that you can just write tests to replace the need for writing types. The static typing enthusiasts also say that types reduce the need for tests. Who is correct?

Let's see.

"Tests validate logic. Types validate usage"
-- ME

Unit Tests and Static Typing are two sides of the same coin. Let's see with some code.

Let's unit test an add function and validate the logic
Assert(add(1,3)).Equals(4)
Now if we write some new code using add, that unit test won't stop us from passing in the wrong number or wrong types of parameters.
add(true,3)
Let's define our add function in Typescript and see what happens when we use the add function incorrectly.
const add = (a:number,b:number):number => a + b
add(true,3) // type error!
Again, Types make sure the developer uses the function correctly, but it doesn't check the function actually works correctly according to business logic.
const add (a:number,b:number):number => a - b
add(1,3) // -2
Unit Tests === Executable comments
It is no secret I'm not a fan of Unit Tests. There are a time and place for them like financial software, medical software or Space X missions. But for enterprise websites, they're worse than worthless. WHY?

Because test don't catch bugs, only regressions. 99.99% of the time the same developer that writes the features, also writes the tests for that feature. How would she write a test for a test case she hasn't thought of? She can't.

In enterprise organizations, test cover is the magic metric the managers chase. Unless testing quality is actually pursued, AND other lower hanging fruit is targeted first, tests are a net negative, that gives a false sense of security.

I much prefer static analysis tools for security checks and fuzzing to find bugs that no human would ever think of.
