# Features List

- TYPES

  - ADTs that use `@sum` keyword not `enum` or `union`
  - Typeclasses / Traits
  - Interfaces that are structurally typed
  - Monads with Monad Trait
  - Type constraints

- OOP

  - `@struct` value type, public fields, no constructor, no pointers / references
  - `@class` reference type, private fields, (de)constructor, pointers / reference types

- OPTIMIZATIONS

  - Data Oriented Design like `Zig`
  - explicit tail-recursion optimization `@rec`

- structural interfaces like `Go`
- built-in testing (unit, ui, fuzzing, benchmark, E2E)
- ML FEATURES
  - optional partial function application `Haskell`
  - pattern matching with `@match`
- generics like `C#`
- structs and classes
- File system based module system

- MACROS

  - language macros liku `Lisp`
  - comptime like `Zig`

- SYNTAX

  - series / range operator `1..10`
  - negative indices `array[-1]`
  - Auto semicolon insertion
  - No extra parens
  - no `<>` for generics. Use `'T` syntax instead

- ITERATORS & LOOPS

  - internal & external iterators like `Ruby`
  - non-local return (keyword, enum or possibly labels via Symbols?) like `Zig`
  - All-Purpose `@for` loops with series kinda like `Zig` or `Go`

- CONCURRENCY
  - async with channels (multiple independent call stacks) like `Go`
- MEMORY MANAGEMENT

  - locality for stack based memory like `Janestreet Ocaml`
    - `@local` and `@global` keeps type system easy to use
  - Reference counting, Unique pointers like `C++` and `Rust`
  - Optional GC, tracing, generational and arena allocation
  - custom allocators like `Zig`
  - ~~\*Lifetimes won't be types and they'll all be inferred~~

- BUILD SYSTEM
  - targets WASM & Zig
  - FAST builds!
  - WEB, Node + Express, WASI(X) and POSIX APIs

## Noteable NON-FEATURES

- inheritance (later only single inheritance of `abstract` classes)
- real classes / `new` keyword
- so async / await all the way
- Borrower Checker

### Non-local return

Using internal iterator Symbol. Like labeled-for in Zig but the label name can be passed.

```typescript
    /// array, fn -> void
    @fn map array,func {
       $outer: @for array.length, $item {
            // pass current item
            // AND the label for the for-loop
            func($item, $outer)
        }
    }

    array.map(fn(item,$label){
        if item === null {
            break $label
        }
    })

```

### Generics

Real runtime Generics like C#.

C

```csharp

    public void reverse<T>(T[] collection){
        // reverse
    }

```

Si

Si doesn't need the Generic Type parameter because it is assumed. . . is that possible?

```silicon
    /// []T -> void
    @fn reverse:void collection:[]'T
        // code
    @


```
