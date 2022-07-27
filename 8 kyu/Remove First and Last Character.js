/*
https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0

It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/

// my solution
const removeChar = (str) => {
  let strr = str.split("");
  strr.pop();
  strr.shift();
  return strr.join("");
};

//! alternative solution(s) added
const removeeChar = (char) => char.slice(1, -1);
/*
So, apparently with slice method negative
indexes do work
*/