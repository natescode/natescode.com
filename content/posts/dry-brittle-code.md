
---
title: "Dry Brittle Code"
date: 2024-06-28T10:24:34-06:00
draft: true
toc: false
images:
tags:
  - concepts
  - career
  - DRY
---

Software Engineer students will hear "DRY" or Don't Repeat Yourself numerous times as they are learning to design, build and test software. Even professionals will argue over
removing duplicate code. Unfortunately, making code DRY isn't as cut-and-dry (pun intended).

Here is a _really_ simple example of DRY and brittle code. Say we have some CSS like below.


    ```css
        .service-card {
            font-family: monospace;
            background-color: #18B218;
            width: 320px;
            height: 200px;
        }
        .product-card{
            font-family: monospace;
            background-color: #18B218;
            width: 320px;
            height: 200px;
        }

    ```

Just because there are duplicate values does not mean there are duplicate _semantics_. My hat and shirt could both be red but that doesn't mean I should make a `--clothes-color: red;` custom prop. Because then both the hat and shirt are coupled together! Changing that variablbe would change both! OOPS! Code reuse creates dependencies! It also requires testing. Tests aren't all that valuable if you code is WET because changing code in one place won't break code in another. 


## From Sea to Land

Just like evolution of creatures starting in the ocean and then moving to land, so should your code go from WET to DRY. 

> "Duplication is cheaper than the wrong abstraction" 

This is so true. Checkout [the blog post about that](https://sandimetz.com/blog/2016/1/20/the-wrong-abstraction)

## DRY and Brittle

Unskilled developers will make their code dry by also making the code tighly coupled. This means that changing code for module A will break module B! Always lean on the architects.

## Work Example

At my current employer, we are in the process of modernizing our architecture. We are moving from a single monolithic application to many small applications. I say applications and not "micro services" because that buzzword is about as well defined as 'agile' these days. We basically have what appears to be one large website but each part is actually a completely different full-stack application: frontend, API and database. 

This approach DOES mean there will be code / logic duplication, in some cases a LOT of duplication since many applications will need to read and write much of the same data. This initially sounds like a bad approach but I'm coming around to liking it for a few reasons.

1. The company is immature with this new architecture and cross team communication.
1. Isolates any bugs. If I break the AR application, that won't affect the other applications as well.
1. This a completely new architecture and that makes it an art (heuritics apply). We won't know the correct abstractions or patterns that emerge until we use it.
1. 
