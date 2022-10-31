---
title: "Big Int, Big Problem"
date: 2015-01-01T00:03:46-05:00
draft: true
---

BigInt Big Problems

## algorithms

I was practicing on CodeWars for a job interview last week when I ran into an interesting problem.

The algorithm itself wasn't what I found interesting, finding sum of 4 squares for N, but working with arbitrarily large integers in JavaScript.

I needed to get the square root of N. No problem right? Just

Math.sqrt(n)

Unfortunately, no. All the Math library methods only support Number not BigInt.

There are third party libraries to get around this. I avoid using libraries when possible. In my case, I just needed square root so I remember I could use Newton's method for approximating the square root.

For Newton's method. You start with some rough estimation. The first naive estimation most find is n/2 as the square root is always less than or equal to half of N where N > 4.

A better approximation is calculating the square root of the largest possible N we may get. This is a bit like cheating but that's okay.

The CodeWars problem said the function would be tested with N up to 2^128 . So the magic number I use as an initial guess is

✓2^128

✓n <= ✓2^128 where N <= 2^128

Since we know it'll always be less than or equal to that.

Overall the problem was fun but learning how to deal with arbitrarily large integers in JavaScript was the most fun for me.

Thanks! Let's learn together again soon.

PS
Yes, I got the job! I'm now working part-time as an Interview Engineer for Karat^.