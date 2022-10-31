---
title: "TEARRSS"
date: 2015-01-01T00:03:46-05:00
draft: true
---

Computer science or Computer Fad. Fads vs Facts
I see a lot of strong opinions, fads and misunderstanding from the software industry. Especially from junior developers.

Recently, someone was arguing with me that C# was dumb because it had a feature, dynamic, that they never use and clearly didn't understand. I believe his emotions more likely caused more by some life trauma more than an obscure language feature.

Is software a science or art? There aren't always clear answers and there are numerous variables. Making the right choice is an NP complete problem. I'd call that an art.

I see a lot of hate or love for things based on fads not facts. Crypto is a good example.

Writing code is pretty easy but writing code tbat is scalable, secure, accessible, performant, extendible, testable, adaptable and resilient is extremely difficult and highly valuable. Anyone can write words, I'm doing it right now. But few can do it well enough to make a living from writing or get a Pulitzer prize.

My acronym for the qualities of good software is TEARRSS like years because without it you'll cry.

## TEAARRRSS aka TEARS

### Testable

Unit Teste, End-to-End test, UI tests, manual testing etc. We should be able to validate the software product meets the requirements.

### Executable

I focus on this first. If the code doesn't compile or run without errors on the happy path, everything else doesn't even matter.

### Adaptable

The only constant in life is change. If requirements change, a library changes, and API changes or is deprecated. Will our code still function?
Can we easily make safe changes as needed?

### Accessible

Sure, having the software on multiple devices and platforms makes it more accessible but that is just the beginning.

Internationalization aka i18n
ADA HTML
Makes the software more accessible.
I don't think of A11y as just to help disable users but to help everyone that may use the software from a different perspective.

### Readable

This of course includes code comments, documentation, component libraries, READMEs, etc.
Code should be clear, readable and understood by the author in the future or other developers.

### Responsive

Can our software product handle different devices, platforms, version, users etc?

### Resilient

This may sound similar to _Adaptable_ but this is more about ERRORS, and EXCEPTION. What if the site goes down?
What if we get DDOS'ed? What if hard drives fail, have we lost user data? What if errors are thrown?

### Scalable

Software might work but what happens when 10,000 concurrent users are using our software? Can we handle that much load? Will there be errors ?
We want our software to scale to our needs. Many times this isn't THAT much of a concern, especially on the backend where we have complete control and default
performance of enterprise tool is quite good already. Client-side performance is crucial for mobile apps and website these days.

### Secure (and Compliant)

Security is not only important but so is compliance. I've worked for many bank, credit unions, assest management companies aka financial institutions.
They are all required to report, be audited, be ADA complaint be HIPPA Compliant etc.
