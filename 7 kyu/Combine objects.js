/*
https://www.codewars.com/kata/56bd9e4b0d0b64eaf5000819/

Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.

All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.

An example:

const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
The combine function should be a good citizen, so should not mutate the input objects.
*/

// my solution
function combine(...obj) {
  let result = {};
  for (const x of obj) {
    for (const [key, value] of Object.entries(x)) {
      if (!result.hasOwnProperty(key)) {
        result[key] = value;
      } else if (result.hasOwnProperty(key)) {
        result[key] += value;
      }
    }
  }
  return result;
}

//! alternative-solution
const combine = (...params) => params.reduce((a, b) => {
    for (const x in b) {
      a[x] = x in a ? a[x] + b[x] : b[x];
    }
    return a;
}, {});
