/*
https://www.codewars.com/kata/55908aad6620c066bc00002a/

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

// my function
function XO(str) {
  //   return str.match(/x/gi).length == str.match(/o/gi).length
  let exes = 0;
  let ohs = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() == "x") {
      exes++;
    }
    if (str[i].toLowerCase() == "o") {
      ohs++;
    }
  }
  return exes == ohs;
}

//! alternative-solution-1
function XO(str) {
  return (
    str.toLowerCase().split("x").length === str.toLowerCase().split("o").length
  );
}
//this is so clever

//! alternative-solution-2
function XO(str) {
  var a = str.replace(/x/gi, ""),
    b = str.replace(/o/gi, "");
  return a.length === b.length;
}
// this one's slick too
