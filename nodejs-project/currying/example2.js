var checkProperty = propertyName =>
                      expectedValue =>
                        object =>
                          object[propertyName] === expectedValue

var candies = [
  {"soft":true, "flavour":"strawberry"},
  {"soft":false, "flavour":"strawberry"},
  {"soft":false, "flavour":"cherry"},
  {"soft":true, "flavour":"orange"},
  {"soft":false, "flavour":"lemon"},
]

var softCandies = candies.filter( checkProperty("soft")(true) ) // checkProperty("soft")(true) returns a function that accepts an object, exactly what we need
console.log(softCandies);

var strawberryCandies = candies.filter( checkProperty("flavour")("strawberry") )
console.log(strawberryCandies);
