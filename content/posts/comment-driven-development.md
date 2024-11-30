---
title: "Comment Driven Development"
date: 2023-03-26T02:28:19-05:00
draft: true
toc: false
images:
tags:
  - untagged
---

One of my students asked a great question along the lines of "how long did it take you until you could code without being stuck or having to look things up?". I replied "it took years", which it did to code at a professional level. I picked up programming pretty quickly by teaching myself in high school. One of my first programs was calculating the quadratic formula, then later I moved onto making games.

Here are my tips for helping you get code written and progress made. First, sofware is about solving problem, NOT writing code. So even if AI can write
the code for me, which prevents me from getting RSI, it'll never be able to perfectly solve the problems for me (just like how Google translate doesn't replace accurate translators and interpreters).

## Clarify the Problem

I had a student ask me to help him translate some Python code to Javascript. "easy, no problem", I thought. In the future, I would just use Chat GPT. I already have for translating C# to Rust.
But then the student sent me incomplete code that also didn't have a clear intention behind it. That made my
task impossible. Not the student's fault because he just hadn't clarified what he was building yet, or _how_ to build it. So that was more of the issue than translating from Python to Javascript.

## Break the problem down into Comments

This is what I call _Comment-Driven Development_. You write comments for your program first, _then_ break those
comments down into smaller comments until you can turn each line into code individually. This can be [psuedocode]() or just plain English. I know many already do this as a way to work
with coding AIs like Copilot and Tabnine.

Here is an example for implementing _Fizzbuzz_ for the first time.

To be clear, I think this is great for software _students_. While I do this a little bit professionally, often, I find it better
to write code as quickly as possible because then I have the feedback of the program output, errors etc to guide me than trying to plan it out perfectly first.
Still, a basic plan is always needed.

Let's breakdown Fizzbuzz using Comment-Driven Development.

### The User Story

As a user, I want to provide two numbers and their associated words. I want to be able to choose the starting number and ending number to count to.
If a number is a factor of one of the provided numbers then the associated word with that number should be printed out. If it is a factor of both the numbers, then
both words should be printed out on a new line. If not, then just print the number.

I want the ability to output the numbers to somewhere other than the console. Maybe save to a text file, in memory DB, or send to some API. The words and numbers should also be configureable,
without changing the code.

### CDD Interaction #1

### Simplify the problem and build the subset

```javascript
// fizzbuzz
// count from 1 to 30 (later from 'start' to 'end')
// if number is factor of 3
// print "fizz"
// if number is factor of 5
// print "buzz"
// if number is factor of 3 and 5
// print "fizzbuzz"
```

### CDD Interaction #2

I realize that if need to check for the "fizzbuzz" case first,
or we'll get "fizz" and "buzz" separately when get to "15"

```javascript
// fizzbuzz
// count from 1 to 30
// if number is factor of 3 and 5
// print "fizzbuzz"
// if number is factor of 3
// print "fizz"
// if number is factor of 5
// print "buzz"
```

### CDD Interaction #3

Finally, I feel like my comments are concise enough that they can by translated to code

```javascript
// fizzbuzz
function fizzbuzz() {
  // count from 1 to 30
  for (let number = 1; number <= 30; ++number)
    // if number is factor of 15 (3 and 5)
    if (number % 15 === 0) {
      // print "fizzbuzz"
      console.log("fizzbuzz");
    }
    // if number is factor of 3
    else if (number % 3 === 0) {
      // print "fizz"
      console.log("fizz");
    }
    // if number is factor of 5
    else if (number % 5 === 0) {
      // print "buzz"
      console.log("buzz");
    }
}
```

## That's Not All!

The v3 of our code actually works now. But we could refactor it a few different ways.

```javascript
cost fizzbuzz = number => (
    (number % 3 === 0 ? "fizz" : "") + (number % 5 === 0 ? "buzz" : "") ||number
  );

for (let number = 0; number <= 30; ++number) {
  console.log(fizzbuzz(number));
}
```

Now this is much better code. Mainly because we have broken how `fizzbuzz` to be a pure function. It _only_ calculate the correct string
to return "fizz", "buzz" or "fizzbuzz". I used ternaries here in a slighly clever way, but you don't have to.

Now we don't care if we are counting from 1 to 30 or just wanting to calculate '237' ("fizz").
We also don't care about `console.log`. What if we want to write to file? Save to memory? Or send the result somewhere else?

What if we want to say "oogabooga" instead of "fizzbuzz" ?

```javascript
const matrix = {
  2: "ooga",
  7: "booga",
};

const fizzbuzzSetup = (matrix) => (number) =>
  (number % Object.keys(matrix)[0] === 0
    ? matrix[Object.keys(matrix)[0]]
    : "") +
    (number % Object.keys(matrix)[1] === 0
      ? matrix[Object.keys(matrix)[1]]
      : "") || number;

const oogabooga = fizzbuzzSetup(matrix);
for (let number = 0; number <= 30; ++number) {
  console.log(oogabooga(number));
}
```

I hand fun with using lambdas here. Again, those aren't the point and if my team wasn't using lambdas, especially with HOF,
then I wouldn't write it this way for clarity.

I made a lookup table or matrix so we can do "fizz buzz" or "ooga booga" or whatever we want. The `fizzbuzzSetup` function create a unique
function based on the two number we want to use as factors and their respective / corresponding words.

Using a HOF is nice here because then we don't need to pass matrix around everywhere. Fizzbuzz only cares about the number before and that shouldn't change.
I'll write it a bit cleaner for those less ternary happy.

```javascript
const matrix = {
  2: "ooga",
  7: "booga",
};

function fizzbuzzSetup(matrix) {
  return function (number) {
    const keys = Object.keys(matrix);
    let result = "";
    if (number % keys[0] === 0) result += matrix[keys[0]];
    if (number % keys[1] === 0) result += matrix[keys[1]];
    return result || number;
  };
}

const oogabooga = fizzbuzzSetup(matrix);
for (let number = 1; number <= 30; ++number) {
  console.log(oogabooga(number));
}
```

### CDD Iteration #4 Final Form super saiyon blue

```javascript
const matrix = {
  2: "ooga",
  7: "booga",
  start: 1,
  end: 30,
};

function readMatrixFromFile() {}
function readNumberRangeFromFile() {}

function fizzbuzzSetup(matrix) {
  return function (number) {
    const keys = Object.keys(matrix);
    let result = "";
    if (number % keys[0] === 0) {
      result += matrix[keys[0]];
    }
    if (number % keys[1] === 0) {
      result += matrix[keys[1]];
    }
    return result || number;
  };
}

function iterateAndIO(start, end, out, func) {
  for (let number = start; number <= end; ++number) {
    out(func(number));
  }
}

const oogabooga = fizzbuzzSetup(matrix);
iterateAndIo(matrix.start, matrix.end, console.log, oogabooga);
```
