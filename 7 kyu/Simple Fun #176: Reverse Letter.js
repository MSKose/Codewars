/*
https://www.codewars.com/kata/58b8c94b7df3f116eb00005b

Task
Given a string str, reverse it and omit all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Input/Output
[input] string str
A string consists of lowercase latin letters, digits and symbols.

[output] a string
*/

// my solution
const reverseLetter = (str) =>
  [...str.replace(/[^a-z]/gi, "")].reverse().join("");

//! alternative-solution
function reverseLetter(str) {
  return [...str].reduce((s, c) => (/[A-Z]/i.test(c) ? c + s : s), "");
}