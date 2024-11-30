---
title: "Silicon Part 1"
date: 2023-06-21T15:36:46-07:00
draft: true
toc: false
images:
tags:
  - silicon
  - sigil
---

## Implementation Details aka HOW?

For a more serious project, the intepreter / compiler, in this case Sigil, needs to be written in some language. A parser generator is also a REALLY good idea because you can then have a single document that specifies the language's grammar and the implemenation can be changes more easily by changing the grammar and adding a little bit of code. Historically, the _best_ languages for this task include: C, C++, OCaML, and Rust. I say _best_ because these languages have good LLVM api support, parser generators and Ocaml and Rust have pattern matching and sum types which help a lot.

Since Sigil doesn't output native binaries for hardware like X86 or ARM, Sigil doesn't care about LLVM or other projects. SIMPLER!

    NOTE
      Absolutely nothing against LLVM, clang etc which take intermediate language code and optimive and target hardware (and can JIT too) but they're complex to work with, can have limitation on what the language does (Rust ran into this) and are yet another moving dependency (Go philosophy) that isn't actually needed here.

Silicon _can_ indirectly target native by using tools that use LLVM to compile WASM binaries to native code. Again, standing on the shoulder of giants is our goal.

A PROJECT goal that isn't really a goal of the implementation is eventually getting help from others. I'm sure I could get plenty of people to help me write it in Rust but since

1. I'm still new to R\*st
1. The R\*st foundation is evil
1. The project will be boostrapped within the first year anyways. So quick interation is priority over speed and memory safety.
1. More developers know Ecmascript or Typescript.
1. Typescript is the best language for the job out of the languages I know (Go, Python, C#, Java, JS/TS) and finally
1. There is a really good PEG parser generator written in JS / TS called `ohm.js`. I'll be using Ecmascript / Typescript for the initial language.
1. JS runs in the browser so the Sigil can be easily deployed to make a playground for others to try out the language easily (like the Go playground). Which helps with adoption.

## Tools

I believe in working backwards. I had my requirements for a parser Generator: be in a language I know, work in the web, support PEG grammar, be flexible. The
best fit is `Ohmjs`. JS is easy, is runs in the browser and really is good enough, well Typescript is anyways. OHM more than makes up for the fact it uses Javascript. I'll explain more later. 