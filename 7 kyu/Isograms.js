/*
https://www.codewars.com/kata/54ba84be607a92aa900000f1

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/

// my solution
function isIsogram(str) {
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    for (let e = i + 1; e < str.length; e++) {
      if (str[i] === str[e]) {
        return false;
      }
    }
  }
  return true;
}

//! alternative-solution
function isIsogram(str) {
  return new Set(str.toUpperCase()).size == str.length;
}
/*
Notes in Set:

The Set object lets you store unique values of any type,
whether primitive values or object references.

A value in the Set may only occur once; it is unique in
the Set's collection.

To check a Set's length you'd need to use .set
The size accessor property returns the number of (unique)
elements in a Set object.
*/