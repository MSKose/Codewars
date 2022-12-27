/*
https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08

Your task, is to create NxN multiplication table, of size provided in parameter.

for example, when given size is 3:

1 2 3
2 4 6
3 6 9
for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]
*/

// my solution
multiplicationTable = function (size) {
  let arr = [];

  for (let i = 1; i <= size; i++) {
    let arr2 = [];
    for (let k = 1; k <= size; k++) {
      let mull = k * i;
      arr2.push(mull);
    }
    arr.push(arr2);
  }
  return arr;
};