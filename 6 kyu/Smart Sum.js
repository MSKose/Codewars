/*
https://www.codewars.com/kata/5831200eb812b8016d000094

Your task is to write a function, smartSum, that returns the sum of an arbitrary number of arguments. But be careful, some of your arguments can be arrays of numbers or nested arrays.

smartSum(1,2,3,[4,5],6); // returns 21
smartSum(1,2,[[3,4],5],6); // returns 21
*/

// my solution
const smartSum = (...x) =>
  JSON.stringify(x)
    .match(/\d+/g)
    .reduce((x, y) => x + +y, 0);