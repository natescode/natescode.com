---
title: "Theory vs Practice in Software"
date: 2023-11-24T20:49:30-05:00
draft: true
toc: false
images:
tags:
  - softskills
---

I notice that when I have discourse with other developers online that there is a disconnect. Most developers, about 58%, have less than 10 years of experience. This means that more often than not, I have more experience than the developer I am debating with. Experience doesn't make me correct of course, I'm a mediocre developer at best. However, having more experience means that I've seen "TDD", "Agile", "ORMs" and many other technologies, methodogies both succeed and fail in real-world use. 

Take TDD for example. I'm sure it is amazing. I use TDD for my own personal projects even! I may have a decade of experience but I know I'm lacking in TDD skills. So often I argue **against TDD**, WHY?! Because in theory, theory and practice are the same but in practice they are not. TDD is great but if management doesn't give the developers time to write quality tests and only looks at code coverage, which is easy to falsify via simple tests or `ExcludeFromCodeCoverage` in `C#`, that means tests often have a net negative value while giving a false sense of security. Who is reviewing PRs for tests AND code? The are usually *MUCH* more important and low hanging fruit to fix in a team than yet another cargo cult of TDD. We might as well add yet another SCRUM ceremony while we're at it. Is software a religion or a science?

Same thing for Agile. Agile was designed for internal software, NOT consulting. 

## Big O is a lie

Take Big O Notation that we all learned in computer science, I taught myself after getting an AAS degree. Big O is great to know and understand, BUT it is NOT the real world. In the real world, theory doesn't matter, facts and results do.

A naive junior developer could spend 5 hours writing an algorithm that run is O(n) time while a senior spends 30 minutes writing a naive algorithm that runs in O(n^2) time. Which one is better? Well maybe the senior understands a few *REAL WORLD* parameters

1) N will always be small and the optimized algorithm that uses hashes will *practically* be slower because of the **FIXED** overhead
1) Time to deliver the software is more important i.e. in a startup.
1) The practical difference won't be noticeable : 3ms vs 60ms is a 20x difference but humans won't notice.
1) The code is a small percentage of the total performance. If the code takes up 5% of the total runtime @ 60ms, improving it by 20X, will only save 57 ms or 4.75% improvement on total speed. **CACHING** is a big factor as well.

## Caching

Sometimes being *LESS* efficient is MORE optimal because of caching. Having 60 separate JS files might actually be more efficient because if ONE changes the other 59 are still cached. IF we bundle all 60 into `acme.bundle.js`, a single character change will invalidate the **WHOLE** cache. 




