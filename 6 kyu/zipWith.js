/*
https://www.codewars.com/kata/5825792ada030e9601000782

Implement zip_with
zip_with takes a function and two arrays and zips the arrays together, applying the function to every pair of values.
The function value is one new array.

If the arrays are of unequal length, the output will only be as long as the shorter one.
(Values of the longer array are simply not used.)

Inputs should not be modified.

Examples
zip_with( pow, [10,10,10,10], [0,1,2,3] )     =>  [1,10,100,1000]
zip_with( max, [1,4,7,1,4,7], [4,7,1,4,7,1])  =>  [4,7,7,4,7,7]

def add(a,b): return a+b; # or from operator import add
zip_with( add,             [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  # Both forms are valid
zip_with( lambda a,b: a+b, [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  # Both are functions
Input validation
Assume all input is valid.
*/

// my solution
function zipWith(fn, a0, a1) {
  let x = Math.min(a0.length, a1.length);
  [a0, a1] = [a0.slice(0, x), a1.slice(0, x)];
  return a0.map((el, idx) => fn(el, a1[idx]));
}

//! alternative-solution
function zipWith(fn,a0,a1) {
  return Array.from({length: Math.min(a0.length, a1.length)}, (_, i) => fn(a0[i], a1[i]));
}