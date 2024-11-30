
---
title: "More TDD Less PRs"
date: 2024-07-13T07:37:52-05:00
draft: true
toc: false
images:
tags:
  - testing
  - project management
---

I wanted a fancy title that wasn't clickbaity. I've been experimenting with a coding approach at work that I want to share. At work, like any good company we write
tests for our code. Not always first, but at least we generally have quality tests. The IT Director has pushed hard for code coverage which I strongly disagree with. One engineer spend 2 full days writing tests in order to commit 17 lines of code because the code coverage percentage fell, oh no we ONLY had 95% code coverage. Anyways, here is my approach to use TDD to make PRs more efficient or almost redundant.

I first tested this with a senior developer on my team. I then tested this with my software students as well. I'd love to try this with an actual junior developer. 

## The NatesCode TDD process

1) Senior / Lead developer writes the tests first. Then pushes those tests to a feature branch
2) The more junior Developer then checks out that feature branch and makes those tests pass

I really like this approach for a few reasons

1) The Lead developer touches and understands every single feature the team develops
1) Junior engineers have immediate feedback on their progress. This helps with confidence and reduces the need to ask questions. This also
makes progress reporting in JIRA or an Scrum Daily Standups easier, "I have 3 of 10 tests passing so requirements A, B, C are met." 
1) Implicit communication. The lead developer is communicating through the tests HOW the feature should work. Especially for junior developers, they might not know *how* to design the *API* for a feature. 
1) Tests are written as part of the process. Some developers hate writing tests, myself included. At least then there is a dedicated dev to write tests. As a dev lead, it is my responsibility that we have well tested and well architected and well documented code anyways. 
1) Tests can be written ahead of development. This can give the dev lead some flexibility since I spend about 50% of my time doing dev lead tasks that get in the way of coding. Many times, this has meant I couldn't finish a user story. Testing is usually a much smaller part of a User Story than implementing the actual user story. So if a User Story is 8 points, Only 1-2 points of that is writing the tests. This means I can get in done more quickly and move onto Dev Lead tasks instead of my stories either rolling over to a new sprint or being passed to one of my developers.

I personally define seniority like this:

1. Juniors create functions
1. Mids create classes / modules / namespaces  
1. Seniors create projects
1. Principle / Staff / Architects creates Products
1. Manager creates Teams


### Negatives?

No, there are no negatives. It is a panacea... Just kidding! I can see many issues with this approach.

1. not all dev work is testable. But maybe the Dev Lead should do that anyways.
1. All developers should know how to write tests
1. Pull Requests are still required