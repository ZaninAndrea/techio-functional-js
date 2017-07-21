# Currying
Currying is the technique of translating the evaluation of a function that takes multiple arguments into evaluating a sequence of functions, each with a single argument.

This becomes very easy using lambda functions and closures. So let-s dive straight into code:

@[Get the even numbers in an array]({ "stubs": ["currying/example1.js"], "command": "node currying/example1.js" })

So why is this useful? Because we are now able to pass the arguments at different points in time, this means that we can use currying to "construct" a function.

E.g.
@[Generic filter callback to check any property of an object]({ "stubs": ["currying/example2.js"], "command": "node currying/example2.js" })
