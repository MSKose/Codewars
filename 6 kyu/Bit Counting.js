/*
https://www.codewars.com/kata/526571aae218b8ee490006f4

Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

// my solution 
var countBits = function (n) {
  return n == 0 ? 0 : n.toString(2).match(/1/g).length;
};
// learnt to use toString(2) with this question. what toString(2) does is
// it converts your number to specified base

//! alternative-solution
countBits = (n) => n.toString(2).split("0").join("").length;
