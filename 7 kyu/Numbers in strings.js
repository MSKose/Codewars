/*
https://www.codewars.com/kata/59dd2c38f703c4ae5e000014

In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.

For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.

Good luck!
*/

// my solution
function solve(s) {
  let num = "";
  let arr = [];

  for (let i = 0; i <= s.length; i++) {
    if (/\d/.test(Number(s[i]))) num += s[i];
    else {
      num && arr.push(num);
      num = "";
    }
  }

  return Math.max(...arr.map(Number));
}

//! alternative-solution-1
const solve = (s) => Math.max(...s.split(/\D/));

//! alternative-solution-2
function solve(s) {
  return Math.max(...s.split(/[a-z]+/));
}

//! alternative-solution-3
function solve(s) {
  return Math.max(...s.match(/\d+/g));
}