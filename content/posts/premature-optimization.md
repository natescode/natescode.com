---
title: "Premature Optimization"
date: 2024-03-24T14:00:30-05:00
draft: true
toc: false
images:
tags:
  - fundamentals
---

What is "premature optimization"? We often hear developers argue against it quoting Donald Knuth's from _The Art of Computer Programming_:

> “The real problem is that programmers have spent far too much time worrying about efficiency in the wrong places and at the wrong times; premature optimization is the root of all evil (or at least most of it) in programming.”

So what is _premature optimization_? Optimization is __NOT__ bad. So _when_ is the correct time or context to optimize code?

This is just me thinking out loud. I'm by no means an expert. I've been writing code professionally for 11 years now but that doesn't say much. I present X points of when we _should_ think of optimization.

1) Optimize based on experience (when it is cheap)
2) Optimize based on metrics
3) Optimize based on use-case
4) Optimize based on economics
5) Optimize based on effort (now vs later)
6) Optimize based on longevity

## Optimize based on experience

Experience developers generally write more optimized code on the first try than less exprienced developers. If the optimization is free, meaning it takes about the same about of time to implement as the less optimized code, then we should do it. For example, I'm going to write a `GROUP BY` instead of a subquery in SQL right away. I'm not going to say that's premature optimization. That is just an excuse to be a bad software developer.

If choosing between two mostly equivalent libraries and one is significantly faster then we should chose the faster one. 

## Optimize based on metrics

Optimization isn't premature if we have metrics to back it up. I do mean production metrics, not cherry-picked charts on the company's sales page. 

## Optimize based on use-case

If I'm going to write a new REST API that I know will have few users, then worrying about optimization makes no sense. This is why start-ups often use MERN stack. It isn't a very good stack but it is fast to market. 

IF say Google wants to create a new REST API that very well may have say 10,000,000 API calls per day, then we should err on the side of safety and optimize for success.

I remember having to parse CSV file to create new users into a system. It was decided that this should only handle small updates. If a company wanted to add ALL their employees at once, then we'd use a different method. I didn't bother wasting the time implementing streaming to add large CSV files to our system.


## Optimize based on the hot path

Many times I've written code for sites that serve 80%+ of their traffic from a CDN like Cloudflare. Having a little faster code in many cases makes no difference to the user. If the hot path is already well optimized and there are no metrics to prove otherwise, why are we wasting developer hours optimizing it? I remember a non-technical manager demand we use a different ORM because the current one was "slow" based on blog metrics. Ultimately, it didn't work and we reverted back to the original ORM. The ORM was never a bottleneck.


## Optimize based on economics

I've heard too many times developers say that scaling code is easy and developer hours are more expensive than server costs. Those developers have never paid a server bill. I've seen 5 and 6 figure cloud bills. Optimizing those by even 1% could be the salary for one or more developers. 

Users leave a site if it doesn't load quickly.


## Optimize based on effort

Again, if an optimization is easy to do and doesn't significantly add to development time, code complexity or maintenance or QA (please don't forget QA), then do it!

Optimization is like cleaning a bedroom; it is easier to do it now than later. If we wait to optimize later then the contextual knowledge is lost, and the code complexity goes up. This may make the code more economical to rewrite than to optimize which is often a huge effort.

## Optimize based on longevity

I used to write enterprise CMS code. We didn't write tests because the code either worked or it didn't when tested. It was through away code that was going to be completely rewritten, probably in a different CMS in 3-5 years anyways. If you know the code is for a startup or not going to have a long life then don't worry about optimizing it. That said, code is always used longer that it should be, COBOL anyone?
