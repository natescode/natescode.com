---
title: "OOP vs FP"
date: 2023-12-02T14:35:19-05:00
draft: true
toc: false
images:
tags:
  - untagged
---

There has been numerous reactions to the reactions to the reactions of a certain Tech Influencer, who works at Netflix BTW, reacting to a Continuous Deliver video about OOP vs FP.

## FP

1. Functions are the main abstraction
2. Functions are pure
   a) referential transparency: same output for a given input
   b) no side-effects: no mutation, no outside state (no IO)

First, let's actually define OOP and FP. FP is the easiest to define because it is based on lambda calculus. There are only two rules: no mutation, referencial transparency of functions, that's it. For loops require mutation so recursion is used instead. The runtime can cause side-effects but they're abstracted away from the code, making the code pure.

OOP is much more difficult to define. We learn in university the pillars of OOP are Abstraction, Encapsulation, Polymorphism and Inheritance. The funny thing is that only inheritance is distinctive of OOP even though any competent OO programmer will tell you composition should be prefered over inheritance. So OO's most distinctive feature is as huge code smell. ALL software is about abstractions, FP has many abstractions like high-order functions. Encapsulation isn't unique either, though FP since everything is immutable tends to make things more public.

## OOP

1. Objects are the main abstraction; functions don't exist.
2. Objects communicate with other objects by message passing aka dispatch.
3. ALL data is encapsulated in an object.
4. Inheritance is compiler-assisted copy-paste

## Abstraction

The art of hiding details we don't care about.

## Encapsulation

## Inheritance

## Polymorphism

There multiple types of polymorphism and multiple methods to implement them.

## Parametric

## Ad-hoc

## Sub-type

## Procedural

A procedure is like a function but may have no parameters and not return a value. Procedures aren't pure. Procedural usually
is more A then B then C, style of programming
