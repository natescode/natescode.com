---
title: 'SillyScript: My Toy Interpreter Project'
date: 2018-07-21T14:52:47.000-05:00

---
As a technologist I often get curious on how things work underneath. When it comes to home renovation projects sometimes going too deep will cost you, thankfully software is safer, unless you're messing with production.

Inspired by my _Silly curiosity_ I wanted to create an interpreter; I'll get to compilation and code generation later. I later on want to create my own compiler which will take the interpreter process a step further.

For a VERY basic interpreter I wanted to be able to handle basic arithmetic expressions. I felt like that was a good place to start. Having a background has a hobby linguist help as well.

Here is how I broke down a simple expression.

     2+3*4

I would break it into a TREE structure

        +
     2     *
         3   4

It takes a bit to realize how this TREE structure should be built. I realized that all of these mathematical operations are Binary, meaning they have two inputs. So we end up building a binary tree. Following the order of operations we multiply first which puts the multiplication node and the 3,4 leaves at the bottom. We will be recursively descending (I learned this term afterwards) the tree and evaluating the expressions and working our way back up as the expressions evaluate to useful values. Once we evaluate the 3*4 we'll have the following tree

        +
     2     12

Having a solid understanding of basic data structures helps but I think this is a good practical example that one can actually use to _learn_ data structures as well and see the importance of how _data_ is _structured_.

If you're like me you're already thinking ahead "Well if we can do basic arithmetic then why not add variables?"

At least that's what I thought. Quickly you see parallels and that everything can be evaluated if structured properly and even though a variable isn't the same a say a binary mathematic expression it too has an order of operations. So let's try to make a tree for one.

_We'll use something like JavaScript syntax_

var ageInMonths = 27 * 12

We could build our tree by making the `=` its own binary expression. Then making the `var` a unary (one parameter) expression (usually it is a statement but we'll make everything an expression for simplicity)

Tree for `var ageInMonths = 27 * 12`

                       =
                    /      \
               var          *
            /             /    \
         ageInMonths    27      12

We can think of order of operations as needing to evaluate the right side of the `=` first to get the finally value we'll actually assign. Then we'll evaluate the `var` which will return a new variable that `ageInMonths` points to.

Here are the steps.

1
`var ageInMonths = 27 * 12`

                       =
                    /      \
               var          *
            /             /    \
         ageInMonths    27      12

2
`var ageInMonths = 324`

                       =
                    /      \
               var          324
            /
         ageInMonths

3
`ageInMonths declared`

                       =
                    /      \
            ageInMonths     *
                          /    \
                        27      12

4
`assign 324 to ageInMonths`

`ageInMonths:324`