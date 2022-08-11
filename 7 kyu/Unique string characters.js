/*
https://www.codewars.com/kata/5a262cfb8f27f217f700000b

In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.

For example:

solve("xyab","xzca") = "ybzc" 
--The first string has 'yb' which is not in the second string. 
--The second string has 'zc' which is not in the first string. 
Notice also that you return the characters from the first string concatenated with those from the second string.
*/

// my solution
function solve(a, b) {
  let x = [...a].filter((i) => !b.includes(i)).join``;
  let y = [...b].filter((i) => !a.includes(i)).join``;
  return x + y;
}

//! alternative-solution-1
function solve(a, b) {
  let setA = new Set(a);
  let setB = new Set(b);
  return [...(a + b)].filter((c) => setA.has(c) ^ setB.has(c)).join("");
}
/*
leaving the comment explaning the menaing of ^ here :
Ok I believe this is the XOR bitwise operator, used 
here to filter if either group has the character in 
question. This has been chosen over the standard '||' 
as it enforces one or the other but not both.
*/

//! alternative-solution-2
function solve(a, b) {
  return (a + b)
    .split("")
    .filter((c) => !a.includes(c) || !b.includes(c))
    .join("");
}
