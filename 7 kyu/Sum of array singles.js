/*
https://www.codewars.com/kata/59f11118a5e129e591000134

In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

More examples in the test cases.

Good luck!
*/

// my solution
function repeats(arr) {
    return arr.reduce((x, y) =>  x + (arr.indexOf(y) === arr.lastIndexOf(y) ? y : 0), 0)
}



// my second solution
function repeats(arr){
  let dict = {};
  for (let i of arr) {
    if (dict[i]) {
      dict[i]++
    } else {
      dict[i] = 1
    }
  }
  
  let sum = 0
  for (const key in dict) {
    if (dict[key] === 1) {
      sum += +key
    }
  }
  
  return sum
};


//! alternative-solution
function repeats(arr) {
    let seen = new Set();
    let sum = 0;
    
    for (let v of arr) {
      if (!seen.has(v)) {
        seen.add(v);
        sum += v;
      } else {
        sum -= v;
      }
    }
    
    return sum;
};