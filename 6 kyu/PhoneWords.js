/*
https://www.codewars.com/kata/635b8fa500fba2bef9189473

Given a string of numbers, you must perform a method in which you will translate this string into text, based on the below image:


For example if you get "22" return "b", if you get "222" you will return "c". If you get "2222" return "ca".

Further details:

0 is a space in the string.
1 is used to separate letters with the same number.
always transform the number to the letter with the maximum value, as long as it does not have a 1 in the middle. So, "777777" -->  "sq" and "7717777" --> "qs".
you cannot return digits.
Given a empty string, return empty string.
Return a lowercase string.
Examples:
"443355555566604466690277733099966688"  -->  "hello how are you"
"55282"                 -->  "kata"
"22266631339277717777"  -->  "codewars"
"66885551555"           -->  "null"
"833998"                -->  "text"
"000"                   -->  "   "
*/

// my solution
function phoneWords(stringOfNums) {
    if (!stringOfNums) return "";
    const arr = stringOfNums.match(/(.)\1*/g).filter(x => !x.includes('1'));
    const alpha = [" ", undefined, "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
  
    let string = "";
    for (let i of arr) {
      if (i.includes('0')) {
        string += ' '.repeat(i.length);
      } else {
        if (i.length <= alpha[+i[0]].length) {
          string += alpha[+i[0]][i.length - 1];
        } else {
          let times = ~~(i.length / alpha[+i[0]].length);
          let remaining = i.length % alpha[+i[0]].length;       
          string += alpha[+i[0]].slice(-1).repeat(times) + (alpha[+i[0]][remaining - 1] || '');
        }
      }
    }
    return string;
}

//! alternative-solution
function phoneWords(stringOfNums) {  
    const keys = [' ', ,'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    const regexp = /2{1,3}|3{1,3}|4{1,3}|5{1,3}|6{1,3}|7{1,4}|8{1,3}|9{1,4}|0{1}/g;    
    let result = '';  
    
    stringOfNums.match(regexp)?.map(nums => {
      const key = keys[nums[0]];
      const letter = nums.length-1;  
      result += key[letter];
    }); 
    
    return result;
}