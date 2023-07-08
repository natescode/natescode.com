---
title: "Coding From Scratch"
date: 2023-04-08T16:06:14-05:00
draft: true
toc: false
images:
tags:
  - untagged
---

"Where do I even begin?" and "I have no idea how to code this" are common thoughts or comments from my students.

Let's go over a design for a simple game, Tic-Tac-Toe (naught and crosses for my friends across the pond).

Don't worry, we won't be using React, npm or any tooling. Just plain ol' Javascript, CSS and HTML.

## The Design

Here is the design ![]() file.

I want you, the reader, to think about the different elements of the design. Which HTML tags will you use? How should the
board be broken up?

Start with high level thinking. There are 9 squares arranged in 3 rows of 3 squares.

Take your time and think about it. Use [codepen.io](https:www.codepen.io). Remember, even for a simple design like this, there are numerous correct ways
to design it. My way isn't the highway. I can guarantee my code won't be perfect.

## Tho User Stories

I've created user stories on [my trello](). You can copy them to your own Trello board and work on them yourself. User Stories are how professional developers break down tasks.

## The MVP

Agile talks about _incremental value_. So let's assume we want a lot more functionality but we're going to do it later. We will only have a board and the ability for pass-and-play mode. No win condition checks either.

## The PSEUDO code

Again, I write code comments / psuedo code before I worry about actual code. Let's do that here.

### HTML

```HTML
// document
// game title
// turn counter
// reset button
// game board
// 3 rows
// 3 columns in each row

```

Now let's translate that into code.

```html
<!-- game title -->
<h1>Tic Tac Toe</h1>
<!-- turn counter -->
<label for="">Turn: </label>
<span id="turn">1</span>
<!-- reset button -->
<button onclick="reset()">Reset</button>
<!-- game board -->
<div id="board">
  <!-- three rows -->
  <!-- column 1 -->
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <!-- column 2 -->
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
  <!-- column 3 -->
  <div class="square"></div>
  <div class="square"></div>
  <div class="square"></div>
</div>
```

Hopefully that is pretty straight forward. A beginner might be tempted to make literal row classes. Do we need the code to ever think about rows and columns, or just squares?

```html
<div class="rows"></div>
```

### CSS

```css
//
```
