I'll avoid using animal examples, use amazon customer experience as an example:
Ecmascript6 very good for functional programming (arrow functions, no stack size limit)

You break problems down to tiny bits and then glue them together with cool functions

- Pure functions
- higher order functions
  - filter and reject: prime and non-prime items (reusability of the same classification function)
    - implement reject as an exercise for the reader
  - map: apply coupon
  - reduce: total price
- currying
  - write a function already curryable
  ? curry a function with lodash
  - example adding infos gradually like (cart, address, paying method)
- recursion
  - building a tree from array of {id,parent} objects
  - quicksort
- functors (objects that have a function that unwraps internal values in a value and applies a function on each of them, e.g. arrays) (a functor is a container that can be passed a function and apply it nondestructively to all of its elements returning another functor of the same size) (types that implements map)
  - we can chaing map calls, because ti returns another functor
  - arrays, streams, trees are functors
- monads
  - a functor that also implements flatmap (flatten+map)
? memoization
