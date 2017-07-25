# Recursion
A recursive function is a function that **calls itself** until it hits a **base case**, this is often used in recursive languages as a replacement for loops, as it is far more flexible.

Just to understand the concept let's implement a countdown as a recursive function:

@[Countdown]({ "stubs": ["recursion/countdown.js"], "command": "node recursion/countdown.js" })

Recursion is much more powerful than loops, for example they are very useful to implement any algorithm of the "divide and conquer" family; we'll implement the [quicksort algorithm](https://en.wikipedia.org/wiki/Quicksort).

The algorithm works like this: a sorted list is a list that has all the values smaller than (or equal to) the head of the list in front (and those values are sorted), then comes the head of the list in the middle and then come all the values that are bigger than the head (they're also sorted).
