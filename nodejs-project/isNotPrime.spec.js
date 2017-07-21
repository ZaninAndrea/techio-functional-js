var assert = require('assert');
var isPrime = require('./isPrime.js');

var rejectUsed = false;
var failed = false;
var superReject = Array.prototype.reject;
Array.prototype.reject = function () {
  superReject = true;
  return superReject.apply(this, arguments);
};

it('should return the regular items', function () {
  try {
    var cart=[
      {"name":"Biscuits", "category":"regular"},
      {"name":"Monitor", "category":"prime"},
      {"name":"Mouse", "category":"prime"},
      {"name":"dress", "category":"regular"}
    ]
    var solution = [
      {"name":"Biscuits", "category":"regular"},
      {"name":"dress", "category":"regular"}
    ]
    var cart2=[
      {"name":"E-Book", "category":"prime"},
      {"name":"pen", "category":"regular"},
      {"name":"Cheese", "category":"regular"},
      {"name":"Bike", "category":"prime"},
      {"name":"Biscuits", "category":"regular"},
      {"name":"Monitor", "category":"prime"}
    ]
    var solution2 = [
      {"name":"pen", "category":"regular"},
      {"name":"Cheese", "category":"regular"},
      {"name":"Biscuits", "category":"regular"}
    ]
    var cart3=[
      {"name":"Biscuits", "category":"regular"},
      {"name":"dress", "category":"regular"}
    ]
    var solution3 = [
      {"name":"Biscuits", "category":"regular"},
      {"name":"dress", "category":"regular"}
    ]
    assert.deepEqual(solution, isPrime.notPrimeItems(cart));
    assert.deepEqual(solution2, isPrime.notPrimeItems(cart2));
    assert.deepEqual(solution3, isPrime.notPrimeItems(cart3));

  } catch (error) {
    failed = true;
    printMessage('Hint 💡', 'You can check the property category to find out whether it is prime or not');
    throw error;
  }
});

it('should use reject', function(){
  try {
    assert.deepEqual(true, rejectUsed);
  } catch (error) {
    failed = true;
    printMessage('Hint 💡', 'You should use the `reject` function!');
    throw error;
  }
})

if (!failed){
  printMessage('Good Job', 'Great another challenge completed! ');
}

function printMessage(channel, message) {
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}
