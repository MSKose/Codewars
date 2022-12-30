/*
https://www.codewars.com/kata/5727bb0fe81185ae62000ae3

Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""
*/

// my solution
function cleanString(s) {
    let string = "";
    
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "#") {
          string = string.slice(0, -1);
      } else {
        string += s[i];
      }
    }
    
    return string;
}