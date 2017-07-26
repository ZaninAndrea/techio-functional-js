In this introduction I have tried to explain everything in the simplest way possible, but for some crazy reason most of the articles and books on functional programming love to use the mathematical lexicon in explanations, so it's my duty explaining you the meaning of some words commonly used in the functional programming community.

# Functors
Remember when we talked about `map`? We only used map on arrays, but you can actually implement `map` on other data structures, e.g. trees, streams, promises, ...  

**Any type that has a map function is a functor**

A slightly more formal definition: A functor is a collection that can be passed a function and apply it nondestructively to all of it's element and return another functor.

If you a real nitpicker you will now ask "How do we define map?". One of the best definition is given by [haskell's functor laws](https://wiki.haskell.org/Functor), for the interested people I will translate them into JavaScript:

```
// identity
myFunctor.map( x => x) === myFunctor

// composition === chaining
myFunctor.map( x => f(g(x)) ) === myFunctor.map(g).map(f)
```

In the code above I used `===` to keep it simple, but I should have checked for deep equality, if you don't know what this means don't worry, you should be able to understand the meaning anyway; nonetheless if you want to learn more about it [this](https://stackoverflow.com/questions/1068834/object-comparison-in-javascript) stackoverflow thread is a good place to start.

So why don't we create our own functor?

@[The Tuple Functor]({ "stubs": ["conclusion/tuple.js"], "command": "node conclusion/tuple.js" })

# Monads
