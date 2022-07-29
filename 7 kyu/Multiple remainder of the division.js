/*
https://www.codewars.com/kata/5a2f83daee1aae4f1c00007e

Your task it to return true if the fractional part (rounded to 1 digit) of the result (a / b) exists, more than 0 and is multiple of n. Otherwise return false. (For Python return True or False)

All arguments are positive digital numbers.

Rounding works like toFixed() method. (if more than...5 rounds up)

Find exapmles below:


isMultiple(5, 2, 3) -> false // 2.5 -> 5 is not multiple of 3
isMultiple(5, 3, 4) -> false // 1.7 -> 7 is not multiple of 4
isMultiple(5, 4, 3) -> true // 1.3 -> 3 is multiple of 3
isMultiple(666, 665, 2) -> false // 1.0 -> return false
*/

// my solution
function isMultiple(a, b, n) {
  let y = (a / b).toFixed(1);
  let x = y.indexOf(".");
  let z = y.slice(x + 1);
  if (z > 0 && z % n === 0) {
    return true;
  } else {
    return false;
  }
}
