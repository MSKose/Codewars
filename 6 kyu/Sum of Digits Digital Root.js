/*
https://www.codewars.com/kata/541c8630095125aba6000c00/

Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/

// my solution
function digital_root(n) {
    return n > 9 
    ? n.toString().split('').reduce((a,b) => +a + +b).toString().split('').length > 1 
    ? digital_root(n.toString().split('').reduce((a,b) => +a + +b)) 
    : n.toString().split('').reduce((a,b) => +a + +b) : n
}

digital_root(0)

//! alternative solution-1:
function digital_root(n) {
    return (n - 1) % 9 + 1;
}

//! alternative solution-2:
function digital_root(n) {
    if (n < 10) return n
    return digital_root(n % 10 + digital_root(Math.floor(n / 10)))
}