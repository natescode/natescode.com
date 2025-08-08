---
title: "Two Crystal Balls Problem"
date: 2023-03-29T02:12:10-05:00
draft: false
toc: false
images:
params:
  math: true
tags:
  - DSA
  - Algorithms
  - FAANG
  - Interviews
---

This is a famous software engineering interview question from Google. I thought I'd provide my explanation that is borderline pedantic. Let's solve
this problem as naively as possible then again with nothing more than highschool maths.

## The Problem

There are a few different versions of this question. Sometimes it is crystal balls, or eggs or something else.

There is a 100 story building. We have two magic glass balls. The balls will only break at or above floor X. We need to find what floor X is, in as few drops as possible. No matter how many times we drop an ball, it will only break at or above floor X. We are given two balls. What is the fewest drops to find the floor no matter what the floor is? We are trying to minimize the worst case here.

## The Worst Case Scenario

What make this problem unique is that we have limited failed tries, 2, and must optimize for the worst case-scenario more than the average runtime. I think that is an important concept to highlight.

## Naive

### Simplify the problem

If we only had one ball, then we'd just have to start at the bottom floor and work our way up. If we had infinite balls, we could just do a binary search and we'd only need log(n) balls at most (7 balls for 100 floor) But 2? HMM. So obviously, once the second ball breaks, we'll be falling back to the floor-by-floor algorithm.

### First thoughts

Most will first think about cutting the floors in half. So let's do that. Give a building with N floor, n=100 here, we start at floor 50 (n/2), if the ball breaks, then we check from 1-49. If the ball doesn't break, then we check 51-100. So we broke the building into 2 sections of size 50. The worst case is 51.

> **NOTE** I'm being less efficient in the first example on purpose. If we check floor 50 and the ball doesn't break, then we can continue doing a binary search 50 75 88 94 97 99 100 which is 7 drops. The worst case is 50 then.

We might realize we could break the building up into differently sized sections.

If we break it into 4 sections of 25 then our worst case is 25+4-1 = 28.

`25,50,75,100,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99`

WE can see the pattern and make a formula. sections, S, and section size B. So tries, T make is

$$where \ S \ and \ B \ are \ factors \ of \ N$$
$$T=S+B-1$$

So we can manually find a **good** solution

    2,50 = 51
    4,25 = 28
    5,20 = 24
    10,10 = 19

After 10,10 it just gets worse again. You might even realize since S and B are the same, we could think of that as `sqrt n`. Which is a _good_ answer. Not the _ideal_ answer but a decent one.

Our generalized worst case would be to jump by

$$ \sqrt(n) $$

So for any building size N. We can solve it in

$$ 2 \sqrt(n) - 1$$

tries. For N=100, that is 19 (18 with inference).

If X = 99 then we try 10,20,30,40,50,60,70,80,90,100,91,92,93,94,95,96,97,98.

<!-- But the problem with that is that after jumping 10 floors then we jump 10 more which means we are now at 11 tries. We want to find the equalibrium where no matter which floor the ball breaks on, the number of tries is the same.

If we try floor 10, the ball doesn't break then we jump to floor 20. The problem is now if the ball breaks we try 11-19 which is `11` drops, not 10. Each section we jump should be 1 smaller nthan the last. I.E jump 10 then 9 then 8 etc. Problem is we the sum of 1-10 is 55 which is less than 100. We **again** could do some manual searching and find 14 pretty easily. We just start adding the numbers from 1 up until the sum is greater than 100. -->

<!-- This shows as Mathjax \\(a \ne b\\), but this doesn't \(a \ne b\) -->

<!-- ## Simplify the problem -->

<!-- We can do some thinking. If we start at the 50th floor, and the first ball breaks, then we check floors 1-49. If not, we check floors 51-100. So worst case we do 51 checks. Now we can think of breaking up the building into sections of various sizes. We can look at the factors of 100 and sum them right. So 4 sections of 25 will require checking the top of the 4 sections and then 25 - 1 checks for that section. So A \* B = 100 and we are trying to find the values for A and B where A + B is the smallest possible. -->

<!-- find the factors of 100, a\*b where a+b is as small as possible -->
<!-- $$a=50, b=2, a+b-1=51$$ -->
<!-- $$a=25, b=4, a+b-=28$$ -->
<!-- $$a=20, b=5, a+b-1=24$$ -->
<!-- $$a=10,b=10,a+b-1=19$$ -->

<!-- 10,20,30,40,50,60,70,80,90,100 -->
<!-- 91,92,93,94,95,96,96,98,99 -->

<!-- 10 works the best. 10 is also the $\sqrt100$. We can jump by $\sqrt n$ -->

<!-- While this is good! We are at sqrt runtime complexity for the worst case, we CAN do even better! -->

## The Quadratics

The ideal solution comes from understanding that as we check the top of each section, we have already dropped for each previous section.

For example, if we jump by 10 each time then at floor 30 we have already jumped 2 times, 10,20. If the ball breaks we still have to check 10 places, 21-30
which make our total 12, not 10. Ideally that number would be consistent. We need to find an equalibrium. We would jump by 10 then by 9 because then we'd have a max of 10 jumps. We can try this but 10 doesn't quite work. We end at 55. So we need a bigger number. 55 is the sum of 1 to 10. We could manually find that 14 + 13 + 12 + 11.. is 104 which is enough! But as computer scientists, we should look for the generalized solution.

<!-- $$10,19,27,34,40,45,49,52,54,55$$ -->

So each jump must be one less than the previous. All jumps must add up to 100 (or more). We get the following formula that you'll see in other blog posts.

$$n+n-1+n-2+n-3+n-4...=100$$

I've seen this formula on many blog posts that don't explain it clearly for the beginners. This formula is really the same as

$$ \sum\_{i=1}^n i $$

Which just means _"Add all numbers from 1 to N"_.

With a little thinking we realize that is is going to go down to 1. So really we are adding 1 to N and the sum being 100. We were just defining it in a backwards sense.

So we can figure out the sum off all numbers 1 to n with the following formula that is easy to figure out on your own.

Adding 1 to 10, we can make 10 pairs that add up to 10. There are always $ n \over 2 $ pairs. The middle number doesn't pair up so we add that.

10 + 0 = 10
9 + 1 = 10
8 + 2 = 10
7 + 3 = 10
6 + 4 = 10

$$ n (n + 1) \over 5 $$

Which can be simplified to

$$ .5n^2 + .5n = floors $$

Or in our case of 100 floors

$$ .5n^2 + .5n = 100 $$

Then make it all equal 0 for balance

$$ .5n^2 + .5n - 100 = 0 $$

BOOM! we have a quadratic formula we can solve.

<!-- For example. If we want to add all the numbers up to `10` we can pair up the numbers to make 10.

    10+0
    9+1
    8+2
    7+3
    6+4

But then we are just left with the middle number that has no pair. Notice we made 5 pairs which is half of 10. Makes sense pair means 2. But then we add another half.

We can write the formula like this

$${.5n^2 * .5n } = 100 $$

If we simplify the formula we'll notice something.

$${.5n^2-.5n }  - 100 = 0 $$ -->

Remember your quadratics? Yeah! That's just a quadratic formula that we can solve!

$$(ax^2 + bx + c = 0)$$

Our formula is

$$a = .5$$
$$b = .5$$
$$c = -100$$

and the quadratic formula.

$$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$

So solve this formula (just use an [online solver](https://www.mathsisfun.com/quadratic-equation-solver.html))

$$x = {-.5 \pm \sqrt{.5^2-4(.5)(-100)} \over 2*.5} $$

$$x = {-.5 \pm \sqrt{(.25)-(-200)} \over 1} $$

$$x = {-.5 \pm \sqrt{200.25}} $$

So if we do that, we get `13.650971698085` for the positive solution. We can ignore the negative solution.

Now, we can only have a whole floor number so we round to the nearest number and that is `14`.

I used [desmos](https://www.desmos.com) to chart the formula out. You can see the [chart here](https://www.desmos.com/calculator/yaxygr4jvi). Or enjoy the screenshot below.

![Parabola touching 13.6 on the x axis](/images/parabola.png)

So `n=14`. Which means that we start at floor n, `14` then move `n-1` floors to `27`. We continue moving one less floor each time.

I.E if we try `14,27` then the ball breaks at 27,
we have to try 15-26 which is 12 tries plus the two from before = 14! Each time we have one less try for the in-between floors.

#### `14,27,39,50,60,69,77,84,90,95,99,100`

---

## The Code

We have solved the problem and did the math. Now it is time to translate this into code. I'm going to write this in javascript, the language
I typically use for interviews.

We don't need to solve the quadratic equation in code. Remember the reverse formula? `n+n-1+n-2...`? We can just start at the top and subtract 1, then 2, then 3 etc. Until we get to 0 or less.

```javascript
function findFloor(floors) {
  let steps = [];
  let step = 1;

  while (floor > 0) {
    steps.unshift(floor);
    floor = floor - step;
    steps += 1;
  }
  return steps;
}
```

You'll notice this gives us a different answer! We have a different sequence of floors.

```javascript
[9, 22, 34, 45, 55, 64, 72, 79, 85, 90, 94, 97, 99, 100];
```

Still, the worst case is `14`. This one is ever so slightly more efficient because if the ball breaks on
floor 9, then we only have 9 tries, everything else is 14.

## The Same Answer

That was just a fun detour. We _can_ code it to get the same floors. We would have to solve the quadratic formula THEN start at
that floor and jumping by one less each time.

```javascript
function findFloor(n) {
  const a = 0.5;
  const b = 0.5;
  const c = -n;
  // solve quadratic
  let floor = Math.ceil((-b + Math.sqrt((b ^ 2) - 4 * a * c)) / (2 * a));
  // walk the floors
  let steps = [floor];
  let step = floor;
  while (floor <= n) {
    floor += --step;
    steps.push(floor >= n ? n : floor);
  }
  return steps;
}
```

<!-- ## Do the steps

The previous code just found the initial floors. Let's actually solve it.

We'll assume we have an Ball object with a 'try' method that take the 'n' number of the floor and returns a boolean if it breaks. -->

---

## What about 3 balls? 5? Infinite?

I was discussing this with a friend and she brought this up. I hadn't really though about what the actual answer would be. Here is the algorithm depending on the number of balls relative to the number of floors.

Algorithm 1: For 1 ball = go floor by floor from 1..floors

Algorithm 2: For 2 balls = start at this floor $ .5n^2 + .5n = floors $  then jump by one less floor each time until 1 ball remains, see algorithm 1.

Algorithm 3: For 3 to log2(floors) balls = hen do a binary search until only 2 balls remain, see algorithm 2.

## Conclusion

I know that was a _REALLY_ long explanation but I think it was much more thorough than any other blog post about it.