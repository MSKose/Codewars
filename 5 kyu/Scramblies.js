/*
https://www.codewars.com/kata/55c04b4cc56a697bb0000048

Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False
*/

// my solution
function scramble(str1, str2) {
  let result = "";
  let mySet = new Set(str2);
  let myArr = [...mySet];

  for (let i = 0; i < myArr.length; i++) {
    let re = new RegExp(myArr[i], "g");
    let x = str2.match(re) ? str2.match(re).length : 0;
    let y = str1.match(re) ? str1.match(re).length : 0;
    if (x > y) return false;
  }

  return true;
}
