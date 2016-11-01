
module("About Objects (topics/about_objects.js)");

test("object type", function() {
    var empty_object = {};
    equal(__, typeof(empty_object), 'what is the type of an object?');
});

test("object literal notation", function() {
    var person = {
        __:__,
        __:__
    };
    equal("Amory Blaine", person.name, "what is the person's name?");
    equal(102, person.age, "what is the person's age?");
});

//The Dynamically Adding Properties test works by comparing the value (Either string, or int in this case)
//to the property of the person object which correlates. On the first line in this function, an empty object
//named person is created. So this object exists, but contains no data yet. On the second and third lines 
//if you replace the __ with name and age respectively, you are then adding and setting these properties in
//the person object. So by the time the "equal" lines are run, the person object now contains the property
//"Name" which is set to "Amory Blaine", and the property "age" which is set to 102.
//This means that when the fourth line runs, it is going to compare the string "Amory Blaine" with
//whatever person.name's value is (In this case it's value is also "Amory Blaine"), which means the test will
//pass! The same exact concept applies to the final line, comparing the integer 102 to the property person.age
//which also equals 102.
test("dynamically adding properties", function() {
    var person = {};
    person.__ = "Amory Blaine";
    person.__ = 102;
    equal("Amory Blaine", person.name, "what is the person's name?");
    equal(102, person.age, "what is the person's age?");
});

test("adding properties from strings", function() {
    var person = {};
    person["__"] = "Amory Blaine";
    person["__"] = 102;
    equal("Amory Blaine", person.name, "what is the person's name?");
    equal(102, person.age, "what is the person's age?");
});

test("adding functions", function() {
    var person = {
        name: "Amory Blaine",
        age: 102,
        toString: function() {
            return __;  // HINT: use the 'this' keyword to refer to the person object.
        }
    };
    equal("I Amory Blaine am 102 years old.", person.toString(), "what should the toString function be?");
});
// This test works because it checks the output (returned) text for case sensitivity and proper spacing against the sentence inside the string (" ") of the equality test. It does not pass the test if you use the wrong spacing or case of the letters.
