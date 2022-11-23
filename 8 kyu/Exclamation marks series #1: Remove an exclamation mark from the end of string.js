/*
https://www.codewars.com/kata/57fae964d80daa229d000126

Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
remove("Hi!") == "Hi"
remove("Hi!!!") == "Hi!!"
remove("!Hi") == "!Hi"
remove("!Hi!") == "!Hi"
remove("Hi! Hi!") == "Hi! Hi"
remove("Hi") == "Hi"
*/

// my solution
const remove = (string) =>
  string.lastIndexOf("!") === string.length - 1
    ? string.substring(0, string.length - 1)
    : string;

//! alternative-solution
const remove = s => s.replace(/!$/, '');