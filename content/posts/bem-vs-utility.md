---
title: "BEM vs Utility CSS"
date: 2022-08-03T00:03:46-05:00
draft: true
---

I've unintentionally become what seems to be an advocate for Tailwind, which is more or less true. I've become a big believer in utility CSS which Tailwind is just one implementation of.

I have been writing code for 15 years, 10 years professionally. I've seen CSS develop and methodologies change over time.

First, we'll build a very basic example in BEM and then convert it to Utility CSS (NOT TAILWIND).

## BEM

> "BEM — Block Element Modifier is a methodology that helps you to create reusable components and code sharing in front-end development" -- [getbem.com](http://getbem.com/)

So BEM isn't just a CSS naming convention. It also, tries to guide its followers to building reusable components. I really like a lot of what BEM offers. I've used it for years after all on large projects with Sass (Sass is great).

Here is their example for mimicking a few Github buttons that look like this

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nlgv5lckoql45oqhgg6y.png)

{% codepen https://codepen.io/natescode/pen/bGLJMJg %}

This is pretty straight forward. You breakdown your components into two levels: block and element. Elements are your HTML elements like input, button, anchor etc. Your block is essentially the components. You'll also have modifiers for different variants of your components. In this case these are different styles of buttons but they're still buttons.

## Utility CSS

Again, I'm not using Tailwind here. I think that implementing utility classes ourselves will teach us a lot. Plus, keep in find that utility libraries, like Tailwind, can auto-generate all this code so we'd write 0 CSS.

{% codepen https://codepen.io/natescode/pen/RwQOymP %}

That's a lot more code?! Yes, yes it is.

BEM: 16 LOC
UTILITY: 33 LOC

### References vs Values

Even though we're duplicating CSS classes, we are NOT duplicating CSS. There is a big difference. Duplicating CSS means it has to be written by a developer, named by a developer, reviewed by another developer, and rendered by the browser.

## Adaptable

A good way to determine if our methodology is sound, is if it can handle change. So let's change the requirements, as they often do in real life.

Product Owner: "I want an option to have square borders on a button"

developer: "okay"

### BEM

So the developer adds the following BEM CSS

`.button--style--square { border-radius: 0px; } `

Easy enough. This isn't _that_ much more code right, right?!

### UTILITY

So we start by writing. . .ZERO CSS. We simply omit the `rounded` class

` <button class="inline border padding-1 gradient-1 font"> Square Button </button>`

---

Ok. Let's add Labels and Inputs as well. Maybe we're building a login form, or other forms eventually.

### BEM

The Label and Inputs will have very similar padding, font etc. to the button.

- Of course we'd be using CSS props (variables) but that doesn't save us from writing the CSS again.

\*\* Yes, we could use mixins, but now your team needs to know mixins, constantly think of how to optimize the code to use them, etc. Versus well just adding what you need. Mixins are just compiler-assisted copy paste of CSS values, yuck! They're worse than just making a utility class (Sass advocates against).

`@mixin reset-list {
margin: 0;
padding: 0;
list-style: none;
}

@mixin horizontal-list {
@include reset-list;

li {
display: inline-block;
margin: {
left: -2px;
right: 2em;
}
}
}

nav ul {
@include horizontal-list;
}`

When this would have done fine

`<ul class="margin-0 padding-0 list-style-none" `
`reset-list { margin: 0; padding: 0; list-style: none; }`

**HTML**

`<label class="label">Username: </label>

<input class="input input--style--square" placeholder="johndoe" />`

**CSS**

We add another 11 lines of code. BEM has grown 2/2 while Utility has grown 0. The BEM CSS is only 3 LOC less than Utility at this point.

`.label { color: white; padding: 7px 12px; } .input { padding: 7px 12px; border-radius: 3px; } .input--style--square { border-radius: 0px; }`

### UTILITY

**HTML**

`<label class="text-white padding-1">Username: </label>

<input class="padding-1 border rounded" placeholder="johndoe" />`

**CSS**

1. It is already written!
2. We'd use tools to auto-generate our CSS classes anyways

## Beyond Basics

I've walked you through some VERY simple examples. I'll link a CodePen and GitHub repos that show some more advanced examples.
