---
title: "Two Crystal Balls Problem"
date: 2023-03-29T02:12:10-05:00
draft: true
toc: false
images:
tags:
  - DSA
  - Algorithms
  - FAANG
  - Interviews
---

This is a famous problem. I think the explanations of the solution are often poor. Let's solve
this problem as naively as possible then again with nothing more than highschool maths.

## The Problem

There are a few different versions of this question. Sometimes it is crystal balls, or eggs or something else.

## The Worst Casenario

What make this problem unique is that we care about the worst case-scenario more than the average runtime. I think that is an important concept to highlight.

## Naive

If we only had one ball, then we'd just have to start at the bottom floor and work our way up. If we had infinite balls, we could just do a binary search and we'd only need 7 balls at most. But 2? HMM

So we start at floor 50, if the ball breaks, then we check from 51-100. If the ball doesn't break, then we check 1-49.
So we broke the building into 2 sections of size 50. The worst case is 50+52=52. WE can see the formula is sections, S, and section size B. So tries, T make is

    T=S+B
    where S and B are factors of N

So we can manually find a **good** solution

    2,50 = 52
    4,25 = 29
    5,20 = 25
    10,10 = 20

After 10,10 it just gets worse again. You might even realize since S and B are the same, we could think of that as `sqrt n`. Which is a _good_ answer.

## Simplify the problem

We can do some thinking. If we start at the 50th floor, and the first ball breaks, then we check floors 1-49. If not, we check floors 51-100. So worst case we do 51 checks. Now we can think of breaking up the building into sections of various sizes. We can look at the factors of 100 and sum them right. So 4 sections of 25 will require checking the top of the 4 sections and then 25 - 1 checks for that section. So A \* B = 100 and we are trying to find the values for A and B where A + B is the smallest possible.

find the factors of 100, a\*b where a+b is as small as possible
$$a=50, b=2, a+b-1=51$$
$$a=25, b=4, a+b-=28$$
$$a=20, b=5, a+b-1=24$$
$$a=10,b=10,a+b-1=19$$

10,20,30,40,50,60,70,80,90,100
91,92,93,94,95,96,96,98,99

10 works the best. 10 is also the $\sqrt100$. We can jump by $\sqrt n$

While this is good! We are at sqrt runtime complexity for the worst case, we CAN do even better!

## The Quadratics

So we know that for any section we then have to check for S-1 times if the ball breaks. For ALL sections we want to mimize that number. For example if the first stop is 20 and we do 20 in that section then we have 20 drops at most. BUT if we go to 20, no break, go to 40 and then check 21-40 well that's 21 checks because we are on the second section. Make sense? So we want the second section to actually be 1 smaller so that the total number of checks is constant.

$$n+n-1+n-2+n-3+n-4...=100$$

20+19+18+17+16+15+14...
So we can figure out the sum off all numbers 1 to n with the following formula that is easy to figure out on your own.

For example. If we want to add all the numbers up to `10` we can pair up the numbers to make 10.

    10+0
    9+1
    8+2
    7+3
    6+4

But then we are just left with the middle number that has no pair. Notice we made 5 pairs which is half of 10. Makes sense pair means 2. But then we add another half.

$$sum=.5n^2+.5n$$

in this case our sum need to be 100

$$100=.5n^2+.5n$$

Simplify that to

$$0=.5n^2+.5n-100$$

and we have a quadatic equation!

We can solve for it can round to the nearest number and get `14`!

So `n=14`. We start at n, `14` then move `n-1` times to `27`. Because if we try `14,27` then the ball breaks at 27,
we have to try 15-26 which is 12 tries plus the two from before = 14! Each time we have one less.

`14,27,39,50,60,69,77,84,90,95,99,100`

Our code can be like if floor plus n is more than 100 then just do `n+1`

---

Let's do 10 floors. We'll start at N / 2 or floor 5. We can think of the worst case as the _sum_ of all the throws. So that is (N - 1) \* n / 2. We start at N / 2 then have to do (n-1) checks for each.

Make sense? After we are left with one crystal ball we are stuck doing (n-1) drops. Do that N / 2 times and that is our total that we want as small as possible.

We can write the formula like this

$${n * (n-1) \over 2 } = 100 $$

If we simplify the formula we'll notice something.

$${n^2-n }  - 200 = 0 $$

Remember your quadratics? Yeah! That's just a quadratic formula that we can solve!

$$(ax^2 + bx + c = 0)$$

Our formula is

$$
a = 1 \newline
b = 1 \newline
c = -200
$$

and the quadratic formula.

$$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$

So solve this formula (just use an [online solver](https://www.mathsisfun.com/quadratic-equation-solver.html))

$$x = {-1 \pm \sqrt{1^2-4(1)(-200)} \over 2*1} $$

So if we do that, we get `13.650971698085` for the positive solution. We can ignore the negative solution `-14.650971698085`.

Now, we can only have a whole floor number so we round to the nearest number and that is `14`.

## 14 what?

14 is the best worst case. Now, if we were thinking in sections then that would be n / k or 100 / 14 which is 7 is this case.

14 is how many section we want to break the 100 story building up into.

7 sections (100 / 14) means that we in a worst case try 7 drops THEN try (7-1) drops so 7 + (7-1) = 14

n \* (n-1) / 2
