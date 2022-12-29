/*
https://www.codewars.com/kata/585a033e3a36cdc50a00011c

Your task is to return an output string that translates an input string s by replacing each character in s with a number representing the number of times that character occurs in s and separating each number with the sep character(s).

Example (s, sep --> Output)

"hello world", "-" --> "1-1-3-3-2-1-1-2-1-3-1"
"19999999"   , ":" --> "1:7:7:7:7:7:7:7"
"^^^**$"     , "x" --> "3x3x3x2x2x1"
*/

// my solution
function freqSeq(str, sep) {
    let dict = {};
    
    for (let i of str) {
      if (dict[i]) {dict[i]++}
      else {dict[i] = 1}
    }
  
    return [...str].map(x => dict[x]).join(sep);
}

//! alternative-solution
function freqSeq(str, sep) {
    var bin = [...str].reduce((bin,c)=>(bin[c]=(bin[c]||0)+1,bin),{});
    return [...str].map(c=>bin[c]).join(sep);
}