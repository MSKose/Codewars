/*
https://www.codewars.com/kata/5840586b5225616069000001

You will be given two ASCII strings, a and b. Your task is write a function to determine which one of these strings is "worth" more, and return it.

A string's worth is determined by the sum of its ASCII codepoint indexes. So, for example, the string HELLO has a value of 372: H is codepoint 72, E 69, L 76, and O is 79. The sum of these values is 372.

In the event of a tie, you should return the first string, i.e. a.
*/

// my solution
const asc = i => [...i].reduce((x, y) =>  x + y.charCodeAt(0), 0);
const highestValue = (a, b) => asc(a) >= asc(b) ? a : b;