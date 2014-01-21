var calculator  = require('../../lib/calculator.js'),
    test = require('tap').test;

test("Test roic calculation.", function(t) {
    var result = calculator.roic(50, 100, 20);
    t.equal(result, 160, "roic for da da da");
    t.end();
});

