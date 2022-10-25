/*
https://www.codewars.com/kata/55f3facb78a9fd5b26000036

While surfing in web I found interesting math problem called "Always perfect". That means if you add 1 to the product of four consecutive numbers the answer is ALWAYS a perfect square. For example we have: 1,2,3,4 and the product will be 1X2X3X4=24. If we add 1 to the product that would become 25, since the result number is a perfect square the square root of 25 would be 5.

So now lets write a function which takes numbers separated by commas in string format and returns the number which is a perfect square and the square root of that number.

If string contains other characters than number or it has more or less than 4 numbers separated by comma function returns "incorrect input".

If string contains 4 numbers but not consecutive it returns "not consecutive".
*/

// my solution
function checkRoot(s) {
  let x = s.split(",");
  if (x.length !== 4) return "incorrect input";
  let [a, b, c, d] = x.map((i) => +i);
  if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) return "incorrect input";
  if (a + 1 != b || b + 1 != c || c + 1 != d) return "not consecutive";
  let sq = a * b * c * d + 1;
  return `${sq}, ${sq ** 0.5}`;
}