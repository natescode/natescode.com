---
title: "Optimize Code by Doing Less"
date: 2024-07-13T01:55:29-05:00
draft: true
toc: false
images:
tags:
  - null
  - concepts 
---

# Null is innocent, blame the type system! 

So for a long time I was confused about `null`. I kept hearing `null is bad` but then seeing the answer being `Optional<T>` and `Some x` or `None`. I was like okay so `null` is bad but `None` is okay? Couldn't we just call `None` `null` ?

The answer is that `null` isn't the problem, the type system is! Here is an example in C#. 

```csharp
    int foo = 33;
    foo = null;
    Console.Writeline(foo.ToString()); // BOOM !
```

If we were writing this in C# some years ago, `int` could actually be null! `int` is a type or a group of valid numerical values. Nowhere in that type does `null` appear. It is implicitly added! That is the problem all along. Finally C# has fixed this. These days that code wouldn't compile because int is not nullable. If we made it nullable then `.ToString()` would complain because it only works with non-nullable types. So we'd have to check for null first. 

No one seemed to explain this well online, at least not that I could find nearly a decade ago.