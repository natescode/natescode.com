---
title: "Silicon Part 2"
date: 2023-11-04T21:56:31-05:00
draft: true
toc: false
images:
tags:
  - silicon
  - sigil
---

In my previous Silicon post, I mentioned [Ohm.js](https://ohmjs.org/), which is the PEG-based parser generator that I'm using. 

OHM has several advantages.

- Allows left recursion rules to be defined
- Better and more accurate error handling (because of left-recursion fix)
- PEG grammar support
- Semantic rules: allows for linters, formatters etc to easily be made from same grammar
- Editor to check grammar against a list of test cases

## Learning my Parser Generator

This has been a blast this week learing OHM.js. I'm really loving it. I notice that 90% of the time I define a rule and it works first try (when I try the rule directly in the editor). I also found if I test my new rule based on the root of the grammar, that it fails 99% of the time! That is because I didn't understand precedence and how some rules are pretty ambigous. 
