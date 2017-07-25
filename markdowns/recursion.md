# Recursion
A recursive function is a function that **calls itself** until it hits a **base case**, this is often used in recursive languages as a replacement for loops, as it is far more flexible.

Just to understand the concept let's implement a countdown as a recursive function:

@[Countdown]({ "stubs": ["recursion/countdown.js"], "command": "node recursion/countdown.js" })

Recursion is much more powerful than loops, for example they are very useful to implement any algorithm of the "divide and conquer" family; we'll implement a simple algorithm that tells us whether a file is in a directory or in it's sub-directories.

@[Finding a file]({ "stubs": ["recursion/tree.js"], "command": "node recursion/tree.js" })
