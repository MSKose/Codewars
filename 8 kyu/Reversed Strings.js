/*
https://www.codewars.com/kata/5168bb5dfe9a00b126000018

Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/


// my solution
function solution(str){
    const b = [];
    str.split('').forEach(shifter = (x) => b.unshift(x));
    return b.join('');
}

console.log(solution("world"));  // dlrow


// other solutions below. apparently I have overthought about it again lol

//! alternative sol-1
function solution(str){
    return str.split('').reverse().join('');  
}

//! alternative sol-2
const solution = str => str.split('').reverse().join('');

//! alternative sol-3
const solution = s => [...s].reverse().join('')