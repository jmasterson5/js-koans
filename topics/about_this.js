module("About this (topics/about_this.js)");

test("'this' inside a method", function () {
	var person = {
		name: 'bob',
		intro: function () {
			return "Hello, my name is " + this.bob;
		}
	}
	equal(person.intro(), "Hello, my name is undefined", "If an object has a method can you access properties inside it?");
});
