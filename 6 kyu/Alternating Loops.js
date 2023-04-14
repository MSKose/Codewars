/*
https://www.codewars.com/kata/55e529bf6c6497394a0000b5

Write

function combine()
that combines arrays by alternatingly taking elements passed to it.

E.g

combine(['a', 'b', 'c'], [1, 2, 3]) == ['a', 1, 'b', 2, 'c', 3]
combine(['a', 'b', 'c'], [1, 2, 3, 4, 5]) == ['a', 1, 'b', 2, 'c', 3, 4, 5]
combine(['a', 'b', 'c'], [1, 2, 3, 4, 5], [6, 7], [8]) == ['a', 1, 6, 8, 'b', 2, 7, 'c', 3, 4, 5]
*/

// my solution
function combine(...args) {
  let arr = [];
  let counterIndex = 0;
  let totalLen = args.reduce((x, y) => x + y.length, 0);

  while (counterIndex < totalLen) {
    for (var i = 0; i < args.length; i++) {
      if (args[i][counterIndex]) {
        arr.push(args[i][counterIndex]);
      }
    }
    counterIndex++;
  }

  return arr;
}