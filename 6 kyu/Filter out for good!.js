/*
https://www.codewars.com/kata/56035d75426e197c3e0000a2

Write

Array.prototype.remove = function(pred) {}
that given an array, removes all the elements that satisfy the predicate from the original array and then return all the elements that just got removed.
For example:

var array = [1,2,3,4,5];
// We wish to remove all the even elements from array and then return those removed elements
var removed = array.remove(function(a) { return a%2===0;});
// array === [1,3,5]  removed === [2,4]
*/

// my solution
Array.prototype.remove = function (pred) {
  let removed = [];
  let remaining = [];

  for (let i = 0; i < this.length; i++) {
    if (pred(this[i])) {
      removed.push(this[i]);
    } else {
      remaining.push(this[i]);
    }
  }

  this.length = 0;
  remaining.forEach((i) => this.push(i));

  return removed;
};