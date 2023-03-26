/*
https://www.codewars.com/kata/5505552bd181b990d9000caf

The deleteValues function takes an array and removes elements that answer true to the pred function.

For some reason, some of the elements of the array for which the predicate holds are not deleted...

Can you fix the code?
*/

// my solution
function deleteValues(array, pred) {
  for (var i = array.length - 1; i >= 0; i--) {
    if (pred(array[i])) {
      array.splice(i, 1);
    }
  }
  return array;
}