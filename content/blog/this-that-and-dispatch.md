---
title: "'This' That and Dispatch"
date: 2023-03-23T14:54:18-05:00
draft: false
toc: false
images:
tags:
  - Concepts
  - Polyglot Programming
---

There are numerous blogs and videos about Javascript's `this` keyword. In my opinion, virtually all of them fall short and
fail to even mention `dispatch` or `binding`.

As always, I encourage polyglot programming. So I'll be showing examples is Javascript, C#, Go and Rust.

## Back to the basics

First, let us cover some _really_ basic but critical Javascript.

```javascript
function greet(name) {
  console.log(`hello, ${name}`);
}

function greet() {
  console.log(`hello, stranger`);
}

greet("natescode");
```

**Which function is called?**

If you said the first function, that is _incorrect_.

Javascript _ONLY_ cares about the function name, not the parameters. In the case of duplicate function names, the last one defined wins; just like CSS.

## Methods vs Functions

Now, when we get to methods, somethings change. Let us make our previous example use methods.

```javascript
const Alice = {
  greet: function (name) {
    console.log(`hello, ${name}`);
  },
};

const Bob = {
  greet: function greet() {
    console.log(`hello, stranger`);
  },
};

var person = Alice;
person.Greet("natescode");
```

Now, even though `Alice` and `Bob` both have `greet` functions, there is no longer a name conflict! Hey, I though Javascript functions had to have unique names? They do, but not methods! Because methods are functions that are related to a specific function. They have their own scope / context.

Now let's change the example to use the object's context.

```javascript
const Alice = {
  name: "Alysan",
};

const Bob = {
  name: "Robert",
};

function greet() {
  console.log(`hello, stranger. I am ${this.name}`);
}

// they'll both use the same function as a method
Alice.greet = greet;
Bob.greet = greet;

Alice.greet("NatesCode");
```

You'll see I changed the `greet` methods back to a single function. I did this to highlight the fact that methods are just functions executed within an specific object's context. Technically, ALL javascript functions are methods since everything is on the `window` object. The plain `greet` function will _not_ return `null` or `undefined` because the `name` exists as `window.name`; it is usually an empty string though.

You'll the two lines that associate the `Greet` function with both the `Alice` and `Bob` objects.

When we call their respecitve `greet` methods, the output changes based on the object the function was called on. Methods, unlike functions, have a special parameter called the _receiver_. This is _really_ obvious in `Go` where the receiver parameter comes before the method name, the same order we call it in.

```go
// 'this' could be called anything since it is just a parameter.
// normally it would be called `person` by convention
func (this Person) greet(name string){
  fmt.Println("hello, " + this.name)
}
```

## Still unclear? Oh MY!

To clear up how `this` works. I show you an example in English. Here
is a script for you to read.

```
  Hello, my name is [your name], and today . . .
```

Did you say "your name" or did you say your actual name? "you" and "me" and "my" are relative! They don't refer to the same person all the time. It depends _WHO_ says it!

Let's change the code example to read more like English and say
"my name is Alice"

```javascript
const Alice = {
  name: "Alysan",
  greet: function () {
    const my = this;
    console.log(`My name is ${my.name}`);
  },
};

const Bob = {
  name: "Robert",
  greet: function () {
    const my = this;
    console.log(`My name is ${my.name}`);
  },
};

Alice.greet(); // My name is Alysan
Bob.greet(); // My name is Robert
```

So `this` refers to the object that we are calling the function on, _the reciever_ again. `this` is really just a special parameter as we saw in `Go`. We can think of
the following two code snippets as being conceptually equivalent.

#### Using `this`

```javascript
function greet() {
  console.log(`my name is ${this.name}`);
}
```

#### receiver object parameter

```javascript
function greet(receiver) {
  console.log(`my name is ${receiver.name}`);
}
```

I hope that clears up at least the basic understanding of `this`.

## Dispatch

Ok. So hopefully now `this` is starting to make sense. We are now going to take the minecar into the cave of deeper knowledge! Let's talk about dispatch!

First a code example. Can you tell me which method will be run?

```javascript
const Alice = {
  name: "Alysan",
  greet: function () {
    const my = this;
    console.log(`My name is ${my.name}`);
  },
};

const Bob = {
  name: "Robert",
  greet: function () {
    const my = this;
    console.log(`My name is ${my.name}`);
  },
};

// we are picking Alice or Bob at random.
// Nothing else important about this code
var friend = Math.random() > 0.5 ? Alice : Bob;
friend.greet();
```

Hopefully, you answered `no, I cannot predict something inherently random!`. My point exactly. This is called `dynamic dispatch` or `late binding`. Those are just fancy terms for `Let's figure out which method to call on which object when we RUN the code, not before`

In statically typed languages, we know for 100% certainty which type `friend` will be, before the code runs.

## C# Dispatch

Let's translate that example into C#

```csharp
class Alice {
  string name = "Alysan";

  public Alice(){

  }

  public void greet(){
    const my = this;
    Console.Writeline($"My name is {my.name}")
  }
}

class Bob {
  string name = "Robert";

  public Bob(){

  }

  public void greet(){
    const my = this;
    Console.Writeline($"My name is {my.name}")
  }
}

// csharp does have VAR but that just infers the type
// it isn't dynamic
var friend = Math.random() > 0.5 ? Alice : Bob;
friend.greet();
```

This code won't even compile. We'll get an `` error. Because we
don't know which type friend is going to be. The most direct translation would change the last two lines to look like this.

### Using `dynamic`

** NEVER DO THIS **

```csharp

// NEVER, EVER, EVER, for the love of keeping your job
// and not being replaced by AI, NEVER EVER DO THIS!!!!
dynamic friend = Math.random() > 0.5 ? Alice : Bob;
friend.greet();
```

Now friend's type is not set until we run the code. This will work. Just don't do it! Promise? Okay.

### Using `interface`

```csharp
// we define an interface that has a greet method
interface IGreetable{
  void greet();
}

class Alice: IGreetable {
  string name = "Alysan";

  public Alice(){

  }

  public void greet(){
    const my = this;
    Console.Writeline($"My name is {my.name}")
  }
}

class Bob: IGreetable {
  string name = "Robert";

  public Bob(){

  }

  public void greet(){
    const my = this;
    Console.Writeline($"My name is {my.name}")
  }
}

// csharp does have VAR but that just infers the type
// it isn't dynamic
IGreetable friend = Math.random() > 0.5 ? Alice : Bob;
friend.greet();
```

Now, friend is of a shared type `iGreetable`. An interface is a type that defines which methods should exist on an object. Now we don't care if we get an `Alice` or `Bob`, we are _ONLY_ looking for any object that fits
the `IGreetable` interface, in this case that means anything with a `greet` method that take no parameters and returns nothing.

> NOTE: statically typed languages do differentiate between methods/functions with different number of parameters, parameter types and return types. `greet` with a return type or parameter of `string name` would be a different method all together

### Using Inheritance

```csharp
// we define an interface that has a greet method
class Person {
  public void greet(){
    const my = this;
    Console.Writeline($"My name is {my.name}")
  }
}

class Alice: Person {
  string name = "Alysan";

  public Alice(){
    super();
  }
}

class Bob: Person {
  string name = "Robert";

  public Bob(){
    super();
  }
}

// csharp does have VAR but that just infers the type
// it isn't dynamic
Person friend = Math.random() > 0.5 ? Alice : Bob;
friend.greet();
```

Inheritance look similar to interfaces. `Bob` and `Alice` both inherit from the `Person` object. You can think of inheritance as a compiler-assisted copy-paste. So Alice doesn't have her own `greet` method anymore but that is okay because her parent does! Similar to have Javascript's prototypal inheritance works.

### Using Sum Types

I wasn't going to include this one, but man it is too good to pass up. I'm going to write this example in language of the gods, `Rust`.

```rust
// define a Person struct with a greet method
struct Person {
    name: String,
}

impl Person {
    fn greet(&self) {
        println!("My name is {}", self.name);
    }
}

// define an enum for friend type
enum Friend {
    Alice,
    Bob,
}

// create Alice and Bob structs
let alice = Person { name: String::from("Alysan") };
let bob = Person { name: String::from("Robert") };

// randomly choose between Alice and Bob
let friend = if rand::random() { Friend::Alice } else { Friend::Bob };

// call greet method on chosen friend
match friend {
    Friend::Alice => alice.greet(),
    Friend::Bob => bob.greet(),
}

```

\*\* BTW the above Rust code was generated by Chat GPT. I had it translate the previous C# code into rust but use enums for the friend type. The FUUUUTUUURE!

![Squidward saying future](/images/squidward_future.jpg)

So let's explain the Rust code for those unfamiliar. We define a `struct` which is like a `class` in many ways. It only has data though, no methods.
We then define an `impl` block which just defines the methods for that `struct` separately. Unlike Javascript, Rust and other languages allow us to define our own
actual types. Even if we define a `class Person` in Javascript, the type will always be `object` and we'd have to use the `Object.prototype.isPrototypeOf()` method to see if something is from a `Person` object.

The `enum` in a type that combines types. So `friend` can either be of type `Alice` or type `Bob`.
We create new object literals of type `Person` for both Alice and Bob. The enum is our ticket for the train to `polymophism`.

You'll see that Rust defines an enum type which is just a type that combines two more types, type addition aka Algebraic Data Types.

Friend is of the shared type. Then at runtime, we check which variant of Friend we have and call the approprait method. This isn't dynmic dispatch because we KNOW the type of Friend before the code runs. There is some _dynamic_ checking however which comes with a small performance overhead. The enum is like a C union but with a bit that tells us which variant we currently have.

Effectively, enums make types into values. Like a `string name` in C# must always be a string but can change to different values.

## Ms. Poly Morphism

`Polymorphism` is a tough term to define. I'm going to define it as the following.

> Polymorphism is the process of treating code (objects, data, types) based on their shared similarities

In all the previous examples, we were simply trying to `abstract` away the differences and focus on the similarites between `bob` and `alice` so
that we could treat them equally; even code can be inclusive!

Abstraction is another term we need to define since _polymorphism_ is a from of _abstraction_. Most, if not all, definiton talk about _hiding_ details.
I think, at least in software, it isn't about hiding unneeded details but _ignoring_ them. Furthermore, _abstraction_, is really about trying to describe the
essense of the thing that doesn't only apply to one thing. For example, my nephew told my daughter Luna something about his `iPad` and she called it a `tablet`. He
corrected her that it is an `iPad`. They were both correct. He was being more concrete or exact while Luna was using a more abstract, less accurate, term.

So for instance, if you know how to drive a vehicle then it doesn't matter if the vehicle's make is a **Ford** , **Chevy**, or **Dodge** because all you care is that
it has two pedals (three for manual), a wheel and shifter. Everything else doesn't matter and is not a **concern**.

## And Beyond!

We could go further and start talking about VTABLES and more, but I think that is best saved for another blog post and video. I really hope this helps. Constructive feedback is encouraged and welcome.

Until next time

`return 0;`
