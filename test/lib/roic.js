/******************************************************
** Assumes costs are starting capital
*******************************************************
    module.exports = function(capital, sales, costs) { 
        return 100 * (sales - costs)/capital; 
    };
*/

var roic  = require('../../lib/roic.js'),
    test = require('tap').test;

test("Test roic calculation.", function(t) {
    var result = roic(50, 100, 20);
    t.equal(result, 160, "roic for da da da");
    t.end();
});

test("Test roic calculation with non-integers mixed in.", function(t) {
    var result = roic(50.01, 20.02, -.05);
    var expected = Math.floor(100 * (20.07 / 50.01));
    t.equal(result, expected, "roic for non integers.");
    t.end();
});

test("Test roic calculation.", function(t) {
    var result = roic('50', '100', '20');
    t.equal(result, 160, "roic for da da da");
    t.end();
});
