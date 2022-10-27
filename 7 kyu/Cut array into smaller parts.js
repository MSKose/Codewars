/*
https://www.codewars.com/kata/58ac59d21c9e1d7dc5000150

Write function makeParts or make_parts (depending on your language) that will take an array as argument and the size of the chunk.

Example: if an array of size 123 is given and chunk size is 10 there will be 13 parts, 12 of size 10 and 1 of size 3.
*/

// my solution
function makeParts(arr, chunkSize) {
  let result = [];
  let idx = 0;

  if (arr.length <= chunkSize) {
    return arr ? [arr] : [];
  } else {
    while (idx < arr.length) {
      result.push(arr.slice(idx, idx + chunkSize));
      idx += chunkSize;
    }
  }

  return result;
}

//! alternative-solution
function makeParts(arr, chunkSize) {
  var res = [];
  for (var i = 0; i < arr.length; i += chunkSize) {
    res.push(arr.slice(i, i + chunkSize));
  }
  return res;
}
