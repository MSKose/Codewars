/*
https://www.codewars.com/kata/55f73be6e12baaa5900000d4/

Messi is a soccer player with goals in three leagues:

LaLiga
Copa del Rey
Champions
Complete the function to return his total number of goals in all three leagues.

Note: the input will always be valid.

For example:

5, 10, 2  -->  17
*/

// my solution
function goals(...input) {
  return input.reduce((x, y) => x + y, 0);
}
// just wanted to show off really. A simple a + b + c would do the job
