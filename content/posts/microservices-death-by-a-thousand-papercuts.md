---
title: "Microservices: Death by a Thousand Papercuts"
date: 2023-09-04T14:21:35-05:00
draft: true
toc: false
images:
tags:
  - untagged
---

Microservices is another hot _buzzword_ in tech right now. I'm not hear to talk bad about microservices; I'm no expert. I have had some experience though.

## Best Buy

I couldn't get the payment information. Completely separate services and database. So I didn't do the task. The fact my manager was mad says a lot. Did he NOT look at the user story? That is
a _really_ easy thing to catch. Backroom does not have any pricing information.

## FiServ

### PunchProfileProcessor

### UnapprovedEmployee Filter

This task sounds stupidly easy, 2 story points at most. I just needed to get the number of unapproved timesheet for employees under a specific manager for a specific time period
for filtering on the front-end. So Service A needed to call Service B and Service C and then do a manual in-code join of the data and return it. It was ugly, but it worked.

## MORAL OF THE STORY

Microservices are a great _optimization_. Like most optimizations, you can do them prematurely. Don't default to microservices unless you REALLY KNOW what you're doing (YOU DON'T).

The main difficulty in my limited experience over the 3 years I've spent with microservices is that defining barriers is a deceivingly difficult problem. Which is a theme of software that
I've learned over the lazy decade. Software is tightly coupled no matter what you do. Separation of code doesn't mean it is loosely coupled.

Microservices can get REALLY chatty. Imagine making a PBJ sandwhich BUT instead of ONE human, you have three. Human **M** can move items. Human **S** can SEE (others are blindfolded) and Human **D** can do thing with their hands. The amount of communication would be insane.

Especially at the database level. Microservices kills me when in my head I just need to query 2-3 table and then realize instead of 3 tables, it is 3 databases, 3 services and then need to manually join the data in memory with code.

The solution to virtually all Microservice problems is MORE microservices.
