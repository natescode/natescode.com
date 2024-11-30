---
title: "Making a Programming Language"
date: 2023-06-21T14:06:47-07:00
draft: true
toc: false
images:
tags:
  - untagged
---

Where do programming languages come from? Could I make my own?

These are the questions the lead me on a journey to learn DSA, interpreters, compilers and more!

While C++ was my first programming language, I was self-taught in high-school and then didn't code for a few years. I never learned DSA or computer science in my programming two-year degree. I learned web development and 7 programming languages though.

Once I landed my first job, I felt imposter syndrome. Especially since I somehow got a job with an amazing local company that had a great reputation. Everyone else had 4 year degrees or where mathematicians. I was just a stupid nerd that coded a bit in highschool so I could do my math homework faster, and make games so I could screw around with my friends more.

So I let curiousity teach me. There were plenty of classic C tutorials, which I recommend. The best I found was a book _Writing an Interpreter in Go_ by Thorsten Ball. I like it because it is simple, clear and uses Go which I was learning at the time and Go is a REALLY simple but effective language (think C but easier).

## Language Design

Step 0 was learning how interpreters and compilers work. Following the interpreter book, I just implemented an interpreter and compiler for an already created language, Monkey; the language was created for the book.

What about my own language? That is **REALLY** difficult. First, I started with _sillyscript_ which was just a fun C-like scripting language of my own.

Once I got serious, I needed a goal.

### The Prime Directive

Every project needs some high level goals to guide it. This simplifies the decision process. For example, if ease of use is a priority then a garbage collector is a great idea and pointer are not.

If performance at all costs is the goal, then no GC for you!

My goal was to replace javascript as the only _good_ full-stack language. There are plenty of great server-side languages but they all suck as client web languages. WASM (Web Assembly) was created and allowed C/C++ and Rust to work in the browser but those are really great to work in; especially C++. Rust isn't bad mind you, just not ideal in my humble opinion.

WASM doesn't have GC yet so Rust is your best bet really, especially now.

I wanted a language that was like Go, Rust, Zig and ML that could work with or without a GC and had all the great ML abstractions like pattern matching, algebraic data types and type inference.

So that is how _Silicon_ and _Sigil_ were born. _Silicon_ is the **language** while _Sigil_ is the **toolchain**: compiler, interpreter, formatter, package manager, build system etc..

I read a non-academic paper by a brilliant software engineer, Johnathan Goodwin, on the concept of _gradual memory management_, which means a language _could_ be both garbage collected, manual memory managed (C), borrower checked (Rust) and have custom allocators (like Zig). While mixing memory management techniques isn't new, there are GCs for C and C++ has smart pointers etc. The paper really laid out how to do gradual memory management to a MUCH larger extent. I knew this is what I wanted to do because WASM doesn't have a GC yet and the low-level control would be useful for keeping load times low. Yes, I could always compile to Javascript, but that wasn't really my goal here.

### The User Story

**AS A** _developer_

**I WANT TO** _code in a WASM optimized language_

**SO THAT** _I can build robust full-stack websites and mobile application without Javascript while still using all the same APIs: Web APIs and Node APIs._

### The NON-GOALS

I think these are important as well to prevent scope creep.

Silicon doesn't care about non-wasm environment nor about compiling to native, that can be done after you get a WASM binary anyways.

- don't target anything but WASM
- no optimizations
- no native compilation
- no WASM interpreter / runtime (see WASMER, WASMTIME etc)

This make my job as the solo developer on Sigil MUCH easer, still hard, but orders of magnitude easier. Even package management is currently a non-goal since WAPM exists within WASMER.

Silicon is a leaky abstraction for WASM, just like C is a leaky abstraction for assembly.

Silicon's primitive types are meant to easily work with WASM, and Javascript.

Silicon primitive types

    atom = type with only one value, itself. I.E true. Maps to JS symbol, sorta. (useful)

    bool = sum type of `true` and `false' atoms. Maps to JS bool and wasm int.

    externfunc = type that hide internal implementation (WASM)

    int = LEB128 variable length integer. Maps to Javascript BigInt (WASM)

    float = IEEE 754 float. Maps to JS number or WASM float 32/64.

    decimal = backed by LEB128. 

    //char = no character type because it is poorly defined

    string = UTF-16 string maps to JS string

    // null / undefined = optionals are used instead

## Implementation Details aka HOW?

For a more serious project, the intepreter / compiler, in this case Sigil, needs to be written in some language. A parser generator is also a REALLY good idea because you can then have a single document that specifies the language's grammar and the implemenation can be changes more easily by changing the grammar and adding a little bit of code.

Since Sigil doesn't output native binaries for hardware like X86 or ARM, Sigil doesn't care about LLVM or other projects. SIMPLER!

    NOTE
      Absolutely nothing against LLVM, clang etc which take intermediate language code and optimive and target hardware (and can JIT too) but they're complex to work with, can have limitation on what the language does (Rust ran into this) and are yet another moving dependency (Go philosophy) that isn't actually needed here.

Silicon _can_ indirectly target native by using tools that use LLVM to compile WASM binaries to native code. Again, standing on the shoulder of giants is our goal.

In fact, Sigil does ZERO optimizations! **GASP** because, again, Sigil only care about getting Silicon source code into WASM. There are other tools to work with WASM and interprete it, optimize it, JIT it, compile it or translate it to C. WASMER even has `wapm` which is a WASM package manager! Yet another tool I don't need to build (though I'll likely make a Silicon specific package manager later).
