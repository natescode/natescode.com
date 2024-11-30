---
title: "Silicon Part 0"
date: 2023-06-21T15:33:29-07:00
draft: true
toc: false
images:
tags:
  - silicon
  - sigil
---

This is part 0 of a new series that documents my journey developing my own production-grade compiler, sigil, for my programming language, Silicon, that targets WASM.

This post will cover high-level goals,and non-goals.

## Language Design

Step 0 was learning how interpreters and compilers work. Following the interpreter book, I just implemented an interpreter and compiler for an already created language, Monkey; the language was created for the book.

What about my own language? That is **REALLY** difficult. First, I started with _sillyscript_ which was just a fun C-like scripting language of my own.

Once I got serious, I needed a goal.

### The Prime Directive

Every project needs some high level goals to guide it. This simplifies the decision process. For example, if ease of use is a priority then a garbage collector is a great idea.

If performance at all costs is the goal, then no GC for you!

My goal was to replace javascript as the only _good_ full-stack language. There are plenty of great server-side languages but they all suck as client web languages. WASM (Web Assembly) was created and allowed C/C++ and Rust to work in the browser but those aren't really great to work in; especially C++. Rust isn't bad mind you, just not ideal in my humble opinion. C# has gotten much better with Blazor but still leaves Rust to be desired.

WASM doesn't have GC yet so Rust is your best bet really.

I wanted a language that was like Go, Rust, Zig and ML that could work with or without a GC and had all the great ML abstractions like pattern matching, sum types and type inference.

So that is how _Silicon_ and _Sigil_ were born. _Silicon_ is the **language** while _Sigil_ is the **toolchain**: compiler, interpreter, formatter, package manager, build system etc..

I read a non-academic paper by a brilliant software engineer, Johnathan Goodwin, on the concept of _gradual memory management_, which means a language _could_ be both garbage collected, manual memory managed (C), borrower checked (Rust) and have custom allocators (like Zig). While mixing memory management techniques isn't new, there are GCs for C and C++ has smart pointers etc. The paper really laid out how to do gradual memory management to a MUCH larger extent. I knew this is what I wanted to do because WASM doesn't have a GC yet and the low-level control would be useful for keeping load times low. Yes, I could always compile to Javascript, but that wasn't really my goal here.

### The User Story

**AS A** _developer_

**I WANT TO** _code in a WASM optimized language_

**SO THAT** _I can build robust full-stack websites and mobile application without Javascript while reusing existing code in other language and being able to use Silicon (WASM) in any language I want_

### The NON-GOALS

I think these are important as well to prevent scope creep.

Silicon doesn't care about non-wasm / non-JS environments nor about compiling to native, that can be done after you get a WASM binary anyways.

- don't target anything but WASM & Ecmascript (I'm sure I'll have to sadly)
- no optimizations (WASM tooling)
- no native compilation
- no WASM interpreter / runtime / package manager (see WASMER, WASMTIME, WAPM etc)

This makes my job as the solo developer on Sigil MUCH easer, still hard, but orders of magnitude easier. Even package management is currently a non-goal since WAPM exists within WASMER (I don't know if it'll suffice but we'll see).

Silicon is purposely a leaky abstraction for WASM.

Silicon's primitive types are meant to easily work with WASM, and Javascript.

Silicon primitive types

    atom = type with only one value, itself. I.E `$true`. Maps to JS symbol, sorta. (useful).

    bool = sum type of `$true` and `$false' atoms. Maps to JS bool and WASM int.

    opaque = type that hides internal implementation (WASM).

    int = LEB128 variable length integer. Maps to Javascript BigInt (WASM).

    float = IEEE 754 float. Maps to JS number or WASM float 32/64.

    <!-- rune = NOT a character. Represents a single unicode code point. -->
    <!-- char = no character type because it is poorly defined -->

    string = UTF-16 string maps to JS string and WASM int 32/64.

    // null / undefined = optionals are used instead


## Grammar, Syntax etc

Grammar, Syntax etc are really important. I've spent a long time thinking about how syntax affects future features. As I tell my students, the sign of good code is that is can easily handle changing requirements. What if Silicon adds 3 new keywords? Will they conflict with existing identifiers? What if a new
language construct is added? Does the syntax for generics require infinite lookahead? (Yes, if you use `<>`).

### Simple is safe

Simplicity is safety. If the grammar is simple BUT flexible, then future changes won't have major consequences with parsing, coding, reasoning or migration of code bases. 

Silicon doesn't have unary operators `x++`, `x--`,`-5`. 
ALL of Silicon's grammar constructs are either built-in functions are definitions with `=` syntax. 

The grammar is painfully simple and straightforward. I've even removed operator precedence! (I'm completely mad I know).


[Part 2](/si-1) will cover implemetation tools.
