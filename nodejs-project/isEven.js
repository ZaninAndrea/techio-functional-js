function isEven(x){
  return x % 2 == 0
}

var numbers = [12,324,213,4,2,3,45,4234]
var evenNumbers = numbers.filter(isEven)
console.log(numbers)
