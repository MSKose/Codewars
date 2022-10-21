/*
https://www.codewars.com/kata/545991b4cbae2a5fda000158

Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.
*/

// my solution
function include(arr, item) {
  return arr.filter((x) => x === item).length >= 1;
}

//! alternative-solution-1
function include(arr, item) {
  return arr.includes(item);
}

//! alternative-solution-2
function include(arr, item) {
  return arr.indexOf(item) !== -1;
}
