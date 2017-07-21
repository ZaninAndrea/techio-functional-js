function square (x){
  return Math.pow(x,2)
}

var numbers = [1,2,3,4,5,6,10,20]
var squares = numbers.map(square)
console.log(squares)
