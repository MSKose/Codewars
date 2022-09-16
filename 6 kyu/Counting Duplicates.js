/*
https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/

Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
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