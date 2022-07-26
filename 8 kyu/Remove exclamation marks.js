/*
https://www.codewars.com/kata/57a0885cbb9944e24c00008e

Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/

// my solution
function removeExclamationMarks(s) {
  let y = s.split("").filter((value) => value !== "!").join("");
  return y;
}

// same solution, a bit shorter
const removeExclamationMarks = (s) => s.split("").filter((value) => value !== "!").join("");

//! alternative-1
function removeExclamationMarks(s) {
    return s.replace(/!/gi, '');
}

//! alternative-2
function removeExclamationMarks(s) {
    return s.split('!').join('');
}