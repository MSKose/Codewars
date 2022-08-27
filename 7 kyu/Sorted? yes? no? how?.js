/*
https://www.codewars.com/kata/580a4734d6df748060000045

Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.
*/

// my solution
function isSortedAndHow(array) {
  if ([...array].sort((a, b) => a - b).join("") === array.join("")) {
    return "yes, ascending";
  } else if ([...array].sort((a, b) => b - a).join("") === array.join("")) {
    return "yes, descending";
  } else {
    return "no";
  }
}
// I made a copy of array with spread because sort changes the original array

//! alternative-solution

function isSortedAndHow(arr) {
  return arr.every((x, i) => i == 0 || arr[i] >= arr[i - 1])
    ? "yes, ascending"
    : arr.every((x, i) => i == 0 || arr[i] <= arr[i - 1])
    ? "yes, descending"
    : "no";
}
