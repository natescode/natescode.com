---
title: "Static Typing is Misunderstood"
date: 2015-01-01T00:03:46-05:00
draft: true
---

Why Static Typing is misunderstood
This will trigger some people.

I see too often that JavaScript only developers think they know everything and that Typescript or C# or the like are dumb and too verbose. "Just write tests" they say.

Tests validate implementation, typed validate usage.

You write a test to make sure your InvertBinaryTree function works properly.

You use static typing to make sure, and automatically document, HOW someone should use that function.

Does it take any object ? Or does it expect an object with "left" and "right" keys? Does it return the inverted tree or modify the passed one?

I agree with the dynamic camp on a few points.

Static typing doesn't always prevent a ton of bugs. Most of them would be found in testing anyways. Maybe a bit quicker but about a wash.
