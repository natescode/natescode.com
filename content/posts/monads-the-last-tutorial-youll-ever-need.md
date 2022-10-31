---
title: "Monads: The Last Tutorial You'll Ever Need"
date: 2021-05-01T00:03:46-05:00
draft: true
---

I know the title is a bit ambitious but I do intend to condense the 100 hours of research down into simple terms that don't involve category theory maths, Haskell, Hindley–Milner syntax or Burritos! Just plain code for the average dev that wants to know WTF a Monad is.

##Short version

`Monad = wrap (lift) + unwrap (flatten) + map`

```typescript
interface monad {}
```

## Concrete to Abstract

We'll start with the concrete. Let's invent the Monad ourselves.

Monad is a type that wraps another data type. It can abstract some logic (like checking for nulls, concurrency or making IO more predictable) then unwraps the type so it can be composed.

C#, Java and now Javascript all have the null coalesce operator `?.` for checking for nulls. So instead of

```javascript
if (thing != null) {
  thing.method();
}
```

We can do

```javascript
thing?.method();
```

This is _very_ close to what Monads are. `?.` just happens to be specific to null-checking while ML languages tend to have a polymorphic operator that can handle different scenarios based on the types they're working with.

We are essentially abstracting away a whole if-statement with only 1 extra character.

So let's change up the syntax a little. We could change the method to a plain function and the object to be the first parameter like so

```javascript
method(thing);
```

But now what about the `?.` operator? Remember operators are just functions. So lets treat it like a function that takes a function to call `method` and the parameters for that method `thing`.

```
 ?.(method,thing)
```

Its a bit weird syntax I know but ultimately it is what is going on. No different than `1+2` since `+` is just a function so its the same as if we had an `add` function `add(1,2)`. So let's rename `?.` to `MaybeCall`. So now we have

```javascript
MaybeCall(method, thing);
```

If we imagine what `MaybeCall` does, it could look something like this:

```javascript
function MaybeCall(func, param) {
  if (func) {
    return func(param);
  }
}
```

So if we think about it, the param that we pass it can have a value OR null. Null is an extra bit of information.

## Composition

So often in our code we call a function, or service, and get something back. Then we take that result and pass it to another function.

Hypothetically, let's say we have an app that takes a ZIP code and returns the name of the state. Then the state is used to look up the state flower of that state. Not a very useful app but bear with me.

So we so far have two functions.

```javascript
function GetStateFromZIP(zip) {
  // offset by largest possible zip to work from 0 index
  return StatesZIPMap[zip];
}

function GetStateFlower(state) {
  return StateFlowers[state];
}
```

Nothing crazy so far. Now we just need to call them to make them useful.

```javascript
var zip = "90210";
var state = GetStateFromZIP(zip);
var flower = GetStateFlower(state);
```

We could also do `GetStateFlower(GetStateFromZIP(zip))`. We're just taking the output and passing it to the next input. This is called composition. We're putting two functions together.

## Not so Pure world.

The world isn't so perfect. As you may have noticed our code isn't very fault tolerant. There is no state for ZIP 99999! So then we'd be passing `null` to `GetStateFlower`. We'll get errors and that not at all what our type system expects. We might as well have told our math teacher the answer is pineapple!

So let's create a new type called MaybeState.

```javascript
    Class MaybeState {
       constructor(state){
         this.Empty = !state // if state is null then Empty is true
         this.State = state
    }
```

This object possibly holds a state OR it's empty (null).
Now our first function can be refactored to return a MaybeState.

```javascript
function GetStateFromZIP(zip) {
  // offset by largest possible zip to work from 0 index
  var state = StatesZIPMap[zip];
  return new MaybeState(state);
}
```

Cool! Now we can handle the _exceptional details_ nicely. We basically **wrap** the `state` in a new object that adds more **context**. Now we can use that extra context (information) to better write our code.

We have one problem though. Originally our code did this

    zip -> state
    state -> flower

but now it does

    zip -> Maybe<state>
    state -> flower

Or second function doesn't know how to handle our new type! We need to get the state out, **unwrap** the value before we call the next function.

So we sorta need a third function.

    zip -> Maybe<state>
    Maybe<state> -> state
    state -> flower
