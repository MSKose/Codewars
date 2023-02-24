/*
https://www.codewars.com/kata/56a194c4bd5032751e000029

Is a Prime?
Just your usual prime kata.. with some unknown restrictions.. Good luck!

This kata requires a lot of guess work so try and try again. :)

Note: You may not have any loops
*/

// my solution
function iterateArray(array, index = 0) {
  if (index >= array.length) {
    return false;
  }

  return prime(+array[index]) || iterateArray(array, index + 1);
}

function prime(n, div = 2) {
  if (n < 2) {
    return false;
  }
  if (div > Math.sqrt(n)) {
    return true;
  }
  if (n % div === 0) {
    return false;
  }
  return prime(n, div + 1);
}

function isPrime(str) {
  if (str.toLowerCase().includes("prime")) {
    return true;
  }
  return iterateArray(str.split(/[^0-9]+/g));
}