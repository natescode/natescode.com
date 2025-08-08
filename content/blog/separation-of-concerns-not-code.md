---
title: "Separation of Concerns Not Code"
date: 2024-05-30T10:46:44-05:00
draft: true 
toc: false
images:
tags:
  - concepts
  - architecture
---

I was going to name this post "Concerns vs Responsibilities" which I'll be covering here anyways.

S.O.L.I.D starts with S for "Single-Responibliity Principle", making sure code: function, object etc. do one thing well. We also have the concept of "Separation of Concerns". I think _Responsilibities_ and _Concerns_ get conflated and the definitions get confused. The follow is completely my opinion based on my experience and not anything canon.


## MVC

Let's take the MVC pattern for example. We have _Models_ , _Views_ and _Controllers_. I won't go into detail, the reader can look up MVC online. We break up code into those three _RESPONSIBILITIES_. In my opinion, a responsibility is on the INDIVIDUAL and it is UNIQUE. The Model does it's job of holding the data and validation while the View renders that data, they don't do the other's job / responsibility. Now most MVC apps have USERS so let's say we have a `UserController`, `UserModel` and `UserView`. 

You'll notice something. The word `User` is reused. `User` is our _CONCERN_, it is our problem we are trying to solve. The model, view and controller as specific responsibilites of the code to address that concern. Just like how at a Inn-n-out there is a cashier that takes the order and the money, someone that makes the fries and someone that makes the burgers. They each have their own `responsibility` but they are all addressing the same `concern`, the customer's order.


## JSX, Components etc.


The previous definitions help when developers inevitable tell me that technologies like JSX are evil because they MIX logic and markup. HTML, CSS and JS are designed to solve different problems and shouldn't be mixed because. . . SEPARATION OF CONCERNS. But the COMPONENT IS our concern! Just like Models, Views and Controllers. Separation of Concerns, NOT CODE.

Why could I have my HTML, CSS and JavaScript separated? That is like having your bun, cheese, burger and lettuce all on separate plates!


> "Separation of Concerns, not code." - Nathan Hedglin

## Conclusion


So we deconflated the terms "concern" and "responsibility" in software and learned that mixing different DSLs is NOT inherently bad. Mixing too much logic with markup for example, may be a sign that the code IS starting to mix Concerns, not just responsibilities. 
