/*
https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004

Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
*/

// my solution
function highestRank(arr) {
  let max = -99999;
  let rep = 0;

  for (i of new Set(arr)) {
    let x = arr.filter((a) => a === i).length;
    if (x > max) {
      max = x;
      rep = i;
    } else if (x == max && rep < i) {
      rep = i;
    }
  }

  return rep;
}