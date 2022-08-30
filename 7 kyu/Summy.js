/*
https://www.codewars.com/kata/599c20626bd8795ce900001d

Write a function that takes a string which has integers inside it separated by spaces, and your task is to convert each integer in the string into an integer and return their sum.

Example
summy("1 2 3")  ==> 6
Good luck!
*/

// my solution
function summy(str){
    return str.split(' ').reduce((x,y) => Number(x) + Number(y))
}