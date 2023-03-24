/*
https://www.codewars.com/kata/58d76854024c72c3e20000de

Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.
*/

// my solution
const reverse = (str) =>
  str
    .split(' ')
    .map((el, idx) => idx % 2 ? [...el].reverse().join('') : el)
    .join(' ')
    .trim();