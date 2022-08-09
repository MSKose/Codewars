/*
https://www.codewars.com/kata/58539230879867a8cd00011c/

Mothers arranged a dance party for the children in school. At that party, there are only mothers and their children. All are having great fun on the dance floor when suddenly all the lights went out. It's a dark night and no one can see each other. But you were flying nearby and you can see in the dark and have ability to teleport people anywhere you want.

Legend:
-Uppercase letters stands for mothers, lowercase stand for their children, i.e. "A" mother's children are "aaaa".
-Function input: String contains only letters, uppercase letters are unique.
Task:
Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb".
*/

// my solution
function findChildren(dancingBrigade) {
  let arr = dancingBrigade.toLowerCase().split("").sort();
  let upperCaseIndexes = [...new Set(dancingBrigade
    .toLowerCase().split('')
    .sort()
    .map((x,y,z) => z.indexOf(x)))]
  for (let i = 0; i < upperCaseIndexes.length; i++) {
    arr.splice(upperCaseIndexes[i], 1, arr[upperCaseIndexes[i]].toUpperCase());
  }
  return arr.join("");
}
/*
ok, this question looked so easy but took an hour of mine. Lemme break down the solution
upperCaseIndexes is a set where the first indexes of the sorted array is kept
and within the for loop I spliced the originally converted array where the upperCaseIndexes are
*/

//! alternative-solution-1
function findChildren(dancingBrigade) {
  return dancingBrigade
    .split("")
    .sort((a, b) => a.localeCompare(b, "kf", { caseFirst: "upper" }))
    .join("");
}
/*
ok, this is beyond me. I'll leave links to have a read later
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/caseFirst
https://reference.codeproject.com/javascript/Reference/Global_Objects/String/localeCompare
*/

//! alternative-solution-2
const findChildren = (dancingBrigade) =>
  dancingBrigade
    .split("")
    .sort((a, b) =>a.toLowerCase().localeCompare(b.toLowerCase()) || b.localeCompare(a))
    .join("");
// this one's a bit easier to grasp than the one with above

//! alternative-solution-3
function findChildren(dancingBrigade) {
  const s = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
  return [...dancingBrigade].sort((a, b) => s.indexOf(a) - s.indexOf(b)).join``;
}

//! alternative-solution-4
const findChildren = (d) =>
  d
    .split("")
    .sort()
    .sort((a, b) => (a.toUpperCase() < b.toUpperCase() ? -1 : 1))
    .join("");
// this guy really understood how sort works, hats off

//! alternative-solution-5
function findChildren(dancingBrigade) {
  let result = "";
  let sortedArr = dancingBrigade.split("").sort();
  let upperArr = sortedArr.filter((item) => item.match(/[A-Z]/));
  let lowerArr = sortedArr.filter((item) => item.match(/[a-z]/));
  for (let i = 0; i < upperArr.length; i++) {
    result += upperArr[i];
    for (let j = 0; j < lowerArr.length; j++) {
      if (upperArr[i].toLowerCase() == lowerArr[j]) result += lowerArr[j];
    }
  }
  return result;
}
