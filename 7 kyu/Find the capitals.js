/*
https://www.codewars.com/kata/539ee3b6757843632d00026b

Instructions
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
*/

// my solution
var capitals = function (word) {
  let arr = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i].toUpperCase() === word[i]) {
      arr.push(i);
    }
  }
  return arr;
};

//! alternative-solution-1
var capitals = function (word) {
	return word.split('').reduce(function(memo, v, i) {
    return v === v.toUpperCase() ? memo.concat(i) : memo;
  }, []);
};

//! alternative-solution-2
const capitals = word =>
  [...word].reduce((pre, val, idx) => /[A-Z]/.test(val)? [...pre, idx] : pre, []);