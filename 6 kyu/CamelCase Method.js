/*
https://www.codewars.com/kata/587731fda577b3d1b0001196

Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

For instance:

camelcase("hello case") => HelloCase
camelcase("camel case word") => CamelCaseWord
Don't forget to rate this kata! Thanks :)
*/

// my solution
String.prototype.camelCase = function () {
  if (this.length === 0) return "";
  return this.trim().split(/\s+/).map((x) => x[0].toUpperCase() + x.slice(1)).join``;
};

//! alternative-solution
String.prototype.camelCase = function () {
    return this.trim().replace(/(?:^|\s+)(\w)/g, (_, c) => c.toUpperCase())
}