/*
https://www.codewars.com/kata/57a6633153ba33189e000074

Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

Consult the solution set-up for the exact data structure implementation depending on your language.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
*/

// my solution
const orderedCount = function (text) {
  const mySet = new Set(text);
  let arr = [];

  for (let i of mySet) {
    let count = [...text].reduce((x, y) => x + (y === i ? 1 : 0), 0);
    arr.push([i, count]);
  }

  return arr;
};

//! alternative-solution
const orderedCount = text =>
  [...new Set(text)].map(val => [val, text.split(val).length - 1])