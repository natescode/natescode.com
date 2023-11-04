---
title: "Tailwind: Debunking the Debunkers"
date: 2023-08-01T00:00:00-05:00
draft: true
toc: false
images:
tags:
  - untagged
---

I've seen a TON of hate for Tailwind. I don't care which technologies other developers use, but I do care when people spread lies because they are religious about a certain approach. I'm not much of a technology fan-boy, I use what works for the given requirements. Don't get me wrong, I still have plenty of strong opinions but they're more about what doesn't work than what does.

"Strong opinions, loosely held"

If I'm wrong, then great! That means I get to learn something. If I know anything, according to my employer I do, it is because I've been wrong and dumb for a very long time.

This is a long post. I've been compiling all the 'debunking' points that bloggers use against Tailwind for awhile. I'm also not a Tailwind fan-boy. I like it, it seems to work but I thought Bootstrap and jQuery were mana from heaven at one point too.

I'll give you the TL;DR at the beginning. You're using Tailwind Incorrectly then calling it a bad tool because you're trying to force it to work within your current mental model of how CSS and styles 'should' work. Everyone hated JSX at first too.

## Debunking "Reason 1: Tailwind promotes ugly-ass HTML"

Okay. At first, I didn't have a good rebuttal for this. And this is a LOT to personal opinion. I thought JSX was an abomination too at first, I was wrong as usual. You know what I find MORE ugly? A 3 MB CSS file that I have to search through to find a class I need, which is probably mispelt. I cannot remove ANY CSS because I cannot know if it is used or not.

A good remedy is **Make Smaller Components**

> "too many utility classes means YOUR COMPONENTS ARE TOO BIG" '-- NatesCode

I hated ugly HTML too. Then I realize something... YOUR COMPONENTS ARE TOO BIG. This is what I call conflating Symptoms and Problems which is a whole different post. The ugly HTML isn't the problem but a symptom of having too large of components. Remember S in SOLID ? Yeah CSS can do too much: style, position and animation.

### Style, Position / Layout and Animation

CSS can do too much. It is good to separate Styles like font, color from Positioning like flexbox and margin.

Generally we are using some kind of html component system: React, Vue, Hugo, Web Components etc. so that helps with repeating styles, plus class styles do cascade.

I personally have used Atomic Design very successfully.

You can put the long styles in a variable in your framework
You can break down repeated styles (elements) into components
You can, in the cases where CSS repeats a lot, make your own components with those classes applied.
NO @apply is not the answer. If you're using @apply everywhere then you're using it wrong.

## Debunking "Reason 2: @apply is fundamentally incompatible and non-standard (and largely unnecessary)."

100% agree. STOP USING @apply everywhere. You're using Tailwind incorrectly and then calling it a bad tool. A flathead screwdriver makes a bad chisel but that doesn't make it a bad tool.

Why are you trying to swap out CSS frameworks regularly?! That's like saying BEM is bad because it requires a ton of refactoring if you switch to SMACSS.

FALSE, switching from Tailwind is pretty easy. I even made an NPM package so you can, called Tailwind-Eject. I'd suggest using Tailwind-Convert (my other package that converts all your CSS to customized Tailwind with custom props and shows you how much space and rendering time you're saving). It reads all the Tailwind classes on your class or className attributes and creates CSS classes for them based on the file name etc.

## Reason 3: Tailwind's focus on design systems and tokens could mostly be replaced by CSS Custom Properties (aka variables)—which IS a standard.

So then use them WITH Tailwind!!! You supposedly use this tool for a year and didn't figure this out yet? I have tons of variables defined.

No, it can't. You define variables in styles. Which live where? In style sheets ! Now you're back to writing long CSS.

You want to name and type this?

```css
.my-poorly-named-thing {
  font-size: var(--my-font-size);
  font-weight: var(--my-font-weight);
}
```

or this?

```html
<h1 class="font-title font-bold"></h1>
```

Which if used with [Atom Design](https://bradfrost.com/blog/post/atomic-web-design/), it would read like this

```html
<title></title>
```

No CSS in sight!

I know which one I'd choose. Tailwind limits what you can do. You can't do anything janky.

> "The problem is that all these tokens are defined…in JavaScript. A CSS framework. Using JavaScript for its design tokens. In 2021." Please don't tell him about CSS-in-JS or HTML-in-JS (JSX) !

> "So for example, in Tailwind you can write class="mb-8" and you get a margin-bottom: 2rem style applied. But guess what you could do instead? Define :root { --spacing-8: 2rem } in your stylesheet, and then write margin-bottom: var(--spacing-8) anywhere you want. As in literally anywhere: a stylesheet, or a JS component, or even a style= attribute directly in HTML!"

True. Then use open props project. But then you're still stuck writing your own classes which will grow or writing `margin-bottom: var(--spacing-8)` inline everywhere which is even worse.

## Debunking "Reason 4: Tailwind forgets that web components exist."

EXACTLY THE POINT! CSS should be HTML Agnostic. [CSS Zen Garden](https://www.csszengarden.com/) was a lie.

He has a point but Chrome and Firefox do support linking stylesheets inside the shadow DOM now.

If it doesn't work then done use it. Again, doesn't mean it is a bad tool, just the wrong one for you.

## Debunking "Reason 5: Finally, Tailwind encourages div/span-tag soup."

Okay, this is just a lazy point. If you're a bad dev then you'll use 'div/span soup'. Tailwind is HTML agnostic. Why would more divs be created? You put classes on what needs them and many properties are inheritable.

See many still use BEM and Sass. What BEM gets wrong is that your CSS is structuring your HTML.

Arguments against Tailwind
Utility class === inline styles
Ugly HTML
@apply
no separation of concerns

We separate unrelated things. Your button being green, round and text bold is NOT a separate concern. I.E. JSX.
lack of support for web components: import external stylesheet. Or maybe this is a good reason to use something else.

arrogant to try another framework

renames CSS, cocky to say designers of CSS are dumb and re-design it: No

div / span soup: Sounds like you don't know how to code

hard to migrate: Tailwind-Eject

hard to maintain: ROFL, compared to what? Have you worked on enterprise 30MB CSS ?

It cannot do some of the basic stuff that UI frameworks offer these days, like media queries in JS (useMediaQuery). Basically what Tailwind does is compile a huge list of classes before any JS code is actually run. This means you cannot use any kind of variable value from JS. The only way to do so, is by using CSS variables and change the value of those in runtime using JS. TODO: need to do more research or make an NPM package. This may be VERY legit issue or an exception which is okay

## Debunking "Reason 6: No child selectors"

Again, that is like saying React is bad because you don't directly manipulate the DOM. That is the point! Child selectors are generally bad! Tailwind has them now, has had plugins for them but in general I think they're bad because that makes yours CSS dependent an your HTML, which is a bad idea. Your components already define the structure and semantics.

Alternative to child selectors (in ALL CSS)

- use inheritance (font, color etc all cascade)
-

## Quotes

Developer that needed a full component framework that added A11y features automatically but used a CSS Library and was disappointed by the wrong tool choice. Bad tool choice, not bad tool. I personally have built my own UI component framework with Next, React and Tailwind.

> "I mean along the lines of html element roles, like role=button for clickable elements for screen readers, proper aria labels for label/input relationships etc. There's a lot, more than I care to maintain myself, so having a UI framework that takes care of that for me is a big help."

> ""We also follow a rule now that says: "Keep related things together" because it makes things easier to find and understand for new devs."

You mean like utility classes? (I said this but the developer couldn't accept that)

What about Accessibility?

This was a great counter-point by a fellow Dev.to developer. We had a bit of a heated debate about Tailwind. It was clear he was burnt out by a team that didn't use Tailwind correctly and didn't think about accessibility in their HTML components; something that is lacking.

So what do we do about the HTML part of accessibility?

- RADIX
- Headless UI
- Mantine

Tailwind's killer feature, IMHO
I think Tailwind is GREAT if one is working on a large team with developers that might not have great CSS skills. You don't have to worry about some-one copying and pasting a class then renaming it and slightly modifying it. Also, English isn't everyone's first language and spelling mistake can be made. Which makes finding a class by name almost impossible.

Yes, SASS mixins exist but I have rarely seen them consistently done well. That is the killer feature for me. Devs can use tailwind-config-viewer and see 100% of all the classes instantly. Everything is already documented.

## Why I'm NOT using Tailwind

Some of the negatives are true. It bloats HTML and it is an abstraction that I personally don't think is necessary. I'm experimenting with using styled components + CSS Linters + subset CSS (plugin that restricts the usage of CSS and using CSS props to get that benefit that Tailwind does have).

I prefer linters / parsers automatically checking and preventing mistake than having to write 30 css classes. Tailwind can't do 100% of what normal CSS can do either. There are just some things that must or should be done in pure regular non-utility CSS. I'm a bit of a purist so we'll see how that goes! I think this approach, or something similar will be closer to what Theo calls "Safety Nets" and less of "Guard Rails"

## Disingenuous or Stupid?

Let's look at some code from yet another Medium article claiming Tailwind bloats HTML, spoiler alert ALL CSS IS BAD WHEN YOU DON'T UNDERSTAND CASCADING.

HE'S EITHER LYING and over exaggerating to make his point or genuinely shouldn't be allowed to write CSS for a living. I was able to
clean up this code by 30%!!! Remember Tailwind is just CSS. So blaming the tool here doesn't matter.

PLEASE if you're gonna hate a tool, at least don't make yourself look like an incompetent dev doing it.

## Not a panacea

VERY few people actually have valid negative points against Tailwind despite PLENTY existing. Tailwind is by far no panacea. Because I claim to be unbias, I'm going to give my negative against Tailwind.

- No way to prevent arbitrary `[100px]` values being used. SERIOUSLY!?
- DSL still requires a bit of learning.
- Utility classes don't support 100% of the capabilities of CSS (child selectors are just bad)
- ANOTHER build step
-

## The Perfect CSS tool

- No DSL to learn
- No runtime overhead
- Little to no build step
- co-location with HTML & JS

The only way to do this is native CSS. I think a close second is styled components with some linter plugins, which is my new approach I'm trying.

So PLEASE if you're going to rebuttal, do it from a point of logic and competence. I'm not even using tailwind for this blog nor [Beyond Bootcamp](https://beyondbootcamp.org).

Cheers!
