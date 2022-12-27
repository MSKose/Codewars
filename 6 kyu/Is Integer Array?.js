/*
https://www.codewars.com/kata/52a112d9488f506ae7000b95

Write a function with the signature shown below:

function isIntArray(arr) {
  return true
}
returns true  / True if every element in an array is an integer or a float with no decimals.
returns true  / True if array is empty.
returns false / False for every other input.
*/

// my solution
function isIntArray(arr) {
    if (Array.isArray(arr) && arr.length === 0) return true;
    if (!arr) return false;
    return arr.every(x => typeof x === 'number' && Number.isInteger(x));
}

//! alternative-solution
let isIntArray = arr => !!arr && arr.every(Number.isInteger);