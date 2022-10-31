---
title: "How Architects choose a Technology Stack"
date: 2015-01-01T00:03:46-05:00
draft: true
---

# How Architectures choose Technology Stacks: work backwards

webdev
There is a plethora of posts of choosing between JavaScript and Python based on arbitrary details for languages. This may leave junior developers to believe software architects care about language popularity or features like JIT or compiled.

Work Backwards
I don't care if you love JavaScript or Python has list comprehensions. Or that Java is verbose. I care about solving problems.

My last client project was writing software for medical software used in jails.

Security and ecosystem stability were my two main priorities. Performance wasn't much of a concern with the scale the client was working at.

I needed something that is secure, stable with solid library support.

While Node could have been used, NPM package maintenance is a nightmare and it isn't nearly as secure as I needed it to be. Also, Node things like ORM support is really poor.
