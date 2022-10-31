---
title: Beyond Bootcamp
undefined: Beyond Bootcamp
published_date: 2018-11-08T04:00:14.000+00:00
draft: true

---
You went to a bootcamp...now what?

I'm a bootcamp instructor and encourage my students to keep learning. While that is a good thing, what _should_ they learn after bootcamp?

I see too many articles from recent boot-campers just regurgitating what they learned and thinking they know so much more than they do. The controversial clickbait are just there to cause discourse.

Here are some concepts to research and practical ways to learn those concepts. Most bootcamps that I see are JavaScript, usually the MERN stack. There isn't anything bad per se about MERN but if you're actually going to be a 'full-stack' developer then you'll need to learn Java or C#. There are not many backend javascript jobs.

Okay concepts to cover more deeply

#### OOP

no, you don't know object-oriented programming just because you use the `class` and `extends` keywords in JavaScript, which doesn't have class-based inheritance.

#### Polymorphism

##### Adhoc

##### Subtype

##### Parametric

Polymorphism based on the parameters we pass. This isn't just parameters to functions either. We could have generic types like List<T>.

#### Type Systems & Static Typing

This is a HUGE one. JavaScript is 'easy' and gives students a false sense of understanding how to write good code. I see students run into type errors regularly but not really recognize what that means.

This is why I strongly suggest my students learn **Typescript**, NO you probably won't use Typescript at your job, maybe, but that is NOT the point. The point is that Typescript is the easiest path to start learning and thinking about more complex type systems and static typing.

##### Dynamic Typing

Variables point to values of any type, the type of the value may change.

The following is completely valid as `Nate` doesn't have a type

    var Nate = "Nate"
    Nate = {name: "Nate"}

If we try to pass in the wrong type at runtime (when our code is running). Then we'll get errors. Imagine you're driving to a friend's house that you've never been to before.

Would you rather be told while you're driving if you've made a wrong turn or when you were plotting how the directions before you left? That's what static typing does. It catches errors before they even happen.

##### Static Typing

'static' as in not changing. Variables have types and they cannot change. A variable is a special bucket that can only hold certain types of data.

![](/uploads/shape-sorter.jpg)

The Parallelogram hole is **NEVER** going to fit the blocks of type Star.

Now static typing IS more cumbersome so many junior devs don't like it. "too much typing", "the code looks ugly", "it won't let me just get stuff done" are common critics.

There are several benefits to static typing

* catch type errors at compile-time instead of run-time: we can automate this for Pull Requests.
* fearless refactoring: no more find-replace which is error prone
* automatic documentation: automatic IDE suggestions, function documentation, and we can use Swagger to document everything automatically
* optimization: there are some optimizations that the compiler can do to make our code faster and more efficient (i.e. Cython or Python with C types)

## Front End

Now I'm more of a backend developer myself but let's cover front-end. What's next?

Find some designs online and work through implementing them. I'll have to find some good resources that go over 'why' you implement things are certain way.

### Concepts

### CSS

##### CSS naming conventions: BEM, SMACSS, RSCSS ...

"naming" things is more difficult than we think. Find a convention you like and learn it. Being consistent is best. If you're on a team, make sure to follow their conventions BUT also push to stick to some convention. Ideally, a convention that already exists and is well documented.

##### Component library

Some CSS libraries provide a default set of components and styles. Bootstrap, and Bulma both provide this.

##### Grid System

Before Flexbox and CSS Grid, making a grid system was difficult. Bootstrap has its own grid system. 

##### Utility classes

This is a concept that is taking off. Instead of having CSS classes for whole components, we have classes for virtually every CSS property i.e. m-xl-auto would set `margin:auto` on XL screens. This is a [composition over inheritance ](https://stackoverflow.com/questions/49002/prefer-composition-over-inheritance) approach. [Tailwind](https://tailwindcss.com/) is a purely Utility-class library. I am **NOT** telling you to learn Tailwind, I'm telling you to understanding utility classes. Obviously, Tailwind is the easiest way to learn this. Tailwind is just one implementation, currently the most popular. Even Bootstrap has utility classes, which I use at work. It is useful to mix paradigms.

##### Advanced CSS and designs

Something I've struggled with. Making a page look exactly like the design. Practice and learn from other devs. I'll be posting designs

### JavaScript

Front-End developers weren't 'real' developers. That has changed over the last 5 years or so. More business logic and complexity is handled by the front-end than ever before. Front-End interviews, even for junior roles, sometimes have data-structure and algorithm questions. 

Know your JavaScript. Yes, React, Vue, React-Router, etc are all important to know but ultimately knowing the vanilla technology underneath will server you forever. I'm not the best front-end dev but I've kept up with vanilla JavaScript and CSS. That has served me well. I know React and Vue decently enough now as well.