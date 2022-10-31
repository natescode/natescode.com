---
title: "Compilers"
date: 2015-01-01T00:03:46-05:00
draft: true
---

Nate builds a compiler

#

computerscience

#

typescript

#

compilers

#

tutorial
Eventually, after learning a handful of programming languages, I began to wonder. "How are programming languages created?"

How do C# or JavaScript work under the hood?

You write a bunch of text and magically a compiler translates that into 1's and 0's. Or in JavaScript's case, the interpreter immediately executes it (there is also JIT which compiles on the fly too).

So let's build an interpreter and compiler in Typescript. Typescript will make dealing with Types, errors and documentation easier.

We'll start with an interpreter which will understand our source code and immediately run it. Layer, we'll translate the source code to a lower level like Java bytecode or native x86.

Design the 'Toy' Language
This is just a silly toy language and interpreter so let's call it Toy script or 'Toy' for short.

First, we need to design the language. We'll keep the syntax super simple.

Variable assignment and declaration.

message => "hello, World!"

What does Hello World type program look like in Toyscript?
// Hello World

$sayHelloTo greetee => {
print "Hello, ${greetee}!"
}

sayHelloTo "World"

// Hello, World!
