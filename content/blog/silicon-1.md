---
title: "Silicon: My Own Programming Language'"
date: 2025-08-08T17:02:45-05:00
draft: true 
toc: false
images:
tags:
  - silicon
  - language design
  - compilers
---

I've been designing my own programming language part-time for several years now. I've started to put more time into it this year. I now have a grammar specification
and a partially implemented compiler for the language.

Meet **Silicon**.

Silicon's main goal is to be a refined language with a flexibly memory management model that primarily targets Web Assembly. Silicon is meant to be simple, flexible and secure. 

## Toolbox

You'll may be interested in the tools that I'm using to write Sigil, the canonical compiler implementation for Silicon.

- Ohm.js : parser generator
- Typescript: flexible and statically typed
- WASM docs: my compilation target

My toolset is minimal. 

For those wondering why JavaScript. Well I believe in working backwards from a problem. I chose Ohm, not JavaScript. If a great parser generator was made in OCaml then I would have use that. Furthermore, the initial implementation language doesn't matter! That's the beautiful thing about compilers, only the output matters. I will be bootstrapping Silicon/Sigil at some point.

## Process

Desiging a programming language is difficult. I am my own customer. I've had to pick my main goal and non-goals. I have to figure out their relative order of importance as well.

- target WASM
- 100% Node API compatability
- 100% WASI(X) API compatability
- 100% Browser API compatability
- fast build times
- explicity
- static 
- simple consistent grammar


## Example

Here is the Fibonnaci function is Silicon

```silicon
@fn fib 1 = 1;
@fn fib 2 = 2;
@fn fib n = (&fib n - 1) + (&fib n - 2);
```




