---
title: "Optimize Code by Doing Less"
date: 2024-07-13T01:29:33-05:00
draft: true
toc: false
images:
tags:
  - architecture
  - design patterns
  - optimization
---

Anytime code needs to be optimized for performance, be that performance in time or memory usage, we
can simply say "well just do less". I always think "do less" when I'm optimizing code. Here are my
thoughts of what exactly "do less" means by answering "Do less of what?". 

> "Do less of what?" -- ME at 01:00 AM

## Do Less: Less Algorithmic Complexity

The most intuitive change is to create an algorithm that performance fewer steps.

Take writing a function `fib` to calculate the nth fibonnaci number. The iterative fibonacci function has O(n) time complexity while the naive recursive one has O(2^n). 

So we can improve our recursive `fib` function by changing to an iterative algorithm that quite literally does less (fewer steps). 

##  Do less: Less Fetching / Cache missing

Cache missies refer to the CPU / GPU cache. This has a cost. When our program needs a value, making sure we are reusing important values often means they can be cached and they can be access extremely quickly (singe digit clock cycles).

## Do Less: Less Computation (Clock Cycles)

We can make recursive fibonacci just as fast (algorithmically) by using memoization (a cache). So we aren't algorithmically doing fewer steps at all, we're just caching the results of those steps.

We could do more algorithmic steps BUT if it is fast for the computer, it may actually be faster. For example, working with powers of 2 can be really fast because the computer can just bit shift. Even though in an abstract sense working with powers of N are all the same. 

This is where we think about how the processor actually works. Maybe there is a CPU specific instruction that is faster (this will tie into 'less generalization' later as well). SIMD instructions come to mind where multiple operations can be done quickly.

## Do Less: Less Precisison

For many applications, like graphics, physics etc. We do not need exact nor extremely precise results. We just need a good approximation. This approach has been used by using lookup tables for common expensive math functions or using unsafe math (a * b != b * a). 

## Do Less: Less Eagerness

Basically, "Lazy Loading". We can do less by NOT doing anything until unless the code absolutely hos to. If a UI shows a bunch of tabs that will show different tables of data, we can wait to load that data until those tabs are used. 

## Do Less: Less Generalization

This one may be a stretch of the definition of "less" but bear with me. Often, I see engineers obtain significant performance improvements of really optimized code because the code is a library that is optimized for a generalized problem, *not their specific problem's parameters*. 


## Do Less: Less Memorization

If we are optimizing for memory consumption then we want to keep track of fewer things. Maybe we can just work with index values instead of the full objects themselves (Sebastion Lague did just this with his ray tracing code).

## Do Less: Less Dependencies

This requires some nuance. Dependencies, like build vs buy, can be great. Reusing existing optimized, documented and supported code makes a ton of sense. Unfortunately, dependecies break compatibility / semver, they become deprecated and too often in open-source software, because stale / undeveloped / abandoned. 

## Do Less: Less DRY / Architecture / Optimization

Often, we can try too hard to reuse code or architect things well when requirements change so often that we don't know what we are optimizing for. Making code DRY is difficult because that requires abstractions that may not actually fit in 6 months.


## Do Less: Less Custom (Buy vs Build)

Often, doing less in software comes down to business decision. At my current employer, several years ago management decided to purchase the software all the other companise simply rent. That is an old horrible coded version of the software that we are slowly modernizing. Meanwhile it is a non-issue / concern for our competitors because they're still relying on that vendor which has made numerous improvement to the product. Everyone else is renting the iPhone 15 Pro Max while we've purchased the right to build off of the IPhone 6. 

## Do Less: Less Testing / Verification / Typing / Fixing

Make the compiler, tooling etc do it for you. Aka automation! I.E `Crablang` and the like use a borrower checker to guarentee memory safety. The program spends less time worrying about memory safety or time fixing critical bugs caused by memory safety. 

## Do Less: Less Optimized

### Developers and Business

What? This seems counter intuitive. Well, sometimes code is optimized for the business and not for the machine. I could get 200% better performance, or more, out of one of our batch processes but guess what? It would provide exactly zero business value. So the code is LESS optimal for the computer but more optimal for the business because it isn't being changed and I the developer can then spend my time optimizing the things that DO matter. 

### Optimizing Compilers

I could also take this in a completely different direction and talk about de-optimizing code in order to enable other better and deeper optimizations but I have exactly 0 understanding or experience with that. All I know is that does, probably, occur in compiler optimization steps. 