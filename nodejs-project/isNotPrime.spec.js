var assert = require('assert');
var isPrime = require('./isPrime.js'); // to allow reference to previously defined functions
var isNotPrime = require('./isNotPrime.js');
var _ = require('underscore') // needed to have support for the reject function

var rejectUsed = false;
var failed = false;
var superReject = _.reject;
_.reject = function() {
  rejectUsed = true;
  return superReject.apply(this, arguments);
};
describe('tests', function() {
  it('should return the regular items', function() {
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
          "name": "Biscuits",
          "category": "regular"
        },
        {
          "name": "dress",
          "category": "regular"
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
          "name": "pen",
          "category": "regular"
        },
        {
          "name": "Cheese",
          "category": "regular"
        },
        {
          "name": "Biscuits",
          "category": "regular"
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
      var solution3 = [{
          "name": "Biscuits",
          "category": "regular"
        },
        {
          "name": "dress",
          "category": "regular"
        }
      ]
      assert.deepEqual(solution, isNotPrime.notPrimeItems(cart));
      assert.deepEqual(solution2, isNotPrime.notPrimeItems(cart2));
      assert.deepEqual(solution3, isNotPrime.notPrimeItems(cart3));

    } catch (error) {
      failed = true;
      printMessage('Hint 💡', 'You can check the property category to find out whether it is prime or not');
      throw error;
    }
  });

  it('should use reject', function() {
    try {
      assert.equal(true, rejectUsed);
    } catch (error) {
      failed = true;
      printMessage('Hint 💡', 'You should use the `reject` function!');
      throw error;
    }
  })
})

function printMessage(channel, message) {
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}
