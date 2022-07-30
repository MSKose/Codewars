/*
https://www.codewars.com/kata/544aed4c4a30184e960010f4/

Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

Example:
divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"
*/

// my solution
function divisors(integer) {
  let c = [...Array(integer)].map((_, i) => i + 1);
  counter = [];
  for (let i = 1; i < c.length - 1; i++) {
    if (integer % c[i] === 0) {
      counter.push(c[i]);
    }
  }
  return counter.length === 0 ? `${integer} is prime` : counter;
}

//! alternative-solution-1
function divisors(integer) {
  var divs = [];
  for (var i = 2; i < integer; i++) {
    if (integer % i === 0) {
      divs.push(i);
    }
  }
  return divs.length ? divs : integer + " is prime";
}
//looks like I have made it complicated using c part on my code

//! alternative-solution-2
function divisors(integer) {
  var divisors = [...Array(integer).keys()].slice(2, integer).filter((div) => integer % div == 0);
  return divisors.length > 0 ? divisors : integer + " is prime";
}
// I take my word back, my solution would have been cooler had I used it the way
// it is used here
