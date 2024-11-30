---
title: "Practical Principles of Programming Paradigms"
date: 2024-05-13T23:45:53-05:00
draft: true
toc: false
images:
tags:
  - architecture
  - design patterns
---

Ultimately, all software paradigms are made of serveral different applications of `code augmentation strategies`. 

I wasn't sure what to call this post. I was thinking about how to categorize the different ways software developers add new code to existing code, augmentation. These tie in closely
with software paradigms but they are not paradigms in and of themselves. 

I will go over three methods of code augmentation.

## Encapsulation (Composition)

- High Order Functions (or components)
- Decorators (Decorator pattern and language features aka attributes)
- Dependency Injection
- Middleware / hooks / frameworks

Encapsulation is all about _wrapping_ existing code with new code. This is the prefered approach of functional languages.

## Extensions (OOP)

- Inheritance: classical and prototypal
- Mixins
<!-- - Duck Typing -->

These techniques fit well within an OOP mindset. We start with some base functionality then extend it to work for our specific use case.

### Inheritance (OOP)

Inheritance takes existing code and extends it. Classical inheritance extends the class or template used to instantiate and object and set it's
initial state. While prototypal inheritance literally points to an existing object to base itself off of.


<!-- ## Composition -->

<!-- - Function Composition -->
<!-- - Object Composition -->

## Transformation

Basically find-and-replacing code, or data-structures that represent code.

- Macro Expansion
- Preprocessor Directives
- PTS (Program Transformation System) 
- Templating
- Code Generation (Zig comptime)
- DSL
- Regex (Parser Generator)
- AST manipulation

### Macros

I would be remise if I didn't mention `LISP` here. LISP macros are very powerful and can expand to create virtually any modern language feature. This quickly becomes
a DSL.


### Preprocessor Directives

C++ templates come to mind. These are more of a compile-type static technique. 


### Program Transformation System

Another one which literally fancy refactoring with essentially regex or AST manipulation called a [Program Transformation System](https://en.wikipedia.org/wiki/Program_transformation).

There are PTS tools that can automatically refactor code and create pull-requests in the appropriate repos.