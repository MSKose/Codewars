/*
https://www.codewars.com/kata/58039f8efca342e4f0000023

Create a function that takes a string as a parameter and does the following, in this order:

Replaces every letter with the letter following it in the alphabet (see note below)
Makes any vowels capital
Makes any consonants lower case
Note:

the alphabet should wrap around, so Z becomes A
in this kata, y isn't considered as a vowel.
So, for example the string "Cat30" would return "dbU30" (Cat30 --> Dbu30 --> dbU30)
*/

// my solution
function changer(str) { 
    let string = "";
    
    for (let i of str) {
      if (i === "z" || i === "Z") {
          string += "A";
      } else if (/[a-z]/gi.test(i)) {
        let x = String.fromCharCode(i.charCodeAt() + 1);
        if (/[aeiou]/i.test(x)) {
          string += x.toUpperCase();
        } else {
          string += x.toLowerCase();
        }
      } else {
        string += i;
      }
    }
    
    return string;
}

//! alternative-solution
const letters = "abcdEefghIijklmnOopqrstUuvwxyzA";
const changer = s => s.replace( /[a-z]/gi, c => letters[ letters.indexOf(c.toLowerCase())+1 ] );