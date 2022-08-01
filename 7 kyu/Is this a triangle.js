/*
https://www.codewars.com/kata/56606694ec01347ce800001b

Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).
*/

// my solution
function isTriangle(a,b,c){
    if (a < 1 && b < 1 && c < 1){
      return false
    }
    if (a + b > c && a + c > b && b + c > a){
      return true
    }else return false
}

//! alternative-solution-1
var isTriangle = (a,b,c) => Math.max(a,b,c) < (a+b+c)/2

//! alternative-solution-2
function isTriangle(a,b,c) {
  [a, b, c] = [a, b, c].sort((x, y) => x-y);
  
  return a+b > c;
}