/*
https://www.codewars.com/kata/534d0a229345375d520006a0

Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:

a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.

You may assume the input is always valid.

Examples
isPowerOfTwo(1024) // -> true
isPowerOfTwo(4096) // -> true
isPowerOfTwo(333)  // -> false
Beware of certain edge cases - for example, 1 is a power of 2 since 2^0 = 1 and 0 is not a power of 2.
*/

// my solution
function isPowerOfTwo(n) {
  if (n === 1) {
    return true;
  } else if (n % 2 !== 0 || n == 0) {
    return false;
  }
  return isPowerOfTwo(n / 2);
}

//! alternative-solution
function isPowerOfTwo(n) {
  return Number.isInteger(Math.log2(n));
}
/* 
ok, I didn't know about this. So what Math.log2(n) does is
it takes the logarithm on 2th base
*/
