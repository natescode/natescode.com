---
title: "10 Things I did wrong as a junior software developer"
date: 2015-01-01T00:03:46-05:00
draft: true
---

Tips for Junior Developers

#

beginners

#

productivity

#

javascript

#

webdev
I see so many new eager and ambitious developers on Dev, which is great. I love teaching the next generation of developer and sharing what I've learned the last decade in software. Here are some common themes I see with beginners.

Go deep, not wide.
The tell tale sign of a junior developer is how they describe themselves.
Junior: "I know React, Next, Npm, Java, sprint boot, scrum, Linux, Next, Vue, Rest APIs, git ....."

Senior: "ok. What have you built?"

Junior: blank face

When I interview developers, I look for what they're built not what they know poorly. A good developer can learn any new library or framework because they understand the fundamental concepts.

I suggest learning fundamental concepts and how to apply them. MVC is a supper common one. I knew the .NET MVC framework and was easily able to learn AngularJS and Spring Boot because of it, despite having never touched the technologies before getting the job.

Build stuff
My bootcamp students keep thinking I can talk them to death and they'll be reborn as developers. It doesn't work like that. You actually have to code, to learn how to code.

Static Typing, design patterns, architecture etc don't make much sense when they're only theory and applied to tiny codebases.

Want to really understand React? Learn more about functional programming. Or implement your own basic version of React yourself to understand what it does and why.

Experience is what matters not rote memorization. Google will always know more than you but Google can't think, that's your job. Humans think, computers compute.

Slow Down
I see too many posts trying to study 6 hours per day for 6 months like learning to code is just an hours game. That isn't how learning works. Your brain needs time and breaks to create new connections. I've heard this called Quantum Leaps, when you take a break from learning your brain learns and when you come back you'll find that you've improved for seemingly no reason.

Project based on test based
Software isn't about passing a multiple choice test. It is about critical thinking skills. Focus on one project for a longer period of time. Start small and let is naturally grow with your skills. You'll learn simply by running into classic problems other developers have seen and solved.

I understood the need for encapsulation and functions before knowing the terms or using them; BASIC doesn't have functions, encapsulation or loops of any kind.

As my primitive text-based RPG game grew, I saw problems. I treated files like functions and used GOTO and LABEL for loops. Eventually, I learned C++ and I saw the solutions to the very problems I had experienced.

Blog don't teach

Tips for junior developers from a senior developer

#

beginners

#

productivity

#

agile

#

webdev
Lately, I've been leading a project for a client. We took on five new interns.

I also teach a coding bootcamp part-time. These interns were previously my students.

I often see common misconceptions from newer developers.

Here is an example. My interns was working on a header component that has some text that links to the home page. The link component required some text, makes sense. We're using Typescript so this is a type error.

His first thought is to fix the error. Not to fix the problem. The error is the symptom.

We have a few options to solve this problem.

Conditionally render the link if no text is provided.
Render default text
Make the text optional in the Link component
#3 is wrong and simply mutes the error. Why render an empty anchor tag?

#1 or #2 could be valid depending on the requirements.

In our case, the link will default to "back" text and go back to the previous screen, via react-router.

Learning to code isn't enough. We must solve business problems, not just type errors.