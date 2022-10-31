---
title: Proper Code Comments
date: 2018-07-24 03:57:19 +0000
draft: true

---
Code comments are just as they sound. They are extra documentation about the software you are writing that isn't actually executed. They should allow you to make your code clearer.

Often Novice developers will over-user, under-use and worst of all misuse comments. Let's go over an example

    // a: minimum number
    // b: maximum number
    // returns a random number within given range
    static int rnd(int a, int b){
        ...code ...
    }

Con's to comments

1. Must be updated when the code is (it often isn't)
2. Language barriers can make comments detrimental more than helpful
3. Clutters up being able to actually read the code

   static int randomNumberInclusive(int minimumRang int maximumRange){
   ... code ...
   }

        //SindyScript
        @fn sum a,b
            a+b
        ;
       
        // JavaScript
        function sum (a,b){
            return a+b;
        }
       
        // C# / Java
        public static void Sum (int a, int b){
            return a+b;
        }
       
        // Go
        func sum(a int, b int) int {
       	        return a + b
        }
       
        // Ruby
        def sum(a,b)
            a+b
        end
       
        // Lua
        function sum(a,b)
            return a+b
        end
       
        // Rust
        fn sum(a: u32, b: u32) -> u32 {
            return false;
        }