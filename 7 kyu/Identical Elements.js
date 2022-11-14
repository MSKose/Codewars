/*
https://www.codewars.com/kata/583ebb9328a0c034490001ba

Given two arrays of integers m and n, test if they contain at least one identical element. Return true if they do; false if not.

Your code must handle any value within the range of a 32-bit integer, and must be capable of handling either array being empty (which is a false result, as there are no duplicated elements).
*/

// my solution
const set = (x) => new Set(x);

function duplicateElements(m, n) {
  if (!m || !n) return false;

  const x = set([...set(m), ...set(n)]).size;
  const y = set(m).size + set(n).size;
  return x !== y;
}

//! alternatives-solution
function duplicateElements(m, n) {
  return m.some((v) => n.includes(v));
}
