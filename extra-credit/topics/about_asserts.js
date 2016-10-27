
module("About Asserts (topics/about_asserts.js)");

// This test works, because the three equal signs check whether one of its sides is equal to the other. When I put the word "true" instead of the underscores, the statement ends up being valid (true).
test("ok", function() {
    ok(__ === true, 'what will satisfy the ok assertion?');
});

test("not ok", function() {
    ok(__ === false, 'what is a false value?');
});

test("equal", function() {
    equal(__, 1 + 1, 'what will satisfy the equal assertion?');
});

The About Asserts Function work as so, === is a strict equality operator meaning that other end of the equation can only be stricly
equaly to the other part. For Exmaple if _____ === Hotdog, that means other part can stricly only be Hotdog, and no other answer will
provide a solution. The same goes for the __, 1 + 1 in math 1+1 = 2. The only possible answer that will satisfy what 1+1 would be 2. The
equation is using common math to figure an out equation and is asking what would 1+1 = ?.

