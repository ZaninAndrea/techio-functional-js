var assert = require('assert');
var isPrime = require('./isPrime.js');

var filterUsed = false;
var failed = false;
var superFilter = Array.prototype.filter;
Array.prototype.filter = function() {
  filterUsed = true;
  return superFilter.apply(this, arguments);
};
describe('tests', function() {
  it('should return the prime items', function() {
    try {
      var cart = [{
          "name": "Biscuits",
          "category": "regular"
        },
        {
          "name": "Monitor",
          "category": "prime"
        },
        {
          "name": "Mouse",
          "category": "prime"
        },
        {
          "name": "dress",
          "category": "regular"
        }
      ]
      var solution = [{
          "name": "Monitor",
          "category": "prime"
        },
        {
          "name": "Mouse",
          "category": "prime"
        }
      ]
      var cart2 = [{
          "name": "E-Book",
          "category": "prime"
        },
        {
          "name": "pen",
          "category": "regular"
        },
        {
          "name": "Cheese",
          "category": "regular"
        },
        {
          "name": "Bike",
          "category": "prime"
        },
        {
          "name": "Biscuits",
          "category": "regular"
        },
        {
          "name": "Monitor",
          "category": "prime"
        }
      ]
      var solution2 = [{
          "name": "E-Book",
          "category": "prime"
        },
        {
          "name": "Bike",
          "category": "prime"
        },
        {
          "name": "Monitor",
          "category": "prime"
        }
      ]
      var cart3 = [{
          "name": "Biscuits",
          "category": "regular"
        },
        {
          "name": "dress",
          "category": "regular"
        }
      ]
      var solution3 = []
      assert.deepEqual(solution, isPrime.primeItems(cart));
      assert.deepEqual(solution2, isPrime.primeItems(cart2));
      assert.deepEqual(solution3, isPrime.primeItems(cart3));

    } catch (error) {
      failed = true;
      printMessage('Hint 💡', 'You can check the property category to find out whether it is prime or not');
      throw error;
    }
  });

  it('should use filter', function() {
    try {
      assert.equal(true, filterUsed);
    } catch (error) {
      failed = true;
      printMessage('Hint 💡', 'You should use the `filter` function!');
      throw error;
    }
  })

  after(function() {
    printMessage('Good Job', 'Great another challenge completed! ');
  })
})

function printMessage(channel, message) {
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}
