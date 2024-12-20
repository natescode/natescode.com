---
title: "Pair Programming"
date: 2024-10-19T21:22:59-05:00
draft: true
toc: false
images:
tags:
  - untagged
---

Pair Programming is a part of of XP programming which seemed to be pushed mostly in the early 2000's. I have
heard that it can work, of course it sounds like a huge waste of time most of the time.


## Pair Programming Defined

I think we need to define it. Some XP evangelists say that one person coding and another watching is *NOT* pair programming. Ok, then what is?

Pair programming can be

- Live coding where devs code in same code base via [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare).
- Developers sit next to each other or on a video call; one codes while the other watches

### Tools

There are tools for IDEs / editors for developers to code on the same code at the same time. I don't really see the benefit of this if they're working on different parts of the code,
what is the point of being on a call? Really no different than having separate branches and discussing it later. 

### Thoughts

Pair programming can appear to be a waste of time if one dev is coding while the other watches. It may not seem to make sense.

The few times that I have pair programmed, they were VERY valuable. There was a huge refactor that I had to do and it was a large task for one developer BUT it wasn't something that could easily be divided into branches since the code wouldn't even compile until it was done. This is where I shared my editor with my co-worker. Him and I began coding on the same branch / PC at the same time. There were some weird hiccups with how he saw the remaining compilation errors but over all it went much faster than branching.  

## More XP

Another part of XP is having the client near by for questions.

## No PRs

This is the argument but I rarely spend more than 15 minutes looking at a PR. PR has to compile, have tests passing etc. Then it gets looked at in DEV and QA anyways. So saying that two developers spending 8 hours on a task to save 1 developer 15 minutes isn't a really good sales point in my opinion. That said, I think it does reduce bugs.


## 9 Women, 1 Month

"If it takes a woman 9 months to have a baby, then 9 women can make one baby in 1 month!" is a common way to explain to management that more developers does NOT magically equal faster delivery.