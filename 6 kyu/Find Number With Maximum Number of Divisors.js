/*
https://www.codewars.com/kata/588c0a38b7cd14085300003f/

Find the integer from a to b (included) with the greatest number of divisors. For example:

divNum(15, 30)   ==> 24
divNum(1, 2)     ==> 2
divNum(0, 0)     ==> 0
divNum(52, 156)  ==> 120
If there are several numbers that have the same (maximum) number of divisors, the smallest among them should be returned. Return the string "Error" if a > b.
*/

// my solution
const divNum = (a, b) => {
  if (a <= b) {
    let x = [];
    for (let i = a; i <= b; i++) {
      x.push([...Array(i).keys()].slice(1).filter((x) => i % x === 0).length);
    }
    let max = Math.max(...x);
    let index = x.findIndex((x) => x == max);
    return a + index;
  } else {
    return "Error";
  }
};

console.log(divNum(52, 156));
