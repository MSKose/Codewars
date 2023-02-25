/*
https://www.codewars.com/kata/585db3e8eec141ce9a00008f

In this kata, your goal is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position. Here are some examples:

reverseVowels("Hello!"); // "Holle!"
reverseVowels("Tomatoes"); // "Temotaos"
reverseVowels("Reverse Vowels In A String") // "RivArsI Vewols en e Streng"
For simplicity, you can treat the letter y as a consonant, not a vowel.

Good luck!
*/

// my solution
function reverseVowels(str) {
  const vowelChars = (str.match(/[aeiou]/gi) || []).reverse();
  const nonVowelChars = str.match(/[^aeiou]/gi) || [];

  let vowelReversedString = "";
  let nonVowelCharsIndex = 0;
  for (const char of str) {
    if (/[aeiou]/gi.test(char)) {
      vowelReversedString += vowelChars.shift();
    } else {
      vowelReversedString += nonVowelChars[nonVowelCharsIndex++];
    }
  }

  return vowelReversedString;
}

//! alternative-solution
const reverseVowels = str => {
  let vowels = str.replace(/[^aeiou]/gi, '').split('');
  return str.replace(/[aeiou]/gi, _ => vowels.pop());
};
// gotta love the simplicity on this one