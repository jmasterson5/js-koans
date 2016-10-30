
var temp = 5;

test("local variables", function() {
    var temp = 1;
    equal(undefined);
});

test("global variables", function() {
    temp = 1; // Not using var is an example. Always use var in practise.
    equal(1, window.temp, 'global variables are assigned to the window object');
});
