/*
https://www.codewars.com/kata/526e8de0512511429e000006

Define a function trim (JavaScript: method String.prototype.trim) which removes all forms of leading and trailing whitespace from a given string. Please refer to the Sample Tests for more examples.

Note: The built-in trim, trimLeft && trimRight methods has been disabled.
*/

// my solution
String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, '');
};