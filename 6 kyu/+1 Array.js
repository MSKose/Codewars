/*
https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9

Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

the array can't be empty
only non-negative, single digit integers are allowed
Return nil (or your language's equivalent) for invalid inputs.

Examples
Valid arrays

[4, 3, 2, 5] would return [4, 3, 2, 6]
[1, 2, 3, 9] would return [1, 2, 4, 0]
[9, 9, 9, 9] would return [1, 0, 0, 0, 0]
[0, 1, 3, 7] would return [0, 1, 3, 8]

Invalid arrays

[1, -9] is invalid because -9 is not a non-negative integer

[1, 2, 33] is invalid because 33 is not a single-digit integer
*/

// my solution
function upArray(arr) {
  if (!arr.length || arr.some((i) => i < 0 || i > 9)) {
    return null;
  }

  let carry = 1;
  let result = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    let temp = arr[i] + carry;
    carry = Math.floor(temp / 10);
    result.unshift(temp % 10);
  }

  if (carry > 0) {
    result.unshift(carry);
  }

  return result.length > 0 ? result : [1];
}

//! alternative-solution
function upArray(arr) {
  if (typeof arr === "undefined" || arr === null || arr.length === 0) {
    return null;
  }

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0 || typeof arr[i] !== "number" || arr[i] > 9) {
      return null;
    }
  }
  
  for (var j = arr.length - 1; j > -1; j--) {
    if (arr[j] !== 9) {
      arr[j] = arr[j] + 1;
      break;
    } else {
      arr[j] = 0;
    }

    if (j === 0) {
      arr.unshift(1);
    }
  }

  return arr;
}
// this is really clever