// standard way
function add(x,y,z){
  return x + y + z
}
console.log("standard: ", add(1,2,3))

// curried style
var add2 = x => y => z => x + y + z // if you have only one argument in the lambda function you can omit the parenthesis 
console.log("curried: ", add2(1)(2)(3) );
