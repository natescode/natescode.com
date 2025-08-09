---
title: "Silicon: My Own Programming Language'"
date: 2025-08-08T17:02:45-05:00'
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

    @fn hello_world msg = @@yield print, "hello, world!";
