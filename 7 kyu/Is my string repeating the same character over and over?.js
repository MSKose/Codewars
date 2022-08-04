/*
https://www.codewars.com/kata/584fa5ae25dd087e6b000070/

Your task is very simple:
Write a function hasOneChar returning:

true if the given string contains the same character repeated all along the string
false otherwise.
For instance:

hasOneChar('aaaaa'); //true
hasOneChar('aaaab'); //false
hasOneChar('bbbbb'); //true
hasOneChar('bbabb'); //false
Of course, what comes in mind first is a loop. But the purpose of this Kata is to test your creativity.
You have to achieve it without using any loops.

Corner cases: the function hasOneChar should return true if the string contains one single character.

Be creative!
*/

function hasOneChar(s) {
  //   let re = new RegExp(`${s[0]}`, "g");
  //   let result = s.replace(re, "");
  //   return !result.length;
  return [...new Set(s)].length === 1;  // this line is the answer
}
/*
The part where it is in comment was my initial try but I was failing 
for the random tests. And the reason was strings of "^^^^". For some reason
these kinds of words should be ommitted first and then be proceed. However, my 
very first thinking was to have the not of the new RegExp since that would be 
suffice to eliminate my character from all other character. Below, with alternative-1
you can see how to achieve that
*/

//! alternative-solution-1
function hasOneChar(s) {
  const regexp = new RegExp(`[^${s[0]}]`, "gi");
  return !regexp.test(s);
}

//! alternative-solution-2
function hasOneChar(s) {
  return s === s.substring(1) + s[0];
}

//! alterntive-solution-3
function hasOneChar(s) {
  let t = s.split("").sort().join("");
  return t[0] == t[t.length - 1];
}

//! alterntive-solution-4
function hasOneChar(s) {
  return s === s[0].repeat(s.length);
}

//! alterntive-solution-5
function hasOneChar(s) {
  return /^(.)\1*$/.test(s);
}
