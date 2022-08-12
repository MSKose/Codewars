/*
https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/

*/

// my solution
function duplicateCount(text) {
  let lower = text.toLowerCase();
  let filtered = [...lower].filter(
    (x) => lower.indexOf(x) !== lower.lastIndexOf(x)
  );
  return new Set(filtered).size;
}
/*
a little explanation here: first, I obviously had to make the
string lowercase. And then I converted that string to an array an
filtered it based on the not being a unique character. And then I 
returned the set size of the that filtered array since we are asked
how many characters are of duplicates.
*/

//! alternative-solution
function duplicateCount(text) {
  return text.toLowerCase().split("").filter(function (val, i, arr) {
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
  }).length;
}
// wow, nice logic there.