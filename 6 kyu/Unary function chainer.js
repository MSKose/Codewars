/*
https://www.codewars.com/kata/54ca3e777120b56cb6000710

DESCRIPTION:
Your task is to write a higher order function for chaining together a list of unary functions. In other words, it should return a function that does a left fold on the given functions.

chained([a,b,c,d])(input)
Should yield the same result as

d(c(b(a(input))))
*/

// my solution
function chained(functions) {
  return function (param) {
    return functions.reduce((res, f) => f(res), param);
  };
}