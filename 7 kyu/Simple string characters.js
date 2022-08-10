/*
https://www.codewars.com/kata/5a29a0898f27f2d9c9000058/

In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.
*/

// my solution
function solve(s) {
  let a = s.match(/[A-Z]/g).length || 0;
  let b = s.match(/[a-z]/g).length || 0;
  let c = s.match(/[0-9]/g).length || 0;
  let d = s.length - (a + b + c);
  return [a, b, c, d];
}
// I know I could have used ?. for if the match returned null but the node version
// codewars have does not support that. Anyways, || 0 is also smart I think

//! alternative-solution
const solve = (str) =>
  [/[A-Z]/, /[a-z]/, /\d/, /[\W]/].map((rgx) => str.split(rgx).length - 1);
// clever!
