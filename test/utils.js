var test = require("tape").test;
var Utils = require("../lib/utils");

test('arc should be a function', (t) => {
    t.ok(Utils, "We are exporting the utils functions.");
    t.end();
});

//TODO: More tests needed obviously