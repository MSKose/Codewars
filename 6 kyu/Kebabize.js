/*
https://www.codewars.com/kata/57f8ff867a28db569e000c4a

Modify the kebabize function so that it converts a camel case string into a kebab case.

kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps
Notes:

the returned string should only contain lowercase letters
*/

// my solution
const kebabize = (str) =>
  str.replace(/[^a-z]/gi, '')
     .replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

//! alternative-solution
function kebabize(str) {
  return str.replace(/[^a-z]/ig, '').
         replace(/^[A-Z]/, c => c.toLowerCase()).
         replace(/[A-Z]/g, c => `-${c.toLowerCase()}`);
}