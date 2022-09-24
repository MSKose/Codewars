/*
https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/

Write a function that checks if a given string (case insensitive) is a palindrome.
*/

// my solution
function isPalindrome(x) {
    x = x.toLowerCase()
    return x === x.split('').reverse().join('')
}

//! alternative-solution
const isPalindrome = x => x.toLowerCase().split('').reverse().join('') == x.toLowerCase();