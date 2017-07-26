var assert = require('assert');
var implementReject = require('./implementReject.js');

var filterUsed = false;
var failed = false;
var superFilter = Array.prototype.filter;
Array.prototype.filter = function() {
    filterUsed = true;
    return superFilter.apply(this, arguments);
};
describe('tests: ', function() {
    it('should return the correct array', function() {
        try {
            const correctReject = (arr, callback) => arr.filter(x => !callback(x))
            const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            const isEven = x => x%2===0
            const isOdd = x => x%2===1

            assert.deepEqual(correctReject(arr, isEven), implementReject.reject(arr, isEven));
            assert.deepEqual(correctReject(arr, isOdd), implementReject.reject(arr, isOdd));

        } catch (error) {
            if (!filterUsed) {
                printMessage('Hint 💡', 'Try using filter to implement the function');
            } else {
                printMessage('Hint 💡', 'Remember that reject is the opposite of filter');
            }
            throw error;
        }
    });
})

function printMessage(channel, message) {
    console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}
