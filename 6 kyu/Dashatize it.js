/*
https://www.codewars.com/kata/58223370aef9fc03fd000071

Given a variable n,

If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

If n is not an integer, return the string "None".

Ex:

dashatize(274) -> '2-7-4'
dashatize(6815) -> '68-1-5'
*/

// my solution
const dashatize = (num) =>
  String(num)
    .replace(/[13579]/g, (x) => "-" + x + "-")
    .replace(/^-*|-*$/g, "")
    .replace(/--/g, "-");

//! alternative-solution
const dashatize = (num) =>
  (String(num).match(/([13579]|[02468]+)/g) || [`NaN`]).join("-");