# Higher Order Functions
Higher Order Functions are functions that consume other functions as parameters, **Mind Blown 💥**  
We are going to discover how this functions are useful through some examples, in particular we are going to recreate the logic of the amazon checkout.  

# Filter
Filter is a method of arrays that accepts a binary function as argument and returns a new array with only the elements that passed to the function returned `true`.  

Here is an example:  
@[Get the even numbers in an array]({ "stubs": ["isEven.js"], "command": "node isEven.js" })

As you can see the function `isEven` doesn't need to include the logic to handle arrays, and this is the great thing about these higher order function: now the decision logic is kept separate by the function applying it to the array, so we can reuse it.  

Let's try to implement our first piece of logic for the amazon cart:  

@[Use the filter function to return all the prime items in the cart]({ "stubs": ["isPrime.js"], "command": "node_modules/mocha/bin/mocha isPrime.spec.js --reporter list",  "layout": "aside" })

# Reject
We can now reuse the `isPrime` function in conjunction with `reject` to get all the non-prime items in the cart. The reject function is the opposite of the filter: it creates an array with all the elements but those that satisfy the condition.  

Reject is not a built-in function in js, we are going to use the library `underscore.js` to have it. The syntax is slightly different: `_.reject(list, predicate)` where `_` is the underscore library

@[Implement the `notPrimeItems` function using `reject` (you can use functions defined in the previous snippets)]({ "stubs": ["isNotPrime.js", "isPrime.js"], "command": "node_modules/mocha/bin/mocha isNotPrime.spec.js --reporter list" , "layout": "aside" })
